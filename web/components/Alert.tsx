import React, { FC, Fragment } from 'react'
import Styled from 'styled-components'
import { FiAlertCircle, FiAlertTriangle, FiCheck } from 'react-icons/fi'

interface Props {
  type: 'success' | 'warning' | 'danger'
  width?: string
  children: any
}

const icons = {
  danger: <FiAlertCircle />,
  warning: <FiAlertTriangle />,
  success: <FiCheck />,
}

export const Alert: FC<Props> = ({ children, type, width }) => {
  return (
    <AlertStyles type={type} width={width}>
      {icons[type]}
      <span>{children}</span>
    </AlertStyles>
  )
}

export const AlertStyles = Styled.div<{ type: string; width?: string }>`
  display: flex;
  align-items: center;
  color: white;
  padding: 1em;
  border-radius: 2px;
  background: ${({ theme, type }) => theme.palette.alertColors[type]};
  ${({ width }) => width && `width: ${width}`};

  span {
    margin-left: .5em;
    font-size: .7em;
  }
`
