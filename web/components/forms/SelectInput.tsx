import * as React from 'react'
import ReactSelect from 'react-select'
import { FieldProps } from 'formik'

interface Props {
  options: Array<{ label: string; value: string }>
  isClearable?: boolean
  width?: string
  onChange?: any
  value?: any
}
export const SelectInput: React.FunctionComponent<Props & FieldProps> = ({
  options,
  field,
  ...props
}) => (
  <ReactSelect
    instanceId='1'
    styles={selectStyles()}
    {...props}
    {...field}
    options={options}
    value={options ? options.find(option => option.value === field.value) : ''}
    defaultValue={options[0]}
    onChange={({ value }: any) => props.form.setFieldValue(field.name, value)}
  />
)

export const Select: React.FunctionComponent<Props> = props => (
  <ReactSelect
    instanceId='1'
    styles={selectStyles(props.width)}
    {...props}
    defaultValue={props.options[0]}
  />
)

const selectStyles = (width?: string) => ({
  control: (styles: any) => ({
    ...styles,
    backgroundColor: '#eef6ea',
    padding: '.65em',
    borderRadius: '10px',
    width: width || '90%',
    border: 'none',
    boxShadow: '3px 3px 6px 1px rgba(0, 0, 0, 0.14)',
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
})
