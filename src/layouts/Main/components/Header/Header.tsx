import React from 'react';

import { Layout } from 'antd/lib';

import classes from './Header.module.scss';

const { Header: HeaderBase } = Layout;

interface IProps {}
const Header: React.FC<IProps> = () => {
  return (
    <>
      <HeaderBase className={classes.wrapper}></HeaderBase>
    </>
  );
};

export default Header;
