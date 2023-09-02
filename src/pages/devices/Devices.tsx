import { ReactElement } from 'react';
import { ListBtn } from '../../btns/ListBtn';
import './Devices.scss';
import { DevicesSearch } from './DevicesSearch';
import { DevicesTblTotal } from './DevicesTblTotal';

export const Devices = (): ReactElement => (
  <>
    <div className="devices">
      <div className="devices-subheader">
        <DevicesSearch />
        <DevicesTblTotal />
        <ListBtn btn="table" navTo="../devices/list" />
        <ListBtn btn="grid" navTo="../devices/grid" />
      </div>
    </div>
  </>
);
