import './styles.css';

import type { MenuProps as AntdMenuProps } from 'antd';
import { Menu as AntdMenu } from 'antd';
import type React from 'react';

export type MenuProps = AntdMenuProps;
type MenuComponent = React.FC<MenuProps> & {
  Item: typeof AntdMenu.Item;
  SubMenu: typeof AntdMenu.SubMenu;
  Divider: typeof AntdMenu.Divider;
  ItemGroup: typeof AntdMenu.ItemGroup;
};

export const Menu: MenuComponent = AntdMenu as MenuComponent;
