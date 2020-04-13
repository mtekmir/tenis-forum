import styled from 'styled-components'

export const Drawer = styled.div<{ open: boolean }>`
  padding: 6em 3em;
  background: white;
  position: relative;
  position: fixed;
  top: 0;
  left: 0;
  min-height: 100vh;
  border-left: 1px solid #efefef;
  transform: translateX(177%);
  z-index: 3222;
  transition: transform 1s;
  ${props =>
    props.open &&
    `
    transform: translateX(77%);
  `};
  ${({ theme }) => theme.boxShadow};
  width: 50%;

  table {
    margin-left: 0;
  }

  thead > tr {
    background: red;
    color: white;
    font-size: 1.1em;
  }

  @media (${({ theme }) => theme.breakpoints.phone}) {
    width: 80%;
  }
`

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 700;
  margin-bottom: 1em;
  span {
    font-size: 0.8em;
    font-weight: 400;
  }
`

export const Details = styled.div`
  font-size: 0.8em;
  margin-bottom: 0.4em;
  span {
    font-weight: 700;
  }

  :last-of-type {
    margin-bottom: 1em;
  }
`

export const EditDelete = styled.div`
  margin-top: -0.4em;
  margin-bottom: 1em;
`
