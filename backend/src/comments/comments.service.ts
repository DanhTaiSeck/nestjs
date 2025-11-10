import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comment } from '../entities/comment.entity';

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Comment)
    private readonly commentRepo: Repository<Comment>,
  ) {}

  findAll() {
    return this.commentRepo.find({ relations: ['user', 'post'] });
  }

  findOne(id: number) {
    return this.commentRepo.findOne({ where: { comment_id: id }, relations: ['user', 'post'] });
  }

  async create(data: Partial<Comment>) {
    const comment = this.commentRepo.create(data);
    return this.commentRepo.save(comment);
  }

  async update(id: number, data: Partial<Comment>) {
    await this.commentRepo.update(id, data);
    return this.findOne(id);
  }

  async remove(id: number) {
    const result = await this.commentRepo.delete(id);
    if (result.affected === 0) throw new NotFoundException('Không tìm thấy bình luận');
    return { message: 'Xóa bình luận thành công' };
  }
}
