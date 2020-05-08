import {
  BaseEntity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  Entity,
  Column,
} from 'typeorm'
import { Thread } from '../Threads'
import { User } from '../User'
import { Post } from '../Posts'

@Entity()
export class Report extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date

  @Column('text', { nullable: false })
  reason: string

  @ManyToOne(() => User, user => user.reports, {
    nullable: true,
    onDelete: 'SET NULL',
  })
  reporter: User

  @Column('int', { nullable: true })
  threadId: number

  @ManyToOne(() => Thread, thread => thread.reports, { onDelete: 'CASCADE' })
  thread: Thread

  @Column('int', { nullable: true })
  postId: number

  @ManyToOne(() => Post, post => post.reports, { onDelete: 'CASCADE' })
  post: Post
}
