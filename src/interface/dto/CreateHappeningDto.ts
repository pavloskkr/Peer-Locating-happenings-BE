import {IsDate, IsNotEmpty, IsString} from "class-validator";

export class CreateHappeningDto {
    @IsString()
    @IsNotEmpty()
    title!: string;

    @IsString()
    @IsNotEmpty()
    place!: string;

    @IsDate()
    @IsNotEmpty()
    date!: Date;

    @IsString()
    @IsNotEmpty()
    location!: string;

    @IsString()
    @IsNotEmpty()
    eventType!: string;

    @IsString()
    @IsNotEmpty()
    createdBy!: string;
}