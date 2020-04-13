import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { withRouter, useRouter } from 'next/router'

interface Props {
  label?: string
  url?: string
}

const BigMenuItemC: React.FC<Props> = ({ label, url }) => {
  const { pathname } = useRouter()
  return (
    <Styles selected={pathname === url}>
      <Link href={url}>
        <a>{label}</a>
      </Link>
    </Styles>
  )
}

export const BigMenuItem = withRouter(BigMenuItemC)

const Styles = styled.div<{ selected: boolean }>`
  color: white;
  padding: 1em;
  background: ${({ theme, selected }) =>
    selected ? theme.palette.secondary : theme.palette.primary};

  :first-of-type {
    margin-left: 1.5em;
  }
`
