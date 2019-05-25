import styled from 'styled-components';

export const Drawer = styled.div<{ open: boolean }>`
  padding: 6em 3em;
  background: white;
  position: relative;
  position: fixed;
  top: 3em;
  left: 0;
  min-height: 100vh;
  border-left: 1px solid #efefef;
  transform: translateX(130%);
  z-index: 3;
  transition: all 1s;
  ${props => props.open && 'transform: translateX(30%)'};

  table {
    margin-left: 0;
  }

  thead > tr {
    background: red;
    color: white;
    font-size: 1.1em;
  }

  @media (${({ theme }) => theme.breakpoints.phone}) {
    width: 80%;
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 700;
  margin-bottom: 1em;
  span {
    font-size: 0.8em;
    font-weight: 400;
  }
`;

export const Details = styled.div`
  font-size: 0.8em;
  margin-bottom: 0.4em;
  span {
    font-weight: 700;
  }

  :last-of-type {
    margin-bottom: 1em;
  }
`;
