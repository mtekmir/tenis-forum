import styled from 'styled-components';
import Link from 'next/link';

export const UserPopoverDiv = styled.div<{ open: boolean }>`
  visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
  opacity: ${({ open }) => (open ? 1 : 0)};
  position: absolute;
  top: 3em;
  left: 0.5em;
  transition: all 0.3s;
  background-color: white;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 0.7em 0;
  ${({ theme }) => theme.boxShadow};
`;

interface PopoverItemProps {
  url: string;
  text: string;
  onClose: () => void;
}

export const UserPopoverItem: React.FunctionComponent<PopoverItemProps> = ({
  url,
  text,
  onClose,
}) => (
  <UserPopoverItemDiv onClick={onClose}>
    <Link href={url}>
      <a>{text}</a>
    </Link>
  </UserPopoverItemDiv>
);

const UserPopoverItemDiv = styled.div`
  padding: 1em 1.5em;
  /* border-bottom: 0.5px solid #efefef; */
  cursor: pointer;
  text-align: center;

  :hover {
    background-color: #eeeeee;
  }
`;
