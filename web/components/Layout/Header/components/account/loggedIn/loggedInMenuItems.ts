import { MenuItem } from '../../../../Menu/menuItems';
import { ADMIN_PATH } from '../../../../../../constants';

export const USER_MENU_ITEMS: MenuItem[] = [
  {
    type: 'menu_item',
    label: 'Hesabım',
    url: '/hesabim',
  },
  {
    type: 'menu_item',
    label: 'Çıkış',
    url: '/uyelik/cikis',
  },
];

export const ADMIN_MENU_ITEMS: MenuItem[] = [
  {
    type: 'menu_item',
    label: 'Dashboard',
    url: `/${ADMIN_PATH}/dashboard`,
  },
  {
    type: 'menu_item',
    label: 'Çıkış',
    url: '/uyelik/cikis',
  },
];
