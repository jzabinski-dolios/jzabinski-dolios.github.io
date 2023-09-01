import { ReactElement } from 'react';
import { ReactComponent as UbiquitiIcon } from '../ubi.svg';
import './Splash.scss';

export const Splash = (): ReactElement => (
  <div className="Splash">
    <UbiquitiIcon id="icon" />
    <p id="motto">Ubiquiti FE Test Assignment</p>
  </div>
);
