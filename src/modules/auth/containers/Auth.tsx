import React, { ReactNode } from 'react';

import Splash from '@/components/Splash';

import { useContext } from '../context';
// import { useProfile } from '../hooks';

interface IProps {
  children: ReactNode;
}

const Auth: React.FC<IProps> = ({ children }) => {
  // useProfile();

  const { state } = useContext();

  if (!state.isFetched) {
    //   return <Splash />;
  }

  return children;
};

export default Auth;
