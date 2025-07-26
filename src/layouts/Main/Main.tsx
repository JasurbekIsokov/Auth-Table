import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Layout } from 'antd';
import cx from 'clsx';

import * as AuthModule from '@/modules/auth';

import Splash from '@/components/Splash';

import Header from './components/Header';
import Sidebar from './components/Sidebar';

import classes from './MainLayout.module.scss';

const { Content } = Layout;

const Main: React.FC = () => {
  const { state } = AuthModule.Context.useContext();

  const navigate = useNavigate();

  useEffect(() => {
    if (!state.isAuthenticated) {
      navigate('/auth');
    }
  }, [state.isAuthenticated]);

  if (!state.isAuthenticated) {
    return <Splash />;
  }

  return (
    <>
      <Layout className={classes.wrapper}>
        <Sidebar />

        <Content className={classes.content}>
          <Header />

          <div className={cx(classes.contentInner, 'layout-content-inner')}>
            <Outlet />
          </div>
        </Content>
      </Layout>
    </>
  );
};

export default Main;
