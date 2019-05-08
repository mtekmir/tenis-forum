import React from 'react';
import styled from 'styled-components';
import { TiTick, TiTimes } from 'react-icons/ti';

interface Props extends React.DetailedHTMLProps<any, any> {
  valid: boolean;
  validated: boolean;
}

export const Input: React.FunctionComponent<Props> = ({
  valid,
  validated,
  // tslint:disable-next-line
  ...props
}) => {
  return (
    <Styles>
      <input {...props} />
      {valid ? (
        <ValidationIcon valid={valid} validated={validated}>
          <TiTick className="icon" />
        </ValidationIcon>
      ) : (
        <ValidationIcon valid={valid} validated={validated}>
          <TiTimes className="icon" />
        </ValidationIcon>
      )}
    </Styles>
  );
};

export const Styles = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  input {
    background: #eef6ea;
    padding: 2em;
    font-size: 0.7em;
    padding-right: 5em;
    margin: 0.3em 0.3em 0.3em 0.2em;
    border-radius: 10px;
    width: 90%;
    z-index: 2;
    cursor: auto;
    transition: all 0.5s;
    box-shadow: 3px 3px 6px 1px rgba(0, 0, 0, 0.14);
    :focus {
      border: 0 0 50px #fff;
    }

    :first-of-type {
      margin-top: 2em;
      margin-bottom: -0.8em;
    }

    @media (${({ theme }) => theme.breakpoints.tabletPortrait}) {
      width: 14em;
    }

    @media (${({ theme }) => theme.breakpoints.tabletLandscape}) {
      width: 16em;
    }

    @media (${({ theme }) => theme.breakpoints.laptop}) {
      width: 20em;
    }

    @media (${({ theme }) => theme.breakpoints.laptopBig}) {
      width: 22em;
    }
  }
`;

const ValidationIcon = styled.div<Props>`
  position: absolute;
  right: 1.2em;
  bottom: 0.45em;
  visibility: ${({ validated }) => (validated ? 'visible' : 'hidden')};
  z-index: 2;
  svg {
    color: ${({ valid }) => (valid ? '#00E599' : '#F8333C')};
    margin: 0;
    padding: 0;
  }
`;
