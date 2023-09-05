import { Devices } from './uidb';

export class DataLoader {
  private _deviceList: Devices | null = null;
  private readonly DEFAULT_RES = 84;

  get deviceList(): Devices | null {
    return this._deviceList;
  }

  initDeviceList = async (): Promise<void> => {
    // This only happens once, when initDeviceList is called during initialization.
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
await loader.initDeviceList();
export default loader;
