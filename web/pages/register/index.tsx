import * as React from 'react';
import { Formik, Form, Field } from 'formik';
import Layout from '../../components/Layout';
import { TextInput } from '../../components/forms/TextInput';

interface Props {}
const Register: React.FunctionComponent<Props> = () => {
  return (
    <Layout>
      <Formik
        onSubmit={() => {}}
        initialValues={{ email: '', username: '', password: '' }}
      >
        {() => (
          <Form>
            <Field name="email" component={TextInput} />
            <Field name="username" component={TextInput} />
            <Field name="password" component={TextInput} type="password" />
          </Form>
        )}
      </Formik>
    </Layout>
  );
};

export default Register;
