import { IsOptional, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RegisterDto {
  @ApiProperty({ required: true })
  @IsOptional()
  @IsString()
  email: string;

  @ApiProperty({
    required: true,
    description: 'phone with format only digits, for example 77081234567',
  })
  @IsOptional()
  @IsString()
  phone: string;

  @ApiProperty({ minLength: 6, required: true })
  @IsString()
  @MinLength(6, { message: 'Password should be at least 6 characters long' })
  password: string;
}
