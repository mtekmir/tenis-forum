import { AppContext } from '../../context/AppContext';
import { logoutMutation } from '../../graphql/mutation/logout';
import redirect from '../../lib/redirect';

const Logout = () => null;

Logout.getInitialProps = async ({ apolloClient, ...ctx }: AppContext) => {
  await apolloClient.mutate({ mutation: logoutMutation });
  await apolloClient.resetStore();
  redirect(ctx, '/');
  return {};
};

export default Logout;
