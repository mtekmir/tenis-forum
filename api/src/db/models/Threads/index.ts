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
} from 'typeorm'
import { Forum } from '../Forums'
import { Post } from '../Posts'
import { User } from '../User'
import { Report } from '../Report'

interface ThreadOwner {
  id: string
  username: string
}

@Entity()
export class Thread extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date

  @Column('varchar', { nullable: false })
  title: string

  @Column('timestamp', { nullable: true })
  deleted: Date | null

  @Column('int', { default: 0 })
  views: number

  @Column('int', { default: 0 })
  postCount: number

  @OneToOne(() => Post, post => post.thread)
  originalPost: Post

  @ManyToOne(() => Forum, forum => forum.threads)
  forum: Forum

  @ManyToOne(() => User, { nullable: true, eager: true, onDelete: 'SET NULL' })
  owner: ThreadOwner

  @OneToMany(() => Post, post => post.thread)
  posts: Post[]

  @OneToMany(() => Report, report => report.thread)
  reports: Report[]
}
