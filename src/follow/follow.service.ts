import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateFollowDto } from './dto/create-follow.dto';
import { UpdateFollowDto } from './dto/update-follow.dto';

@Injectable()
export class FollowsService {
  constructor(private prisma:PrismaService){}
  create(createFollowDto: CreateFollowDto) {
    return this.prisma.follow.create({data: createFollowDto}); 
  }

  findAll() {
    return this.prisma.follow.findMany();
  }

  findOne(id: number) {
    return this.prisma.follow.findUnique({where:{id}});
  }

  update(id: number, updateFollowDto: UpdateFollowDto) {
    return this.prisma.follow.update({
      where:{id},
      data: updateFollowDto,
    })
  }

  remove(id: number) {
    return this.prisma.follow.delete({where:{id}});
  }
}
