import React from 'react';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from '@tanstack/react-query';
import { message } from 'antd';
import type { UseFormReturn } from 'react-hook-form';
import { FormProvider, useForm } from 'react-hook-form';
import * as yup from 'yup';

import config from '@/config';

import { storage } from '@/common/services';

import * as Api from '../api';
import * as Context from '../context';
import * as Mappers from '../mappers';
import * as Types from '../types';

import { keepOptions } from '@/helpers';

interface FormValues extends Types.IForm.Login {}

interface IChildren extends UseFormReturn<FormValues> {
  isLoading?: boolean;
}

interface IProps {
  children: (props: IChildren) => React.ReactNode;
  className?: string;
  onError?: (error: string) => void;
  onSettled?: () => void;
  onSuccess?: (value: Types.IEntity.Account) => void;
}

const CreateForm: React.FC<IProps> = ({ children, onError, onSettled, onSuccess, className }) => {
  const { methods } = Context.useContext();
  const navigate = useNavigate();

  const mutation = useMutation<Types.IEntity.Account, string, FormValues, any>(
    async values => {
      const { data } = await Api.Login({ values });

      return Mappers.Account(data);
    },
    {
      onSuccess: data => {
        storage.local.set(config.api.accessTokenKey, data.token.token);

        methods.setIsAuthenticated(true);
        methods.setAccessToken(data.token.token);

        navigate('/');

        message.success('Tizimga muvafaqqiyatli kirdingiz.');
      },
      onError: error => {
        console.log('Incorrect username or password.');
        message.error('Incorrect username or password.');
      },
      onSettled
    }
  );

  const validationSchema = yup
    .object({
      userName: yup.string().trim().required('User name kiritish shart'),
      password: yup.string().required('Parol kiritish shart')
    })
    .required();

  const form = useForm<FormValues>({
    defaultValues: {
      userName: '',
      password: ''
    },
    mode: 'onChange',
    resolver: yupResolver<any>(validationSchema)
  });

  const onSubmit = form.handleSubmit(values => {
    mutation.mutate(values, {
      onSettled: () => form.reset({ ...form.getValues() }, { ...keepOptions })
    });
  });

  return (
    <FormProvider {...form}>
      <form className={className} onSubmit={onSubmit} id="save">
        {children({ ...form, isLoading: mutation.isLoading })}
      </form>
    </FormProvider>
  );
};

export default CreateForm;
