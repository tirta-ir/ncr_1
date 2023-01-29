// src/Follows/entities/Follow.entity.ts

import { Follow } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class FollowEntity implements Follow {
    
    @ApiProperty()
    articleId: number;

    @ApiProperty()
    id: number;

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