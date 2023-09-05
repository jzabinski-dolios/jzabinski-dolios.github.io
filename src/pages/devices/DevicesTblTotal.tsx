import { ReactElement } from 'react';
import { useSearchParams } from 'react-router-dom';
import { DevicesSearchParams } from '../../Routes';

/**
 * A view of all of the devices currently displayed. Changes based on whether items are filtered out.
 * @returns a ReactElement
 */
export const DevicesTblTotal = (): ReactElement => {
  // React
  const [searchParams] = useSearchParams();
  const total = parseInt(searchParams.get(DevicesSearchParams.total) ?? '0');
  // Template
  return (
    <>
      <div className="caption">{`${total} Device${total > 1 || total === 0 ? 's' : ''}`}</div>
    </>
  );
};
