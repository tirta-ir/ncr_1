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

export class CreateFollowDto {
    
    @IsNotEmpty()
    @ApiProperty()
    articleId: number;

    @ApiProperty()
    createdAt: Date;
    
    @ApiProperty()
    updateAt: Date;
    
    @ApiProperty()
    corrective: boolean;

    @ApiProperty()
    effective: boolean;
    
    @ApiProperty()
    refer: string;
  
    @ApiProperty()
    new: string;
  
    @ApiProperty() 
    appBy: string;
   
    @ApiProperty()
    appDate: string;

}
