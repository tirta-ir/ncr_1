import { ApiProperty } from '@nestjs/swagger';
import {
    IsBoolean,
    isNotEmpty,
    IsNotEmpty,
    IsOptional,
    IsString,
    MaxLength,
    MinLength,
  } from 'class-validator';

export class CreateReplyDto {
    @ApiProperty()
    articleId: number;
    @ApiProperty()
    createdAt: Date;
    @ApiProperty()
    updateAt: Date;
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
