import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateReplyDto } from './dto/create-reply.dto';
import { UpdateReplyDto } from './dto/update-reply.dto';

@Injectable()
export class ReplyService {
  constructor(private prisma:PrismaService){}
  create(createReplyDto: CreateReplyDto) {
    return this.prisma.reply.create({data: createReplyDto}); 
  }

  findAll() {
    return this.prisma.reply.findMany();
  }

  findOne(id: number) {
    return this.prisma.reply.findUnique({where:{id}});
  }

  update(id: number, updateReplyDto: UpdateReplyDto) {
    return this.prisma.reply.update({
      where:{id},
      data: updateReplyDto,
    })
  }

  remove(id: number) {
    return this.prisma.reply.delete({where:{id}});
  }
}
