import { ADMIN_PATH } from '../../../../../constants'

export interface MenuItem {
  type?: string
  label?: string
  url?: string
  subMenus?: MenuItem[]
}

export const BIG_MENU_ITEMS = (isAuth: boolean): MenuItem[] =>
  [
    {
      label: 'Forum',
      url: '/'
    },
    {
      label: 'Yeniler',
      url: '/yeniler'
    },
    {
      label: 'Giriş',
      url: '/uyelik/giris'
    },
    {
      label: 'Kayıt Ol',
      url: '/uyelik/kayit-ol'
    }
  ].slice(0, isAuth ? 2 : 4)

export const BIG_ADMIN_MENU_ITEMS: MenuItem[] = [
  {
    label: 'Dashboard',
    url: `/${ADMIN_PATH}/dashboard`
  },
  {
    label: 'Categories',
    url: `/${ADMIN_PATH}/categories`
  },
  {
    label: 'Forums',
    url: `/${ADMIN_PATH}/forums`
  },
  {
    label: 'Users',
    url: `/${ADMIN_PATH}/users`
  },
  {
    label: 'Threads',
    url: `/${ADMIN_PATH}/threads`
  },
  {
    label: 'Posts',
    url: `/${ADMIN_PATH}/posts`
  }
]
