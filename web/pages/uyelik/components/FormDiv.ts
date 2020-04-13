import styled from 'styled-components'

export const FormDiv = styled.div<{ error?: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  transition: all 0.9s;
  box-shadow: 2px 3px 4px 0 rgba(0, 0, 0, 0.14);

  form {
    width: 20em;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media (${({ theme }) => theme.breakpoints.phone}) {
    width: 65%;
    height: 25em;

    ${({ error }) =>
      error &&
      `
      height: 35em;
    `}
  }

  @media (${({ theme }) => theme.breakpoints.tabletPortrait}) {
    height: 30em;
    width: 65%;

    ${({ error }) =>
      error &&
      `
      height: 35em;
    `}
  }

  @media (${({ theme }) => theme.breakpoints.tabletLandscape}) {
    height: 30em;
    width: 50%;
    ${({ error }) =>
      error &&
      `
      height: 35em;
    `}
  }

  @media (${({ theme }) => theme.breakpoints.laptop}) {
    width: 40%;
    height: 25em;
    ${({ error }) =>
      error &&
      `
      height: 35em;
    `}
  }

  @media (${({ theme }) => theme.breakpoints.desktop}) {
    width: 30%;
  }
`
