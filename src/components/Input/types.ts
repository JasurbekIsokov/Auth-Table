import React, { CSSProperties } from 'react';

export interface LabelProps {
  state?: 'default' | 'success' | 'warning' | 'error';
  size?: 'sm' | 'md' | 'lg';
  title?: React.ReactNode;
  information?: React.ReactNode;
  isFocused?: boolean;
  disabled?: boolean;
  className?: string;
  classNameContent?: string;
  children: React.ReactNode;
  required?: boolean;
  message?: string;
  iconPrefix?: React.ReactNode;
  iconPrefixStyle?: CSSProperties;
  onIconPrefix?: () => void;
  iconSuffix?: React.ReactNode;
  iconSuffixStyle?: CSSProperties;
  onIconSuffix?: () => void;
}

export interface TextInputProps extends Omit<LabelProps, 'children'> {
  name?: string;
  value?: string;
  type?: 'text' | 'password';
  placeholder?: string;
  disabled?: boolean;
  autoFocus?: boolean;
  onChange?: (e: any) => void;
  onBlur?: (e: any) => void;
}

export enum MASK_TYPE {
  TEXT = 'TEXT',
  ONLY_TEXT = 'ONLY_TEXT',
  NUMBER = 'NUMBER',
  EMAIL = 'EMAIL'
}

export interface MaskInputProp extends Omit<TextInputProps, 'type'> {
  mask: string;
  maskType?: MASK_TYPE;
  unmask?: boolean;
  lazy?: boolean;
  placeholderChar?: string;
  [key: string]: any;
}

export interface AmountInputProps extends Omit<TextInputProps, 'type'> {
  valuePrefix?: string;
  valueSuffix?: string;
  min?: number;
  max?: number;
}
