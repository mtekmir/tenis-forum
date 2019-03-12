export const MENU: MenuItem[] = [
  {
    text: 'Dashboard',
    url: '/',
  },
  {
    text: 'Uyelik',
    rootUrl: '/uyelik',
    subMenus: [
      {
        text: 'Giriş',
        url: '/uyelik/giris',
      },
      {
        text: 'Şifre Değiştir',
        url: '/uyelik/sifre-degistir',
      },
    ],
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
