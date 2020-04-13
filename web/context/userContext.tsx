import * as React from 'react'
import { useQuery } from 'react-apollo'

import { ME_QUERY } from '../graphql/query/meQuery'
import { Me, Me_me } from '../generated/Me'

interface UserContext {
  user?: Me_me | null
}

export const UserContext = React.createContext<UserContext>({
  user: null
})

export const UserContextProvider: React.FC = ({ children }) => {
  const { data } = useQuery<Me>(ME_QUERY)

  return (
    <UserContext.Provider value={{ user: data && data.me }}>{children}</UserContext.Provider>
  )
}

export const UserContextConsumer = UserContext.Consumer
