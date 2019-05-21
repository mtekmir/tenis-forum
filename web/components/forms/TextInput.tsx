import styled from 'styled-components';
import * as React from 'react';
import { FieldProps } from 'formik';

export const TextInput = ({
  field,
  form: { errors, touched },
  // tslint:disable-next-line
  ...props
}: FieldProps) => {
  const error = touched[field.name] && errors[field.name];

  return <StyledInput error={Boolean(error)} {...field} {...props} />;
};

interface InputProps extends React.DetailedHTMLProps<any, any> {
  error: boolean;
  width?: string;
}

export const StyledInput = styled.input<InputProps>`
  background: #eef6ea;
  padding: 2em;
  font-size: 0.7em;
  margin: 0.3em 0.3em 0.3em 0.2em;
  border-radius: 10px;
  width: ${({ width }) => width || '90%'};
  cursor: auto;
  box-shadow: 3px 3px 6px 1px rgba(0, 0, 0, 0.14);
  :focus {
    border: 0 0 50px #fff;
  }
  ${({ error }) => error && `border: 1px solid red`};
`;
