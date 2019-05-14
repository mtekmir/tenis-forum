import styled from 'styled-components';

const getWidth = (size: number) => {
  if (!size) {
    return null;
  }

  return `width: ${(size / 12) * 100}%`;
};

interface Props {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  alignItems?: string;
  justifyContent?: string;
}

export const Col = styled.div<Props>`
  box-sizing: border-box;
  flex: 1 0 auto;
  max-width: 100%;
  display: flex;
  ${({ alignItems }) => `align-items: ${alignItems}`};
  justify-content: ${({ justifyContent }) => justifyContent || 'flex-start'};
  @media (max-width: 599px) {
    ${({ xs }) => (xs ? getWidth(xs) : 'width: 100%')};
  }

  @media (min-width: 600px) {
    ${({ sm }) => sm && getWidth(sm)};
  }

  @media (min-width: 900px) {
    ${({ md }) => md && getWidth(md)};
  }

  @media (min-width: 1200px) {
    ${({ lg }) => lg && getWidth(lg)};
  }

  @media (min-width: 1800px) {
    ${({ xl }) => xl && getWidth(xl)};
  }
`;
