export interface Devices {
  version: string;
  devices: Array<Device>;
}

export interface Device {
  [key: string]: any;
  id?: string;
  line?: { name?: string; id?: string };
  product?: {
    [key: string]: any;
    name?: string;
    abbrev?: string;
  };
  shortnames?: Array<string>;
  icon?: {
    id?: string;
    resolutions?: Array<[number, number]>;
  };
  unifi?: {
    [key: string]: any;
    network?: {
      [key: string]: any;
      ethernetMaxSpeedMegabitsPerSecond?: number;
      radios?: {
        [key: string]: {
          [key: string]: any;
          maxPower?: number;
        };
      };
    };
    numberOfPorts?: number;
  };
}
