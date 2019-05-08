import styled from 'styled-components';

export const MenuContainer = styled.div<{ open: boolean }>`
  padding: 6em 2em;
  background: white;
  position: fixed;
  top: 0;
  left: 0;
  min-height: 90vh;
  transform: translateX(-100%);
  z-index: 3;
  transition: all 0.5s;
  ${props => props.open && 'transform: translateX(0)'};

  @media (${({ theme }) => theme.breakpoints.phone}) {
    width: 100%;
  }

  @media (${({ theme }) => theme.breakpoints.tabletPortrait}) {
    width: 60%;
  }

  @media (${({ theme }) => theme.breakpoints.tabletLandscape}) {
    width: 40%;
  }

  @media (${({ theme }) => theme.breakpoints.laptop}) {
    width: 30%;
  }

  @media (${({ theme }) => theme.breakpoints.laptopBig}) {
    width: 18%;
  }

  @media (${({ theme }) => theme.breakpoints.desktop}) {
    width: 18%;
  }
`;
