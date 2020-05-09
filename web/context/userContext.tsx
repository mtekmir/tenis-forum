import * as React from 'react'
import { useQuery } from 'react-apollo'

import { ME_QUERY } from '../graphql/query/meQuery'
import { Me, Me_me } from '../graphql/generated/Me'

interface UserContext {
  user?: Me_me | null
}

export const UserContext = React.createContext<UserContext>({
  user: null
})

export const UserContextProvider: React.FC = ({ children }) => {
  const { data, loading } = useQuery<Me>(ME_QUERY)
  if (loading) {
    return null
  }
  return (
    <UserContext.Provider value={{ user: data && data.me }}>{children}</UserContext.Provider>
  )
}

export const UserContextConsumer = UserContext.Consumer
