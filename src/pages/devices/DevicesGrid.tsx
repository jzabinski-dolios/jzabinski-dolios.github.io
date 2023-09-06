import { ReactElement, useEffect, useRef, useState } from 'react';
import { useLoaderData, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { DataLoader } from '../../dataLoader';
import { DevicesSearchParams } from '../../Routes';
import { findLeastResolution } from '../findDeviceResolution';
import { ProductTblData } from './devicesUtilities';
import './DevicesGrid.scss';

export interface ProductTblGridData extends ProductTblData {
  shortnames: Array<string>;
}

/**
 * A view of all devices as a grid.
 * @returns a ReactElement
 */
export const DevicesGrid = (): ReactElement => {
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
  // a useEffect comes later because it uses a local variable.
  // Local variables
  const deviceList = loader.deviceList!;
  const DEFAULT_RES = 84;
  const rawFilters = searchParams.get('filters');
  const filters = rawFilters?.split(',') ?? [];
  // Generates the display info for the whole grid.
  const products = deviceList.devices.reduce<Array<ProductTblGridData>>((fullList, currDevice) => {
    const line = currDevice.line?.name;
    // If this product line is filtered out, return the state of the list of display info as is.
    if (line && filters.includes(line)) {
      return fullList;
    }
    // Build out display info for this item.
    const id = currDevice.id;
    const description = currDevice.product?.name;
    const iconID = currDevice.icon?.id;
    const resolution = currDevice.icon?.resolutions
      ? findLeastResolution(currDevice.icon.resolutions, DEFAULT_RES)
      : null;
    const shortnames = currDevice.shortnames ?? [];
    if (line && description && id && iconID) {
      // Add the item to the list.
      fullList.push({
        id,
        line,
        description,
        image: { iconID, resolution },
        shortnames
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
      <main className="devices-grid" ref={ctrRef} style={{ height: ctrHeight }}>
        {products.map((product, index: number) => {
          const key = `devices-grid-item-${index}`;
          const id = product.image.iconID;
          const [width, height] = product.image.resolution ?? [null, null];
          const imgURL =
            width && height
              ? `https://static.ui.com/fingerprint/ui/icons/${id}_${width}x${height}.png`
              : 'https://noimage';
          const encodedURI = encodeURI(imgURL);
          return (
            <button
              className="devices-grid-item"
              key={key}
              onClick={() => onProductClick(product.id)}
              aria-label={product.description}
            >
              <div className="devices-grid-item-upper">
                <div
                  className="devices-grid-item-upper-image"
                  style={{
                    backgroundImage: `url(${encodedURI})`
                  }}
                ></div>
                <div className="devices-grid-item-upper-prod-line">{product.line}</div>
              </div>
              <div className="devices-grid-item-lower">
                <div className="devices-grid-item-lower-prod-desc">{product.description}</div>
                <div className="devices-grid-item-lower-prod-shortnames">
                  {product.shortnames.map((shortname, shNIndex: number, allNames) => {
                    const snKey = `devices-grid-item-lower-prod-shortname-${shNIndex}`;
                    return (
                      <>
                        <span
                          className="devices-grid-item-lower-prod-shortname caption"
                          key={snKey}
                        >
                          {shortname}
                        </span>
                        {shNIndex !== allNames.length - 1 && (
                          <>
                            <span className="devices-grid-item-lower-prod-shortname caption">
                              ,&nbsp;
                            </span>
                          </>
                        )}
                      </>
                    );
                  })}
                </div>
              </div>
            </button>
          );
        })}
      </main>
    </>
  );
};
