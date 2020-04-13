import * as React from 'react';
import { Formik, Form, Field } from 'formik';
import Layout from '../../../components/Layout/index';
import { TextInput } from '../../../components/forms/TextInput';
import Router from 'next/router';
import { Button } from '../../../components/Button';
import { useMutation } from 'react-apollo';
import { REQUEST_RESET_PASSWORD } from '../../../graphql/mutation/requestResetPassword';

const RequestResetPassword: React.FunctionComponent = () => {
  const [request] = useMutation(REQUEST_RESET_PASSWORD)
  return (
    <Layout title="Şifre Değiştir | Tenis Forum">
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
                <Button
                  type="submit"
                  text="E-Posta Gönder"
                  color="green-gradient"
                />
              </Form>
            )}
          </Formik>
    </Layout>
  );
};

export default RequestResetPassword;
