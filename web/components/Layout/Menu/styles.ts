import styled from 'styled-components';

export const MenuContainer = styled.div<{ open: boolean }>`
  @media (${({ theme }) => theme.breakpoints.phone}) {
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
    width: 100%;
  }

  @media (${({ theme }) => theme.breakpoints.tabletPortrait}) {
    background: ${({ theme }) => theme.palette.primary};
    display: flex;
    width: 100vw;
  }
`;
