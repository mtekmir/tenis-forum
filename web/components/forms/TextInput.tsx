import * as React from 'react';
import { TextField } from '@material-ui/core';
import { FieldProps } from 'formik';

export const TextInput = ({
  field,
  form: { errors, touched },
  // tslint:disable-next-line
  ...props
}: FieldProps) => {
  const error = touched[field.name] && errors[field.name];

  return (
    <TextField
      error={Boolean(error)}
      helperText={error}
      {...field}
      variant="outlined"
      {...props}
    />
  );
};
