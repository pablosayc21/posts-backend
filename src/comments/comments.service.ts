import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Comment } from './schemas/comment.schema';
import { Model } from 'mongoose';
import { CreateCommentDto, UpdateCommentDto } from './dto/comment.dto';

@Injectable()
export class CommentsService {

    constructor(
        @InjectModel(Comment.name) private commentModel: Model<Comment>,
    ) {

    }

    async create(createPostDto: CreateCommentDto) {
        const post = new this.commentModel(createPostDto);
        return post.save();
    }

    async findAll() {
        return this.commentModel.find().exec();
    }

    async findOne(id: string) {
        return this.commentModel.findById(id).exec();
    }

    async update(id: string, updatePostDto: UpdateCommentDto) {
        return this.commentModel.findByIdAndUpdate(id, updatePostDto, { new: true }).exec();
    }

    async remove(id: string) {
        return this.commentModel.findByIdAndDelete(id).exec();
    }

}
