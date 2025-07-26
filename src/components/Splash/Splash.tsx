import React, { useEffect } from 'react';

import Spinner from '@/components/Spinner';

import classes from './Splash.module.scss';

const Splash: React.FC = () => {
  useEffect(() => {
    if ('activeElement' in document) {
      (document.activeElement as HTMLElement).blur();
    }
  }, []);

  return (
    <div className={classes.wrapper}>
      <div className={classes.loading}>
        <div className={classes.loadingSpinner}>
          <Spinner size={32} />
        </div>
        <div className={classes.loadingText}>Загрузка</div>
      </div>
    </div>
  );
};

export default Splash;
