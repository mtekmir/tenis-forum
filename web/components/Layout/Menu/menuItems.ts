import { ADMIN_PATH } from '../../../constants';

export interface MenuItem {
  type: string;
  label?: string;
  url?: string;
  subMenus?: SubMenuItem[];
}

export interface SubMenuItem {
  label: string;
  url: string;
}

export const MENU: MenuItem[] = [
  {
    type: 'menu_item',
    label: 'Forum',
    url: '/',
  },
  {
    type: 'divider',
  },
  {
    type: 'menu_item',
    label: 'Üyelik',
    subMenus: [
      {
        label: 'Giriş',
        url: '/uyelik/giris',
      },
      {
        label: 'Kayıt Ol',
        url: '/uyelik/kayit-ol',
      },
    ],
  },
];

export const ADMIN_MENU: MenuItem[] = [
  {
    type: 'menu_item',
    label: 'Dashboard',
    url: `/${ADMIN_PATH}/dashboard`,
  },
  {
    type: 'menu_item',
    label: 'Statistics',
    subMenus: [
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
    ],
  },
];
