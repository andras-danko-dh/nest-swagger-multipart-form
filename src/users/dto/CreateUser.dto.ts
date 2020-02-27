import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsEmail, IsInt, IsOptional, ValidateNested, IsNotEmpty, IsNotEmptyObject } from 'class-validator';
import { Type, Transform } from 'class-transformer';

import { Address } from './Address.dto';

export class CreateUser {

  @ApiProperty({ 
    description: 'The name of the user',
    example: 'Who Knows'
  })
  @IsString()
  @IsNotEmpty() //TODO: Why it is needed if its a required field?
  readonly name: string;

  @ApiProperty({ 
    description: 'The email address of the owner',
    example: 'who.knows@gmail.com'
  })
  @IsEmail()
  readonly email: string;

  @ApiPropertyOptional({ 
    description: 'Age of the user',
    example: 25
  })
  @Type(() => Number)  //TODO: Why should we do manually the type conversion?
  @IsInt()
  readonly age: number;

  @ApiProperty({ 
    description: 'Postal address'
  })
  @Transform(value => JSON.parse(value)) //If we add it the transform works, but the validation didn't
  @Type(() => Address) //TODO: Type conversion didn't work if we have multipart-form
  @ValidateNested()
  @IsNotEmptyObject() //TODO: Why it is needed if its a required field
  readonly postalAddress: Address

  @ApiProperty({ 
    description: 'Avatar image of the user',    
    type: 'string', 
    format: 'binary' 
  })
  @IsNotEmpty()
  readonly avatar: any;  

}