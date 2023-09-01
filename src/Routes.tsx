import { ReactElement } from 'react';
import { RouteObject, createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Devices } from './pages/Devices';
import { Device } from './pages/Device';
import App from './App';

export enum DevicesParams {
  method = 'method'
}

export interface Params {
  [key: string]: string;
  [DevicesParams.method]: 'list' | 'grid';
}

const rts: Array<RouteObject> = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: `devices/:${DevicesParams.method}`,
        element: <Devices />
      },
      {
        path: 'device/:id',
        element: <Device />
      }
    ]
  }
];

const router = createBrowserRouter(rts);

export const Router = (): ReactElement => <RouterProvider router={router} />;
