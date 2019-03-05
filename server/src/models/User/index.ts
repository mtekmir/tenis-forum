import bcrypt from 'bcryptjs';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  BeforeInsert,
  OneToMany
} from 'typeorm';
import { UserPermissions } from './permissions';
import { Post } from '../Posts';
import { Thread } from '../Threads';

@Entity('users')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text', { nullable: true })
  googleId: string;

  @Column('varchar', { length: 100, nullable: false })
  username: string;

  @Column('varchar', { length: 255, nullable: true })
  email: string;

  @Column('text', { nullable: true })
  password: string;

  @Column('enum', {
    array: true,
    enum: UserPermissions
  })
  permissions: UserPermissions[];

  @Column('boolean', { default: false })
  confirmed: boolean;

  @Column('varchar', { nullable: true })
  pwResetToken: string;

  @Column('bigint', { nullable: true })
  pwResetTokenExpiry: number;

  @Column('varchar', { nullable: true })
  profileImageId: string;

  @OneToMany(() => Post, post => post.author)
  posts: Post[];

  @OneToMany(() => Thread, thread => thread.owner)
  threads: Thread[];

  @BeforeInsert()
  async hashPasswordBeforeInsert() {
    if (this.password) {
      this.password = await bcrypt.hash(this.password, 10);
    }
  }
}
