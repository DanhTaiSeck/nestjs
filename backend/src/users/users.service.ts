import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
  ) {}

  findAll() {
    return this.userRepo.find({ relations: ['posts', 'comments', 'likes'] });
  }

  findOne(id: number) {
    return this.userRepo.findOne({ where: { user_id: id }, relations: ['posts'] });
  }

  findByUsername(username: string) {
    return this.userRepo.findOne({ where: { username } });
  }

  async create(data: Partial<User>) {
    const user = this.userRepo.create(data);
    return this.userRepo.save(user);
  }

  async update(id: number, data: Partial<User>) {
    await this.userRepo.update(id, data);
    return this.findOne(id);
  }

  async remove(id: number) {
    const result = await this.userRepo.delete(id);
    if (result.affected === 0) throw new NotFoundException('Không tìm thấy user');
    return { message: 'Xóa thành công' };
  }
}
