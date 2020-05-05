import faker from 'faker';
import { Category } from '../../db/models/Category';
import { getConnection } from 'typeorm';

const NUM_CATEGORIES = 5;

export const createCategories = async () => {
  const categories = await Category.find();
  const newCategories = [];

  if (categories.length < NUM_CATEGORIES) {
    for (let i = 0; i < NUM_CATEGORIES - categories.length; i++) {
      newCategories.push({ name: `${faker.internet.domainWord()} Category` });
    }

    if (newCategories.length) {
      await getConnection()
        .createQueryBuilder()
        .insert()
        .into(Category)
        .values(newCategories)
        .execute();
    }
  }
};
