import {
  BaseEntity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany
} from 'typeorm';
import { Forum } from '../Forums';
import { Thread } from '../Threads';

export class Topic extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => Forum, Forum => Forum)
  forum: Forum;

  @OneToMany(() => Thread, Thread => Thread.topic)
  threads: Thread[];
}
