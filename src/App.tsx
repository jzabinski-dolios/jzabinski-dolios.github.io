import { ReactElement, useEffect, useState } from 'react';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { Header } from './sections/Header';
import { Splash } from './pages/Splash';
import { LocalStorageVars } from './localStorage';
import { Params } from './Routes';

function App(): ReactElement {
  const params = useParams<Params>();
  // The splash screen is currently shown for one second when the page is entered for the first time.
  // Manage splash screen.
  const [showSplash, setShowSplash] = useState<boolean>(
    // If splashShown has NOT been set, then we want to show the splash screen.
    !localStorage.getItem(LocalStorageVars.SplashShown)
  );
  const navigate = useNavigate();
  useEffect(() => {
    if (showSplash) {
      const timer = setTimeout(() => {
        setShowSplash(false);
        localStorage.setItem(LocalStorageVars.SplashShown, 'true');
        const path = params.method ?? 'list';
        navigate(`/devices/${path}`);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [showSplash, navigate, params]);
  // If the page is either closed or refreshed, remove SplashShown so that we can display it again on first load.
  useEffect(
    () =>
      addEventListener('beforeunload', () => localStorage.removeItem(LocalStorageVars.SplashShown)),
    []
  );
  return (
    <>
      {showSplash ? (
        <Splash />
      ) : (
        <>
          <Header />
          <Outlet />
        </>
      )}
    </>
  );
}

export default App;
