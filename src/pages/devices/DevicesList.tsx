import { ReactElement, useEffect } from 'react';
import { deviceList } from '../../uidb';
import './DevicesList.scss';
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

export const DevicesList = (): ReactElement => {
  const DEFAULT_RES = 21.67;
  const products = deviceList.devices.reduce<Array<ProductTblData>>((fullList, currDevice) => {
    const id = currDevice.id;
    const line = currDevice.line?.name;
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
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    searchParams.set(DevicesSearchParams.total, products.length.toLocaleString());
    setSearchParams(searchParams);
  }, [searchParams, setSearchParams, products.length]);
  const onProductClick = (id: string): undefined => {
    navigate(`../device/${id}`);
    return undefined;
  };
  return (
    <>
      <div className="devices-list-table-header-ctr">
        <div className="devices-list-table-header">
          <div className="devices-list-table-header-icon"></div>
          <div className="devices-list-table-header-line">
            <div className="heading-medium">Product Line</div>
          </div>
          <div className="devices-list-table-header-name">
            <div className="heading-medium">Name</div>
          </div>
        </div>
      </div>
      <div className="devices-list-table-ctr">
        <div className="devices-list-table">
          <div className="devices-list-table-images">
            {products.map((product, index) => {
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
