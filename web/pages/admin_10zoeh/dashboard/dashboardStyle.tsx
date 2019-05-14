import styled from 'styled-components';

export const StatsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-wrap: wrap;
  margin: 8px auto;
`;

export const StatsDiv = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  flex-wrap: wrap;
  margin-bottom: 0;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);
  position: relative;
  padding: 0.7em;

  @media (${({ theme }) => theme.breakpoints.phone}) {
    width: 40%;
    margin: 1em;
  }

  @media (${({ theme }) => theme.breakpoints.tabletPortrait}) {
    width: 40%;
    margin: 1.6em;
  }

  @media (${({ theme }) => theme.breakpoints.tabletLandscape}) {
    width: 17%;
    margin: 1em;
  }
`;

export const Title = styled.div`
  color: #757575;
  font-size: 0.9em;
  margin-bottom: 0.2em;
`;

export const Stat = styled.div`
  font-size: 0.8em;
`;

export const IconDiv = styled.div`
  padding: 1em;
  margin-top: -1.5em;
  margin-bottom: 0.7em;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3em;
  height: 3em;
  border-radius: 3px;

  svg {
    color: #fff;
    width: 50px;
    height: 50px;
  }
`;
