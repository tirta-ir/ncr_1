// src/articles/entities/article.entity.ts

import { Article } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class ArticleEntity implements Article {
    @ApiProperty()
    id: number;

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updateAt: Date;
    
    @ApiProperty()
    ncrNo:string;
  
    @ApiProperty()
    auditNo:string;
  
    @ApiProperty() 
    issuedAt:string;
   
    @ApiProperty()
    respon:string;
   
    @ApiProperty()
    auditType:string;
   
    @ApiProperty()
    conditionRef:string;
    
    @ApiProperty()
    level:number;
    
    @ApiProperty({default: false})
    problem:boolean=false;
    
    @ApiProperty({required: false, default: false})
    published:boolean=false;
    
    @ApiProperty()
    due:string;
    
    @ApiProperty()
    condition:string;
    
    @ApiProperty()
    originator:string;
    
    @ApiProperty()
    send:string;
   
    @ApiProperty()
    accBy:string;
    
    @ApiProperty()
    accDate:string;
}