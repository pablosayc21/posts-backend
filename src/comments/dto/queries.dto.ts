import { IsMongoId, IsOptional, IsEmail } from 'class-validator';

export class CommentQueryDto {

  @IsOptional()
  @IsMongoId()
  postId?: string;

  @IsOptional()
  @IsEmail()
  email?: string;
  
}