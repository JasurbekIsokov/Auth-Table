import React, { Suspense, useMemo } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import type { ThemeConfig } from 'antd';
import { ConfigProvider, theme } from 'antd';

import * as AuthModule from '@/modules/auth';

import 'antd/dist/reset.css';

import Splash from '@/components/Splash';

import getRoutesData from './router';

const { getDesignToken } = theme;

const globalToken = getDesignToken();

const config: ThemeConfig = {
  token: {
    fontFamily: `'Golos Text', ${globalToken.fontFamily}`,
    colorPrimary: '#1890ff'
  },
  components: {
    Layout: {
      lightSiderBg: '#126dda',
      siderBg: '#126dda'
    },
    Modal: {
      borderRadiusLG: 16,
      paddingLG: 32,
      paddingMD: 24,
      paddingSM: 16,
      paddingXS: 8,
      paddingContentHorizontalLG: 32,
      colorBgMask: 'rgba(3, 4, 94, 0.32)'
    }
  }
};

const App: React.FC = () => {
  return (
    <ConfigProvider theme={config}>
      <AuthModule.Context.Provider>
        <Suspense fallback={<Splash />}>
          <ApplicationRouter />
        </Suspense>
      </AuthModule.Context.Provider>
    </ConfigProvider>
  );
};

const ApplicationRouter = () => {
  const routes = getRoutesData();

  const router = useMemo(() => {
    return createBrowserRouter(routes);
  }, [routes]);

  return <RouterProvider router={router} />;
};

export default App;
