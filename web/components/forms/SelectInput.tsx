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
    backgroundColor: '#eee',
    padding: '.3em',
    borderRadius: 0,
    width: width || '19.8em',
    border: 'none',
    boxShadow: '3px 3px 6px 1px rgba(0, 0, 0, 0.14)',
  }),
  option: (styles: any, { isFocused, isSelected }: any) => ({
    ...styles,
    backgroundColor: isFocused || isSelected ? '#eee' : 'white',
    color: 'black',
    width: '19.9em',
    ':active': {
      ...styles[':active'],
      backgroundColor: isFocused || isSelected ? '#eee' : 'white',
    },
  }),
  container: (styles: any) => ({
    ...styles,
    width: '19.9em',
  }),
})
