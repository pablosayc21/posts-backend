import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Post } from './schemas/post.schema';
import { Model } from 'mongoose';
import { CreatePostDto } from './dto/post.dto';
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

}
