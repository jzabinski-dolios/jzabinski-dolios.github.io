import { ReactElement } from 'react';
import { ListBtn } from '../../btns/ListBtn';
import './Devices.scss';
import { DevicesSearch } from './DevicesSearch';
import { DevicesTblTotal } from './DevicesTblTotal';
import { DevicesFilter } from './DevicesFilter';

export const Devices = (): ReactElement => (
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
    </div>
  </>
);
