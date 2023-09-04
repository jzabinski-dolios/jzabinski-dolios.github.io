import { ReactElement } from 'react';
import { ReactComponent as ForwardSvg } from './forward.svg';
import './ForwardIcon.scss';

export const ForwardIcon = (): ReactElement => (
  <>
    <div className="forward-icon">
      <ForwardSvg />
    </div>
  </>
);
