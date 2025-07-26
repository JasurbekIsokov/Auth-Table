import { Link } from 'react-router-dom';
import { MenuProps } from 'antd';

export type MenuItem = Required<MenuProps>['items'][number];

export const menuItems: MenuItem[] = [
  {
    key: '/',
    label: <Link to="/">Dashboard</Link>
  }
];
