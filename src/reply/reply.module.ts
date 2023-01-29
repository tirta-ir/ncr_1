import { Module } from '@nestjs/common';
import { ReplyService } from './reply.service';
import { ReplyController } from './reply.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [ReplyController],
  providers: [ReplyService],
  imports: [PrismaModule],
})
export class ReplyModule {}
