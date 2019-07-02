import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { withRouter, WithRouterProps } from 'next/router';

interface Props extends WithRouterProps {
  label?: string;
  url?: string;
}

const BigMenuItemC: React.FC<Props> = ({ label, url, router }) => {
  return (
    <Styles selected={router.pathname === url}>
      <Link href={url}>
        <a>{label}</a>
      </Link>
    </Styles>
  );
};

export const BigMenuItem = withRouter(BigMenuItemC);

const Styles = styled.div<{ selected: boolean }>`
  color: white;
  padding: 1em;
  background: ${({ theme, selected }) =>
    selected ? theme.palette.secondary : theme.palette.primary};

  :first-of-type {
    margin-left: 1.5em;
  }
`;
