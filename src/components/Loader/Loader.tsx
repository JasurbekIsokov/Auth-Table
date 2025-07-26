import React from 'react';
import cx from 'clsx';

import Spinner from '@/components/Spinner';

import classes from './Loader.module.scss';

export interface IProps {
  className?: string;
  minHeight?: number | string;
  spinnerSize?: number;
}

const Loader: React.FC<IProps> = ({ className, minHeight = 200, spinnerSize = 24 }) => {
  return (
    <div
      className={cx(classes.wrapper, className)}
      style={{ '--min-height': typeof minHeight === 'string' ? minHeight : `${minHeight}px` } as React.CSSProperties}
    >
      <Spinner size={spinnerSize} />
    </div>
  );
};

export default Loader;
