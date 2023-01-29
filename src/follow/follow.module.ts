import { Module } from '@nestjs/common';
import { FollowsService } from './follow.service';
import { FollowController } from './follow.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [FollowController],
  providers: [FollowsService],
  imports: [PrismaModule],
})
export class FollowModule {}
