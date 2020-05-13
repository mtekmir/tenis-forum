import {
  BaseEntity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
  Entity,
  Column,
} from 'typeorm'
import { Category } from '../Category'
import { Thread } from '../Threads'

@Entity()
export class Forum extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date

  @Column('varchar', { nullable: false, unique: true })
  name: string

  @Column('timestamp', { nullable: true })
  deleted: Date | null

  @Column('smallint', { default: 1 })
  order: number

  @Column('varchar', { default: '' })
  description: string

  @ManyToOne(() => Category, category => category.forums, {
    onDelete: 'CASCADE',
  })
  category: Category

  @OneToMany(() => Thread, thread => thread.forum)
  threads: Thread[]
}
