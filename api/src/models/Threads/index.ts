import {
  BaseEntity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
  Entity,
  Column,
  OneToOne,
} from 'typeorm';
import { Forum } from '../Forums';
import { Post } from '../Posts';
import { User } from '../User';

interface ThreadOwner {
  id: string;
  username: string;
}

@Entity()
export class Thread extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column('varchar', { nullable: false })
  title: string;

  @OneToOne(() => Post, post => post.thread)
  originalPost: Post;

  @ManyToOne(() => Forum, forum => forum.threads)
  forum: Forum;

  @ManyToOne(() => User, { nullable: true, eager: true })
  owner: ThreadOwner;

  @OneToMany(() => Post, post => post.thread)
  posts: Post[];
}
