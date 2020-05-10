import {
  BaseEntity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  Column,
  Entity,
} from 'typeorm'
import { Forum } from '../Forums'

@Entity()
export class Category extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date

  @Column('varchar', { nullable: false, unique: true })
  name: string

  @Column('smallint', { default: 1 })
  order: number

  @OneToMany(() => Forum, forum => forum.category)
  forums: Forum[]
}
