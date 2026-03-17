import { Module } from '@nestjs/common';
import { SessionsService } from './sessions.service';
import { RedisModule } from 'src/redis/redis.module';

@Module({
  providers: [SessionsService],
  imports: [RedisModule],
  exports: [SessionsService]
})
export class SessionsModule {}
