import { Body, Controller, Get, Post } from '@nestjs/common';
import { PostsService } from './posts.service';
import { Param } from '@nestjs/common';
import { CreatePostDto } from './dto/post.dto';
@Controller('posts')
export class PostsController {

    constructor(private postService: PostsService) {

    }

    //Plural
    @Get()
    async findAll(){
        return this.postService.findAll();
    }

    @Post()
    async create(@Body() createPostDto: CreatePostDto) {
        return this.postService.create(createPostDto);
    }


    //Singular
    @Get(':id')
    async findOne(@Param('id') id: string) {
        return this.postService.findOne(id);
    }


}
