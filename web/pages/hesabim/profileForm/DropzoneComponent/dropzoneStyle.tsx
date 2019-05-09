import styled from 'styled-components';

export const DropzoneDiv = styled.div`
  :focus {
    outline: none;
  }
  @media (${({ theme }) => theme.breakpoints.phone}) {
    width: 7em;
    height: 7em;
  }
  @media (${({ theme }) => theme.breakpoints.tabletPortrait}) {
    width: 1.7em;
    height: 1.7em;
  }
`;

export const DropzoneHoverContentDiv = styled.div<{
  dropzoneHover: boolean;
  imageUrl: string;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-image: ${({ dropzoneHover }) =>
      dropzoneHover
        ? 'linear-gradient( rgba(0,0,0,0.5), rgba(0, 0, 0, 0.5) ),'
        : ''}
    url(${({ imageUrl }) => imageUrl});
  background-size: 7em 7em;

  @media (${({ theme }) => theme.breakpoints.phone}) {
    width: 7em;
    height: 7em;
  }
  @media (${({ theme }) => theme.breakpoints.tabletPortrait}) {
    width: 1.7em;
    height: 1.7em;
  }
  :hover {
    box-shadow: 0px 0px 0px 5px #1d9bd1 inset;
  }
`;

export const DropzoneHoverInnerDiv = styled.div<{ dropzoneHover: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  ${({ dropzoneHover }) => !dropzoneHover && 'display: none'};

  @media (${({ theme }) => theme.breakpoints.phone}) {
    width: 5em;
    height: 5em;
    svg {
      width: 3em;
      height: 3em;
    }
  }
  @media (${({ theme }) => theme.breakpoints.tabletPortrait}) {
    width: 1.7em;
    height: 1.7em;
  }

  svg {
    color: white;
    padding-top: 0.5em;
    ${({ dropzoneHover }) => !dropzoneHover && 'display: none'};
  }

  span {
    ${({ dropzoneHover }) => !dropzoneHover && 'display: none'};
    font-weight: 700;
    color: white;
    font-size: 0.8em;
  }
`;
