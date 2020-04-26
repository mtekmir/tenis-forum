import React, { useState } from 'react'
import { Align } from '../../Align'
import { FooterStyles } from './style'
import { ContactUs } from './ContactUs'

interface Props {}

export const Footer = ({}) => {
  const [contactModalOpen, setContactModalOpen] = useState(false)
  return (
    <footer>
      <ContactUs open={contactModalOpen} onClose={() => setContactModalOpen(false)} />
      <FooterStyles>
        <ul className='footer-top'>
          <li onClick={() => setContactModalOpen(true)}>İletişim</li>
          <li>Anasayfa</li>
          <li>Yardim</li>
        </ul>
        <Align justify='center' width={100} padding={0.5}>
          Tenis Forum
        </Align>
      </FooterStyles>
    </footer>
  )
}
