import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsNotEmpty } from 'class-validator';


export class Address {

  @ApiProperty({ 
    description: 'Country',
    example: 'Usa'
  })
  @IsString()
  @IsNotEmpty()
  readonly country: string;

  @ApiProperty({ 
    description: 'State',
    example: 'New York'
  })
  @IsString()
  @IsOptional()
  readonly state?: string;

  @ApiProperty({ 
    description: 'City',
    example: 'New York'
  })
  @IsString()
  @IsNotEmpty()
  readonly city: string;

  @ApiProperty({ 
    description: 'Zip',
    example: '10018'
  })
  @IsString()
  @IsNotEmpty()
  readonly zip: string;

  @ApiProperty({ 
    description: 'Address',
    example: '72 West 36 Street'
  })
  @IsString()
  @IsNotEmpty()
  readonly address: string;

}