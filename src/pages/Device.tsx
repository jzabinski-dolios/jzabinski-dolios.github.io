import { ReactElement, useState } from 'react';
import { Location, useLoaderData, useLocation, useNavigate, useParams } from 'react-router-dom';
import { DeviceRouteParams } from '../Routes';
import { BackIcon } from '../icons/BackIcon';
import { ForwardIcon } from '../icons/ForwardIcon';
import { Device } from '../uidb';
import { findLeastResolution } from './findDeviceResolution';
import './Device.scss';
import { DataLoader } from '../dataLoader';

interface ProductDetails {
  prodLine: string;
  id: string;
  description: string;
  shortNames: Array<string>;
  maxPower: string | null;
  speed: string | null;
  ports: string | null;
  image: {
    iconID: string | null;
    resolution: [number, number] | null;
  };
}

/**
 * Retrieves the setting for max power if defined on a device.
 * @param device the Device in question
 * @returns the desired power setting if available. Otherwise null.
 */
const getMaxPower = (device: Device): string | null => {
  const radios = device.unifi?.network?.radios;
  // Todo: Lots of max powers are available, depending on the radio. We have no design for which radio is desired.
  // For now, just display the first one. If we get more design, this can be revised.
  // const [, firstRadVal] = radios ? Object.entries(radios)[0] : [null, null];
  // For some reason, Chrome does not like the above line. The below is a kluge for Chrome.
  let firstRadVal: {
    [key: string]: any;
    maxPower?: number;
  } | null = null;
  if (radios) {
    firstRadVal = Object.entries(radios)[0];
  }
  return firstRadVal?.maxPower?.toString() ?? null;
};

/**
 * Retrieves the speed if defined on a device.
 * @param device the Device in question
 * @returns the speed if available. Otherwise null.
 */
const getSpeed = (device: Device): string | null =>
  device.unifi?.network?.ethernetMaxSpeedMegabitsPerSecond?.toString() ?? null;

/**
 * Retrieves the number of ports if defined on a device.
 * @param device the Device in question
 * @returns the number of ports if available, as a string. Otherwise null.
 */
const getPorts = (device: Device): string | null =>
  device.unifi?.network?.numberOfPorts?.toString() ?? null;

/**
 * A view for an individual item.
 * @returns a ReactElement if information retrieval was possible. Otherwise null. (To accommodate changes to location of the 'id' field.)
 */
export const DeviceInfo = (): ReactElement | null => {
  // React
  const params = useParams<DeviceRouteParams>();
  const location = useLocation();
  const navigate = useNavigate();
  const [displayJSON, setDisplayJSON] = useState(false);
  const loader = useLoaderData() as DataLoader;
  // Local variables
  const deviceList = loader.deviceList!;
  const id = params.id;
  if (!id) {
    return null;
  }
  const DEFAULT_RES = 259.556;
  const dvcIndex = deviceList.devices.findIndex((device) => device.id === id);
  if (dvcIndex === -1) {
    // Should never happen, but if it does, display nothing. (No design for failure)
    return null;
  }
  // Set up next page and previous.
  // Go to the next or previous item in the overall list. (Figma did not define this behavior.)
  // Loop around if at the beginning/end of the list.
  const lastIndex = deviceList.devices.length - 1;
  const ahead = dvcIndex + 1;
  const behind = dvcIndex - 1;
  const next = ahead <= lastIndex ? ahead : 0;
  const prev = behind >= 0 ? behind : lastIndex;
  const device = deviceList.devices[dvcIndex];
  const resolution = device.icon?.resolutions
    ? findLeastResolution(device.icon.resolutions, DEFAULT_RES)
    : null;
  // Set up overall display info.
  const details: ProductDetails = {
    image: {
      iconID: device.icon?.id ?? null,
      resolution
    },
    prodLine: device.line?.name ?? '',
    id: device.line?.id ?? '',
    description: device.product?.name ?? '',
    shortNames: device.shortnames ?? [''],
    maxPower: getMaxPower(device),
    speed: getSpeed(device),
    ports: getPorts(device)
  };
  // Finish up image resolution.
  const [width, height] = details.image.resolution ?? [null, null];
  const imgURL =
    width && height && details.image.iconID
      ? `https://static.ui.com/fingerprint/ui/icons/${details.image.iconID}_${width}x${height}.png`
      : '';
  const encodedURI = encodeURI(imgURL);
  // Local functions
  const onNextPrevClick = (nextPrev: 'next' | 'prev' = 'next'): undefined => {
    const nextNav =
      nextPrev === 'next' ? deviceList.devices[next].id! : deviceList.devices[prev].id!;
    const lastDevicesLocation = (location.state?.from as Location | undefined) ?? null;
    setDisplayJSON(false);
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
  const onRetrieveClick = (): undefined => {
    setDisplayJSON(true);
    return undefined;
  };
  const retrieveJSON = (): string => JSON.stringify(device, undefined, 2);
  // Template
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
              <button className="device-subheader-btn-ctr" onClick={() => onNextPrevClick('prev')}>
                <div className="device-subheader-btn">{<BackIcon />}</div>
              </button>
              <button className="device-subheader-btn-ctr" onClick={() => onNextPrevClick('next')}>
                <div className="device-subheader-btn">{<ForwardIcon />}</div>
              </button>
            </div>
          </div>
        </div>
        <div className="device-content">
          <div className="device-content-fingerprint">
            <div className="device-content-img-ctr">
              <div
                className="device-content-img"
                style={{
                  background: `url(${encodedURI}), 50% / cover no-repeat`
                }}
              ></div>
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
        <button className="device-cta-ctr" onClick={() => onRetrieveClick()}>
          <div className="device-cta-text">See All Details as JSON</div>
        </button>
        {displayJSON && <div className="device-json">{retrieveJSON()}</div>}
      </div>
    </>
  );
};
