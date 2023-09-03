import { ReactElement } from 'react';
import { RouteObject, createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Devices } from './pages/devices/Devices';
import { Device } from './pages/Device';
import App from './App';

export enum DevicesRouteParams {
  method = 'method'
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
        element: <Devices />
      },
      {
        path: `device/:${DeviceRouteParams.id}`,
        element: <Device />
      }
    ]
  }
];

const router = createBrowserRouter(rts);

export const Router = (): ReactElement => <RouterProvider router={router} />;
