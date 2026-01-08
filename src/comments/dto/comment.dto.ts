import { IsString, IsNotEmpty, MinLength, IsMongoId, IsEmail, IsOptional } from 'class-validator';

export class CreateCommentDto {
    
    @IsMongoId()
    postId: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(2)
    name: string;

    @IsOptional()
    @IsEmail()
    email?: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(1)
    body: string;

}

export class UpdateCommentDto {
    
    @IsMongoId()
    postId: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(2)
    name: string;

    @IsEmail()
    email: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(1)
    body: string;

}