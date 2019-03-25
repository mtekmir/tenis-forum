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
