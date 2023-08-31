import { ReactElement } from 'react';
import { RouteObject, createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import { Splash } from './pages/Splash';
import { Devices } from './pages/Devices';
import { Device } from './pages/Device';

const rts: Array<RouteObject> = [
  {
    path: '/',
    element: <Navigate replace to="splash" />
  },
  {
    path: 'splash',
    element: <Splash />
  },
  {
    path: 'devices',
    element: <Devices />
  },
  {
    path: 'device',
    element: <Device />
  }
];

const router = createBrowserRouter(rts);

export const Router = (): ReactElement => <RouterProvider router={router} />;
