import { ReactElement } from 'react';
import { deviceList } from '../../uidb';
import './DevicesList.scss';

interface ProductTblData {
  line: string;
  description: string;
  image: {
    id: string;
    resolution: [number, number] | null;
  };
}

const findLeastResolution = (
  resolutions: Array<[number, number]>,
  desiredResolution: number
): [number, number] => {
  const squareRes = resolutions.filter(([width, height]) => width === height);
  const sorted = squareRes.sort(
    ([widthA], [widthB]) =>
      Math.abs(desiredResolution - widthA) - Math.abs(desiredResolution - widthB)
  );
  const onlyEqualOrMore = sorted.filter(([width]) => width >= desiredResolution);
  // Send the smallest resolution set if available. If none are available, send the biggest set available.
  if (onlyEqualOrMore.length > 0) {
    return onlyEqualOrMore[0];
  }
  return sorted[sorted.length - 1];
};

export const DevicesList = (): ReactElement => {
  const DEFAULT_RES = 21.67;
  const products = deviceList.devices.reduce<Array<ProductTblData>>((fullList, currDevice) => {
    const line = currDevice.line?.name;
    const description = currDevice.product?.name;
    const id = currDevice.icon?.id;
    const resolution = currDevice.icon?.resolutions
      ? findLeastResolution(currDevice.icon.resolutions, DEFAULT_RES)
      : null;
    if (line && description && id) {
      fullList.push({
        line,
        description,
        image: { id, resolution }
      });
    }
    return fullList;
  }, []);
  return (
    <>
      {/* <div className="devices-list">
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Product Line</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <td></td>
                <td>{product.line}</td>
                <td>{product.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> */}
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
              const id = product.image.id;
              const [width, height] = product.image.resolution ?? [null, null];
              const imgURL =
                width && height
                  ? `https://static.ui.com/fingerprint/ui/icons/${id}_${width}x${height}.png`
                  : 'https://noimage';
              const encodedURI = encodeURI(imgURL);
              return (
                <div className="devices-list-table-images-ctr" key={key}>
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
                <div className="devices-list-table-product-line" key={key}>
                  <div className="devices-list-table-product-line-text">{product.line}</div>
                </div>
              );
            })}
          </div>
          <div className="devices-list-table-product-names">
            {products.map((product, index) => {
              const key = `devices-list-table-product-name-${index}`;
              return (
                <div className="devices-list-table-product-name" key={key}>
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
