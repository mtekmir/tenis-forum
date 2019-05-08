import styled from 'styled-components';

export const Logo = styled.div<{ open: boolean }>`
  color: ${({ open }) => (open ? 'black' : 'white')};
  font-size: 1.5em;
  font-weight: 700;
  padding: 1em;
  z-index: 5;
`;
