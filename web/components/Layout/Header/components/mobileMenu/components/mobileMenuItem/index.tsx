import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

import * as React from 'react';
import Link from 'next/link';
import { MenuItemContainer, StyledDropdown, SubMenuDiv } from './styles';
import { MenuItem } from '../../../../menuItems';

interface Props {
  label?: string;
  url?: string;
  dropdownOpen: boolean;
  openDropdown?: (idx: number) => void;
  closeMenu: () => void;
  subMenus?: MenuItem[];
  idx?: number;
}

export const MobileMenuItem: React.FunctionComponent<Props> = ({
  label,
  url,
  subMenus,
  dropdownOpen,
  openDropdown,
  closeMenu,
  idx,
}) => {
  const renderDropdownIcon = () => {
    if (subMenus) {
      return dropdownOpen ? <FaAngleUp /> : <FaAngleDown />;
    }
  };

  return (
    <MenuItemContainer>
      <div onClick={() => (subMenus ? openDropdown(idx) : closeMenu())}>
        {url ? (
          <Link href={url}>
            <a>{label}</a>
          </Link>
        ) : (
          <div className="dropdown">
            {label}
            {renderDropdownIcon()}
          </div>
        )}
      </div>
      <div>
        {subMenus && dropdownOpen && (
          <SubMenuDiv>
            {subMenus.map((subMenu: MenuItem) => (
              <StyledDropdown key={subMenu.label}>
                <Link href={subMenu.url}>
                  <a>{subMenu.label}</a>
                </Link>
              </StyledDropdown>
            ))}
          </SubMenuDiv>
        )}
      </div>
    </MenuItemContainer>
  );
};
