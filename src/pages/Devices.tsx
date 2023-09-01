import { ReactElement } from 'react';
import { ListBtn } from '../btns/ListBtn';
import './Devices.scss';

export const Devices = (): ReactElement => (
  <>
    <div className="devices">
      <ListBtn btn="table" />
      <ListBtn btn="grid" />
    </div>
  </>
);
