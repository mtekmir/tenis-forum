import React, { useState, useContext, useEffect } from 'react'
import OutsideClickHandler from 'react-outside-click-handler'
import { AppBar } from './styles'
import { Logo } from './components/Logo'
import { UserContext } from '../../../context/userContext'
import { MobileMenu } from './components/mobileMenu/MobileMenu'
import { BigMenu } from './components/bigMenu/BigMenu'

interface Props {}

export const HeaderView: React.FC<Props> = ({}) => {
  const [width, setWidth] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)

  // const openMenu = () => {
  //   setMenuOpen(true);
  //   const documentWidth = document.documentElement.clientWidth;
  //   const windowWidth = window.innerWidth;
  //   const scrollBarWidth = windowWidth - documentWidth;
  //   document.body.style.marginRight = `${scrollBarWidth}px`;
  //   document.body.style.overflowY = 'hidden';
  // };

  const closeMenu = () => {
    setMenuOpen(false)
    document.body.style.marginRight = '0px'
    document.body.style.overflow = 'auto'
  }

  const renderMenu = () => {
    if (width > 599) {
      return <BigMenu width={width} />
    } else {
      return <MobileMenu />
    }
  }

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [])

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  })

  return (
    <OutsideClickHandler onOutsideClick={closeMenu}>
      <AppBar onClick={() => menuOpen && closeMenu()}>
        <Logo>Tenis Forum</Logo>
        {renderMenu()}
      </AppBar>
    </OutsideClickHandler>
  )
}
