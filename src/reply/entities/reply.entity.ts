// src/Replys/entities/Reply.entity.ts

import { Reply } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class ReplyEntity implements Reply {
    @ApiProperty()
    id: number;
    @ApiProperty()
    createdAt: Date;
    @ApiProperty()
    updateAt: Date;
    @ApiProperty()
    articleId: number;
    @ApiProperty()
    root: string;
    @ApiProperty()
    action: string;
    @ApiProperty()
    Prevent: string;
    @ApiProperty()
    implement: string;
    @ApiProperty()
    personal: string;
    @ApiProperty()
    respBy: string;
    @ApiProperty()
    respDate: string;

}