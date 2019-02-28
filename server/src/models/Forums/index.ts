import {
  BaseEntity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany
} from 'typeorm';
import { Category } from '../Category';
import { Topic } from '../Topics';

export class Forum extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => Category, Category => Category.forums)
  category: Category;

  @OneToMany(() => Topic, Topic => Topic.forum)
  topics: Topic[];
}
