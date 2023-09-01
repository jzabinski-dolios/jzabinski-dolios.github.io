import { ReactElement } from 'react';
import { RouteObject, createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Devices } from './pages/Devices';
import { Device } from './pages/Device';
import App from './App';

export interface Params {
  [key: string]: string;
  method: 'list' | 'grid';
}

export enum DevicesParams {
  Method = 'method'
}

const rts: Array<RouteObject> = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: `devices/:${DevicesParams.Method}`,
        element: <Devices />
      },
      {
        path: 'device',
        element: <Device />
      }
    ]
  }
];

const router = createBrowserRouter(rts);

export const Router = (): ReactElement => <RouterProvider router={router} />;
