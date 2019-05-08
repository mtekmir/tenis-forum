import * as React from 'react';
import styled from 'styled-components';
import Select from 'react-select';
import { FieldProps } from 'formik';

interface Props extends FieldProps {
  options: Array<{ label: string; value: string }>;
}
export const SelectInput: React.FunctionComponent<Props> = props => (
  <React.Fragment>
    <Select
      styles={selectStyles}
      isClearable
      {...props}
      defaultValue={props.options[0]}
    />
  </React.Fragment>
);

interface SelectProps extends React.DetailedHTMLProps<any, any> {
  error: boolean;
}

const selectStyles = {
  control: (styles: any) => ({
    ...styles,
    backgroundColor: '#eef6ea',
    padding: '.65em',
    borderRadius: '10px',
    border: 'none',
    'box-shadow': '3px 3px 6px 1px rgba(0, 0, 0, 0.14)',
  }),
  option: (styles: any, { isFocused, isSelected }: any) => ({
    ...styles,
    backgroundColor: isFocused || isSelected ? '#eef6ea' : 'white',
    color: 'black',
    ':active': {
      ...styles[':active'],
      backgroundColor: isFocused || isSelected ? '#eef6ea' : 'white',
    },
  }),
};

const SelectStyles = styled.select<SelectProps>`
  background: #eef6ea;
  padding: 2em;
  font-size: 0.7em;
  margin: 0.3em 0.3em 0.3em 0.2em;
  border-radius: 10px;
  width: 90%;
  cursor: auto;
  box-shadow: 3px 3px 6px 1px rgba(0, 0, 0, 0.14);
  :focus {
    border: 0 0 50px #fff;
  }
  ${({ error }) => error && `border: 1px solid red`};
`;
