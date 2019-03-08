import * as React from 'react';
import { Formik, Form, Field } from 'formik';
import Layout from '../../../components/Layout';
import { TextInput } from '../../../components/forms/TextInput';
import { LoginComponent } from '../../../generated/apolloComponents';
import { Button } from '@material-ui/core';
import Router from 'next/router';

interface Props {}
const Login: React.FunctionComponent<Props> = () => {
  return (
    <Layout title="Üye Girişi | Tenis Forum">
      <LoginComponent>
        {login => (
          <Formik
            onSubmit={async variables => {
              try {
                const response = await login({ variables });
                if (response && response.data && response.data.login.error) {
                  console.log(response.data.login.error);
                } else {
                  Router.push('/');
                }
              } catch (err) {
                console.log(err.graphQLErrors);
              }
            }}
            initialValues={{ email: '', password: '' }}
          >
            {() => (
              <Form>
                <Field
                  name="email"
                  placeholder="E-Posta"
                  component={TextInput}
                />
                <Field
                  name="password"
                  placeholder="Şifre"
                  component={TextInput}
                  type="password"
                />
                <Button variant="contained" type="submit">
                  Submit
                </Button>
              </Form>
            )}
          </Formik>
        )}
      </LoginComponent>
    </Layout>
  );
};

export default Login;
