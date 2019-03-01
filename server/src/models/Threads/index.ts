import {
  BaseEntity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
  Entity,
  Column
} from 'typeorm';
import { Forum } from '../Forums';
import { Post } from '../Posts';

@Entity()
export class Thread extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column()
  title: string;

  @ManyToOne(() => Forum, Forum => Forum)
  forum: Forum;

  @OneToMany(() => Post, post => post.thread)
  posts: Post[];
}
