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

export const MENU_ITEMS: MenuItem[] = [
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
    url: '/admin/dashboard',
  },
  {
    type: 'menu_item',
    label: 'Statistics',
    subMenus: [
      {
        label: 'Categories',
        url: '/admin/categories',
      },
      {
        label: 'Forums',
        url: '/admin/forums',
      },
      {
        label: 'Users',
        url: '/admin/users',
      },
      {
        label: 'Threads',
        url: '/admin/threads',
      },
    ],
  },
];
