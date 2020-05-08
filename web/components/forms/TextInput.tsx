import React, { Fragment } from 'react'
import styled from 'styled-components'
import { FieldProps } from 'formik'

interface Props {
  label?: string
  type?: string
}

export const TextInput = ({
  field,
  form: { errors, touched },
  label,
  type,
  ...props
}: FieldProps & Props) => {
  const error = touched[field.name] && errors[field.name]

  return (
    <Styles>
      {label && <div className='input-label'>{label}</div>}
      {type === 'text' ? (
        <StyledInput className='input' error={Boolean(error)} {...field} {...props} />
      ) : (
        <StyledTextArea className='textarea' error={Boolean(error)} {...field} {...props} />
      )}
      {error && <div className='input-error'>{error}</div>}
    </Styles>
  )
}

interface InputProps extends React.DetailedHTMLProps<any, any> {
  error: boolean
  width?: string
}

export const Styles = styled.div`
  display: flex;
  flex-direction: column;

  .input-label {
    font-size: 0.8em;
    margin: 0.3em 0;
    color: ${({ theme }) => theme.palette.primary};
  }
  .input-error {
    font-size: 0.8em;
    margin-bottom: 0.3em;
    color: ${({ theme }) => theme.palette.red};
  }
`

const commonStyles = `
  background: #eee;
  padding: 1.5em;
  font-size: 0.7em;
  margin: 0.3em 0.3em 0.3em 0.2em;
  box-shadow: 3px 3px 6px 1px rgba(0, 0, 0, 0.14);
  :focus {
    border: 0 0 50px #fff;
  }
`

export const StyledInput = styled.input<InputProps>`
  ${commonStyles}
  width: ${({ width }) => width || '25em'};
  ${({ error }) =>
    error &&
    `
    border: 1px solid red
    border-radius: 2px;
  `};
`

export const StyledTextArea = styled.textarea<InputProps>`
  ${commonStyles}
  border: none;
  outline: none;
  width: ${({ width }) => width || '25em'};
  height: ${({ height }) => height || '5em'};
  ${({ error }) =>
    error &&
    `
    border: 1px solid red
    border-radius: 2px;
  `};
`
