import * as React from 'react';
import Layout from '../../../components/Layout';
import {
  LoginComponent,
  LoginMutation,
  LoginVariables,
} from '../../../generated/apolloComponents';
import { MutationFn } from 'react-apollo';
import { meQuery } from '../../../graphql/query/meQuery';
import Router from 'next/router';
import { LoginUI } from './LoginUI';

const LoginContainer: React.FunctionComponent = () => {
  const [error, setError] = React.useState('');
  const onSubmit = (login: MutationFn<LoginMutation, LoginVariables>) => async (
    variables: LoginVariables,
  ) => {
    try {
      const response = await login({
        variables,
        refetchQueries: [{ query: meQuery }],
      });
      if (response && response.data && response.data.login.error) {
        setError(response.data.login.error[0].message);
        setTimeout(() => {
          setError('');
        }, 3000);
      } else {
        Router.push('/');
      }
    } catch (err) {
      setError('Üzgünüz, bir hata oluştu.');
      setTimeout(() => {
        setError('');
      }, 3000);
      console.log(err.graphQLErrors);
    }
  };

  return (
    <Layout title="Üye Girişi | Tenis Forum">
      <LoginComponent>
        {login => <LoginUI error={error} onSubmit={onSubmit(login)} />}
      </LoginComponent>
    </Layout>
  );
};

export default LoginContainer;
