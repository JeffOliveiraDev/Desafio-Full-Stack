import { ApiProperty } from '@nestjs/swagger';
import { hashSync } from 'bcryptjs';
import { Transform } from 'class-transformer';
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateCustomerDto {
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

  // @IsString()
  // @MinLength(8)
  // @ApiProperty()
  // @Transform(({ value }: { value: string }) => hashSync(value, 10), {
  //   groups: ['transform'],
  // })
  // senha: string;
}
