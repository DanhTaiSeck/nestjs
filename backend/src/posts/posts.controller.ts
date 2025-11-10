import { Controller, Get, Post as HttpPost, Put, Delete, Param, Body } from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  getAll() {
    return this.postsService.findAll();
  }

  @Get(':id')
  getOne(@Param('id') id: number) {
    return this.postsService.findOne(id);
  }

  @HttpPost()
  create(@Body() body: any) {
    return this.postsService.create(body);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() body: any) {
    return this.postsService.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.postsService.remove(id);
  }
}
