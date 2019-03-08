import * as React from 'react';
import { AppContext } from '../../../context/AppContext';
import redirect from '../../../lib/redirect';
import { confirmEmail } from '../../../graphql/mutation/confirmEmail';

interface Props {
  token: string;
  ctx: any;
}

class ConfirmEmail extends React.PureComponent<Props> {
  static async getInitialProps({
    query: { token },
    apolloClient,
    // tslint:disable-next-line
    ...ctx
  }: AppContext) {
    if (!token) {
      redirect(ctx, '/uyelik/giris');
    }
    try {
      const res = await apolloClient.mutate({
        mutation: confirmEmail,
        variables: { token },
      });

      if (res && res.data && res.data.confirmUserEmail.success) {
        redirect(ctx, '/uyelik/giris');
      }
    } catch (err) {
      console.log(err.message);
    }
    return { token };
  }

  render() {
    return null;
  }
}

export default ConfirmEmail;
