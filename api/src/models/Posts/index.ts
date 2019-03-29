import {
  BaseEntity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  Entity,
  Column,
  JoinColumn,
} from 'typeorm';
import { Thread } from '../Threads';
import { User } from '../User';

@Entity()
export class Post extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column('json', { nullable: false })
  text: string;

  @ManyToOne(() => User, user => user.posts, { nullable: true })
  author: User;

  @Column('int', { nullable: true })
  threadId: number;

  @ManyToOne(() => Thread, thread => thread.posts, { onDelete: 'CASCADE' })
  @JoinColumn()
  thread: Thread;
}
