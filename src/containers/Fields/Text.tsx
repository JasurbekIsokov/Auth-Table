import React from 'react';
import { get } from 'radash';
import { useController, UseControllerProps } from 'react-hook-form';

import Input, { type TextInputProps } from '@/components/Input/Input.tsx';

interface IProps extends TextInputProps, UseControllerProps {
  name: string;
}

const Text: React.FC<IProps> = ({ name, ...props }) => {
  const {
    field,
    fieldState: { invalid, error }
  } = useController({ name });

  return (
    <Input
      {...field}
      {...props}
      message={invalid ? get(error, 'message') : undefined}
      state={invalid ? 'error' : undefined}
    />
  );
};

export default Text;
