import styled from 'styled-components';

export const Popover = styled.div`
  position: relative;
`;

export const PageButton = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  cursor: pointer;
  border: 1px solid #e2e2e2;
`;

export const GoToPageInput = styled.input`
  width: 30%;
  border: 1px solid #e2e2e2;
  padding: 0.5em;
`;

export const GoToPageContainer = styled.div<{ open: boolean }>`
  visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
  opacity: ${({ open }) => (open ? 1 : 0)};
  padding: 0.7em;
  width: 300px;
  position: absolute;
  background: white;
  z-index: 3;
  top: 2em;
  right: -2em;
  transition: all 0.3s;
`;

export const GoToPageBottomDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 0.5em;

  svg {
    width: 8%;
    height: 8%;
    margin: 0.2em;
    cursor: pointer;
    :first-of-type {
      margin-left: 1em;
    }
    :last-of-type {
      margin-right: 1em;
    }
  }
`;
