import { ReactElement, useEffect, useRef, useState } from 'react';
import { deviceList } from '../../uidb';
import './DevicesGrid.scss';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { DevicesSearchParams } from '../../Routes';
import { ProductTblData, findLeastResolution } from './devicesUtilities';

interface ProductTblGridData extends ProductTblData {
  shortnames: Array<string>;
}

export const DevicesGrid = (): ReactElement => {
  const [searchParams, setSearchParams] = useSearchParams();
  const DEFAULT_RES = 84;
  const rawFilters = searchParams.get('filters');
  const filters = rawFilters?.split(',') ?? [];
  const products = deviceList.devices.reduce<Array<ProductTblGridData>>((fullList, currDevice) => {
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
    const shortnames = currDevice.shortnames ?? [];
    if (line && description && id && iconID) {
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
    navigate(`../device/${id}`);
    return undefined;
  };
  return (
    <>
      <div className="devices-grid" ref={ctrRef} style={{ height: ctrHeight }}>
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
            <div className="devices-grid-item" key={key} onClick={() => onProductClick(product.id)}>
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
            </div>
          );
        })}
      </div>
    </>
  );
};
