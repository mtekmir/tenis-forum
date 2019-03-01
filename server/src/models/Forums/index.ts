import {
  BaseEntity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
  Entity,
  Column
} from 'typeorm';
import { Category } from '../Category';
import { Topic } from '../Topics';

@Entity()
export class Forum extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column('varchar', { nullable: false, unique: true })
  name: string;

  @ManyToOne(() => Category, Category => Category.forums, {
    onDelete: 'CASCADE'
  })
  category: Category;

  @OneToMany(() => Topic, Topic => Topic.forum)
  topics: Topic[];
}
