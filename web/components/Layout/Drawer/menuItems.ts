export const MENU: MenuItem[] = [
  {
    text: 'Giris',
    url: '/uyelik/giris',
  },
  {
    text: 'Kayıt Ol',
    url: '/uyelik/kayit-ol',
  },
  {
    text: 'Forum',
    url: '/',
  },
];

export const ADMIN_MENU: MenuItem[] = [
  {
    text: 'Dashboard',
    url: '/admin/dashboard',
  },
  {
    text: 'Categories',
    url: '/admin/categories',
  },
  {
    text: 'Forums',
    url: '/admin/forums',
  },
  {
    text: 'Users',
    url: '/admin/users',
  },
  {
    text: 'Threads',
    url: '/admin/threads',
  },
];

interface MenuItem {
  text: string;
  url?: string;
  rootUrl?: string;
  subMenus?: SubMenuItem[];
}

interface SubMenuItem {
  text: string;
  url: string;
}
