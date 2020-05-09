import {
  BaseEntity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  Entity,
  Column,
  JoinColumn,
  OneToMany,
} from 'typeorm'
import { Thread } from '../Threads'
import { User } from '../User'
import { Report } from '../Report'

@Entity()
export class Post extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date

  @Column('text', { nullable: false })
  text: string

  @ManyToOne(() => User, user => user.posts, {
    nullable: true,
    onDelete: 'SET NULL',
  })
  author: User

  @Column('int', { nullable: true })
  threadId: number

  @ManyToOne(() => Thread, thread => thread.posts, { onDelete: 'CASCADE' })
  @JoinColumn()
  thread: Thread

  @OneToMany(() => Report, report => report.post)
  reports: Report[]
}
