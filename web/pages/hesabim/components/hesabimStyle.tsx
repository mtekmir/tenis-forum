import styled from 'styled-components';

export const Styles = styled.div`
  min-height: 90vh;
  @media (${({ theme }) => theme.breakpoints.phone}) {
    width: 100%;
  }

  @media (${({ theme }) => theme.breakpoints.tabletPortrait}) {
    display: flex;

    .content {
      width: 75%;
    }
  }
`;
