import { ReactElement } from 'react';
import { ReactComponent as BackSvg } from './back.svg';
import './BackIcon.scss';

/**
 * Navigation button used to navigate back to the previous item.
 * @returns a ReactElement
 */
export const BackIcon = (): ReactElement => (
  <>
    <div className="back-icon">
      <BackSvg />
    </div>
  </>
);
