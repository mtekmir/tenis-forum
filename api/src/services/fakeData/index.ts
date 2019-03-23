import { createCategories } from './categories';
import { createForums } from './forums';

(async () => {
  await createCategories();
  await createForums();
})();
