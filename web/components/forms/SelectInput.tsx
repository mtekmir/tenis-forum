import * as React from 'react';
import { Select, OutlinedInput, MenuItem } from '@material-ui/core';
import { FieldProps } from 'formik';

interface Props extends FieldProps {
  options: Array<{ label: string; value: string }>;
}
export const SelectInput = ({
  field,
  form: { errors, touched },
  // tslint:disable-next-line
  ...props
}: Props) => {
  const error = touched[field.name] && errors[field.name];

  return (
    <Select
      {...field}
      {...props}
      error={Boolean(error)}
      input={<OutlinedInput labelWidth={0} name="age" />}
    >
      {props.options.map(({ value, label }) => (
        <MenuItem key={label} value={value}>
          {label}
        </MenuItem>
      ))}
    </Select>
  );
};
