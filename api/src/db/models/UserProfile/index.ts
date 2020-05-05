import {
  BaseEntity,
  Entity,
  Column,
  OneToOne,
  PrimaryGeneratedColumn,
  JoinColumn,
} from 'typeorm'
import { User } from '../User'

enum Gender {
  NotSelected = 'NOT_SELECTED',
  Male = 'MALE',
  Female = 'FEMALE',
}

@Entity('user_profile')
export class UserProfile extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column('varchar', { nullable: true })
  location: string

  @Column('enum', { default: Gender.NotSelected, enum: Gender })
  gender: Gender

  @Column('varchar', { nullable: true })
  occupation: string

  @OneToOne(() => User, user => user.profile, {
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  user: User
}
