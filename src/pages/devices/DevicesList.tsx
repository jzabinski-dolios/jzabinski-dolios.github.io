import { ReactElement, useEffect, useRef, useState } from 'react';
import './DevicesList.scss';
import { useLoaderData, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { DevicesSearchParams } from '../../Routes';
import { ProductTblData } from './devicesUtilities';
import { findLeastResolution } from '../findDeviceResolution';
import { DataLoader } from '../../dataLoader';

export const DevicesList = (): ReactElement => {
  const [searchParams, setSearchParams] = useSearchParams();
  const loader = useLoaderData() as DataLoader;
  const deviceList = loader.deviceList!;
  const DEFAULT_RES = 21.67;
  const rawFilters = searchParams.get('filters');
  const filters = rawFilters?.split(',') ?? [];
  const products = deviceList.devices.reduce<Array<ProductTblData>>((fullList, currDevice) => {
    const line = currDevice.line?.name;
    if (line && filters.includes(line)) {
      return fullList;
    }
    const id = currDevice.id;
    const description = currDevice.product?.name;
    const iconID = currDevice.icon?.id;
    const resolution = currDevice.icon?.resolutions
      ? findLeastResolution(currDevice.icon.resolutions, DEFAULT_RES)
      : null;
    if (line && description && id && iconID) {
      fullList.push({
        id,
        line,
        description,
        image: { iconID: iconID, resolution }
      });
    }
    return fullList;
  }, []);
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    searchParams.set(DevicesSearchParams.total, products.length.toLocaleString());
    setSearchParams(searchParams);
  }, [searchParams, setSearchParams, products.length]);
  // Height management
  // Rather than deviate from the Figma, manage height dynamically here.
  const [ctrHeight, setCtrHeight] = useState(1000);
  const ctrRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const yOffset = ctrRef.current?.getBoundingClientRect()?.y ?? null;
    if (yOffset) {
      setCtrHeight(innerHeight - yOffset);
    }
  }, [ctrRef, setCtrHeight]);
  const onProductClick = (id: string): undefined => {
    navigate(`../device/${id}`, { state: { from: location } });
    return undefined;
  };
  return (
    <>
      <div className="devices-list-table-header-ctr">
        <div className="devices-list-table-header">
          <div className="devices-list-table-header-icon"></div>
          <div className="devices-list-table-header-col">
            <div className="devices-list-table-header-text-ctr">
              <div className="heading-medium">Product Line</div>
            </div>
          </div>
          <div className="devices-list-table-header-col">
            <div className="devices-list-table-header-text-ctr">
              <div className="heading-medium">Name</div>
            </div>
          </div>
        </div>
      </div>
      <div className="devices-list-table-ctr" ref={ctrRef} style={{ height: ctrHeight }}>
        <div className="devices-list-table">
          <div className="devices-list-table-images">
            {products.map((product, index: number) => {
              const key = `devices-list-table-images-ctr-${index}`;
              const id = product.image.iconID;
              const [width, height] = product.image.resolution ?? [null, null];
              const imgURL =
                width && height
                  ? `https://static.ui.com/fingerprint/ui/icons/${id}_${width}x${height}.png`
                  : 'https://noimage';
              const encodedURI = encodeURI(imgURL);
              return (
                <div
                  className="devices-list-table-images-ctr"
                  key={key}
                  onClick={() => onProductClick(product.id)}
                >
                  <div className="devices-list-table-images-thumbnail">
                    <div className="devices-list-table-images-base">
                      <div
                        className="devices-list-table-images-image"
                        style={{
                          background: `url(${encodedURI}), 50% / cover no-repeat`
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="devices-list-table-product-lines">
            {products.map((product, index) => {
              const key = `devices-list-table-product-line-${index}`;
              return (
                <div
                  className="devices-list-table-product-line"
                  key={key}
                  onClick={() => onProductClick(product.id)}
                >
                  <div className="devices-list-table-product-line-text">{product.line}</div>
                </div>
              );
            })}
          </div>
          <div className="devices-list-table-product-names">
            {products.map((product, index) => {
              const key = `devices-list-table-product-name-${index}`;
              return (
                <div
                  className="devices-list-table-product-name"
                  key={key}
                  onClick={() => onProductClick(product.id)}
                >
                  <div className="devices-list-table-product-name-text">{product.description}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
