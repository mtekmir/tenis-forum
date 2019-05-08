import styled from 'styled-components';

interface Props {
  alignItems?: string;
}

export const Row = styled.div<Props>`
  box-sizing: border-box;
  display: flex;
  flex: 1 0 auto;
  flex-direction: row;
  flex-wrap: wrap;
  ${({ alignItems }) => alignItems && `align-items: ${alignItems}`}
`;
