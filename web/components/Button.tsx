import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

interface Props {
  color: string
  text: string
  url?: string
  marginRight?: boolean
  marginLeft?: boolean
  type?: any
  wide?: boolean
  small?: boolean
  onClick?: () => void
}

export const Button: React.FunctionComponent<Props> = ({
  url,
  text,
  // tslint:disable-next-line
  ...props
}) => {
  return (
    <React.Fragment>
      {url ? (
        <Styles {...props}>
          <Link href={url}>
            <a>{text}</a>
          </Link>
        </Styles>
      ) : (
        <Styles {...props}>{text}</Styles>
      )}
    </React.Fragment>
  )
}

const Styles = styled.button<{
  color: string
  marginRight?: boolean
  marginLeft?: boolean
  wide?: boolean
  small?: boolean
}>`
  background: ${({ theme: { palette }, color }) => palette[color]};
  color: white;
  padding: 0.7em 1.5em;
  font-size: 0.9em;
  ${({ wide }) => wide && 'padding: 0.5em 1.5em'};
  ${({ small }) => small && 'height: 3em'};
  border-radius: 5px;
  cursor: pointer;
  ${({ marginRight }) => marginRight && `margin-right: .5em`};
  ${({ marginLeft }) => marginLeft && `margin-left: .5em`};
  :hover {
    transform: scale(1.02);
  }
  :active {
    transform: scale(0.95);
    box-shadow: 0px 0px 0px 1px #458a8c, 0 1px 1px #d5d5d5,
      inset 0 1px 0 rgba(255, 255, 255, 0.8), 0px 1px 1px 2px #fff;
  }
`

export const UnderlinedButton = styled.div`
  color: ${({ theme }) => theme.palette.primary};
  margin-right: 0.8em;
  cursor: pointer;
  font-size: 0.7em;

  &:hover {
    color: ${({ theme }) => theme.palette.secondary};
    border-bottom: 1px solid ${({ theme }) => theme.palette.secondary};
    margin-bottom: -1px;
  }
`
