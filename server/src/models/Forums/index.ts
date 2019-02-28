import {
  BaseEntity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
  Entity
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

  @ManyToOne(() => Category, Category => Category.forums)
  category: Category;

  @OneToMany(() => Topic, Topic => Topic.forum)
  topics: Topic[];
}
