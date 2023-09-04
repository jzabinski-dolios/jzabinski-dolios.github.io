import { ReactElement } from 'react';
import { Location, useLocation, useNavigate, useParams } from 'react-router-dom';
import { DeviceRouteParams } from '../Routes';
import { BackIcon } from '../icons/BackIcon';
import { ForwardIcon } from '../icons/ForwardIcon';
import { Device, deviceList } from '../uidb';
import './Device.scss';

interface ProductDetails {
  prodLine: string;
  id: string;
  description: string;
  shortNames: Array<string>;
  maxPower: string | null;
  speed: string | null;
  ports: string | null;
}

const getMaxPower = (device: Device): string | null => {
  const radios = device.unifi?.network?.radios;
  // Lots of max powers are available, depending on the radio. Display the first one?
  const [, firstRadVal] = radios ? Object.entries(radios)[0] : [null, null];
  return firstRadVal?.maxPower?.toString() ?? null;
};

const getSpeed = (device: Device): string | null =>
  device.unifi?.network?.ethernetMaxSpeedMegabitsPerSecond?.toString() ?? null;

const getPorts = (device: Device): string | null =>
  device.unifi?.network?.numberOfPorts?.toString() ?? null;

export const DeviceInfo = (): ReactElement | null => {
  const params = useParams<DeviceRouteParams>();
  const location = useLocation();
  const navigate = useNavigate();
  const id = params.id;
  if (!id) {
    return null;
  }
  const dvcIndex = deviceList.devices.findIndex((device) => device.id === id);
  if (dvcIndex === -1) {
    return null;
  }
  const lastIndex = deviceList.devices.length - 1;
  const ahead = dvcIndex + 1;
  const behind = dvcIndex - 1;
  const next = ahead <= lastIndex ? ahead : 0;
  const prev = behind >= 0 ? behind : lastIndex;
  const device = deviceList.devices[dvcIndex];
  const details: ProductDetails = {
    prodLine: device.line?.name ?? '',
    id: device.line?.id ?? '',
    description: device.product?.name ?? '',
    shortNames: device.shortnames ?? [''],
    maxPower: getMaxPower(device),
    speed: getSpeed(device),
    ports: getPorts(device)
  };

  const onNextPrevClick = (nextPrev: 'next' | 'prev' = 'next'): undefined => {
    const nextNav =
      nextPrev === 'next' ? deviceList.devices[next].id! : deviceList.devices[prev].id!;
    const lastDevicesLocation = (location.state?.from as Location | undefined) ?? null;
    if (lastDevicesLocation) {
      navigate(`../device/${nextNav}`, { state: { from: lastDevicesLocation } });
    } else {
      navigate(`../device/${nextNav}`);
    }
    return undefined;
  };
  const onBackClick = (): undefined => {
    const lastDevicesLocation = (location.state?.from as Location | undefined) ?? null;
    if (lastDevicesLocation) {
      navigate(`../${lastDevicesLocation.pathname}`);
    }
    return undefined;
  };
  return (
    <>
      <div className="device">
        <div className="device-subheader-ctr">
          <div className="device-subheader">
            <div className="device-subheader-left">
              <button className="device-subheader-btn-ctr" onClick={() => onBackClick()}>
                <div className="device-subheader-btn">{<BackIcon />}</div>
                <div className="device-subheader-back-btn-text">Back</div>
              </button>
            </div>
            <div className="device-subheader-right">
              <div className="device-subheader-btn-ctr" onClick={() => onNextPrevClick('prev')}>
                <div className="device-subheader-btn">{<BackIcon />}</div>
              </div>
              <div className="device-subheader-btn-ctr" onClick={() => onNextPrevClick('next')}>
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
              {details.maxPower && (
                <>
                  <div className="device-content-details-item">
                    <div className="device-content-details-item-lbl">Max. Power</div>
                    <div className="device-content-details-item-val">{details.maxPower}</div>
                  </div>
                </>
              )}
              {details.speed && (
                <>
                  <div className="device-content-details-item">
                    <div className="device-content-details-item-lbl">Speed</div>
                    <div className="device-content-details-item-val">{details.speed}</div>
                  </div>
                </>
              )}
              {details.ports && (
                <>
                  <div className="device-content-details-item">
                    <div className="device-content-details-item-lbl">Ports</div>
                    <div className="device-content-details-item-val">{details.ports}</div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
