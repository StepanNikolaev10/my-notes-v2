import { Module } from '@nestjs/common';
import { SessionsService } from './sessions.service';
import { RedisModule } from '@nestjs-modules/ioredis';

@Module({
  providers: [SessionsService],
  imports: [RedisModule],
  exports: [SessionsService]
})
export class SessionsModule {}
