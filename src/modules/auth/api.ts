import { AxiosPromise } from 'axios';

import { http } from '@/common/services';

import * as Types from './types';

export const Login = ({ values }: { values: Types.IForm.Login }): AxiosPromise<Types.IApi.Single.Response> =>
  http.pureRequest.post(
    `/hr/user/sign-in`,
    {
      username: values.userName,
      password: values.password
    },
    {
      params: {
        include: 'token'
      }
    }
  );
