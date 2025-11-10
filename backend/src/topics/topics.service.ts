import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Topic } from '../entities/topic.entity';

@Injectable()
export class TopicsService {
  constructor(
    @InjectRepository(Topic)
    private readonly topicRepo: Repository<Topic>,
  ) {}

  findAll() {
    return this.topicRepo.find({ relations: ['posts'] });
  }

  findOne(id: number) {
    return this.topicRepo.findOne({ where: { topic_id: id }, relations: ['posts'] });
  }

  async create(data: Partial<Topic>) {
    const topic = this.topicRepo.create(data);
    return this.topicRepo.save(topic);
  }

  async update(id: number, data: Partial<Topic>) {
    await this.topicRepo.update(id, data);
    return this.findOne(id);
  }

  async remove(id: number) {
    const result = await this.topicRepo.delete(id);
    if (result.affected === 0) throw new NotFoundException('Không tìm thấy chủ đề');
    return { message: 'Xóa chủ đề thành công' };
  }
}
