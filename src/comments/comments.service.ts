import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Comment } from './schemas/comment.schema';
import { Model } from 'mongoose';
import { CreateCommentDto, UpdateCommentDto } from './dto/comment.dto';
import { Types } from 'mongoose';
import { CommentQueryDto } from './dto/queries.dto';

@Injectable()
export class CommentsService {

    constructor(
        @InjectModel(Comment.name) private commentModel: Model<Comment>,
    ) {

    }

    async create(createCommentDto: CreateCommentDto) {
        const post = new this.commentModel(createCommentDto);
        return post.save();
    }

    async find(filters: CommentQueryDto) {
        const query: any = {};

        if (filters.postId) {
            query.postId = new Types.ObjectId(filters.postId);
        }

        return this.commentModel.find(query).exec();
    }
    
    async findAll() {
        return this.commentModel.find().exec();
    }

    async findOne(id: string) {
        return this.commentModel.findById(id).exec();
    }

    async update(id: string, updateCommentDto: UpdateCommentDto) {
        return this.commentModel.findByIdAndUpdate(id, updateCommentDto, { new: true }).exec();
    }

    async remove(id: string) {
        return this.commentModel.findByIdAndDelete(id).exec();
    }

    async findByPostId(postId: string) {
        return this.commentModel.find({ postId: new Types.ObjectId(postId) }).exec();
    }

}
