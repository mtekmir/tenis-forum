import * as React from 'react';
import Select from 'react-select';
import { FieldProps } from 'formik';

interface Props extends FieldProps {
  options: Array<{ label: string; value: string }>;
  isClearable?: boolean;
}
export const SelectInput: React.FunctionComponent<Props> = props => (
  <React.Fragment>
    <Select
      instanceId="1"
      styles={selectStyles}
      {...props}
      defaultValue={props.options[0]}
    />
  </React.Fragment>
);

const selectStyles = {
  control: (styles: any) => ({
    ...styles,
    backgroundColor: '#eef6ea',
    padding: '.65em',
    borderRadius: '10px',
    width: '90%',
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
