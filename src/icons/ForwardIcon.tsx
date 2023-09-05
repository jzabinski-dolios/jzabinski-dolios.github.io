import { ReactElement } from 'react';
import { ReactComponent as ForwardSvg } from './forward.svg';
import './ForwardIcon.scss';

/**
 * Navigation button used to navigate to the next item.
 * @returns a ReactElement
 */
export const ForwardIcon = (): ReactElement => (
  <>
    <div className="forward-icon">
      <ForwardSvg />
    </div>
  </>
);
