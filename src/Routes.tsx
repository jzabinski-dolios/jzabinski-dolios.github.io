import { ReactElement } from 'react';
import { RouteObject, createBrowserRouter, RouterProvider, redirect } from 'react-router-dom';
import { Devices } from './pages/devices/Devices';
import { DeviceInfo } from './pages/Device';
import App from './App';
import loader from './dataLoader';

export enum DevicesRouteParams {
  method = 'method'
}

export enum DevicesSearchParams {
  total = 'total'
}

export enum DeviceRouteParams {
  id = 'id'
}

export interface DevicesRouteDefs {
  [key: string]: string;
  [DevicesRouteParams.method]: 'list' | 'grid';
}

export interface DeviceRouteDefs {
  [key: string]: string;
  [DeviceRouteParams.id]: string;
}

const rts: Array<RouteObject> = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: `devices/:${DevicesRouteParams.method}`,
        /* eslint-disable @typescript-eslint/naming-convention */
        loader: () => loader,
        /* eslint-enable @typescript-eslint/naming-convention */
        element: <Devices />
      },
      {
        path: `device/:${DeviceRouteParams.id}`,
        /* eslint-disable @typescript-eslint/naming-convention */
        loader: () => loader,
        /* eslint-enable @typescript-eslint/naming-convention */
        element: <DeviceInfo />
      },
      {
        path: '/',
        /* eslint-disable @typescript-eslint/naming-convention */
        loader: () => redirect('devices/list')
        /* eslint-enable @typescript-eslint/naming-convention */
      }
    ]
  }
];

const router = createBrowserRouter(rts);

export const Router = (): ReactElement => <RouterProvider router={router} />;
