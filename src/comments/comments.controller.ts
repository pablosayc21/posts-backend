import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { Param, Query } from '@nestjs/common';
import { CreateCommentDto, UpdateCommentDto } from './dto/comment.dto';
import { CommentQueryDto } from './dto/queries.dto';
import { MongoIdParamDto } from 'src/common/dto/common.dto';
import { Logger } from '@nestjs/common';
@Controller('comments')
export class CommentsController {
    
    constructor(private commentService: CommentsService) {}

    //Plural
    @Get()
    async find(@Query() query: CommentQueryDto) {
        return this.commentService.find(query);
    }

    @Post()
    async create(@Body() createCommentDto: CreateCommentDto) {
        return this.commentService.create(createCommentDto);
    }


    //Singular
    @Get(':id')
    async findOne(@Param() params: MongoIdParamDto) {
        return this.commentService.findOne(params.id);
    }

    

    @Put(':id')
    async update(@Param() params: MongoIdParamDto, @Body() updateCommentDto: UpdateCommentDto) {
        return this.commentService.update(params.id, updateCommentDto);
    }

    @Delete(':id')
    async remove(@Param() params: MongoIdParamDto) {
        return this.commentService.remove(params.id);
    }
}
