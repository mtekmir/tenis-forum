import { createConnection } from 'typeorm';
import { User } from '../models/User';
import { Category } from '../models/Category';
import { Forum } from '../models/Forums';
import { Topic } from '../models/Topics';
import { Thread } from '../models/Threads';
import { Post } from '../models/Posts';

export const createDbConnection = async (connType: string) => {
  const { DATABASE_URL } = process.env;
  return createConnection({
    type: 'postgres',
    synchronize: connType === 'PROD' ? false : true,
    dropSchema: connType === 'TEST',
    logging: connType === 'DEV',
    entities: [User, Category, Forum, Topic, Thread, Post],
    url: DATABASE_URL,
    name: 'default'
  });
};
