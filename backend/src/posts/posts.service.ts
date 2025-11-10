import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from '../entities/post.entity';
import { User } from '../entities/user.entity';
import { Topic } from '../entities/topic.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private readonly postRepo: Repository<Post>,
  ) {}

  findAll() {
    return this.postRepo.find({ relations: ['user', 'topic', 'comments', 'likes'] });
  }

  findOne(id: number) {
    return this.postRepo.findOne({
      where: { post_id: id },
      relations: ['user', 'topic', 'comments', 'likes'],
    });
  }

  async create(data: Partial<Post>) {
    const post = this.postRepo.create(data);
    return this.postRepo.save(post);
  }

  async update(id: number, data: Partial<Post>) {
    await this.postRepo.update(id, data);
    return this.findOne(id);
  }

  async remove(id: number) {
    const result = await this.postRepo.delete(id);
    if (result.affected === 0) throw new NotFoundException('Không tìm thấy bài viết');
    return { message: 'Xóa bài viết thành công' };
  }
}
