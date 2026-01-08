import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { PostsService } from './posts.service';
import { Param } from '@nestjs/common';
import { CreatePostDto, UpdatePostDto } from './dto/post.dto';
import { ParseArrayPipe } from '@nestjs/common';
import { MongoIdParamDto } from 'src/common/dto/common.dto';
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
    async findOne(@Param() params: MongoIdParamDto) {
        return this.postService.findOne(params.id);
    }

    @Put(':id')
    async update(@Param() params: MongoIdParamDto, @Body() updatePostDto: UpdatePostDto) {
        return this.postService.update(params.id, updatePostDto);
    }

    @Delete(':id')
    async remove(@Param() params: MongoIdParamDto) {
        return this.postService.remove(params.id);
    }


}
