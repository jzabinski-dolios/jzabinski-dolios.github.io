import { ReactElement } from 'react';
import { ListBtn } from '../../btns/ListBtn';
import './Devices.scss';
import { DevicesSearch } from './DevicesSearch';
import { DevicesTblTotal } from './DevicesTblTotal';
import { DevicesFilter } from './DevicesFilter';
import { useParams } from 'react-router';
import { DevicesRouteParams } from '../../Routes';
import { DevicesList } from './DevicesList';

export const Devices = (): ReactElement => {
  const params = useParams<DevicesRouteParams>();
  return (
    <>
      <div className="devices">
        <div className="devices-subheader">
          <div className="devices-subheader-left">
            <DevicesSearch />
            <DevicesTblTotal />
          </div>
          <div className="devices-subheader-right">
            <ListBtn btn="table" navTo="../devices/list" />
            <ListBtn btn="grid" navTo="../devices/grid" />
            <DevicesFilter />
          </div>
        </div>
        {params.method === 'list' && <DevicesList />}
        {params.method === 'grid' && (
          <>
            <div className="devices-grid">Grid goes here</div>
          </>
        )}
      </div>
    </>
  );
};
