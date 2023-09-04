import { ReactElement } from 'react';
import { useParams } from 'react-router-dom';
import { DeviceRouteParams } from '../Routes';
import { BackIcon } from '../icons/BackIcon';
import { ForwardIcon } from '../icons/ForwardIcon';
import './Device.scss';

interface ProductDetails {
  prodLine: string;
  id: string;
  description: string;
  shortNames: Array<string>;
  maxPower: string;
  speed: string;
  ports: string;
}

export const Device = (): ReactElement => {
  const params = useParams<DeviceRouteParams>();
  const details: ProductDetails = {
    prodLine: 'Product Line goes here',
    id: 'id goes here',
    description: 'description',
    shortNames: ['Short name'],
    maxPower: 'Max power',
    speed: 'speed',
    ports: '1'
  };
  return (
    <>
      <div className="device">
        <div className="device-subheader-ctr">
          <div className="device-subheader">
            <div className="device-subheader-left">
              <div className="device-subheader-btn-ctr">
                <div className="device-subheader-btn">{<BackIcon />}</div>
              </div>
              <div className="device-subheader-back-btn-text">Back</div>
            </div>
            <div className="device-subheader-right">
              <div className="device-subheader-btn-ctr">
                <div className="device-subheader-btn">{<BackIcon />}</div>
              </div>
              <div className="device-subheader-btn-ctr">
                <div className="device-subheader-btn">{<ForwardIcon />}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="device-content">
          <div className="device-content-fingerprint">
            <div className="device-content-img-ctr">
              <div className="device-content-img"></div>
            </div>
          </div>
          <div className="device-content-details">
            <div className="device-content-details-title">
              <div className="heading-xlarge-1">{details.description}</div>
              <div className="device-content-details-title-model-name">{details.prodLine}</div>
            </div>
            <div className="device-content-details-list">
              <div className="device-content-details-item">
                <div className="device-content-details-item-lbl">Product Line</div>
                <div className="device-content-details-item-val">{details.prodLine}</div>
              </div>
              <div className="device-content-details-item">
                <div className="device-content-details-item-lbl">ID</div>
                <div className="device-content-details-item-val">{details.id}</div>
              </div>
              <div className="device-content-details-item">
                <div className="device-content-details-item-lbl">Name</div>
                <div className="device-content-details-item-val">{details.description}</div>
              </div>
              <div className="device-content-details-item">
                <div className="device-content-details-item-lbl">Short Name</div>
                <div className="device-content-details-item-val">
                  {details.shortNames.join(', ')}
                </div>
              </div>
              <div className="device-content-details-item">
                <div className="device-content-details-item-lbl">Max. Power</div>
                <div className="device-content-details-item-val">{details.maxPower}</div>
              </div>
              <div className="device-content-details-item">
                <div className="device-content-details-item-lbl">Speed</div>
                <div className="device-content-details-item-val">{details.speed}</div>
              </div>
              <div className="device-content-details-item">
                <div className="device-content-details-item-lbl">Number of Ports</div>
                <div className="device-content-details-item-val">{details.ports}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
