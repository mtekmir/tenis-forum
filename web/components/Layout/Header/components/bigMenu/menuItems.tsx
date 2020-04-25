import { ADMIN_PATH } from '../../../../../constants'

export interface MenuItem {
  type?: string
  label?: string
  url?: string
  subMenus?: MenuItem[]
}

export const BIG_MENU_ITEMS: MenuItem[] = [
  {
    label: 'Forum',
    url: '/',
  },
  {
    label: 'Yeniler',
    url: '/yeniler',
  },
]

export const BIG_ADMIN_MENU_ITEMS: MenuItem[] = [
  {
    label: 'Dashboard',
    url: `/${ADMIN_PATH}/dashboard`,
  },
  {
    label: 'Categories',
    url: `/${ADMIN_PATH}/categories`,
  },
  {
    label: 'Forums',
    url: `/${ADMIN_PATH}/forums`,
  },
  {
    label: 'Users',
    url: `/${ADMIN_PATH}/users`,
  },
  {
    label: 'Threads',
    url: `/${ADMIN_PATH}/threads`,
  },
  {
    label: 'Posts',
    url: `/${ADMIN_PATH}/posts`,
  },
]
