import { QueryResolvers } from '../../../types/schema';
import { getConnection } from 'typeorm';
import { Forum } from '../../../models/Forums';
import { Thread } from '../../../models/Threads';

export const forumGetAll: QueryResolvers.ForumGetAllResolver = async () => {
  const results = await getConnection()
    .getRepository(Forum)
    .createQueryBuilder('forum')
    .addSelect(subQuery => {
      return subQuery
        .select('COUNT(thread.id)', 'threadCount')
        .from(Thread, 'thread')
        .where('thread."forumId" = forum.id');
    }, 'threadCount')
    .getRawMany();

  const forums = results.reduce((arr, forum) => {
    const props: { [key: string]: string } = {};

    for (const prop in forum) {
      const parts = prop.split('_');
      if (parts.length > 1) {
        props[parts[1]] = forum[prop];
      } else {
        props[prop] = forum[prop];
      }
    }
    arr.push(props);
    return arr;
  }, []);

  return { forums };
};
