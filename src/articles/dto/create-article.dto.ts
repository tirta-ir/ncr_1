import { ApiProperty } from '@nestjs/swagger';
import {
    IsBoolean,
    IsNotEmpty,
    IsOptional,
    IsString,
    MaxLength,
    MinLength,
  } from 'class-validator';

export class CreateArticleDto {
    @IsNotEmpty()
    @ApiProperty()
    ncrNo:string;
    
    @IsNotEmpty()
    @ApiProperty()
    auditNo:string;
    
    @IsNotEmpty()
    @MaxLength(10)
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
