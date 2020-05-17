import bcrypt from 'bcryptjs'
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  BeforeInsert,
  OneToMany,
  OneToOne,
  CreateDateColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm'
import { UserPermissions } from './permissions'
import { Post } from '../Posts'
import { Thread } from '../Threads'
import { UserProfile } from '../UserProfile'
import { Report } from '../Report'
import { Conversation } from '../Conversation'
import { Message } from '../Message'

@Entity('users')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @CreateDateColumn()
  createdAt: Date

  @Column('varchar', { length: 100, nullable: false })
  username: string

  @Column('varchar', { length: 255, nullable: true })
  email: string

  @Column('text', { nullable: true })
  password: string

  @Column('enum', {
    array: true,
    enum: UserPermissions,
  })
  permissions: UserPermissions[]

  @Column('text', { nullable: true })
  signature: string

  @Column('boolean', { default: false })
  confirmed: boolean

  @Column('varchar', { nullable: true })
  pwResetToken: string

  @Column('bigint', { nullable: true })
  pwResetTokenExpiry: number

  @OneToMany(() => Post, post => post.author)
  posts: Post[]

  @OneToMany(() => Thread, thread => thread.owner)
  threads: Thread[]

  @OneToMany(() => Report, report => report.reporter)
  reports: Report[]

  @Column('varchar', { nullable: true })
  profileImageKey: string

  @OneToOne(() => UserProfile, profile => profile.user)
  profile: UserProfile

  @ManyToMany(() => Conversation, conversation => conversation.participants)
  @JoinTable()
  conversations: Conversation[]

  @OneToMany(() => Message, _ => _.author)
  messages: Message[]

  @BeforeInsert()
  async hashPasswordBeforeInsert() {
    if (this.password) {
      this.password = await bcrypt.hash(this.password, 10)
    }
  }
}
