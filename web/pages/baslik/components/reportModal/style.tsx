import styled from 'styled-components'

export const ReportPostStyles = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em 1em 0em 1em;
  width: 30em;

  font-size: 0.8em;

  .title {
    margin-bottom: 2em;
    color: ${({ theme }) => theme.palette.primary};
  }

  .label {
    margin-bottom: 0.4em;
    margin-left: 0.1em;
  }
`
