import * as React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

interface Props {
  color: string;
  text: string;
  url?: string;
  marginRight?: boolean;
  type?: string;
  wide?: boolean;
  onClick?: () => void;
}

export const Button: React.FunctionComponent<Props> = ({
  url,
  text,
  // tslint:disable-next-line
  ...props
}) => {
  return (
    <React.Fragment>
      {url ? (
        <Styles {...props}>
          <Link href={url}>
            <a>{text}</a>
          </Link>
        </Styles>
      ) : (
        <Styles {...props} as="button">
          {text}
        </Styles>
      )}
    </React.Fragment>
  );
};

const Styles = styled.div<{
  color: string;
  marginRight?: boolean;
  wide?: boolean;
}>`
  background: ${({ theme: { palette }, color }) => palette[color]};
  color: white;
  padding: 0.5em;
  ${({ wide }) => wide && 'padding: 0.5em 1.5em'};
  border-radius: 5px;
  cursor: pointer;
  ${({ marginRight }) => marginRight && `margin-right: .5em`};
  :hover {
    transform: scale(1.02);
  }
  :active {
    transform: scale(0.95);
    box-shadow: 0px 0px 0px 1px #458a8c, 0 1px 1px #d5d5d5,
      inset 0 1px 0 rgba(255, 255, 255, 0.8), 0px 1px 1px 2px #fff;
  }
`;
