import { createCategories } from './categories';
import { createForums } from './forums';
import { createUsers } from './users';
import { createThreads } from './threads';
import { createPosts } from './posts';

export const createFakeData = async () => {
  try {
    await createUsers();
    await createCategories();
    await createForums();
    await createThreads();
    await createPosts();
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};
