import * as React from 'react';
import { Formik, Form, Field } from 'formik';
import Layout from '../../../components/Layout/index';
import { TextInput } from '../../../components/forms/TextInput';
import { ResetPasswordComponent } from '../../../generated/apolloComponents';
import Router from 'next/router';
import { AppContext } from '../../../context/AppContext';
import { Button } from '../../../components/Button';

const PasswordReset = ({ token }: { token: string }) => {
  return (
    <Layout title="Şifre Değiştir | Tenis Forum">
      <ResetPasswordComponent>
        {request => (
          <Formik
            onSubmit={async ({ newPassword }) => {
              await request({
                variables: { newPassword, pwResetToken: token },
              });
              Router.push('/');
            }}
            initialValues={{ newPassword: '' }}
          >
            {() => (
              <Form>
                <Field
                  name="newPassword"
                  placeholder="Şifre"
                  component={TextInput}
                />
                <Button
                  text="Şifre Değiştir"
                  type="submit"
                  color="green-gradient"
                />
              </Form>
            )}
          </Formik>
        )}
      </ResetPasswordComponent>
    </Layout>
  );
};

PasswordReset.getInitialProps = ({ query: { token } }: AppContext) => ({
  token,
});

export default PasswordReset;
