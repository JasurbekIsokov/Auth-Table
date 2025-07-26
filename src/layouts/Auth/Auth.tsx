import React from 'react';
import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';

import styles from './Auth.module.scss';

const { Content } = Layout;
const Auth: React.FC = () => {
  return (
    <Layout>
      <Content className={styles.content}>
        <Outlet />
      </Content>
    </Layout>
  );
};

export default Auth;
