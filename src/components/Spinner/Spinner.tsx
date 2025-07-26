import React from 'react';

import classes from './Spinner.module.scss';

interface IProps {
  size?: number;
}

const Spinner: React.FC<IProps> = ({ size = 24 }) => {
  return (
    <div className={classes.wrapper} style={{ '--spinner-size': `${size}px` } as React.CSSProperties}>
      <div className={classes.spinner}>
        <svg fill="none" viewBox="0 0 24 24">
          <path
            d="M24 12a12 12 0 11-24 0 12 12 0 0124 0zM3.6 12a8.4 8.4 0 1016.8 0 8.4 8.4 0 00-16.8 0z"
            fill="#EAEBEC"
          />
          <path d="M24 12a12 12 0 01-8.3 11.41L14.6 20A8.4 8.4 0 0020.4 12H24z" fill="#243B55" />
        </svg>
      </div>
    </div>
  );
};

export default Spinner;
