import { createCategories } from './categories';
import { createForums } from './forums';
import { createUsers } from './users';
import { createThreads } from './threads';

export const createFakeData = async () => {
  try {
    await createUsers();
    await createCategories();
    await createForums();
    await createThreads();
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};
