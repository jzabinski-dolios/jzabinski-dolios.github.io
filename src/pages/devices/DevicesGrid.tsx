import { ReactElement, useEffect, useRef, useState } from 'react';
import { deviceList } from '../../uidb';
import './DevicesGrid.scss';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { DevicesSearchParams } from '../../Routes';

interface ProductTblData {
  id: string;
  line: string;
  description: string;
  image: {
    iconID: string;
    resolution: [number, number] | null;
  };
  shortnames: Array<string>;
}

const findLeastResolution = (
  resolutions: Array<[number, number]>,
  desiredResolution: number
): [number, number] => {
  // Spec says that the images 'should' all be square; remove any that are not, just in case.
  const squareRes = resolutions.filter(([width, height]) => width === height);
  // Sort by width, in case they are not yet sorted.
  const sorted = squareRes.sort(
    ([widthA], [widthB]) =>
      Math.abs(desiredResolution - widthA) - Math.abs(desiredResolution - widthB)
  );
  // The desired resolution is the smallest possible (for efficient bandwidth),
  // which is either slightly bigger or equal to the requested resolution (for image quality).
  // (Slightly bigger resolutions will be shrunk down well. Smaller resolutions will be potentially grainy.)
  const onlyEqualOrMore = sorted.filter(([width]) => width >= desiredResolution);
  // Send the smallest resolution set if available. If nothing was equal to or bigger than the desired resolution,
  // send the biggest one available. (For example, if we want 25 pixels and we have resolutions of 10 and 19 px, use 19.)
  if (onlyEqualOrMore.length > 0) {
    return onlyEqualOrMore[0];
  }
  return sorted[sorted.length - 1];
};

export const DevicesGrid = (): ReactElement => {
  const [searchParams, setSearchParams] = useSearchParams();
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
                    background: `url(${encodedURI}), lightgray 50% / cover no-repeat`
                  }}
                ></div>
                <div className="devices-grid-item-upper-prod-line">{product.line}</div>
              </div>
              <div className="devices-grid-item-lower">
                <div className="devices-grid-item-lower-prod-desc">{product.description}</div>
                <div className="devices-grid-item-lower-prod-shortnames">
                  {product.shortnames.map((shortname, shNIndex: number) => {
                    const snKey = `devices-grid-item-lower-prod-shortname-${shNIndex}`;
                    return (
                      <>
                        <div className="devices-grid-item-lower-prod-shortname caption" key={snKey}>
                          {shortname}
                        </div>
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
