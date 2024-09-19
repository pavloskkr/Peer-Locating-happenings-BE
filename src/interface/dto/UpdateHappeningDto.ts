import {IsOptional, IsString, IsDate, IsNotEmpty} from 'class-validator';

export class UpdateHappeningDto {
    @IsString()
    @IsNotEmpty()
    id!: string;

    @IsString()
    @IsOptional()
    title?: string;

    @IsString()
    @IsOptional()
    place?: string;

    @IsDate()
    @IsOptional()
    date?: Date;

    @IsString()
    @IsOptional()
    location?: string;

    @IsString()
    @IsOptional()
    eventType?: string;
}
