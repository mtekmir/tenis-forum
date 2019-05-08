import React from 'react';
import styled from 'styled-components';
import { TiDelete } from 'react-icons/ti';

export const ErrorMessage: React.FunctionComponent<{ error?: string }> = ({
  error,
}) => (
  <Styles error={error}>
    <TiDelete />
    {error}
  </Styles>
);

const Styles = styled.div<{ error?: string }>`
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 6em;
  min-width: 10em;
  margin: 2em auto 2em auto;
  padding: 1em;
  display: hidden;
  transform: translateY(-100%);
  font-size: 0.8em;
  color: white;
  border-radius: 10px;
  ${({ error }) =>
    error &&
    `
    transform: translateY(0);
    display: visible;
    background-image: linear-gradient(to right, #F8333C, #F9585F);
    box-shadow: 3px 3px 6px 1px rgba(0, 0, 0, 0.14);
  `};
  z-index: 1;
  transition: transform 0.9s, display 0.9s;
`;
