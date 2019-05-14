import styled from 'styled-components';

export const PaginationDiv = styled.div`
  width: 100%;
  height: 3em;
  background-color: #efefef;
  display: flex;
  justify-content: flex-end;
  padding: 0.9em;
`;

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const PageButton = styled.div<{ selected: boolean }>`
  width: 2em;
  height: 2em;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ selected }) => (selected ? '#ffddc1' : '#e2e2e2')};
  cursor: pointer;
  border: 1px solid #e2e2e2;

  span {
    font-size: 0.8em;
  }
`;
