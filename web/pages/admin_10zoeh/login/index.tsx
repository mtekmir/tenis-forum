import * as React from 'react';
import {
  AdminLoginComponent,
  AdminLoginMutation,
} from '../../../generated/apolloComponents';
import { AdminLoginView } from './LoginView';
import Router from 'next/router';
import { ADMIN_PATH } from '../../../constants';

const AdminLoginContainer: React.FunctionComponent = () => {
  const [error, setError] = React.useState('');

  const onCompleted = ({ adminLogin }: AdminLoginMutation) => {
    if (adminLogin.error) {
      setError(adminLogin.error[0].message);
      setTimeout(() => {
        setError('');
      }, 3000);
    } else {
      Router.push(`/${ADMIN_PATH}/dashboard`);
    }
  };

  return (
    <AdminLoginComponent onCompleted={onCompleted}>
      {mutate => (
        <AdminLoginView
          login={variables => mutate({ variables })}
          error={error}
        />
      )}
    </AdminLoginComponent>
  );
};

export default AdminLoginContainer;
