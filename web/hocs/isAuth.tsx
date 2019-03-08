import * as React from 'react';
import redirect from '../lib/redirect';
import { MeQuery } from '../generated/apolloComponents';
import { meQuery } from '../graphql/query/meQuery';
import { AppContext } from '../context/AppContext';

// Not using this

export const withAuth = <T extends object>(C: React.ComponentClass<T>) => {
  return class AuthComponent extends React.Component<T> {
    static async getInitialProps({
      apolloClient,
      // tslint:disable-next-line
      ...ctx
    }: AppContext) {
      const response = await apolloClient.query<MeQuery>({ query: meQuery });
      if (!response || !response.data || !response.data.me) {
        redirect(ctx, '/');
        return {
          me: null,
        };
      }

      return {
        me: response.data.me,
      };
    }

    render() {
      return <C {...this.props} />;
    }
  };
};
