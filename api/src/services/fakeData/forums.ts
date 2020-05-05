import faker from 'faker';
import { Category } from '../../db/models/Category';
import { getConnection } from 'typeorm';
import { Forum } from '../../db/models/Forums';

const NUM_FORUMS = 5;

export const createForums = async () => {
  const categories = await Category.find({ relations: ['forums'] });

  const newForums = [];

  for (const category of categories) {
    if (category.forums.length < NUM_FORUMS) {
      for (let i = 0; i < NUM_FORUMS - category.forums.length; i++) {
        newForums.push({ name: faker.lorem.sentence(), category });
      }
    }
  }

  if (newForums.length) {
    await getConnection()
      .createQueryBuilder()
      .insert()
      .into(Forum)
      .values(newForums)
      .execute();
  }
};
