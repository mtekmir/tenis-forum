import styled from 'styled-components';

export const MenuItemContainer = styled.div`
  width: 80%;
  padding: 0.7em;
  display: flex;
  justify-content: center;
  flex-direction: column;

  svg {
    margin-left: 0.4em;
  }

  a,
  .dropdown {
    text-decoration: none;
    color: black;
    cursor: pointer;
  }
`;

export const SubMenuDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledDropdown = styled.div`
  margin-left: 1em;
  padding: 1em;
  border-bottom: 1px solid #d1d3d5;

  a {
    text-decoration: none;
    color: black;
    cursor: pointer;
  }
`;
