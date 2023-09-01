import { ReactElement } from 'react';
import './Device.scss';
import { useParams } from 'react-router-dom';
import { DeviceRouteParams } from '../Routes';

export const Device = (): ReactElement => {
  const params = useParams<DeviceRouteParams>();
  return (
    <>
      <div className="device">{params.id}</div>
    </>
  );
};
