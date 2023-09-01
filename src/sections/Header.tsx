import { ReactElement } from 'react';
import { UbiIcon } from '../icons/UbiIcon';
import './Header.scss';

export const Header = (): ReactElement => (
  <>
    <div className="header">
      <div className="header-summary">
        <div className="header-logo">
          <UbiIcon />
          <div className="header-text">Devices</div>
        </div>
      </div>
      <div className="header-text">Joe Zabinski</div>
    </div>
  </>
);
