import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { TopicsService } from './topics.service';

@Controller('topics')
export class TopicsController {
  constructor(private readonly topicsService: TopicsService) {}

  @Get()
  getAll() {
    return this.topicsService.findAll();
  }

  @Get(':id')
  getOne(@Param('id') id: number) {
    return this.topicsService.findOne(id);
  }

  @Post()
  create(@Body() body: any) {
    return this.topicsService.create(body);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() body: any) {
    return this.topicsService.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.topicsService.remove(id);
  }
}
