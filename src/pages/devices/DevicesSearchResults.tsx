import { useLoaderData, useNavigate, useSearchParams } from 'react-router-dom';
import { ReactElement, forwardRef } from 'react';
import './DevicesSearchResults.scss';
import { DataLoader } from '../../dataLoader';

type DeviceList = Array<{ id: string; abbrev: string; name: string; srch: string }>;

export const DevicesSearchResults = forwardRef<HTMLDivElement>((unused, ref): ReactElement => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const loader = useLoaderData() as DataLoader;
  const deviceList = loader.deviceList!;
  const clickHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: string
  ): undefined => {
    e.preventDefault();
    navigate(`../device/${id}`);
    return undefined;
  };
  const getProducts = (): DeviceList => {
    const search = searchParams.get('search');
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
          (device.product?.name?.toLocaleLowerCase()?.includes(search.toLocaleLowerCase()) ||
            device.product?.abbrev?.toLocaleLowerCase()?.includes(search.toLocaleLowerCase()))
      )
      .map((device) => {
        const product = device.product!;
        return {
          id: device.id!,
          abbrev: product.abbrev!,
          name: product.name!,
          srch: search
        };
      });
  };
  return (
    <>
      {searchParams.get('search') && searchParams.get('search') !== '' && (
        <>
          <div className="devices-search-results" ref={ref}>
            {getProducts().map((device) => {
              const nm = device.name.toLocaleLowerCase();
              const beginHlt = nm.indexOf(device.srch);
              const endHlt = beginHlt + device.srch.length;
              const pre = device.name.substring(0, beginHlt);
              const hlt = device.name.substring(beginHlt, endHlt + 1);
              const post = device.name.substring(endHlt + 1);
              return (
                <button
                  key={device.id}
                  className="devices-search-result"
                  onClick={(e) => clickHandler(e, device.id)}
                >
                  <div>
                    <span>{pre}</span>
                    <span className="hlt">{hlt}</span>
                    <span>{post}</span>
                  </div>
                  <div>{device.abbrev}</div>
                </button>
              );
            })}
          </div>
        </>
      )}
    </>
  );
});
