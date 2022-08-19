import { Module } from '@nestjs/common';
import { SocketClient } from './socket-client';

@Module({
  providers: [SocketClient],
})
export class SocketModule {}
