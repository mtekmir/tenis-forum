import { NextContext } from 'next';
import { ApolloClient, NormalizedCacheObject } from 'apollo-boost';

export interface AppContext extends NextContext {
  apolloClient: ApolloClient<NormalizedCacheObject>;
}
