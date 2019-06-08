import * as React from 'react';
import { MeMe } from '../generated/apolloComponents';

interface UserContext {
  user?: MeMe | null;
}

export const UserContext = React.createContext<UserContext>({
  user: null,
});

export const UserContextProvider = UserContext.Provider;
export const UserContextConsumer = UserContext.Consumer;
