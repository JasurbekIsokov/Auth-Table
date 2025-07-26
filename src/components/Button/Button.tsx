import React, { cloneElement, isValidElement } from 'react';
import cx from 'clsx';

import { IconHOC } from '@/components/Icon';

import classes from './Button.module.scss';

interface IProps {
  title?: string;
  size?: 'small' | 'medium' | 'large';
  iconVariant?: 'bulk' | 'outline' | 'solid' | 'custom';
  iconSuffix?: any;
  iconPrefix?: any;
  htmlType?: 'submit' | 'reset' | 'button';
  type?: 'primary' | 'secondary' | 'text' | 'neutral';
  variant?: 'blue' | 'darkBlue' | 'red' | 'green' | 'orange' | 'black';
  form?: string;
  className?: string;
  disabled?: boolean;
  block?: boolean;
  container?: React.ReactNode;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseDown?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<IProps> = ({
  title,
  size = 'small',
  variant = 'blue',
  iconSuffix,
  iconPrefix,
  iconVariant = 'outline',
  type,
  htmlType = 'button',
  form,
  className,
  disabled,
  block,
  container,
  onClick,
  onMouseDown
}) => {
  const resultProps = {
    className: cx(
      classes.wrapper,
      type && classes[`wrapper--type-${type}`],
      classes[`wrapper--variant-${variant}`],
      classes[`wrapper--size-${size}`],
      disabled && classes[`wrapper--disabled`],
      block && classes[`wrapper--block`],
      !title && classes[`wrapper--iconic`],
      className
    ),
    onClick,
    onMouseDown,
    form,
    disabled
  };

  const resultChildren = (
    <>
      {!!iconPrefix &&
        (isValidElement(iconPrefix) ? ( // if it is a jsx element, then render itself
          <div> {iconPrefix} </div>
        ) : (
          <div className={classes.icon}>
            <IconHOC variant={iconVariant} name={iconPrefix} />
          </div>
        ))}
      {!!title && <div className={classes.title}>{title}</div>}
      {!!iconSuffix && (
        <div className={classes.icon}>
          <IconHOC variant={iconVariant} name={iconSuffix} />
        </div>
      )}
    </>
  );
  const resultContainer = isValidElement(container) ? container : <button type={htmlType} />;

  return cloneElement(resultContainer, resultProps, resultChildren);
};

export default Button;
