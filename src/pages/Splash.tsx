import { ReactElement, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as UbiquitiIcon } from '../ubi.svg';
import './Splash.scss';

export const Splash = (): ReactElement => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => navigate('./devices'), 1000);
  }, [navigate]);
  return (
    <div className="Splash">
      <UbiquitiIcon id="icon" />
      <p id="motto">Ubiquiti FE Test Assignment</p>
    </div>
  );
};
