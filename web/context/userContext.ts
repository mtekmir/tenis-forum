import * as React from 'react';
import { MeMe } from '../generated/apolloComponents';

interface UserContext {
  user?: MeMe;
}

const userContext = React.createContext<UserContext>({
  user: undefined,
});

export const UserContextProvider = userContext.Provider;
export const UserContextConsumer = userContext.Consumer;
