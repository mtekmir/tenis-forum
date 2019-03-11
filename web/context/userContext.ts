import * as React from 'react';
import { MeMe } from '../generated/apolloComponents';

interface UserContext {
  user?: MeMe | null;
}

const userContext = React.createContext<UserContext>({
  user: null,
});

export const UserContextProvider = userContext.Provider;
export const UserContextConsumer = userContext.Consumer;
