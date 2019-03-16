import * as React from 'react';
import { Formik, Form, Field } from 'formik';
import { TextInput } from '../../../components/forms/TextInput';
import { Button, withStyles, WithStyles, Paper } from '@material-ui/core';
import girisStyle from './girisStyle';
import { LoginVariables } from '../../../generated/apolloComponents';

interface Props extends WithStyles<typeof girisStyle> {
  onSubmit: (input: LoginVariables) => void;
}

const LoginC: React.FunctionComponent<Props> = ({ classes, onSubmit }) => {
  return (
    <Formik
      onSubmit={variables => onSubmit(variables)}
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
  );
};

export const LoginUI = withStyles(girisStyle)(LoginC);
