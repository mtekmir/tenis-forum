import styled from 'styled-components';
import Link from 'next/link';

interface Props {
  open: boolean;
}

export const Logo: React.FunctionComponent<Props> = ({ open }) => (
  <LogoStyles open={open}>
    <Link href="/">
      <a>Tenis Forum</a>
    </Link>
  </LogoStyles>
);

export const LogoStyles = styled.div<Props>`
  color: ${({ open }) => (open ? 'black' : 'white')};
  font-size: 1.5em;
  font-weight: 700;
  padding: 1em;
  z-index: 5;
`;
