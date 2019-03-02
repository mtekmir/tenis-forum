import {
  BaseEntity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
  Entity,
  Column,
  OneToOne
} from 'typeorm';
import { Forum } from '../Forums';
import { Post } from '../Posts';
import { User } from '../User';

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

  @OneToOne(() => Post, post => post.thread)
  originalPost: Post;

  @ManyToOne(() => Forum, Forum => Forum)
  forum: Forum;

  @ManyToOne(() => User, { nullable: true })
  owner: User;

  @OneToMany(() => Post, post => post.thread)
  posts: Post[];
}
