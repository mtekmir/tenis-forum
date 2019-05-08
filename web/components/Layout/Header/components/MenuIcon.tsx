import * as React from 'react';
import styled from 'styled-components';
import { TiThMenu } from 'react-icons/ti';

interface Props {
  openMenu: () => void;
  closeMenu: () => void;
  open: boolean;
}

export const MenuIcon: React.FunctionComponent<Props> = ({
  openMenu,
  closeMenu,
  open,
}) => (
  <MenuStyles open={open}>
    <TiThMenu onClick={() => (open ? closeMenu() : openMenu())} />
  </MenuStyles>
);

const MenuStyles = styled.i<{ open: boolean }>`
  color: white;
  transition: all 0.8s;
  font-size: 3em;
  margin-left: 0.2em;
  z-index: 5;
  margin-top: 4%;
  cursor: pointer;

  @media (max-width: 599px) {
    font-size: 2em;
    color: ${props => (props.open ? 'black' : 'white')};
  }

  @media (${({ theme }) => theme.breakpoints.tabletLandscape}) {
    margin-top: 2.5%;
  }

  @media (${({ theme }) => theme.breakpoints.laptop}) {
    margin-top: 4.5%;
  }

  @media (${({ theme }) => theme.breakpoints.laptopBig}) {
    margin-top: 2%;
  }
`;
