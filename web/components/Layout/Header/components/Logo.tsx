import styled from 'styled-components';
import Link from 'next/link';

export const Logo: React.FunctionComponent = () => (
  <LogoStyles>
    <Link href="/">
      <a>Tenis Forum</a>
    </Link>
  </LogoStyles>
);

export const LogoStyles = styled.div`
  color: white;
  font-size: 1.5em;
  font-weight: 700;
  padding: 1em;
  z-index: 5;
`;
