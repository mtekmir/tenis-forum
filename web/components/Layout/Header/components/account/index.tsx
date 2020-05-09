import React, { useContext } from 'react'
import { Button } from './Button'
import { ButtonsDiv, AccountDiv } from './styles'
import { LoggedInView } from './loggedIn/LoggedInView'
import { BigMenuItem } from '../bigMenu/bigMenuItem'
import { Me_me } from '../../../../../graphql/generated/Me'
import { UserContext } from '../../../../../context/userContext'

interface Props {
  width: number
}

const ITEMS = [
  {
    label: 'Giriş',
    url: '/uyelik/giris'
  },
  {
    label: 'Kayıt Ol',
    url: '/uyelik/kayit-ol'
  }
]

export const Account: React.FunctionComponent<Props> = ({ width }) => {
  const { user } = useContext(UserContext)
  const renderContent = () => {
    if (user) {
      return <LoggedInView me={user} />
    } else if (width <= 599) {
      return (
        <ButtonsDiv>
          {ITEMS.map(({ label, url }) => (
            <Button key={label} url={url} text={label} />
          ))}
        </ButtonsDiv>
      )
    } else {
      return ITEMS.map(m => <BigMenuItem {...m} key={m.url} />)
    }
  }

  return <AccountDiv>{renderContent()}</AccountDiv>
}
