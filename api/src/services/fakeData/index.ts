import faker from 'faker';
import { Category } from '../../models/Category';

const NUM_CATEGORIES = 5;

(async () => {
  const categories = await Category.find();

  if (categories.length < NUM_CATEGORIES) {
  }
})();
