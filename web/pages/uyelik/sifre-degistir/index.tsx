import * as React from 'react';
import { Formik, Form, Field } from 'formik';
import Layout from '../../../components/Layout/index';
import { TextInput } from '../../../components/forms/TextInput';
import { RequestResetPasswordComponent } from '../../../generated/apolloComponents';
import { Button } from '@material-ui/core';
import Router from 'next/router';

const RequestResetPassword: React.FunctionComponent = () => {
  return (
    <Layout title="Şifre Değiştir | Tenis Forum">
      <RequestResetPasswordComponent>
        {request => (
          <Formik
            onSubmit={async vals => {
              await request({ variables: vals });
              Router.push('/uyelik/eposta-dogrulama');
            }}
            initialValues={{ email: '' }}
          >
            {() => (
              <Form>
                <Field
                  name="email"
                  placeholder="E-Posta"
                  component={TextInput}
                />
                <Button variant="contained" type="submit">
                  E-Posta Gönder
                </Button>
              </Form>
            )}
          </Formik>
        )}
      </RequestResetPasswordComponent>
    </Layout>
  );
};

export default RequestResetPassword;
