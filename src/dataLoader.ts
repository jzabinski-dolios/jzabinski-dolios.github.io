import { Devices } from './uidb';

/**
 * Loads UI data. Manages whether to download the data more than once.
 * @todo It only needs to download data once, but if this app ever gets enter/edit functionality, we will probably want to disable cache.
 */
export class DataLoader {
  private _deviceList: Devices | null = null;

  get deviceList(): Devices | null {
    return this._deviceList;
  }

  initDeviceList = async (): Promise<void> => {
    // This only happens once, when initDeviceList is called during initialization below.
    if (!this._deviceList) {
      const rsp = await fetch('https://static.ui.com/fingerprint/ui/public.json');
      if (rsp.status === 200) {
        const rawDevices = await rsp.json();
        this._deviceList = rawDevices;
      }
    }
  };
}

const loader = new DataLoader();
// Initialize during overall app initialization.
await loader.initDeviceList();
export default loader;
