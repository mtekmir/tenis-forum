import styled from 'styled-components';

export const ProfileImage = styled.img`
  margin-right: 0.4em;
  @media (${({ theme }) => theme.breakpoints.phone}) {
    width: 3em;
    height: 3em;
  }

  @media (${({ theme }) => theme.breakpoints.tabletPortrait}) {
    width: 3em;
    height: 3em;
  }
`;
