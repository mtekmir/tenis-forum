import {
  BaseEntity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  OneToMany,
  Entity,
  Column,
  ManyToMany,
  ManyToOne,
} from 'typeorm'
import { User } from '../User'
import { Message } from '../Message'

interface ConversationStarter {
  id: string
  username: string
}

@Entity()
export class Conversation extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number

  @CreateDateColumn()
  createdAt: Date

  @Column('varchar', { nullable: false })
  title: string

  @Column('bool', { default: false })
  locked: boolean

  @ManyToMany(() => User, user => user.conversations)
  participants: User[]

  @ManyToOne(() => User, { nullable: true, onDelete: 'SET NULL' })
  starter: ConversationStarter

  @OneToMany(() => Message, message => message.conversation)
  messages: Message[]
}
