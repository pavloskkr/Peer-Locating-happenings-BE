import {IsNotEmpty, IsOptional, IsString} from 'class-validator';

export class UpdateUserDto {
    @IsString()
    @IsNotEmpty()
    id!: string;

    @IsString()
    @IsOptional()
    email?: string;
}
