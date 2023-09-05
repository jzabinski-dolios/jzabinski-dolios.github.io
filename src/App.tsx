import { ReactElement, useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Header } from './sections/Header';
import { Splash } from './pages/Splash';
import { LocalStorageVars } from './localStorage';

/**
 * the root parent view. Manages the splash screen.
 * @returns a ReactElement
 */
function App(): ReactElement {
  // React
  const location = useLocation();
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
        navigate(location.pathname);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [showSplash, navigate, location]);
  // If the page is either closed or refreshed, remove SplashShown so that we can display it again on first load.
  useEffect(
    () =>
      addEventListener('beforeunload', () => localStorage.removeItem(LocalStorageVars.SplashShown)),
    []
  );
  // Template
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
