import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
} from 'typeorm';
import { Post } from './post.entity';

@Entity('topics')
export class Topic {
  @PrimaryGeneratedColumn()
  topic_id: number;

  @Column({ unique: true, length: 100 })
  topic_name: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @CreateDateColumn()
  created_at: Date;

  @OneToMany(() => Post, (post) => post.topic)
  posts: Post[];
}
