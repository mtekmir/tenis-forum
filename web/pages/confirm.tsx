import * as React from 'react';
import { AppContext } from '../context/AppContext';
import {
  ConfirmEmailVariables,
  ConfirmEmailMutation,
} from '../generated/apolloComponents';
import { confirmEmail } from '../graphql/mutation/confirmEmail';
import redirect from '../lib/redirect';

class ConfirmEmail extends React.PureComponent {
  static async getInitialProps({
    query: { token },
    apolloClient,
    // tslint:disable-next-line
    ...ctx
  }: AppContext) {
    if (!token) {
      return {};
    }
    await apolloClient.mutate<ConfirmEmailMutation, ConfirmEmailVariables>({
      mutation: confirmEmail,
      variables: {
        token: token as string,
      },
    });
    redirect(ctx, '/login');
    return {};
  }

  render() {
    return <p>'Error'</p>;
  }
}

export default ConfirmEmail;
