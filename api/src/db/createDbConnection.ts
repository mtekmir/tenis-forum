import { createConnection } from 'typeorm'
import { User } from './models/User'
import { Category } from './models/Category'
import { Forum } from './models/Forums'
import { Thread } from './models/Threads'
import { Post } from './models/Posts'
import { UserProfile } from './models/UserProfile'
import { Report } from './models/Report'

export const createDbConnection = async (connType: string) => {
  const { DATABASE_URL } = process.env
  return createConnection({
    type: 'postgres',
    synchronize: connType === 'PROD' ? false : true,
    dropSchema: connType === 'TEST',
    logging: false,
    entities: [User, UserProfile, Category, Forum, Thread, Post, Report],
    url: DATABASE_URL,
    name: 'default',
  })
}
