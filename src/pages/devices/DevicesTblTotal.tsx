import { ReactElement } from 'react';
import { useSearchParams } from 'react-router-dom';
import { DevicesSearchParams } from '../../Routes';

export const DevicesTblTotal = (): ReactElement => {
  const [searchParams] = useSearchParams();
  const total = parseInt(searchParams.get(DevicesSearchParams.total) ?? '0');
  return (
    <>
      <div className="caption">{`${total} Device${total > 1 || total === 0 ? 's' : ''}`}</div>
    </>
  );
};
