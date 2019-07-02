import React, { useState } from 'react';
import styled from 'styled-components';
import { ButtonsDiv } from '../account/styles';
import { Button } from '../account/Button';
import { MenuIcon } from '../MenuIcon';
import { Drawer } from './components/Drawer';

interface Props {}
const ITEMS = [
  {
    label: 'Giriş',
    url: '/uyelik/giris',
  },
  {
    label: 'Kayıt Ol',
    url: '/uyelik/kayit-ol',
  },
];

export const MobileMenu: React.FC<Props> = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <Styles>
      <ButtonsDiv>
        {ITEMS.map(({ label, url }) => (
          <Button key={label} url={url} text={label} />
        ))}
      </ButtonsDiv>
      <MenuIcon
        openMenu={() => setMenuOpen(true)}
        open={menuOpen}
        closeMenu={() => setMenuOpen(false)}
      />
      <Drawer open={menuOpen} closeMenu={() => setMenuOpen(false)} />
    </Styles>
  );
};

const Styles = styled.div`
  display: flex;
`;
