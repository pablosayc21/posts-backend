import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Post } from './schemas/post.schema';
import { Model } from 'mongoose';

@Injectable()
export class PostsService {

    constructor(
        @InjectModel(Post.name) private postModel: Model<Post>,
    ) {

    }

    async findAll() {
        return this.postModel.find().exec();
    }

    async findOne(id:string) {
        return this.postModel.findById(id).exec();
    }

}
