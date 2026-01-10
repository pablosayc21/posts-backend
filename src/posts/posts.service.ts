import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Post } from './schemas/post.schema';
import { Model } from 'mongoose';
import { CreatePostDto, UpdatePostDto } from './dto/post.dto';
import { NotFoundException } from '@nestjs/common';
import { Comment } from 'src/comments/schemas/comment.schema';
@Injectable()
export class PostsService {

    constructor(
        @InjectModel(Post.name) private postModel: Model<Post>,
        @InjectModel(Comment.name) private commentModel: Model<Comment>
    ) {

    }

    async create(createPostDto: CreatePostDto) {
        const post = new this.postModel(createPostDto);
        return post.save();
    }

    async findAll() {
        return this.postModel.find().exec();
    }

    async findOne(id:string) {
        const post = await this.postModel.findById(id).exec();
        if(!post) throw new NotFoundException('Post not found')
        return post;
    }

    async update(id: string, updatePostDto: UpdatePostDto) {
        const post = await this.postModel.findByIdAndUpdate(id, updatePostDto, { new: true }).exec();
        if(!post) throw new NotFoundException('Post not found')
        return post;
    }

    async remove(id: string) {
        const post = await this.postModel.findByIdAndDelete(id).exec()
        if(!post) throw new NotFoundException('Post not found')
        await this.commentModel.deleteMany({ postId: id }).exec();
        return post;
    }

    async insertMany(createPostDto: CreatePostDto[]) {
        return this.postModel.insertMany(createPostDto);
    }




}
