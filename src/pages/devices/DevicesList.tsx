import { ReactElement, useEffect, useRef, useState } from 'react';
import { useLoaderData, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { DevicesSearchParams } from '../../Routes';
import { DataLoader } from '../../dataLoader';
import { findLeastResolution } from '../findDeviceResolution';
import { ProductTblData } from './devicesUtilities';
import './DevicesList.scss';

/**
 * Displays a view of all the items as a list.
 * @returns a ReactElement
 */
export const DevicesList = (): ReactElement => {
  // React
  const [searchParams, setSearchParams] = useSearchParams();
  const loader = useLoaderData() as DataLoader;
  const location = useLocation();
  const navigate = useNavigate();
  // React: height management
  //   We want this grid to take up the remaining height. That is normally done by setting an explicit height for the element, but as
  //   a consequence, heights would need to be managed differently in several other elements. That would deviate us a lot from Figma.
  //   Instead, we manipulate the height for this element dynamically. This keeps us closer to the Figma design.
  const [ctrHeight, setCtrHeight] = useState(1000);
  const ctrRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // After React has mounted the component, get its height, and then place it in the view as the last element.
    //  This lines it up with the bottom of the view, exactly fitting it where it needs to go.
    const yOffset = ctrRef.current?.getBoundingClientRect()?.y ?? null;
    if (yOffset) {
      setCtrHeight(innerHeight - yOffset);
    }
  }, [ctrRef, setCtrHeight]);
  // Local variables
  const deviceList = loader.deviceList!;
  const DEFAULT_RES = 21.67;
  const rawFilters = searchParams.get('filters');
  const filters = rawFilters?.split(',') ?? [];
  // Generates the display info for the whole list.
  const products = deviceList.devices.reduce<Array<ProductTblData>>((fullList, currDevice) => {
    const line = currDevice.line?.name;
    // If this product line is filtered out, return the state of the list of display info as is.
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
  useEffect(() => {
    searchParams.set(DevicesSearchParams.total, products.length.toLocaleString());
    setSearchParams(searchParams);
  }, [searchParams, setSearchParams, products.length]);
  // Local functions
  const onProductClick = (id: string): undefined => {
    navigate(`../device/${id}`, { state: { from: location } });
    return undefined;
  };
  // Template
  return (
    <>
      <main className="devices-list-main">
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
                  <button
                    className="devices-list-table-images-ctr"
                    key={key}
                    onClick={() => onProductClick(product.id)}
                    aria-labelledby={product.description}
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
                  </button>
                );
              })}
            </div>
            <div className="devices-list-table-product-lines">
              {products.map((product, index) => {
                const key = `devices-list-table-product-line-${index}`;
                return (
                  <button
                    className="devices-list-table-product-line"
                    key={key}
                    onClick={() => onProductClick(product.id)}
                    aria-labelledby={product.description}
                  >
                    <div className="devices-list-table-product-line-text">{product.line}</div>
                  </button>
                );
              })}
            </div>
            <div className="devices-list-table-product-names">
              {products.map((product, index) => {
                const key = `devices-list-table-product-name-${index}`;
                return (
                  <button
                    className="devices-list-table-product-name"
                    key={key}
                    onClick={() => onProductClick(product.id)}
                    aria-label={product.description}
                    id={product.description}
                  >
                    <div className="devices-list-table-product-name-text">
                      {product.description}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
