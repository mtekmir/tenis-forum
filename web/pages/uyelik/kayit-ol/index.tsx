import * as React from 'react';
import { Formik, Form, Field } from 'formik';
import Layout from '../../../components/Layout';
import { TextInput } from '../../../components/forms/TextInput';
import { RegisterComponent } from '../../../generated/apolloComponents';
import { Button } from '@material-ui/core';
import Router from 'next/router';

interface Props {}
const Register: React.FunctionComponent<Props> = () => {
  return (
    <Layout title="Üye Ol | Tenis Forum">
      <RegisterComponent>
        {register => (
          <Formik
            onSubmit={async vals => {
              try {
                await register({ variables: vals });
                Router.push('/uyelik/eposta-dogrulama');
              } catch (err) {
                console.log(err.graphQLErrors);
              }
            }}
            initialValues={{ email: '', username: '', password: '' }}
          >
            {() => (
              <Form>
                <Field
                  name="email"
                  placeholder="E-Posta"
                  component={TextInput}
                />
                <Field
                  name="username"
                  placeholder="Kullanıcı Adı"
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
      </RegisterComponent>
    </Layout>
  );
};

export default Register;
