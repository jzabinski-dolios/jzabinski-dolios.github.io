import { useSearchParams } from 'react-router-dom';
import { ReactElement } from 'react';
import { deviceList } from '../../uidb';
import './DevicesSearchResults.scss';

type DeviceList = Array<{ abbrev: string; name: string }>;

export const DevicesSearchResults = (): ReactElement => {
  const [searchParams] = useSearchParams();
  const getProducts = (): DeviceList => {
    const search = searchParams.get('search');
    if (search === null || search === '' || search.length < 2) {
      return [];
    }
    return deviceList.devices
      .filter(
        (device) =>
          device.product?.name?.includes(search) || device.product?.abbrev?.includes(search)
      )
      .map((device) => ({ abbrev: device.product!.abbrev!, name: device.product!.name! }));
  };
  return (
    <>
      {searchParams.get('search') && searchParams.get('search') !== '' && (
        <>
          <div className="devices-search-results">
            {getProducts().map((device) => (
              <>
                <div className="devices-search-result">
                  <div>{device.name}</div>
                  <div>{device.abbrev}</div>
                </div>
              </>
            ))}
          </div>
        </>
      )}
    </>
  );
};
