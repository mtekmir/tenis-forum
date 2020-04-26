import { MutationResolvers } from '../../../types/schema'
import { Category } from '../../../models/Category'
import { isAdmin } from '../../Admin/isAdmin'

export const categoryDelete: MutationResolvers['categoryDelete'] = async (
  _,
  { id },
  { userId }
) => {
  await isAdmin(userId)

  await Category.delete({ id })

  return {
    error: null,
    success: true,
  }
}
