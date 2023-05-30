import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateContactDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  nome: string;

  @IsEmail()
  @IsNotEmpty()
  @ApiProperty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  telefone: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Data de registro ex: 10/02/2021',
    type: String,
    default: '10/02/2021',
  })
  registrado: string;
}
