import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Comment } from './schemas/comment.schema';
import { Model } from 'mongoose';
import { CreateCommentDto, UpdateCommentDto } from './dto/comment.dto';
import { Types } from 'mongoose';
import { CommentQueryDto } from './dto/queries.dto';
import { NotFoundException } from '@nestjs/common';

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

        console.log(query)

        return this.commentModel.find(query).exec();
    }
    
    async findAll() {
        return this.commentModel.find().exec();
    }

    async findOne(id: string) {
        const comment = await this.commentModel.findById(id).exec()
        if(!comment) throw new NotFoundException('Comment not found')
        return comment;
    }

    async update(id: string, updateCommentDto: UpdateCommentDto) {
        const comment = await this.commentModel.findByIdAndUpdate(id, updateCommentDto, { new: true }).exec();
        if(!comment) throw new NotFoundException('Comment not found')
        return comment;
    }

    async remove(id: string) {
        const comment = await this.commentModel.findByIdAndDelete(id).exec()
        if(!comment) throw new NotFoundException('Comment not found')
        return comment;
    }

    async findByPostId(postId: string) {
        return this.commentModel.find({ postId: new Types.ObjectId(postId) }).exec();
    }

}
