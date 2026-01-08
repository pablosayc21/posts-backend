import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { PostsService } from './posts.service';
import { Param } from '@nestjs/common';
import { CreatePostDto, UpdatePostDto } from './dto/post.dto';
import { ParseArrayPipe } from '@nestjs/common';
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

    @Post('bulk')
    async insertMany(@Body(
        new ParseArrayPipe({items: CreatePostDto,whitelist: true,forbidNonWhitelisted: true,})
    )createPostDtos: CreatePostDto[],) {
        return this.postService.insertMany(createPostDtos);
    }


    //Singular
    @Get(':id')
    async findOne(@Param('id') id: string) {
        return this.postService.findOne(id);
    }

    @Put(':id')
    async update(@Param('id') id : string, @Body() updatePostDto: UpdatePostDto) {
        return this.postService.update(id, updatePostDto);
    }

    @Delete(':id')
    async remove(@Param('id') id: string) {
        return this.postService.remove(id);
    }


}
