import { ReactElement } from 'react';
import { useParams } from 'react-router-dom';
import { DeviceRouteParams } from '../Routes';
import { BackIcon } from '../icons/BackIcon';
import { ForwardIcon } from '../icons/ForwardIcon';
import './Device.scss';

export const Device = (): ReactElement => {
  const params = useParams<DeviceRouteParams>();
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
      </div>
    </>
  );
};
