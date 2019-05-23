import styled from 'styled-components';

export const Drawer = styled.div<{ open: boolean }>`
  padding: 6em 3em;
  background: white;
  position: relative;
  position: fixed;
  top: 3em;
  left: 0;
  min-height: 100vh;
  transform: translateX(130%);
  z-index: 3;
  transition: all 1s;
  ${props => props.open && 'transform: translateX(30%)'};

  thead > tr {
    background: red;
    color: white;
    font-size: 1.1em;
  }

  .close-div {
    svg {
      cursor: pointer;
      position: fixed;
      top: 1em;
      left: 1em;
      width: 2em;
      height: 2em;
      z-index: 9999;
    }
  }

  @media (${({ theme }) => theme.breakpoints.phone}) {
    width: 80%;
  }
`;
