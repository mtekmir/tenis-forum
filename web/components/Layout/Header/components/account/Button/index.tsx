import styled from 'styled-components';
import Link from 'next/link';

interface Props {
  url: string;
  text: string;
}

export const Button: React.FunctionComponent<Props> = ({ url, text }) => (
  <Styles>
    <Link href={url}>
      <a>{text}</a>
    </Link>
  </Styles>
);

const Styles = styled.div`
  :first-of-type {
    margin-right: 0.6em;
  }

  a {
    color: white;
    text-decoration: none;
  }
`;
