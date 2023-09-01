import { ReactElement } from 'react';
import { UbiIcon } from '../icons/UbiIcon';
import './Header.scss';

export const Header = (): ReactElement => (
  <>
    <div className="header">
      <div className="summary">
        <div className="logo">
          <UbiIcon />
          <div className="header-text">Devices</div>
        </div>
      </div>
      <div className="header-text">Joe Zabinski</div>
    </div>
  </>
);
