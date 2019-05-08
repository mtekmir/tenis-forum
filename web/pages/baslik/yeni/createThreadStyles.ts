import styled from 'styled-components';
import { Theme } from '@material-ui/core';

export default ({ spacing: { unit }, breakpoints }: Theme) => ({
  root: {
    padding: unit * 5,
    margin: unit,
    [breakpoints.up('md')]: {
      width: '60%',
    },
  },
  titleDiv: {
    marginBottom: unit * 2,
  },
  bottomDiv: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: unit * 2,
  },
  btn: {
    marginLeft: unit * 2,
  },
});

export const CreateThreadDiv = styled.div`
  padding: 2em;
  margin: 0.7em;
`;

export const TitleDiv = styled.div`
  margin-bottom: 1em;
`;

export const BottomDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1em;
`;
