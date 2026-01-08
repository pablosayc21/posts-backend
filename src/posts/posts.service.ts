import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Post } from './schemas/post.schema';
import { Model } from 'mongoose';
import { CreatePostDto, UpdatePostDto } from './dto/post.dto';
@Injectable()
export class PostsService {

    constructor(
        @InjectModel(Post.name) private postModel: Model<Post>,
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
        return this.postModel.findById(id).exec();
    }

    async update(id: string, updatePostDto: UpdatePostDto) {
        return this.postModel.findByIdAndUpdate(id, updatePostDto, { new: true }).exec();
    }

    async remove(id: string) {
        return this.postModel.findByIdAndDelete(id).exec();
    }


}
