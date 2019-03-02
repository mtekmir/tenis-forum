import {
  BaseEntity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  Entity,
  Column
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

  @Column('text', { nullable: false })
  text: String;

  @ManyToOne(() => User, user => user.posts, { nullable: true })
  author: User;

  @ManyToOne(() => Thread, thread => thread.posts, { onDelete: 'CASCADE' })
  thread: Thread;
}
