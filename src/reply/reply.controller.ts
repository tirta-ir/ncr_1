import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReplyService } from './reply.service';
import { CreateReplyDto } from './dto/create-reply.dto';
import { UpdateReplyDto } from './dto/update-reply.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ReplyEntity } from './entities/reply.entity';

@Controller('ncr_reply')
@ApiTags('NCR Reply')
export class ReplyController {
  constructor(private readonly replyService: ReplyService) {}

  @Post()
  @ApiCreatedResponse({ type: ReplyEntity })
  create(@Body() createReplyDto: CreateReplyDto) {
    return this.replyService.create(createReplyDto);
  }

  @Get()
  @ApiOkResponse({ type: ReplyEntity })
  findAll() {
    return this.replyService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: ReplyEntity })
  findOne(@Param('id') id: string) {
    return this.replyService.findOne(+id);
  }

  @Patch(':id')
  @ApiCreatedResponse({ type: ReplyEntity })
  update(@Param('id') id: string, @Body() updateReplyDto: UpdateReplyDto) {
    return this.replyService.update(+id, updateReplyDto);
  }

  @Delete(':id')
  @ApiCreatedResponse({ type: ReplyEntity })
  remove(@Param('id') id: string) {
    return this.replyService.remove(+id);
  }

  @Get()
  @ApiOkResponse({type: ReplyEntity})
  getAllReply(){
    return this.replyService.findAll()
  }
}
