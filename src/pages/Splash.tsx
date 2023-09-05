import { ReactElement } from 'react';
import { ReactComponent as UbiquitiIcon } from '../ubi.svg';
import './Splash.scss';

/**
 * the Splash page when the app is first entered
 * @returns a ReactElement
 */
export const Splash = (): ReactElement => (
  <div className="Splash">
    <UbiquitiIcon id="icon" />
    <div id="motto">
      <span id="animate-first">Ubiquiti</span>
      <span id="animate-second">FE</span>
      <span id="animate-third">Test</span>
      <span id="animate-fourth">Assignment</span>
    </div>
  </div>
);
