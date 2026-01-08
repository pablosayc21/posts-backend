import { Controller, Get } from '@nestjs/common';
import { PostsService } from './posts.service';
import { Param } from '@nestjs/common';

@Controller('posts')
export class PostsController {

    constructor(private postService: PostsService) {

    }

    @Get()
    async findAll(){
        return this.postService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        return this.postService.findOne(id);
    }


}
