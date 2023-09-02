import { useNavigate, useSearchParams } from 'react-router-dom';
import { ReactElement } from 'react';
import { deviceList } from '../../uidb';
import './DevicesSearchResults.scss';

type DeviceList = Array<{ id: string; abbrev: string; name: string }>;

export const DevicesSearchResults = (): ReactElement => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const clickHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, id: string): undefined => {
    e.preventDefault();
    navigate(`../device/${id}`);
    return undefined;
  };
  const getProducts = (): DeviceList => {
    const search = searchParams.get('search')?.toLocaleLowerCase();
    if (search === null || search === undefined) {
      return [];
    }
    if (search.length < 2) {
      return [];
    }
    return deviceList.devices
      .filter(
        (device) =>
          device.id &&
          (device.product?.name?.toLocaleLowerCase()?.includes(search) ||
            device.product?.abbrev?.toLocaleLowerCase()?.includes(search))
      )
      .map((device) => {
        const product = device.product!;
        return {
          id: device.id!,
          abbrev: product.abbrev!,
          name: product.name!
        };
      });
  };
  return (
    <>
      {searchParams.get('search') && searchParams.get('search') !== '' && (
        <>
          <div className="devices-search-results">
            {getProducts().map((device) => (
              <>
                <div className="devices-search-result" onClick={(e) => clickHandler(e, device.id)}>
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
