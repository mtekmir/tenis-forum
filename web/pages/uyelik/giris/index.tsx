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

interface Props {}
const LoginContainer: React.FunctionComponent<Props> = () => {
  const onSubmit = (login: MutationFn<LoginMutation, LoginVariables>) => async (
    variables: LoginVariables,
  ) => {
    try {
      const response = await login({
        variables,
        refetchQueries: [{ query: meQuery }],
      });
      if (response && response.data && response.data.login.error) {
        console.log(response.data.login.error);
      } else {
        Router.push('/');
      }
    } catch (err) {
      console.log(err.graphQLErrors);
    }
  };

  return (
    <Layout title="Üye Girişi | Tenis Forum">
      <LoginComponent>
        {login => <LoginUI onSubmit={onSubmit(login)} />}
      </LoginComponent>
    </Layout>
  );
};

export default LoginContainer;
