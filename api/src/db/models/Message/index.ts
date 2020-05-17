import {
  BaseEntity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  Entity,
  Column,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm'
import { User } from '../User'
import { Conversation } from '../Conversation'

@Entity()
export class Message extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date

  @Column('varchar', { nullable: false })
  content: string

  @ManyToOne(() => Conversation, _ => _.messages)
  conversation: Conversation

  @ManyToOne(() => User, _ => _.messages, {
    nullable: true,
    onDelete: 'SET NULL',
  })
  author: User
}
