import { ReactElement } from 'react';
import './ListIcon.scss';

export interface ListIconProps {
  active: boolean;
}

export const ListIcon = (): ReactElement => (
  <>
    <div className="list-icon"></div>
  </>
);
