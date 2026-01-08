import { IsString, IsNotEmpty, MinLength, IsMongoId } from 'class-validator';

export class CreatePostDto {
    
    @IsString()
    @IsNotEmpty()
    @MinLength(1)
    title: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(1)
    body: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(2)
    author: string;
}

export class UpdatePostDto {

    @IsString()
    @IsNotEmpty()
    @MinLength(1)
    title: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(1)
    body: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(2)
    author: string;
}