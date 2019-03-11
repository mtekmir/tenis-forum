import * as React from 'react';
import { Formik, Form, Field } from 'formik';
import Layout from '../../../components/Layout/index';
import { TextInput } from '../../../components/forms/TextInput';
import { LoginComponent } from '../../../generated/apolloComponents';
import { Button, withStyles, WithStyles, Paper } from '@material-ui/core';
import Router from 'next/router';
import girisStyle from './girisStyle';
import { meQuery } from '../../../graphql/query/meQuery';

interface Props extends WithStyles<typeof girisStyle> {}
const Login: React.FunctionComponent<Props> = ({ classes }) => {
  return (
    <Layout title="Üye Girişi | Tenis Forum">
      <LoginComponent>
        {login => (
          <Formik
            onSubmit={async variables => {
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
            }}
            initialValues={{ email: '', password: '' }}
          >
            {() => (
              <div className={classes.container}>
                <Paper className={classes.innerContainer}>
                  <Form>
                    <Field
                      name="email"
                      placeholder="E-Posta"
                      className={classes.input}
                      component={TextInput}
                    />
                    <Field
                      name="password"
                      placeholder="Şifre"
                      className={classes.input}
                      component={TextInput}
                      type="password"
                    />
                    <Button variant="contained" type="submit">
                      Submit
                    </Button>
                  </Form>
                </Paper>
              </div>
            )}
          </Formik>
        )}
      </LoginComponent>
    </Layout>
  );
};

export default withStyles(girisStyle)(Login);
