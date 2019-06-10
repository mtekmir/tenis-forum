import React, { useState } from 'react';
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
  const [error, setError] = useState('');

  const setErrorMsg = (msg: string) => {
    setError(msg);
    setTimeout(() => {
      setError('');
    }, 3000);
  };

  const onSubmit = (
    register: MutationFn<RegisterMutation, RegisterVariables>,
  ) => async (variables: FormValues) => {
    try {
      const res = await register({ variables });
      if (res && res.data && res.data.register.error) {
        setErrorMsg(res.data.register.error[0].message);
      } else {
        Router.push('/uyelik/eposta-dogrulama');
      }
    } catch (err) {
      setErrorMsg('Üzgünüz, bir hata oluştu.');
      console.log(err.graphQLErrors);
    }
  };

  return (
    <Layout title="Üye Ol | Tenis Forum">
      <RegisterComponent>
        {register => (
          <RegisterView onSubmit={onSubmit(register)} error={error} />
        )}
      </RegisterComponent>
    </Layout>
  );
};

export default Register;
