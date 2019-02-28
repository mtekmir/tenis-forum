import {
  BaseEntity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany
} from 'typeorm';
import { Topic } from '../Topics';
import { Post } from '../Posts';

export class Thread extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => Topic)
  topic: Topic;

  @OneToMany(() => Post, post => post.thread)
  posts: Post[];
}
