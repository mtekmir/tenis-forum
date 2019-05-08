import styled from 'styled-components';

export const Button = styled.button<{ error?: string }>`
  background-image: linear-gradient(to right, #44af69, #00e599);
  padding: 1em;
  border-radius: 100px;
  width: 10em;
  color: white;
  text-transform: uppercase;
  transform: translateY(-200%);
  box-shadow: 3px 3px 6px 1px rgba(0, 0, 0, 0.14);
  ${({ error }) => error && 'transform: translateY(0)'};
  transition: all 0.9s;
  cursor: pointer;
`;
