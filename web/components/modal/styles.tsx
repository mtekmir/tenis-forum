import styled from 'styled-components'

export const ModalDimmer = styled.div`
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(115, 115, 115, 0.56);
`

export const ModalContent = styled.div`
  z-index: 10012;
  background: white;
  border-radius: 2px;
  min-width: 20em;
  min-height: 12em;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`

export const CloseDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0.5em;

  svg {
    width: 1.2em;
    height: 1.2em;
    cursor: pointer;
  }
`
