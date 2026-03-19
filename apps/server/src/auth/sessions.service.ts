import { Inject, Injectable } from '@nestjs/common';
import Redis from 'ioredis';
import type { SessionPayload } from './interfaces/session-payload.interface';
import { ConfigService } from '@nestjs/config';
import type { CreateSessionPayload } from './interfaces/create-session-payload.interface';
import type { UpdateSessionPayload } from './interfaces/update-session-payload.interface';
import type { UpdateSessionRes } from './types/update-session-res.type';

@Injectable()
export class SessionsService {
  private readonly SESSION_PREFIX = 'session:';

  constructor(
    @Inject('REDIS_CLIENT') private readonly redis: Redis,
    private readonly configService: ConfigService
  ) {}

  async createSession(data: CreateSessionPayload) {
    const key = `${this.SESSION_PREFIX}${data.sessionId}`;

    const sessionPayload = {
      userId: data.userId,
      createdAt: Date.now()
    };

    await this.redis.set(key, JSON.stringify(sessionPayload), 'EX', this.configService.get<number>('JWT_REFRESH_EXPIRES_IN')!);
  }

  async updateSession(data: UpdateSessionPayload): Promise<UpdateSessionRes> {
    const currentKey = `${this.SESSION_PREFIX}${data.currentSessionId}`;
    const newKey = `${this.SESSION_PREFIX}${data.newSessionId}`;
    const newExpiresIn = this.configService.get<number>('JWT_REFRESH_EXPIRES_IN')!;
    const gracePeriodSeconds = 15;

    const luaScript = `
      local currentSessionStr = redis.call('GET', KEYS[1])
      
      if not currentSessionStr then 
        return 'NOT_FOUND' 
      end

      local session = cjson.decode(currentSessionStr)

      if not session.isUpdated then
        session.isUpdated = true
        redis.call('SET', KEYS[1], cjson.encode(session), 'EX', tonumber(ARGV[4]))
        
        local newSession = {
          userId = tonumber(ARGV[1]),
          createdAt = tonumber(ARGV[2]),
          isUpdated = false
        }
        redis.call('SET', KEYS[2], cjson.encode(newSession), 'EX', tonumber(ARGV[3]))

        return 'OK'
      else
        return 'ALREADY_UPDATED'
      end
    `;

    const result = await this.redis.eval(
      luaScript,
      2,
      currentKey,
      newKey,
      data.userId,
      Date.now(),
      newExpiresIn,
      gracePeriodSeconds
    );

    return result as UpdateSessionRes;
  }

  async getSession(sessionId: string): Promise<SessionPayload | null> {
    const sessionJson = await this.redis.get(`${this.SESSION_PREFIX}${sessionId}`);
    if (!sessionJson) return null;
    const session = JSON.parse(sessionJson);
    return session;
  }

}
