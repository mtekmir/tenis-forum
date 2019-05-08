import * as React from 'react';
import Layout from '../../../components/Layout/index';
import {
  RegisterComponent,
  RegisterMutation,
  RegisterVariables,
} from '../../../generated/apolloComponents';
import Router from 'next/router';
import { MutationFn } from 'react-apollo';
import { FormValues, RegisterView } from './RegisterView';

const Register: React.FunctionComponent = () => {
  const onSubmit = (
    register: MutationFn<RegisterMutation, RegisterVariables>,
  ) => async (variables: FormValues) => {
    try {
      await register({ variables });
      Router.push('/uyelik/eposta-dogrulama');
    } catch (err) {
      console.log(err.graphQLErrors);
    }
  };

  return (
    <Layout title="Üye Ol | Tenis Forum">
      <RegisterComponent>
        {register => <RegisterView onSubmit={onSubmit(register)} />}
      </RegisterComponent>
    </Layout>
  );
};

export default Register;
