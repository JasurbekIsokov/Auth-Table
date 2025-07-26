import { type RouteObject } from 'react-router-dom';
import queryString from 'query-string';
import { QueryParamProvider } from 'use-query-params';
import { ReactRouter6Adapter } from 'use-query-params/adapters/react-router-6';

import * as AuthModule from '@/modules/auth';

import * as Layouts from '@/layouts';

import * as AuthPages from '@/pages/Auth';
import DashboardPage from '@/pages/Dashboard';

const getRoutesData = (): RouteObject[] => [
  {
    path: '/auth',
    element: (
      <QueryParamProvider
        adapter={ReactRouter6Adapter}
        options={{
          searchStringToObject: queryString.parse,
          objectToSearchString: queryString.stringify
        }}
      >
        <AuthModule.Containers.Auth>
          <Layouts.Auth />
        </AuthModule.Containers.Auth>
      </QueryParamProvider>
    ),
    children: [
      {
        index: true,
        element: <AuthPages.Auth />
      }
    ]
  },
  {
    element: (
      <QueryParamProvider
        adapter={ReactRouter6Adapter}
        options={{
          searchStringToObject: queryString.parse,
          objectToSearchString: queryString.stringify
        }}
      >
        <AuthModule.Containers.Auth>
          <Layouts.Main />
        </AuthModule.Containers.Auth>
      </QueryParamProvider>
    ),
    children: [
      {
        element: <DashboardPage />,
        index: true
      }
    ]
  }
];

export default getRoutesData;
