import { Me_me } from '../graphql/generated/Me'
import { UserPermissions } from '../graphql/generated/globalTypes'

export const isAdmin = (user: Me_me | null) => {
  return user && user.permissions.includes(UserPermissions.ADMIN)
}
