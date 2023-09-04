import { ReactElement } from 'react';
import { ReactComponent as BackSvg } from './back.svg';
import './BackIcon.scss';

export const BackIcon = (): ReactElement => (
  <>
    <div className="back-icon">
      <BackSvg />
    </div>
  </>
);
