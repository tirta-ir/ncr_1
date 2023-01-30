import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ArticlesModule } from './articles/articles.module';
import { ReplyModule } from './reply/reply.module';
import { FollowModule } from './follow/follow.module';

@Module({
  imports: [PrismaModule, ArticlesModule, ReplyModule, FollowModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
