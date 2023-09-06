import { ReactElement } from 'react';
import { useParams } from 'react-router';
import { ListBtn } from '../../btns/ListBtn';
import { DevicesRouteParams } from '../../Routes';
import { DevicesList } from './DevicesList';
import { DevicesGrid } from './DevicesGrid';
import { DevicesSearch } from './DevicesSearch';
import { DevicesTblTotal } from './DevicesTblTotal';
import { DevicesFilter } from './DevicesFilter';
import './Devices.scss';

/**
 * The main view for multiple devices. (See Device.tsx for a view of an individual device.)
 * @returns a ReactElement
 */
export const Devices = (): ReactElement => {
  // React
  const params = useParams<DevicesRouteParams>();
  // Template
  return (
    <>
      <div className="devices">
        <header className="devices-subheader">
          <div className="devices-subheader-left">
            <DevicesSearch />
            <DevicesTblTotal />
          </div>
          <div className="devices-subheader-right">
            <ListBtn btn="table" navTo="../devices/list" />
            <ListBtn btn="grid" navTo="../devices/grid" />
            <DevicesFilter />
          </div>
        </header>
        {params.method === 'list' && <DevicesList />}
        {params.method === 'grid' && <DevicesGrid />}
      </div>
    </>
  );
};
