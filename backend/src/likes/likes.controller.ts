import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { LikesService } from './likes.service';

@Controller('likes')
export class LikesController {
  constructor(private readonly likesService: LikesService) {}

  @Get()
  getAll() {
    return this.likesService.findAll();
  }

  @Post()
  create(@Body() body: any) {
    return this.likesService.create(body);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.likesService.remove(id);
  }
}
