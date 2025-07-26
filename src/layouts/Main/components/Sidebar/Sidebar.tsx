import React, { useState } from 'react';
import { Location, useLocation } from 'react-router-dom';
import { ConfigProvider, Layout, Menu, MenuProps, theme } from 'antd';
import { SelectInfo } from 'rc-menu/lib/interface';

import { menuItems } from './menu';

import classes from './Sidebar.module.scss';

function menuKeyFromLocation(location: Location): string {
  return location.pathname;
}

interface IProps {}

const rootSubmenuKeys = ['project'];

const Sidebar: React.FC<IProps> = ({}) => {
  const location = useLocation();
  const { Sider } = Layout;

  const [openKeys, setOpenKeys] = useState<string[]>([]);

  const onOpenChange: MenuProps['onOpenChange'] = keys => {
    const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);
    if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  const { token } = theme.useToken();
  const [selectedKeys, setSelectedKeys] = useState<string[]>([menuKeyFromLocation(location)]);

  return (
    <Sider className={classes.wrapper} theme="light" trigger={null} width={324} collapsedWidth={88}>
      <div className={classes.menu}>
        <ConfigProvider
          theme={{
            token,
            components: {
              Menu: {
                itemHeight: 53,
                fontSize: 14,
                iconSize: 20,
                itemColor: '#737687',
                itemBg: 'transparent',
                itemHoverColor: '#181818',
                itemSelectedColor: '#181818',
                itemHoverBg: '#EAECF9',
                itemSelectedBg: '#EAECF9',
                itemActiveBg: '#EAECF9',
                colorBgContainer: 'rgb(18, 109, 218)',
                activeBarBorderWidth: 0,
                activeBarHeight: 0,
                collapsedIconSize: 20,
                groupTitleFontSize: 14,
                iconMarginInlineEnd: 8,
                itemMarginBlock: 2,
                itemPaddingInline: 16,
                itemBorderRadius: 12,
                subMenuItemBg: '#181818',
                popupBg: '#181818'
              }
            }
          }}
        >
          <Menu
            openKeys={openKeys}
            onOpenChange={onOpenChange}
            defaultSelectedKeys={['settings']}
            items={menuItems}
            mode="inline"
            onSelect={(opts: SelectInfo) => setSelectedKeys([opts.key])}
            selectedKeys={selectedKeys}
          />
        </ConfigProvider>
      </div>
    </Sider>
  );
};

export default Sidebar;
