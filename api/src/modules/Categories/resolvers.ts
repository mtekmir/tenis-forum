import { categoryCreate } from './createCategory'
import { categoryDelete } from './deleteCategory'
import { categoryGetAll } from './getAllCategories'
import { categoryGetSummaryAll } from './getCategorySummaries'
import { categoryGet } from './getCategory'
import { categoryGetLastThreads } from './getCategoriesLastThreads'

export const resolvers = {
  Mutation: {
    categoryCreate,
    categoryDelete,
  },
  Query: {
    categoryGetSummaryAll,
    categoryGetAll,
    categoryGet,
    categoryGetLastThreads,
  },
}
