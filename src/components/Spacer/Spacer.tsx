import React from 'react';

import classes from './Spacer.module.scss';

interface IProps {
  size?: number;
  smSize?: number;
}

const Spacer: React.FC<IProps> = ({ size = 0, smSize }) => (
  <div
    style={
      {
        '--spacer-size': `${size}px`,
        '--spacer-sm-size': `${typeof smSize !== 'undefined' ? smSize : size}px`
      } as React.CSSProperties
    }
    className={classes.wrapper}
  />
);

export default Spacer;
