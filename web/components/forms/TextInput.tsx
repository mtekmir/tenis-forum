import * as React from 'react';
import { TextField } from '@material-ui/core';
import { FieldProps } from 'formik';

export const TextInput = ({ field, form, ...props }: FieldProps) => (
  <TextField {...field} {...props} variant="outlined" />
);
