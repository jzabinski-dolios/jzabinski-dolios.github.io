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

export const deviceList: Devices = {
  version: '56e24a4792ccd68dd0e0eb1d0c2cf5c719160a29',
  devices: [
    {
      sysids: [],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '0da32da2-b540-4b03-92c0-4ee5e25da040'
      },
      line: { name: 'airMAX', id: 'airmax' },
      guids: [],
      uisp: {
        nameLegacy: [],
        bleServices: {},
        line: 'aircube',
        firmware: { platform: null, board: [] }
      },
      id: 'f157e9f9-8e65-4fe8-9649-de2797402292',
      product: { abbrev: 'airCube', name: 'airCube' },
      shortnames: ['ACB'],
      triplets: []
    },
    {
      sysids: ['e8f8'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '0d482159-5482-4cf7-b8ab-cfd1c798bab9'
      },
      line: { name: 'airMAX', id: 'airmax' },
      sysid: 'e8f8',
      guids: [],
      uisp: {
        nameLegacy: ['airCube'],
        bleServices: {},
        line: 'aircube',
        firmware: { platform: 'aircube', board: ['acb'] }
      },
      id: 'cdd9b268-13a2-404f-b295-9e8d0c605de0',
      product: { abbrev: 'airCube AC', name: 'airCube AC' },
      shortnames: ['ACB-AC'],
      triplets: [{ k1: 'ACB-AC' }, { k2: 'airCube AC', k1: 'ACB-AC' }]
    },
    {
      sysids: ['e8f7'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '0b6d0790-dea7-47a0-a1a6-929b85b0f247'
      },
      line: { name: 'airMAX', id: 'airmax' },
      sysid: 'e8f7',
      guids: [],
      uisp: {
        nameLegacy: ['airCube'],
        bleServices: {},
        line: 'aircube',
        firmware: { platform: 'aircube', board: ['acb'] }
      },
      id: '3e9ea70f-416b-4c66-8740-1b6d41465b87',
      product: { abbrev: 'airCube ISP', name: 'airCube ISP' },
      shortnames: ['ACB-ISP'],
      triplets: [{ k2: 'airCube ISP', k1: 'ACB-ISP' }]
    },
    {
      sysids: [],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: 'a07933f2-26f8-4170-83e3-0445a9901bb2'
      },
      line: { name: 'AirFiber', id: 'airfiber' },
      guids: [],
      uisp: {
        nameLegacy: [],
        bleServices: {},
        line: 'airfiber',
        firmware: { platform: 'airfiber', board: ['af5xhd'] }
      },
      id: 'eed7a4b4-577b-425d-a179-e6e0f571fb2e',
      product: { abbrev: 'airFiber 11FX', name: 'airFiber 11FX' },
      shortnames: ['AF-11FX', 'AF11FX'],
      triplets: []
    },
    {
      sysids: [],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '7145b7f3-2cf0-4a83-aeb0-9fe1d346d21a'
      },
      line: { name: 'AirFiber', id: 'airfiber' },
      guids: [],
      id: 'e9d2b791-482e-449c-b9f8-41b304b884fe',
      product: { abbrev: 'airFiber X 11G35 Antenna', name: 'airFiber X 11G35 Antenna' },
      shortnames: ['AirFiber X 11G35 Antenna'],
      triplets: []
    },
    {
      sysids: [],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '266cbe73-ce3c-4577-a440-a8671c0f6d8a'
      },
      line: { name: 'AirFiber', id: 'airfiber' },
      guids: [],
      uisp: {
        nameLegacy: ['airFiber 24G'],
        bleServices: {},
        line: 'airfiber',
        firmware: { platform: null, board: [] }
      },
      id: '77eded28-5f13-4494-a3a1-5e89a4f6dc43',
      product: { abbrev: 'airFiber 24', name: 'airFiber 24' },
      shortnames: ['AF24'],
      triplets: []
    },
    {
      sysids: [],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '43fd32b4-5399-42a4-bcbf-b016abb32be2'
      },
      line: { name: 'AirFiber', id: 'airfiber' },
      guids: [],
      uisp: {
        nameLegacy: [],
        bleServices: {},
        line: 'airfiber',
        firmware: { platform: null, board: [] }
      },
      id: '97dcc1fd-4e75-4627-8ad7-ab404de35c91',
      product: { abbrev: 'airFiber 24HD', name: 'airFiber 24HD' },
      shortnames: ['AF24HD'],
      triplets: []
    },
    {
      sysids: [],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '416085e0-8e0b-4b0c-a8e6-b1375b0bb5fc'
      },
      line: { name: 'AirFiber', id: 'airfiber' },
      guids: [],
      id: 'af542e33-bf95-47fb-b891-a368ccb7fa40',
      product: { abbrev: 'airFiber X 2G24-S45 Antenna', name: 'airFiber X 2G24-S45 Antenna' },
      shortnames: ['AirFiber X 2G24-S45 Antenna'],
      triplets: []
    },
    {
      sysids: [],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '8cd0e804-9c59-44a0-b52f-10788859cbd9'
      },
      line: { name: 'AirFiber', id: 'airfiber' },
      guids: [],
      uisp: {
        nameLegacy: [],
        bleServices: {},
        line: 'airfiber',
        firmware: { platform: null, board: [] }
      },
      id: '0918a2ed-a40d-4c57-be05-a0581e69cc06',
      product: { abbrev: 'airFiber 2X', name: 'airFiber 2X' },
      shortnames: ['AF2X'],
      triplets: []
    },
    {
      sysids: [],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: 'cbf68562-367a-441f-be87-80c6b51ecf54'
      },
      line: { name: 'AirFiber', id: 'airfiber' },
      guids: [],
      id: '69cc6900-d3a8-40c9-a012-a23d87dfa0b6',
      product: { abbrev: 'airFiber X 3G26-S45 Antenna', name: 'airFiber X 3G26-S45 Antenna' },
      shortnames: ['AirFiber X 3G26-S45 Antenna'],
      triplets: []
    },
    {
      sysids: [],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '81e8c7a0-378b-4ef9-b7fa-35a4a801d12f'
      },
      line: { name: 'AirFiber', id: 'airfiber' },
      guids: [],
      uisp: {
        nameLegacy: [],
        bleServices: {},
        line: 'airfiber',
        firmware: { platform: null, board: [] }
      },
      id: 'b93ab46c-dfb4-4bcd-bc7b-26da3807fb63',
      product: { abbrev: 'airFiber 4X', name: 'airFiber 4X' },
      shortnames: ['AF4X'],
      triplets: []
    },
    {
      sysids: [],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: 'f8eeff66-dd31-44b9-b242-ae9e7259a18f'
      },
      line: { name: 'AirFiber', id: 'airfiber' },
      guids: [],
      uisp: {
        nameLegacy: [],
        bleServices: {},
        line: 'airfiber',
        firmware: { platform: null, board: [] }
      },
      id: '67661428-a1ed-4f85-bb1f-339c1fdc70d7',
      product: { abbrev: 'airFiber 5', name: 'airFiber 5' },
      shortnames: ['AF5'],
      triplets: []
    },
    {
      sysids: [],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: 'c8a03889-e5a0-470e-b6e9-0e635a5cfcf9'
      },
      line: { name: 'AirFiber', id: 'airfiber' },
      guids: [],
      id: '54581e83-08bc-425c-a650-6574cd95d796',
      product: { abbrev: 'airFiber X 5G23-S45 Antenna', name: 'airFiber X 5G23-S45 Antenna' },
      shortnames: ['AirFiber X 5G23-S45 Antenna'],
      triplets: []
    },
    {
      sysids: [],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '75647c84-fb87-42e8-b95b-3cd6dae801f1'
      },
      line: { name: 'AirFiber', id: 'airfiber' },
      guids: [],
      id: 'e5e0e3dd-c340-41f6-b065-1ea235ed7d28',
      product: { abbrev: 'airFiber X 5G30-S45 Antenna', name: 'airFiber X 5G30-S45 Antenna' },
      shortnames: ['AirFiber X 5G30-S45 Antenna'],
      triplets: []
    },
    {
      sysids: [],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '6f8a665e-62e0-47e4-8b8b-1260d8636bfd'
      },
      line: { name: 'AirFiber', id: 'airfiber' },
      guids: [],
      id: '5e339e84-2203-46b7-96bd-04f1ec87e30d',
      product: { abbrev: 'airFiber X 5G34-S45 Antenna', name: 'airFiber X 5G34-S45 Antenna' },
      shortnames: ['AirFiber X 5G34-S45 Antenna'],
      triplets: []
    },
    {
      sysids: [],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '18c98ed2-2c5c-41a4-bb61-358640051e21'
      },
      line: { name: 'AirFiber', id: 'airfiber' },
      guids: [],
      uisp: {
        nameLegacy: [],
        bleServices: {},
        line: 'airfiber',
        firmware: { platform: null, board: [] }
      },
      id: '872f9258-8fea-476c-9d68-fab29a3c73ac',
      product: { abbrev: 'airFiber 5U', name: 'airFiber 5U' },
      shortnames: ['AF5U', 'AirFiber 5U'],
      triplets: []
    },
    {
      sysids: ['ae03'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '4eaff23f-26be-4764-a248-072b1ddb7a15'
      },
      line: { name: 'LTU', id: 'ltu' },
      sysid: 'ae03',
      guids: [
        '4898bbc2-1cfc-4b5a-aedc-5d9f228dbd2b',
        '5f4587c3-4819-4979-974a-e19a1557b70e',
        'ac3e0973-cfee-4d5b-935a-ffca96959296',
        'b80661db-965a-4cf1-997e-5dc9df7985bb'
      ],
      uisp: {
        nameLegacy: [],
        bleServices: {
          /* eslint-disable @typescript-eslint/naming-convention */
          'ac3e0973-cfee-4d5b-935a-ffca96959296': { mode: 'default' },
          '5f4587c3-4819-4979-974a-e19a1557b70e': { mode: 'factory' },
          'b80661db-965a-4cf1-997e-5dc9df7985bb': { mode: 'factory_legacy' },
          '4898bbc2-1cfc-4b5a-aedc-5d9f228dbd2b': { mode: 'default_legacy' }
          /* eslint-enable @typescript-eslint/naming-convention */
        },
        line: 'ltu_ptp',
        firmware: { platform: 'airfiber', board: ['af5xhd'] }
      },
      btle: {
        factoryDefault: '5f4587c3-4819-4979-974a-e19a1557b70e',
        userConfigured: 'ac3e0973-cfee-4d5b-935a-ffca96959296'
      },
      id: '79105e2d-0a58-429a-91a5-40be6ece2dae',
      product: { abbrev: 'airFiber 5XHD', name: 'airFiber 5XHD' },
      shortnames: ['AF-5XHD'],
      triplets: [{ k2: 'airFiber 5XHD', k1: 'AF-5XHD' }]
    },
    {
      sysids: ['ae04'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '5f6dedfd-efc2-4905-a8fb-c7bd2f292a48'
      },
      line: { name: 'LTU', id: 'ltu' },
      sysid: 'ae04',
      guids: ['2d8db27f-0047-4db6-af20-f39f3a947364', '51325c92-eed6-449d-aa77-62b7d202a2ae'],
      uisp: {
        nameLegacy: [],
        bleServices: {
          /* eslint-disable @typescript-eslint/naming-convention */
          '2d8db27f-0047-4db6-af20-f39f3a947364': { mode: 'default' },
          '51325c92-eed6-449d-aa77-62b7d202a2ae': { mode: 'factory' }
          /* eslint-enable @typescript-eslint/naming-convention */
        },
        line: 'ltu_ptmp_sta',
        firmware: { platform: 'airfiber', board: ['afltu'] }
      },
      btle: {
        factoryDefault: '51325c92-eed6-449d-aa77-62b7d202a2ae',
        userConfigured: '2d8db27f-0047-4db6-af20-f39f3a947364'
      },
      id: '2bc152b4-e9d0-46e4-b3c1-3f8a03705334',
      product: { abbrev: 'airFiber LTU', name: 'airFiber LTU' },
      shortnames: ['AF-LTU'],
      triplets: [{ k2: 'airFiber LTU', k1: 'AF-LTU' }]
    },
    {
      sysids: [],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: 'ed7f7932-138d-4e41-8dc9-740f6986a270'
      },
      line: { name: 'AirFiber', id: 'airfiber' },
      guids: [],
      id: '9d9dad1d-2fdb-48a8-bc27-f815bab95e2a',
      product: { abbrev: 'airFiber NxN', name: 'airFiber NxN' },
      shortnames: ['AirFiber NxN'],
      triplets: []
    },
    {
      sysids: [],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '91dfb212-549a-42be-96bb-e4b1f44bba1a'
      },
      line: { name: 'AirFiber', id: 'airfiber' },
      guids: [],
      id: 'efc1b141-11b5-4581-9d42-880ee1423ccd',
      product: { abbrev: 'airFiber X Antenna', name: 'airFiber X Antenna' },
      shortnames: ['AirFiber X Antenna'],
      triplets: []
    },
    {
      sysids: [],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '72f36f95-1ae5-45a4-9286-5ea1dfd5d275'
      },
      line: { name: 'AirFiber', id: 'airfiber' },
      guids: [],
      uisp: {
        nameLegacy: [],
        bleServices: {},
        line: 'airfiber',
        firmware: { platform: null, board: [] }
      },
      id: '3e326fae-8599-4fc7-badd-00b16912e5d1',
      product: { abbrev: 'airFiber 3X', name: 'airFiber 3X' },
      shortnames: ['AF3X'],
      triplets: []
    },
    {
      sysids: ['dc9b'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: 'c79de5e4-1048-4ede-8e4d-cbc802591fb0'
      },
      line: { name: 'AirFiber', id: 'airfiber' },
      sysid: 'dc9b',
      guids: ['0a81c6c1-f6cf-4295-8163-cdf62d8bee99', 'b663fde6-36e5-47f9-a4fe-1ea3a3d5098f'],
      uisp: {
        nameLegacy: ['AF60'],
        bleServices: {
          /* eslint-disable @typescript-eslint/naming-convention */
          '0a81c6c1-f6cf-4295-8163-cdf62d8bee99': { mode: 'factory' },
          'b663fde6-36e5-47f9-a4fe-1ea3a3d5098f': { mode: 'default' }
          /* eslint-enable @typescript-eslint/naming-convention */
        },
        line: 'airfiber_60',
        firmware: { platform: 'airmax', board: ['gp'] }
      },
      btle: {
        factoryDefault: '0a81c6c1-f6cf-4295-8163-cdf62d8bee99',
        userConfigured: 'b663fde6-36e5-47f9-a4fe-1ea3a3d5098f'
      },
      id: '86a11acd-8d87-432c-ae72-c21f26dbe469',
      product: { abbrev: 'airFiber 60', name: 'airFiber 60' },
      shortnames: ['AF60'],
      triplets: [{ k2: 'airFiber 60', k1: 'AF60' }]
    },
    {
      sysids: ['dd13', 'ac12'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '7dd640f3-cd1e-4f1d-b38f-99fd50befca8'
      },
      line: { name: 'AirFiber', id: 'airfiber' },
      sysid: 'dd13',
      guids: ['0ef741b7-5b45-4b43-86c4-fee51b70da9f', 'c9432429-0645-43ff-ae12-12a8d9c9c6d0'],
      uisp: {
        nameLegacy: ['airFiber-60HD', 'AF60HD'],
        bleServices: {
          /* eslint-disable @typescript-eslint/naming-convention */
          '0ef741b7-5b45-4b43-86c4-fee51b70da9f': { mode: 'factory' },
          'c9432429-0645-43ff-ae12-12a8d9c9c6d0': { mode: 'default' }
          /* eslint-enable @typescript-eslint/naming-convention */
        },
        line: 'airfiber_60talyn',
        firmware: { platform: 'airmax', board: ['af60'] }
      },
      btle: {
        factoryDefault: '0ef741b7-5b45-4b43-86c4-fee51b70da9f',
        userConfigured: 'c9432429-0645-43ff-ae12-12a8d9c9c6d0'
      },
      id: '558ee02b-3c2c-4ebc-8320-0d871832bf8f',
      product: { abbrev: 'airFiber 60', name: 'airFiber 60' },
      shortnames: ['AF60-HD', 'AF60HD'],
      triplets: [{ k2: 'airFiber 60 HD', k1: 'AF60HD' }]
    },
    {
      sysids: ['dc9e'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: 'b3317651-21c6-42da-a3c7-01c1c9c4dd12'
      },
      line: { name: 'AirFiber', id: 'airfiber' },
      sysid: 'dc9e',
      guids: ['1de27764-5338-4fe5-b856-c2b2cc33d821', '716dc54e-cce4-4e1d-9b40-39e2d4e50ad4'],
      uisp: {
        nameLegacy: [],
        bleServices: {
          /* eslint-disable @typescript-eslint/naming-convention */
          '716dc54e-cce4-4e1d-9b40-39e2d4e50ad4': { mode: 'default' },
          '1de27764-5338-4fe5-b856-c2b2cc33d821': { mode: 'factory' }
          /* eslint-enable @typescript-eslint/naming-convention */
        },
        line: 'airfiber_60',
        firmware: { platform: 'airmax', board: ['gp', 'gmp'] }
      },
      btle: {
        factoryDefault: '1de27764-5338-4fe5-b856-c2b2cc33d821',
        userConfigured: '716dc54e-cce4-4e1d-9b40-39e2d4e50ad4'
      },
      id: '692027fa-a0e0-44cb-a0bd-84b57da8fe30',
      product: { abbrev: 'airFiber 60', name: 'airFiber 60' },
      shortnames: ['AF60-LR'],
      triplets: [{ k2: 'airFiber 60 LR', k1: 'AF60-LR' }]
    },
    {
      sysids: ['dd11', 'ac13'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '3fc5481a-bafb-4346-9121-1a18b664efa4'
      },
      line: { name: 'AirFiber', id: 'airfiber' },
      sysid: 'dd11',
      guids: ['9984640a-4f18-4d70-81a0-214c548ff299', 'f3d8c841-7ffc-4b08-b283-ee32c493afd2'],
      uisp: {
        nameLegacy: ['airFiber-60XG', 'AF60XG'],
        bleServices: {
          /* eslint-disable @typescript-eslint/naming-convention */
          '9984640a-4f18-4d70-81a0-214c548ff299': { mode: 'factory' },
          'f3d8c841-7ffc-4b08-b283-ee32c493afd2': { mode: 'default' }
          /* eslint-enable @typescript-eslint/naming-convention */
        },
        line: 'airfiber_60talyn',
        firmware: { platform: 'airmax', board: ['af60'] }
      },
      btle: {
        factoryDefault: '9984640a-4f18-4d70-81a0-214c548ff299',
        userConfigured: 'f3d8c841-7ffc-4b08-b283-ee32c493afd2'
      },
      id: '44a989d3-1502-4574-ae05-5ddbbac71d12',
      product: { abbrev: 'airFiber 60', name: 'airFiber 60' },
      shortnames: ['AF60-XG', 'AF60XG', 'AirFiber 60 XG'],
      triplets: [
        { k2: 'airFiber 60 XG', k1: 'AF60XG' },
        { k2: 'airFiber-60XG', k1: 'AF60XG' }
      ]
    },
    {
      sysids: ['ac11'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '2123961d-7171-4484-af4d-cbe204d56862'
      },
      line: { name: 'AirFiber', id: 'airfiber' },
      sysid: 'ac11',
      guids: ['25b7f024-ee1e-42c5-a7d3-7571ed4b0942', '73c6970a-4de4-4d7b-a69e-b9e5ab846bcc'],
      uisp: {
        nameLegacy: ['WaveBridge'],
        bleServices: {
          /* eslint-disable @typescript-eslint/naming-convention */
          '25b7f024-ee1e-42c5-a7d3-7571ed4b0942': { mode: 'factory' },
          '73c6970a-4de4-4d7b-a69e-b9e5ab846bcc': { mode: 'default' }
          /* eslint-enable @typescript-eslint/naming-convention */
        },
        line: 'wave_60',
        firmware: { platform: 'airmax', board: ['xr'] }
      },
      btle: {
        factoryDefault: '25b7f024-ee1e-42c5-a7d3-7571ed4b0942',
        userConfigured: '73c6970a-4de4-4d7b-a69e-b9e5ab846bcc'
      },
      id: 'b87654ea-4d8d-49ce-9528-701f923bc2bf',
      product: { abbrev: 'airFiber 60 XR', name: 'airFiber 60 XR' },
      shortnames: ['AF60-XR'],
      triplets: [{ k2: 'airFiber 60 XR', k1: 'AF60-XR' }]
    },
    {
      sysids: ['da12'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '94255258-1085-4a07-91c5-5ed59adaf8cd'
      },
      jrf: ['217-220516'],
      line: { name: 'AmpliFi', id: 'amplifi' },
      sysid: 'da12',
      guids: ['97bf044a-ae79-4662-9556-86be477b4048', 'db26a9c5-38f6-469f-b25a-3a0835e8d858'],
      btle: {
        factoryDefault: '97bf044a-ae79-4662-9556-86be477b4048',
        userConfigured: 'db26a9c5-38f6-469f-b25a-3a0835e8d858'
      },
      id: '1d75212e-4289-4458-a093-dddfd5c9fe91',
      product: { abbrev: 'AmpliFi Alien Mesh point', name: 'AmpliFi Alien Mesh point' },
      shortnames: ['AFi-ALN-P'],
      triplets: [{ k2: 'AFi-ALN-P', k1: 'AFi-ALN-P' }]
    },
    {
      sysids: ['da11'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: 'c134faea-3d1f-457d-a008-5dbfcf2ea257'
      },
      jpa: ['D22-0064001'],
      jrf: ['217-220513'],
      line: { name: 'AmpliFi', id: 'amplifi' },
      sysid: 'da11',
      guids: ['f650001a-c7bc-48b8-b4d6-2094df0f9e96', '1de8dfb6-798a-4c85-ae3a-d1383f6489d0'],
      btle: {
        factoryDefault: 'f650001a-c7bc-48b8-b4d6-2094df0f9e96',
        userConfigured: '1de8dfb6-798a-4c85-ae3a-d1383f6489d0'
      },
      id: '7534e8c9-a757-41b9-b8df-621f47f39cb7',
      product: { abbrev: 'AmpliFi Alien Router', name: 'AmpliFi Alien Router' },
      shortnames: ['AFi-ALN-R'],
      triplets: [{ k2: 'AFi-ALN-R', k1: 'AFi-ALN-R' }]
    },
    {
      sysids: ['e9f9'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '59091973-2a6a-4e32-833d-b211e7c6811c'
      },
      line: { name: 'AmpliFi', id: 'amplifi' },
      sysid: 'e9f9',
      guids: [],
      id: 'f73ebb97-7bd5-474f-93b5-38837734f52f',
      product: { abbrev: 'AmpliFi Instant Mesh Point', name: 'AmpliFi Instant Mesh Point' },
      shortnames: ['AFi-INS-P'],
      triplets: [{ k2: 'AFi-P', k1: 'AFi-INS-P' }]
    },
    {
      sysids: ['e8f9'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: 'c26ec81d-5793-4abb-aee4-9b6c9299c24c'
      },
      jpa: ['D 18 0218 201'],
      jrf: ['201-190071'],
      line: { name: 'AmpliFi', id: 'amplifi' },
      sysid: 'e8f9',
      guids: ['8e2ac264-c025-404b-8542-4279bb20c9db', '29715f63-3ee8-4eb5-8083-57f2c3cc2290'],
      btle: {
        factoryDefault: '8e2ac264-c025-404b-8542-4279bb20c9db',
        userConfigured: '29715f63-3ee8-4eb5-8083-57f2c3cc2290'
      },
      id: '05d32f64-c32b-414a-af25-ea309af21eb2',
      product: { abbrev: 'AmpliFi Instant Router', name: 'AmpliFi Instant Router' },
      shortnames: ['AFi-INS-R'],
      triplets: [{ k2: 'AFi-R', k1: 'AFi-INS-R' }]
    },
    {
      sysids: [],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '71c8ceb7-855a-467c-813f-881188960bd5'
      },
      line: { name: 'AmpliFi', id: 'amplifi' },
      guids: [],
      id: '2e4b5d13-6e44-4f60-ba09-44bc74ffb49a',
      product: { abbrev: 'AmpliFi Mesh WiFi System', name: 'AmpliFi Mesh WiFi System' },
      shortnames: ['AmpliFi Mesh WiFi System'],
      triplets: []
    },
    {
      sysids: [],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: 'a6a90de8-7415-44cb-aa3e-183aa9106bcc'
      },
      line: { name: 'AmpliFi', id: 'amplifi' },
      guids: [],
      id: 'f1d0ff5b-c9a1-474c-94cb-faf70385969d',
      product: {
        abbrev: "AmpliFi Mesh WiFi System Gamer's Edition",
        name: "AmpliFi Mesh WiFi System Gamer's Edition"
      },
      shortnames: ["AmpliFi Mesh Wi-Fi System Gamer's Edition"],
      triplets: []
    },
    {
      sysids: ['ea22'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '02ba9992-9fa1-4e10-bbd0-c6a78afe7198'
      },
      line: { name: 'AmpliFi', id: 'amplifi' },
      sysid: 'ea22',
      guids: ['580f838e-0347-4292-a11e-0046bf44a28c', 'e6c76e7f-7c85-4beb-800e-068fd3243ae2'],
      btle: {
        factoryDefault: '580f838e-0347-4292-a11e-0046bf44a28c',
        userConfigured: 'e6c76e7f-7c85-4beb-800e-068fd3243ae2'
      },
      id: '50ffc259-3c10-49bc-8881-09e3d71a4e44',
      product: { abbrev: 'AmpliFi HD Mesh Point', name: 'AmpliFi HD Mesh Point' },
      shortnames: ['AFi-P'],
      triplets: [{ k2: 'AFi-P', k1: 'AFi-P' }]
    },
    {
      sysids: ['ea27'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: 'f1acf7e7-4fad-41ef-a126-3bb871df91bf'
      },
      line: { name: 'AmpliFi', id: 'amplifi' },
      sysid: 'ea27',
      guids: [],
      id: 'c1bf095f-fbc7-438a-874f-291898c7c269',
      product: { abbrev: 'AmpliFi HD Mesh Point', name: 'AmpliFi HD Mesh Point' },
      shortnames: ['AFi-P-G'],
      triplets: [{ k2: 'AFi-P', k1: 'AFi-P-G' }]
    },
    {
      sysids: ['ea24'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '97bd12c7-03c9-46a4-ac31-d9bb996eb477'
      },
      jrf: ['201-200458'],
      line: { name: 'AmpliFi', id: 'amplifi' },
      sysid: 'ea24',
      guids: ['a1186430-e306-4a21-a7fc-2a8c036f177b', '524d7208-e7c3-4e49-bca0-5520a7ea1252'],
      btle: {
        factoryDefault: 'a1186430-e306-4a21-a7fc-2a8c036f177b',
        userConfigured: '524d7208-e7c3-4e49-bca0-5520a7ea1252'
      },
      id: 'ef0a57ad-9d5e-44cc-bc67-cc75bb1d9429',
      product: { abbrev: 'AmpliFi HD Mesh Point', name: 'AmpliFi HD Mesh Point' },
      shortnames: ['AFi-P-HD'],
      triplets: [{ k2: 'AFi-P', k1: 'AFi-P-HD' }]
    },
    {
      sysids: ['ea23'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '12fefe74-8d72-4947-b584-f4cb9219b260'
      },
      line: { name: 'AmpliFi', id: 'amplifi' },
      sysid: 'ea23',
      guids: ['876b2d8e-608b-4b64-a72e-64cd15bd14ec', 'fb99c030-e82a-4d08-bc09-89afdc97a7fc'],
      btle: {
        factoryDefault: '876b2d8e-608b-4b64-a72e-64cd15bd14ec',
        userConfigured: 'fb99c030-e82a-4d08-bc09-89afdc97a7fc'
      },
      id: 'c757f0b2-84eb-4ce1-908b-c9cfb02bb415',
      product: { abbrev: 'AmpliFi HD Mesh Point', name: 'AmpliFi HD Mesh Point' },
      shortnames: ['AFi-P-LR'],
      triplets: [{ k2: 'AFi-P', k1: 'AFi-P-LR' }]
    },
    {
      sysids: ['e67b'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '3b4cb889-ad90-470a-aac6-fedfc7c2533e'
      },
      line: { name: 'AmpliFi', id: 'amplifi' },
      sysid: 'e67b',
      guids: ['2d0e6153-8edf-4a02-b6c9-6d5f38bc60f2', '69276eea-33df-417b-8fd4-cd038daebd3b'],
      btle: {
        factoryDefault: '2d0e6153-8edf-4a02-b6c9-6d5f38bc60f2',
        userConfigured: '69276eea-33df-417b-8fd4-cd038daebd3b'
      },
      id: '1377b26b-32cb-4829-853e-9f5242c645a2',
      product: { abbrev: 'AmpliFi PowerBox', name: 'AmpliFi PowerBox' },
      shortnames: ['AFi-PB', 'AmpliFi Power Box'],
      triplets: [{ k2: 'AFi-PB', k1: 'AFi-PB' }]
    },
    {
      sysids: ['ea33'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '65515691-0626-47ea-a7c8-a8e9c005dbdc'
      },
      jpa: ['D 18 0219 201'],
      jrf: ['201-190072'],
      line: { name: 'AmpliFi', id: 'amplifi' },
      sysid: 'ea33',
      guids: ['44ac45ab-9bb7-4f18-81fd-315753713b0d', 'c1962abe-9ec0-4c94-bb82-d0df81d0f37d'],
      btle: {
        factoryDefault: '44ac45ab-9bb7-4f18-81fd-315753713b0d',
        userConfigured: 'c1962abe-9ec0-4c94-bb82-d0df81d0f37d'
      },
      id: '2e61a336-55d9-41ca-97c4-76a6efaecaf7',
      product: { abbrev: 'AmpliFi HD Router', name: 'AmpliFi HD Router' },
      shortnames: ['AFi-R'],
      triplets: [{ k2: 'AFi-R', k1: 'AFi-R' }]
    },
    {
      sysids: ['ea37'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '03016122-d234-4566-8bd6-0816eb2509cd'
      },
      line: { name: 'AmpliFi', id: 'amplifi' },
      sysid: 'ea37',
      guids: ['0b70ceea-0094-4264-9ed6-84b8e5ad70af', 'e714595f-393c-4e41-8eb5-3f6c18716a7c'],
      btle: {
        factoryDefault: '0b70ceea-0094-4264-9ed6-84b8e5ad70af',
        userConfigured: 'e714595f-393c-4e41-8eb5-3f6c18716a7c'
      },
      id: 'd1f38eb4-4ba1-4ee3-9684-575f25e56cc1',
      product: { abbrev: 'AmpliFi HD Router', name: 'AmpliFi HD Router' },
      shortnames: ['AFi-R-BK'],
      triplets: [{ k2: 'AFi-R', k1: 'AFi-R-BK' }]
    },
    {
      sysids: ['ea38'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: 'caad5c5d-3464-492a-929f-4cbabb71ae49'
      },
      line: { name: 'AmpliFi', id: 'amplifi' },
      sysid: 'ea38',
      guids: ['5296cda4-b87d-4aea-b1bb-daa00b11bb47', '685bfcb6-69ec-4412-9726-ea680836054e'],
      btle: {
        factoryDefault: '5296cda4-b87d-4aea-b1bb-daa00b11bb47',
        userConfigured: '685bfcb6-69ec-4412-9726-ea680836054e'
      },
      id: 'b07d19d7-c454-4e15-9987-b149f370e642',
      product: { abbrev: 'AmpliFi HD Router', name: 'AmpliFi HD Router' },
      shortnames: ['AFi-R-G'],
      triplets: [{ k2: 'AFi-R', k1: 'AFi-R-G' }]
    },
    {
      sysids: ['ea36'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '2c3b469f-b1e2-4b9d-9102-194af9c8cf43'
      },
      line: { name: 'AmpliFi', id: 'amplifi' },
      sysid: 'ea36',
      guids: ['680167c4-d19a-41e7-be67-690c12e24aa8', '96cbce02-4fff-429a-b153-38ca2166f4fb'],
      btle: {
        factoryDefault: '680167c4-d19a-41e7-be67-690c12e24aa8',
        userConfigured: '96cbce02-4fff-429a-b153-38ca2166f4fb'
      },
      id: 'ffd0bf17-16d6-4f36-b93f-ef35542527cf',
      product: { abbrev: 'AmpliFi HD Router', name: 'AmpliFi HD Router' },
      shortnames: ['AFi-R-HD'],
      triplets: [{ k2: 'AFi-R', k1: 'AFi-R-HD' }]
    },
    {
      sysids: ['ea35'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '8d62fcc2-8548-4d40-b599-e467fee6442d'
      },
      line: { name: 'AmpliFi', id: 'amplifi' },
      sysid: 'ea35',
      guids: ['5abc5346-a76a-43e0-8d67-f6a6ec4ada05', '67835b2e-c250-44bb-9c2f-9f6b0f33beee'],
      btle: {
        factoryDefault: '5abc5346-a76a-43e0-8d67-f6a6ec4ada05',
        userConfigured: '67835b2e-c250-44bb-9c2f-9f6b0f33beee'
      },
      id: '365ff112-dce1-4d55-bd2c-6e171cc8798a',
      product: { abbrev: 'AmpliFi HD Router', name: 'AmpliFi HD Router' },
      shortnames: ['AFi-R-LR'],
      triplets: [{ k2: 'AFi-R', k1: 'AFi-R-LR' }]
    },
    {
      sysids: ['ee71'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: 'af03cf84-042c-4640-9da3-78555b24783a'
      },
      line: { name: 'AmpliFi', id: 'amplifi' },
      sysid: 'ee71',
      guids: [],
      id: '790e4c4f-32d6-4c75-833e-01d3fbd675db',
      product: { abbrev: 'AmpliFi SmartPlug', name: 'AmpliFi SmartPlug' },
      shortnames: ['AFi-SP'],
      triplets: [{ k2: 'AFi-SP', k1: 'AFi-SP' }]
    },
    {
      sysids: ['ea25'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '33ba7714-3b16-44fc-89b1-da9f016ef130'
      },
      line: { name: 'AmpliFi', id: 'amplifi' },
      sysid: 'ea25',
      guids: ['765d3900-cb20-4b0a-9da6-2debfd0893bd', '71bcef36-8c0f-4c16-98f8-6331512817df'],
      btle: {
        factoryDefault: '765d3900-cb20-4b0a-9da6-2debfd0893bd',
        userConfigured: '71bcef36-8c0f-4c16-98f8-6331512817df'
      },
      id: '759a9527-bc68-4f5f-8725-e62d07681491',
      product: { abbrev: 'AmpliFi Teleport', name: 'AmpliFi Teleport' },
      shortnames: ['AFi-T'],
      triplets: [{ k2: 'AFi-T', k1: 'AFi-T' }]
    },
    {
      sysids: ['e242'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: 'e90212c1-68b2-4cd7-9fdf-e3e5ff02d21d'
      },
      line: { name: 'airMAX', id: 'airmax' },
      sysid: 'e242',
      guids: [],
      uisp: {
        nameLegacy: ['AG-HP-2G16', 'AirGrid M2 HP', 'AG2-HP'],
        bleServices: {},
        line: 'airmax_m2',
        firmware: { platform: 'airmax', board: ['xm'] }
      },
      id: '9d795510-12ef-4b40-b3b1-3bc34ca1b0fc',
      product: { abbrev: 'airGrid M2 HP 2G16', name: 'airGrid M2 HP 2G16' },
      shortnames: ['AG-HP-2G16'],
      triplets: []
    },
    {
      sysids: ['e252'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '22bbcadc-fe1b-4edf-a274-64b6f588d226'
      },
      line: { name: 'airMAX', id: 'airmax' },
      sysid: 'e252',
      guids: [],
      uisp: {
        nameLegacy: ['AG-HP-2G20', 'AG2-HP'],
        bleServices: {},
        line: 'airmax_m2',
        firmware: { platform: 'airmax', board: ['xm'] }
      },
      id: 'd2bb69c0-73ca-423d-abbf-9f2001cef525',
      product: { abbrev: 'airGrid M2 HP 2G20', name: 'airGrid M2 HP 2G20' },
      shortnames: ['AG-HP-2G20'],
      triplets: []
    },
    {
      sysids: ['e245'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '2149255f-aa39-4dd5-95de-c3a707e43259'
      },
      line: { name: 'airMAX', id: 'airmax' },
      sysid: 'e245',
      guids: [],
      uisp: {
        nameLegacy: ['AG-HP-5G23', 'AG5-HP'],
        bleServices: {},
        line: 'airmax_m5',
        firmware: { platform: 'airmax', board: ['xm'] }
      },
      id: '1104e6e0-1399-45c2-a349-19a3751e160d',
      product: { abbrev: 'airGrid M5 HP', name: 'airGrid M5 HP' },
      shortnames: ['AG-HP-5G23'],
      triplets: []
    },
    {
      sysids: ['e255'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: 'eee8402b-5935-4fd0-8435-5c49c82595bd'
      },
      line: { name: 'airMAX', id: 'airmax' },
      sysid: 'e255',
      guids: [],
      uisp: {
        nameLegacy: ['AG-HP-5G27', 'AG5-HP'],
        bleServices: {},
        line: 'airmax_m5',
        firmware: { platform: 'airmax', board: ['xm'] }
      },
      id: 'c8046127-0cd4-43d1-84a3-11ea809857d6',
      product: { abbrev: 'airGrid M5 HP', name: 'airGrid M5 HP' },
      shortnames: ['AG-HP-5G27'],
      triplets: []
    },
    {
      sysids: ['e215', 'e835'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '10e3ab49-07dc-4287-93e4-cb334de97e59'
      },
      line: { name: 'airMAX', id: 'airmax' },
      sysid: 'e215',
      guids: [],
      uisp: {
        nameLegacy: [],
        bleServices: {},
        line: 'airmax_m5',
        firmware: { platform: 'airmax', board: ['xm'] }
      },
      id: 'ed61fb1c-3e1c-4559-a009-7c20ef2fa7ce',
      product: { abbrev: 'airGrid M5', name: 'airGrid M5' },
      shortnames: ['AG5'],
      triplets: []
    },
    {
      sysids: ['e4c2'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '4831047f-2945-45bc-a428-cac414b2fc1e'
      },
      line: { name: 'airMAX', id: 'airmax' },
      sysid: 'e4c2',
      guids: [],
      uisp: {
        nameLegacy: ['AirGateway'],
        bleServices: {},
        line: 'airmax_gw',
        firmware: { platform: 'airmax', board: ['AirGW'] }
      },
      id: '19b690bb-4b89-490a-afd1-9114b201adca',
      product: { abbrev: 'airGateway', name: 'airGateway' },
      shortnames: ['AGW'],
      triplets: [{ k2: 'airGateway', k1: 'AGW' }]
    },
    {
      sysids: [],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: 'c700d141-0cca-4366-9fe5-adeaf489d4e4'
      },
      line: { name: 'airMAX', id: 'airmax' },
      guids: [],
      uisp: {
        nameLegacy: ['airGateway Installer', 'AGW-Installer'],
        bleServices: {},
        line: 'airmax_gw',
        firmware: { platform: 'airmax', board: ['AirGWP'] }
      },
      id: 'a079d6e5-c91a-42ee-8511-08ae5079d504',
      product: {
        abbrev: 'airGateway Professional Installer',
        name: 'airGateway Professional Installer'
      },
      shortnames: ['AGW-Installer'],
      triplets: []
    },
    {
      sysids: ['e4d2'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '38e6ed7d-b7cf-4f9a-b63a-2e2e0fd09d93'
      },
      line: { name: 'airMAX', id: 'airmax' },
      sysid: 'e4d2',
      guids: [],
      uisp: {
        nameLegacy: ['AirGateway LR', 'Air Gateway LR'],
        bleServices: {},
        line: 'airmax_gw',
        firmware: { platform: 'airmax', board: ['AirGW'] }
      },
      id: '1ed6a2b4-209a-494a-b497-e0aca1801597',
      product: { abbrev: 'airGateway LR', name: 'airGateway LR' },
      shortnames: ['AGW-LR'],
      triplets: [{ k2: 'airGateway-LR', k1: 'AGW-LR' }, { k1: 'AGW-LR' }]
    },
    {
      sysids: ['e4c7'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: 'a5f2a8c7-cddb-43aa-857f-3e6eed2a30ce'
      },
      line: { name: 'airMAX', id: 'airmax' },
      sysid: 'e4c7',
      guids: [],
      uisp: {
        nameLegacy: ['AGW-Pro'],
        bleServices: {},
        line: 'airmax_gw',
        firmware: { platform: 'airmax', board: ['AirGWP'] }
      },
      id: '70ed55d6-fe28-4035-a681-e847ba99823e',
      product: { abbrev: 'airGateway Professional', name: 'airGateway Professional' },
      shortnames: ['AGW-Pro'],
      triplets: [{ k1: 'AGW-Pro' }, { k2: 'airGateway-Pro', k1: 'AGW-Pro' }]
    },
    {
      sysids: [],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '63408ba9-692b-4675-a9de-a1d5c240a752'
      },
      line: { name: 'airMAX', id: 'airmax' },
      guids: [],
      id: '62b0db15-239c-410a-855c-3b174577257c',
      product: {
        abbrev: 'airMAX Sector Antenna 2.4Ghz 15-120',
        name: 'airMAX Sector Antenna 2.4Ghz 15-120'
      },
      shortnames: ['AirMAX Sector Antenna 2.4Ghz 15-120'],
      triplets: []
    },
    {
      sysids: [],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: 'fd76be91-75e2-47a9-8ce7-0f6290074ffb'
      },
      line: { name: 'airMAX', id: 'airmax' },
      guids: [],
      id: 'dc1c2700-f9af-49c9-90ea-4eaa116c0faf',
      product: {
        abbrev: 'airMAX Sector Antenna 2.4Ghz 16-90',
        name: 'airMAX Sector Antenna 2.4Ghz 16-90'
      },
      shortnames: ['AirMAX Sector Antenna 2.4Ghz 16-90'],
      triplets: []
    },
    {
      sysids: [],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '632996d4-2451-4eaf-b867-abc3e0fb20bb'
      },
      line: { name: 'airMAX', id: 'airmax' },
      guids: [],
      id: 'b0e87a13-c73d-46dd-be3d-60582805a7ba',
      product: {
        abbrev: 'airMAX Sector Antenna 3Ghz 18-120',
        name: 'airMAX Sector Antenna 3Ghz 18-120'
      },
      shortnames: ['AirMAX Sector Antenna 3Ghz 18-120'],
      triplets: []
    },
    {
      sysids: [],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '2b387b19-9acb-43c9-a15e-a02a36ac37cf'
      },
      line: { name: 'airMAX', id: 'airmax' },
      guids: [],
      id: '44d7fc0a-1b6b-42ba-b67a-036745972180',
      product: { abbrev: 'airMAX AC Sector Antenna', name: 'airMAX AC Sector Antenna' },
      shortnames: ['AirMAX AC Sector Antenna'],
      triplets: []
    },
    {
      sysids: [],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '66e513cd-f2ac-42cf-9639-fb9b4e7e48ad'
      },
      line: { name: 'airMAX', id: 'airmax' },
      guids: [],
      id: '88dbf23a-0eec-4cd6-88fa-47d7c573d711',
      product: {
        abbrev: 'airMAX Sector Antenna 5Ghz 16-120',
        name: 'airMAX Sector Antenna 5Ghz 16-120'
      },
      shortnames: ['AirMAX Sector Antenna 5Ghz 16-120'],
      triplets: []
    },
    {
      sysids: [],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '14aa2b23-8ec4-454c-8083-4dd1b69a253d'
      },
      line: { name: 'airMAX', id: 'airmax' },
      guids: [],
      id: '647ed239-abf3-4cca-9de5-8438ee3a68e3',
      product: {
        abbrev: 'airMAX Sector Antenna 5Ghz 17-90',
        name: 'airMAX Sector Antenna 5Ghz 17-90'
      },
      shortnames: ['AirMAX Sector Antenna 5Ghz 17-90'],
      triplets: []
    },
    {
      sysids: [],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '54dc0660-03dd-4662-9141-885ff7871c74'
      },
      line: { name: 'airMAX', id: 'airmax' },
      guids: [],
      id: 'ab627777-d517-48a2-a859-58cfe2fde2de',
      product: {
        abbrev: 'airMAX Sector Antenna 5Ghz 19-120',
        name: 'airMAX Sector Antenna 5Ghz 19-120'
      },
      shortnames: ['AirMAX Sector Antenna 5Ghz 19-120'],
      triplets: []
    },
    {
      sysids: [],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: 'd784ed40-4bee-45c3-b1da-11a2f95eb457'
      },
      line: { name: 'airMAX', id: 'airmax' },
      guids: [],
      id: '1d7842db-24c2-41e5-9432-5e8fbc6699e8',
      product: {
        abbrev: 'airMAX Sector Antenna 5Ghz 20-90',
        name: 'airMAX Sector Antenna 5Ghz 20-90'
      },
      shortnames: ['AirMAX Sector Antenna 5Ghz 20-90'],
      triplets: []
    },
    {
      sysids: [],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: 'e2fc90db-0fc5-4514-bc1a-55c82bfa5643'
      },
      line: { name: 'airMAX', id: 'airmax' },
      guids: [],
      id: '8126471d-185e-4244-9502-348a538733a3',
      product: {
        abbrev: 'airMAX Sector Antenna  900Mhz',
        name: 'airMAX Sector Antenna  900Mhz'
      },
      shortnames: ['AirMAX Sector Antenna  900Mhz'],
      triplets: []
    },
    {
      sysids: [],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '3fdb84b6-661d-438e-9796-83bf2c02678a'
      },
      line: { name: 'airMAX', id: 'airmax' },
      guids: [],
      id: '25eee978-79b1-48e4-9a51-7cdfb9895e0d',
      product: { abbrev: 'airMAX Omni  2Ghz-10', name: 'airMAX Omni  2Ghz-10' },
      shortnames: ['AirMAX Omni  2Ghz-10'],
      triplets: []
    },
    {
      sysids: [],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '7a7d0e4a-d51b-4c52-8b1e-1a6a820575fe'
      },
      line: { name: 'airMAX', id: 'airmax' },
      guids: [],
      id: '3625b85a-5f87-443d-a5a8-dfc11fb0d577',
      product: { abbrev: 'airMAX Omni  2.4Ghz-13', name: 'airMAX Omni  2.4Ghz-13' },
      shortnames: ['AirMAX Omni  2.4Ghz-13'],
      triplets: []
    },
    {
      sysids: [],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '01bec49d-a5c5-4dab-af04-dd9cbaadb22c'
      },
      line: { name: 'airMAX', id: 'airmax' },
      guids: [],
      id: 'd1e25b63-be56-45e2-9587-25e84f5a7011',
      product: { abbrev: 'airMAX Omni  3Ghz-12', name: 'airMAX Omni  3Ghz-12' },
      shortnames: ['AirMAX Omni  3Ghz-12'],
      triplets: []
    },
    {
      sysids: [],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '8397955c-cce7-40c2-989b-2a471da289dd'
      },
      line: { name: 'airMAX', id: 'airmax' },
      guids: [],
      id: 'c5ced596-665b-4c6f-90bf-bb2be1015d6a',
      product: { abbrev: 'airMAX Omni  5Ghz-10', name: 'airMAX Omni  5Ghz-10' },
      shortnames: ['AirMAX Omni  5Ghz-10'],
      triplets: []
    },
    {
      sysids: [],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '38cf8e86-ffd1-4b08-9bb4-edd349a3a8ad'
      },
      line: { name: 'airMAX', id: 'airmax' },
      guids: [],
      id: '29072a8f-7566-4ceb-b449-cb213b1bf5f7',
      product: { abbrev: 'airMAX Omni  5Ghz-13', name: 'airMAX Omni  5Ghz-13' },
      shortnames: ['AirMAX Omni  5Ghz-13'],
      triplets: []
    },
    {
      sysids: [],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: 'c120f339-2ff9-4169-bc09-84d8ee094811'
      },
      line: { name: 'airMAX', id: 'airmax' },
      guids: [],
      id: '0c68c7bb-20af-49f0-9303-6de76995ed47',
      product: { abbrev: 'airPRISM HD Sector Antenna', name: 'airPRISM HD Sector Antenna' },
      shortnames: ['AirPrism HD Sector Antenna'],
      triplets: []
    },
    {
      sysids: [],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '72f52fd6-9b06-47bb-9482-2387a6d30843'
      },
      line: { name: 'UniFi Protect', id: 'unifi-protect' },
      guids: [],
      id: '5b5059ce-850e-41c5-8727-65aebb5b6926',
      product: { abbrev: 'airCam Mini', name: 'airCam Mini' },
      shortnames: ['Ubiquiti AirCam Mini'],
      triplets: []
    },
    {
      sysids: ['e2c5'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '8cf569b1-2f27-448b-8300-89bc2d72b9dc'
      },
      line: { name: 'airMAX', id: 'airmax' },
      sysid: 'e2c5',
      guids: [],
      uisp: {
        nameLegacy: ['B-DB-AC', 'BAC'],
        bleServices: {},
        line: 'airmax_ac25',
        firmware: { platform: 'airmax', board: ['2wa'] }
      },
      id: '304fe953-8c62-4ecb-badc-fa9d150161c9',
      product: { abbrev: 'Bullet AC', name: 'Bullet AC' },
      shortnames: ['B-DB-AC'],
      triplets: [{ k2: 'Bullet AC', k1: 'B-DB-AC' }]
    },
    {
      sysids: ['e2d2'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '34c5ceec-05bd-43cf-9fc9-5d16cc12358c'
      },
      line: { name: 'airMAX', id: 'airmax' },
      sysid: 'e2d2',
      guids: [],
      uisp: {
        nameLegacy: [],
        bleServices: {},
        line: 'airmax_m2',
        firmware: { platform: 'airmax', board: ['xm'] }
      },
      id: '067752ff-76fe-4a4a-a8aa-49887af63f3c',
      product: { abbrev: 'Bullet M2 Titanium', name: 'Bullet M2 Titanium' },
      shortnames: ['B2T'],
      triplets: []
    },
    {
      sysids: ['e205'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: 'c6730374-bd06-4be1-a6e8-db13b7efa2c7'
      },
      line: { name: 'airMAX', id: 'airmax' },
      sysid: 'e205',
      guids: [],
      uisp: {
        nameLegacy: ['Bullet M5'],
        bleServices: {},
        line: 'airmax_m5',
        firmware: { platform: 'airmax', board: ['xm'] }
      },
      id: 'a923c19d-1050-4853-b148-403b9ad67a57',
      product: { abbrev: 'Bullet M5 HP', name: 'Bullet M5 HP' },
      shortnames: ['B5N'],
      triplets: [{ k2: 'Bullet M5', k1: 'B5N' }]
    },
    {
      sysids: ['e2d5'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: 'a8fc33a7-bbaa-4df5-8f32-d72c88a6dbbb'
      },
      line: { name: 'airMAX', id: 'airmax' },
      sysid: 'e2d5',
      guids: [],
      uisp: {
        nameLegacy: [],
        bleServices: {},
        line: 'airmax_m5',
        firmware: { platform: 'airmax', board: ['xm'] }
      },
      id: '49429ddc-7e0a-4ee9-9dbe-c83ff56d9ee4',
      product: { abbrev: 'Bullet M5 Titanium', name: 'Bullet M5 Titanium' },
      shortnames: ['B5T'],
      triplets: []
    },
    {
      sysids: ['c2a5'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '45eb6eeb-a1ca-4721-918e-25449fbf39be'
      },
      line: { name: 'airMAX', id: 'airmax' },
      sysid: 'c2a5',
      guids: [],
      uisp: {
        nameLegacy: ['Bullet5 HP'],
        bleServices: {},
        line: 'airmax_m5',
        firmware: { platform: null, board: [] }
      },
      id: '7820deea-2b8c-4e5c-b53c-386040efb534',
      product: { abbrev: 'Bullet M5 HP', name: 'Bullet M5 HP' },
      shortnames: ['BS5-HP'],
      triplets: []
    },
    {
      sysids: ['e2c7'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: 'c435fe47-e902-4a97-a33d-0ac8b241fe26'
      },
      line: { name: 'airMAX', id: 'airmax' },
      sysid: 'e2c7',
      guids: [],
      uisp: {
        nameLegacy: ['Bullet AC IP67'],
        bleServices: {},
        line: 'airmax_ac25',
        firmware: { platform: 'airmax', board: ['2wa'] }
      },
      id: 'bc9da25b-c94a-4a9f-81cd-e15910c8566a',
      product: { abbrev: 'Bullet AC-IP67', name: 'Bullet AC-IP67' },
      shortnames: ['BulletAC-IP67'],
      triplets: [{ k2: 'Bullet AC IP67', k1: 'BulletAC-IP67' }]
    },
    {
      sysids: ['e2c3', 'e2c4', 'e202'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '5c2c11b0-639a-4ea7-8414-352090e29dd1'
      },
      jrf: ['006-000231'],
      line: { name: 'airMAX', id: 'airmax' },
      sysid: 'e2c3',
      guids: [],
      uisp: {
        nameLegacy: ['Bullet M2'],
        bleServices: {},
        line: 'airmax_m2',
        firmware: { platform: 'airmax', board: ['xm'] }
      },
      id: 'e74aee3a-e796-417a-be65-47553d9001c5',
      product: { abbrev: 'Bullet M2 HP', name: 'Bullet M2 HP' },
      shortnames: ['B2N'],
      triplets: [{ k1: 'B2N' }, { k2: 'Bullet M2', k1: 'B2N' }]
    },
    {
      images: { default: 'da2f11bd5bda511df83c3d0fc792b2bb' },
      sysids: ['ea00'],
      icon: {
        resolutions: [
          [25, 25],
          [32, 32],
          [51, 51],
          [64, 64],
          [101, 101],
          [128, 128],
          [129, 129],
          [256, 256],
          [257, 257],
          [512, 512],
          [1000, 1000]
        ],
        id: 'c6600a2a-6dcc-4330-a452-735252aa5eb4'
      },
      line: { name: 'UniFi', id: 'unifi-network' },
      sysid: 'ea00',
      guids: [],
      id: '164dc6af-ee51-4644-afe0-15c472c769f4',
      deviceType: 'console',
      product: { abbrev: 'Cloud Console', name: 'Cloud Console' },
      shortnames: ['CLOUD', 'CLOUD-CONSOLE'],
      triplets: []
    },
    {
      sysids: ['e931'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: 'd7b20b4f-ce6b-483d-98af-d171f31e7677'
      },
      line: { name: 'airMAX', id: 'airmax' },
      sysid: 'e931',
      guids: [],
      uisp: {
        nameLegacy: ['CRMPoint'],
        bleServices: {},
        line: 'airmax',
        firmware: { platform: null, board: [] }
      },
      id: 'af058299-e925-4d93-81be-84bd3a5dcd80',
      product: { abbrev: 'CRM Point', name: 'CRM Point' },
      shortnames: ['CRM-P'],
      triplets: []
    },
    {
      sysids: ['eef2'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: 'b83475be-3836-4ba0-86f7-6d630855ffdc'
      },
      line: { name: 'EdgeMAX', id: 'edgemax' },
      sysid: 'eef2',
      guids: [],
      uisp: {
        nameLegacy: ['EdgePower-24V-72W'],
        bleServices: {},
        line: 'edge_power',
        firmware: { platform: 'edgepower', board: ['EPX'] }
      },
      id: '36655d88-9d2a-4e07-8e6e-95e5eb601fd2',
      product: { abbrev: 'EdgePower 24V 72W', name: 'EdgePower 24V 72W' },
      shortnames: ['EP-24V-72W'],
      triplets: [{ k2: 'EdgePower 24V-72W', k1: 'EP-24V-72W' }]
    },
    {
      sysids: ['eef1'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '48a28a3f-8954-4237-b960-9f4e1164c883'
      },
      line: { name: 'EdgeMAX', id: 'edgemax' },
      sysid: 'eef1',
      guids: [],
      uisp: {
        nameLegacy: [],
        bleServices: {},
        line: 'edge_power',
        firmware: { platform: 'edgepower', board: ['EP'] }
      },
      id: 'd0c26d5d-613a-4018-9493-6b189ab955de',
      product: { abbrev: 'EdgePower 54V 150W', name: 'EdgePower 54V 150W' },
      shortnames: ['EP-54V-150W'],
      triplets: [
        { k2: 'EdgePower 54V-150W', k1: 'EP-54V-150W' },
        { k2: 'EdgePower-54V-150W', k1: 'EP-54V-150W' }
      ]
    },
    {
      sysids: ['eef3'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '8a787d4c-4cf8-4599-b9b8-b583b6d7d6d2'
      },
      line: { name: 'EdgeMAX', id: 'edgemax' },
      sysid: 'eef3',
      guids: [],
      uisp: {
        nameLegacy: [],
        bleServices: {},
        line: 'edge_power',
        firmware: { platform: 'edgepower', board: ['EPX'] }
      },
      id: 'f9024342-6a21-43d1-8eb6-526bb28aa56a',
      product: { abbrev: 'EdgePower 54V 72W', name: 'EdgePower 54V 72W' },
      shortnames: ['EP-54V-72W'],
      triplets: [{ k2: 'EdgePower 54V-72W', k1: 'EP-54V-72W' }]
    },
    {
      sysids: [],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: 'a4c97faf-21b0-475e-abaf-6ae6b162d6d3'
      },
      line: { name: 'EdgeMAX', id: 'edgemax' },
      guids: [],
      id: 'b0b3a9e1-cc69-49f8-a5ef-54a7ec754715',
      product: { abbrev: 'EdgeMAX EdgePoint R6', name: 'EdgeMAX EdgePoint R6' },
      shortnames: ['EP-6P'],
      triplets: []
    },
    {
      sysids: ['ee43'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '762f014c-eeb1-462b-8b52-f9270c8b49a2'
      },
      line: { name: 'EdgeMAX', id: 'edgemax' },
      sysid: 'ee43',
      guids: [],
      uisp: {
        nameLegacy: ['EdgePoint Router 6-Port'],
        bleServices: {},
        line: 'edge_point_router',
        firmware: { platform: 'edgerouter', board: ['e50'] }
      },
      id: 'c23aff77-505b-4fee-97d9-e5aa98b2abec',
      product: { abbrev: 'EdgePoint R6', name: 'EdgePoint R6' },
      shortnames: ['EP-R6'],
      triplets: [{ k1: 'EP-R6' }]
    },
    {
      sysids: ['ee13'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '7be4c1b7-98f0-43b9-aa3a-cea9f8408329'
      },
      line: { name: 'EdgeMAX', id: 'edgemax' },
      sysid: 'ee13',
      guids: [],
      uisp: {
        nameLegacy: ['EdgePoint Router 8-Port'],
        bleServices: {},
        line: 'edge_point_router',
        firmware: { platform: 'edgerouter', board: ['e200'] }
      },
      id: '118938f6-c651-41e6-b8cd-d574ae881d41',
      product: { abbrev: 'EdgePoint R8', name: 'EdgePoint R8' },
      shortnames: ['EP-R8'],
      triplets: [{ k1: 'EP-R8' }]
    },
    {
      sysids: ['eea9'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: 'f43fbade-7472-4418-8492-025d708c2b1d'
      },
      line: { name: 'EdgeMAX', id: 'edgemax' },
      sysid: 'eea9',
      guids: [],
      uisp: {
        nameLegacy: [],
        bleServices: {},
        line: 'edge_point_switch',
        firmware: { platform: null, board: [] }
      },
      id: '1c5a6632-7ed7-4c03-b585-8f79bbb42688',
      product: { abbrev: 'EdgePoint S16', name: 'EdgePoint S16' },
      shortnames: ['EP-S16'],
      triplets: [{ k1: 'EP-S16' }, { k2: 'EdgePoint S16', k1: 'EP-S16' }]
    },
    {
      sysids: [],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '45036a5a-5a2d-4a89-bd9f-6dab86158db2'
      },
      line: { name: 'EdgeMAX', id: 'edgemax' },
      guids: [],
      id: 'e9096646-70ae-47fd-b8cd-e26d71856540',
      product: { abbrev: 'EdgeMAX EdgeRouter 10X', name: 'EdgeMAX EdgeRouter 10X' },
      shortnames: ['ER-10-XG'],
      triplets: []
    },
    {
      sysids: ['ee46'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '61b71f51-e762-4cbf-bde1-92ceb6f5edf9'
      },
      line: { name: 'EdgeMAX', id: 'edgemax' },
      sysid: 'ee46',
      guids: ['0b3db31c-db2b-4811-bc2d-8c960f0319fd', 'e6c39d85-3145-41e3-8c35-265bdc213981'],
      uisp: {
        nameLegacy: [],
        bleServices: {
          /* eslint-disable @typescript-eslint/naming-convention */
          'e6c39d85-3145-41e3-8c35-265bdc213981': { mode: 'default' },
          '0b3db31c-db2b-4811-bc2d-8c960f0319fd': { mode: 'factory' }
          /* eslint-enable @typescript-eslint/naming-convention */
        },
        line: 'edge_router',
        firmware: { platform: 'edgerouter', board: ['e50'] }
      },
      btle: {
        factoryDefault: '0b3db31c-db2b-4811-bc2d-8c960f0319fd',
        userConfigured: 'e6c39d85-3145-41e3-8c35-265bdc213981'
      },
      id: '4cacb80d-50c1-40af-8a80-6da84cd25c5f',
      product: { abbrev: 'EdgeRouter 10X', name: 'EdgeRouter 10X' },
      shortnames: ['ER-10-X', 'ER-10X'],
      triplets: [{ k1: 'ER-10X' }]
    },
    {
      sysids: ['ee62'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '94417c01-26f1-4972-940e-72f87d33bd70'
      },
      line: { name: 'EdgeMAX', id: 'edgemax' },
      sysid: 'ee62',
      guids: [],
      uisp: {
        nameLegacy: [],
        bleServices: {},
        line: 'edge_router',
        firmware: { platform: 'edgerouter', board: ['e300'] }
      },
      id: 'caf4a671-5eeb-4b54-b9d1-a3449e8a3394',
      product: { abbrev: 'EdgeRouter 12', name: 'EdgeRouter 12' },
      shortnames: ['ER-12'],
      triplets: [{ k1: 'ER-12' }]
    },
    {
      sysids: ['ee63'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: 'dd77e9cf-12ef-4ced-8505-263c5ec2123b'
      },
      line: { name: 'EdgeMAX', id: 'edgemax' },
      sysid: 'ee63',
      guids: [],
      uisp: {
        nameLegacy: [],
        bleServices: {},
        line: 'edge_router',
        firmware: { platform: 'edgerouter', board: ['e300'] }
      },
      id: 'cf609af5-f80e-4ba0-ab3d-b653843b184e',
      product: { abbrev: 'EdgeRouter 12P', name: 'EdgeRouter 12P' },
      shortnames: ['ER-12P'],
      triplets: [{ k1: 'ER-12P' }]
    },
    {
      sysids: ['ee60'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '7fb11401-5f46-48b1-b53d-656bb501a212'
      },
      line: { name: 'EdgeMAX', id: 'edgemax' },
      sysid: 'ee60',
      guids: [],
      uisp: {
        nameLegacy: [],
        bleServices: {},
        line: 'edge_router',
        firmware: { platform: 'edgerouter', board: ['e300'] }
      },
      id: '6647fbed-7890-406f-870e-dd374591a218',
      product: { abbrev: 'EdgeRouter 4', name: 'EdgeRouter 4' },
      shortnames: ['ER-4'],
      triplets: [{ k1: 'ER-4' }]
    },
    {
      sysids: ['ee61'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '5678c887-3162-4aef-a0c7-3c45f8f47a5f'
      },
      line: { name: 'EdgeMAX', id: 'edgemax' },
      sysid: 'ee61',
      guids: [],
      uisp: {
        nameLegacy: [],
        bleServices: {},
        line: 'edge_router',
        firmware: { platform: 'edgerouter', board: ['e300'] }
      },
      id: '91f62eaa-a062-401a-a347-74c3863c4894',
      product: { abbrev: 'EdgeRouter 6P', name: 'EdgeRouter 6P' },
      shortnames: ['ER-6P'],
      triplets: [{ k1: 'ER-6P' }]
    },
    {
      sysids: ['ee12'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '89d5d131-bc72-410c-8c1a-9e16b4a31a4d'
      },
      line: { name: 'EdgeMAX', id: 'edgemax' },
      sysid: 'ee12',
      guids: [],
      uisp: {
        nameLegacy: ['EdgeRouter'],
        bleServices: {},
        line: 'edge_router',
        firmware: { platform: 'edgerouter', board: ['e200'] }
      },
      id: '30682ab6-4156-4b8e-9168-11042fd64d5d',
      product: { abbrev: 'EdgeRouter 8', name: 'EdgeRouter 8' },
      shortnames: ['ER-8', 'EdgeMAX EdgeRouter 8'],
      triplets: [{ k1: 'ER-8' }]
    },
    {
      sysids: ['ee51'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '4c0b06c3-3ff1-435b-acfe-7e72347a5ece'
      },
      line: { name: 'EdgeMAX', id: 'edgemax' },
      sysid: 'ee51',
      guids: [],
      uisp: {
        nameLegacy: [],
        bleServices: {},
        line: 'edge_router',
        firmware: { platform: 'edgerouter', board: ['e1000'] }
      },
      id: '257026a2-f5ac-4e46-a806-c8150c1ad177',
      product: { abbrev: 'EdgeRouter Infinity', name: 'EdgeRouter Infinity' },
      shortnames: ['ER-8-XG'],
      triplets: [{ k1: 'ER-8-XG' }]
    },
    {
      sysids: ['ee41'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '5f1fe772-6277-4266-9d57-886872f36705'
      },
      line: { name: 'EdgeMAX', id: 'edgemax' },
      sysid: 'ee41',
      guids: [],
      uisp: {
        nameLegacy: [],
        bleServices: {},
        line: 'edge_router',
        firmware: { platform: 'edgerouter', board: ['e50'] }
      },
      id: '61ebaede-7605-4d15-b8c3-f404f126966e',
      product: { abbrev: 'EdgeRouter X', name: 'EdgeRouter X' },
      shortnames: ['ER-X'],
      triplets: [{ k1: 'ER-X' }, { k2: 'EdgeRouter X 5-port', k1: 'ER-X' }]
    },
    {
      sysids: ['ee42'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '51be70ba-ea07-4689-a3be-226881d3f7cb'
      },
      line: { name: 'EdgeMAX', id: 'edgemax' },
      sysid: 'ee42',
      guids: [],
      uisp: {
        nameLegacy: [],
        bleServices: {},
        line: 'edge_router',
        firmware: { platform: 'edgerouter', board: ['e50'] }
      },
      id: 'd5921431-96e2-4b44-b62c-d0d7587e1222',
      product: { abbrev: 'EdgeRouter X SFP', name: 'EdgeRouter X SFP' },
      shortnames: ['ER-X-SFP'],
      triplets: [{ k1: 'ER-X-SFP' }, { k2: 'EdgeRouter X SFP 6-port', k1: 'ER-X-SFP' }]
    },
    {
      sysids: ['ee01'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: 'bb660a42-f0ff-485b-8516-a7490da6ce92'
      },
      line: { name: 'EdgeMAX', id: 'edgemax' },
      sysid: 'ee01',
      guids: [],
      uisp: {
        nameLegacy: ['EdgeRouter Lite 3-Port'],
        bleServices: {},
        line: 'edge_router',
        firmware: { platform: 'edgerouter', board: ['e100'] }
      },
      id: 'fce5dd1f-bf83-4952-9b0c-4d8b47735b55',
      product: { abbrev: 'EdgeRouter Lite', name: 'EdgeRouter Lite' },
      shortnames: ['ERLite-3'],
      triplets: [{ k1: 'ERLite-3' }]
    },
    {
      sysids: ['ee02'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '32fba9a9-32fc-4c3c-a857-2dda19258f0d'
      },
      line: { name: 'EdgeMAX', id: 'edgemax' },
      sysid: 'ee02',
      guids: [],
      uisp: {
        nameLegacy: ['EdgeRouter PoE 5-Port', 'EdgeRouter PoE'],
        bleServices: {},
        line: 'edge_router',
        firmware: { platform: 'edgerouter', board: ['e100'] }
      },
      id: 'e5745c6b-0f62-4cdf-93ef-88459900a010',
      product: { abbrev: 'EdgeRouter 5 PoE', name: 'EdgeRouter 5 PoE' },
      shortnames: ['ERPoe-5'],
      triplets: [{ k1: 'ERPoe-5' }]
    },
    {
      sysids: ['ee11'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '08c9e2a0-0d93-4252-a148-66eebd438bf1'
      },
      line: { name: 'EdgeMAX', id: 'edgemax' },
      sysid: 'ee11',
      guids: [],
      uisp: {
        nameLegacy: ['EdgeRouter Pro 8-Port', 'EdgeRouter Pro'],
        bleServices: {},
        line: 'edge_router',
        firmware: { platform: 'edgerouter', board: ['e200'] }
      },
      id: '82b28a62-509e-4aa9-8832-43d18ee86e29',
      product: { abbrev: 'EdgeRouter 8 Professional', name: 'EdgeRouter 8 Professional' },
      shortnames: ['ERPro-8'],
      triplets: [{ k1: 'ERPro-8' }]
    },
    {
      sysids: ['eeb6'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '04a17349-e53b-4d04-b680-3ec48b2b64dc'
      },
      line: { name: 'EdgeMAX', id: 'edgemax' },
      sysid: 'eeb6',
      guids: [],
      uisp: {
        nameLegacy: [],
        bleServices: {},
        line: 'edge_switch_x',
        firmware: { platform: 'edgeswitch', board: ['esx'] }
      },
      id: '8c912983-8b49-411d-a386-7592a323b819',
      product: { abbrev: 'EdgeSwitch 10X', name: 'EdgeSwitch 10X' },
      shortnames: ['ES-10X', 'EdgeSwitch 10X'],
      triplets: [{ k2: 'EdgeSwitch 10X', k1: 'ES-10X' }]
    },
    {
      sysids: ['eeb5'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '82f47fb8-4980-4f86-a92b-2de84961f4ed'
      },
      line: { name: 'EdgeMAX', id: 'edgemax' },
      sysid: 'eeb5',
      guids: [],
      uisp: {
        nameLegacy: [],
        bleServices: {},
        line: 'edge_switch_x',
        firmware: { platform: 'edgeswitch', board: ['esx'] }
      },
      id: '23ba6ab9-eaa2-449e-800a-c6a368d52d51',
      product: { abbrev: 'EdgeSwitch 10XP', name: 'EdgeSwitch 10XP' },
      shortnames: ['ES-10XP'],
      triplets: [{ k2: 'EdgeSwitch 10XP', k1: 'ES-10XP' }]
    },
    {
      sysids: ['eea8'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '251ed170-e28d-4490-9456-0ccc01e98437'
      },
      line: { name: 'EdgeMAX', id: 'edgemax' },
      sysid: 'eea8',
      guids: [],
      uisp: {
        nameLegacy: [],
        bleServices: {},
        line: 'edge_switch',
        firmware: { platform: 'edgeswitch', board: ['eswh'] }
      },
      id: 'bc73c67b-94b8-4f57-a09f-11fb5bbebe9b',
      product: { abbrev: 'EdgeSwitch 12 Fiber', name: 'EdgeSwitch 12 Fiber' },
      shortnames: ['ES-12F'],
      triplets: [
        { k2: 'EdgeSwitch 12 Fiber', k1: 'ES-12F' },
        { k2: 'EdgeSwitch 12-Port Fiber', k1: 'ES-12F' },
        { k1: 'ES-12F' }
      ]
    },
    {
      sysids: ['eea7'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '9a0b7324-cd78-487f-93b5-45cdb87f2639'
      },
      line: { name: 'EdgeMAX', id: 'edgemax' },
      sysid: 'eea7',
      guids: [],
      uisp: {
        nameLegacy: ['EdgeSwitch 16-Port 150W'],
        bleServices: {},
        line: 'edge_switch',
        firmware: { platform: 'edgeswitch', board: ['eswh'] }
      },
      id: 'be7414cf-abcf-4e05-b4ab-b9fa17027120',
      product: { abbrev: 'EdgeSwitch 16 150W', name: 'EdgeSwitch 16 150W' },
      shortnames: ['ES-16-150W'],
      triplets: [
        { k1: 'ES-16-150W' },
        { k2: 'EdgeSwitch 16 150W', k1: 'ES-16-150W' },
        { k2: 'EdgeSwitch 16-Port 150W', k1: 'ES-16-150W' }
      ]
    },
    {
      sysids: ['eeaa'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '136a5b7a-a762-4927-bc17-c94b7ffdb6d7'
      },
      line: { name: 'EdgeMAX', id: 'edgemax' },
      sysid: 'eeaa',
      guids: [],
      uisp: {
        nameLegacy: ['EdgeSwitch 16-Port XG'],
        bleServices: {},
        line: 'edge_switch',
        firmware: { platform: 'edgeswitch', board: ['esgh'] }
      },
      id: 'f6b50893-8708-4e23-b333-0601bc7594e6',
      product: { abbrev: 'EdgeSwitch 16 XG', name: 'EdgeSwitch 16 XG' },
      shortnames: ['ES-16-XG'],
      triplets: [
        { k2: 'EdgeSwitch 16-Port 10G', k1: 'ES-16-XG' },
        { k2: 'EdgeSwitch 16 XG', k1: 'ES-16-XG' }
      ]
    },
    {
      sysids: [],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '6ee65037-7b2e-4893-8e40-fcd18b626031'
      },
      line: { name: 'EdgeMAX', id: 'edgemax' },
      guids: [],
      uisp: {
        nameLegacy: [],
        bleServices: {},
        line: 'tough_switch',
        firmware: { platform: 'edgeswitch', board: ['esxp'] }
      },
      id: '5bd3cde2-f0a8-459f-92cc-1b707fa3f5df',
      product: { abbrev: 'EdgeSwitch 16XP', name: 'EdgeSwitch 16XP' },
      shortnames: ['ES-16XP'],
      triplets: []
    },
    {
      sysids: ['eeb7'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '70e75839-2e1b-4094-9d6b-9fbccaf1bc32'
      },
      line: { name: 'EdgeMAX', id: 'edgemax' },
      sysid: 'eeb7',
      guids: [],
      uisp: {
        nameLegacy: [],
        bleServices: {},
        line: 'edge_switch_x',
        firmware: { platform: 'edgeswitch', board: ['esx'] }
      },
      id: 'd4b10102-0936-40fe-9141-f287cf3c6a94',
      product: { abbrev: 'EdgeSwitch 18X', name: 'EdgeSwitch 18X' },
      shortnames: ['ES-18X'],
      triplets: [
        { k2: 'EdgeSwitch 18X', k1: 'ES-18X' },
        { k2: 'ES-18X', k1: 'ES-18X' }
      ]
    },
    {
      sysids: ['eea3'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '1d395bc5-48d5-4ea7-a416-2dea75c4f8e8'
      },
      line: { name: 'EdgeMAX', id: 'edgemax' },
      sysid: 'eea3',
      guids: [],
      uisp: {
        nameLegacy: ['EdgeSwitch 24-Port 250W'],
        bleServices: {},
        line: 'edge_switch',
        firmware: { platform: 'edgeswitch', board: ['eswh'] }
      },
      id: 'e2d70284-68f0-4573-9674-fbfc666531ba',
      product: { abbrev: 'EdgeSwitch 24 250W', name: 'EdgeSwitch 24 250W' },
      shortnames: ['ES-24-250W'],
      triplets: [
        { k2: 'EdgeSwitch 24 250W', k1: 'ES-24-250W' },
        { k2: 'EdgeSwitch 24-Port 250W', k1: 'ES-24-250W' },
        { k1: 'ES-24-250W' }
      ]
    },
    {
      sysids: ['eea1'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: 'aaeafbd8-51b9-408e-aafc-f4c223943ec5'
      },
      line: { name: 'EdgeMAX', id: 'edgemax' },
      sysid: 'eea1',
      guids: [],
      uisp: {
        nameLegacy: ['EdgeSwitch 24-Port 500W'],
        bleServices: {},
        line: 'edge_switch',
        firmware: { platform: 'edgeswitch', board: ['eswh'] }
      },
      id: '55569c73-091d-4831-974d-938c735ed780',
      product: { abbrev: 'EdgeSwitch 24 500W', name: 'EdgeSwitch 24 500W' },
      shortnames: ['ES-24-500W'],
      triplets: [
        { k2: 'EdgeSwitch 24-Port 500W', k1: 'ES-24-500W' },
        { k1: 'ES-24-500W' },
        { k2: 'EdgeSwitch 24 500W', k1: 'ES-24-500W' }
      ]
    },
    {
      sysids: ['eea5', 'eeb3'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: 'e257630c-c30b-4b34-91d7-7dd5b91d193c'
      },
      line: { name: 'EdgeMAX', id: 'edgemax' },
      sysid: 'eea5',
      guids: [],
      uisp: {
        nameLegacy: ['EdgeSwitch 24-Port Lite'],
        bleServices: {},
        line: 'edge_switch',
        firmware: { platform: 'edgeswitch', board: ['eswh'] }
      },
      id: '8e936dd2-1b63-472f-836b-257aabf7bfd5',
      product: { abbrev: 'EdgeSwitch 24 Lite', name: 'EdgeSwitch 24 Lite' },
      shortnames: ['ES-24-Lite'],
      triplets: [
        { k1: 'ES-24-Lite' },
        { k2: 'EdgeSwitch 24-Port Lite', k1: 'ES-24-Lite' },
        { k2: 'EdgeSwitch 24 Lite', k1: 'ES-24-Lite' }
      ]
    },
    {
      sysids: ['eea4'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: 'cfb8e1c1-483d-41b5-b7d2-e247ae6e10c0'
      },
      line: { name: 'EdgeMAX', id: 'edgemax' },
      sysid: 'eea4',
      guids: [],
      uisp: {
        nameLegacy: ['EdgeSwitch 48-Port 500W'],
        bleServices: {},
        line: 'edge_switch',
        firmware: { platform: 'edgeswitch', board: ['eswh'] }
      },
      id: 'f3816eb2-0152-4978-b6a7-69b3ca3b6a01',
      product: { abbrev: 'EdgeSwitch 48 500W', name: 'EdgeSwitch 48 500W' },
      shortnames: ['ES-48-500W'],
      triplets: [
        { k2: 'EdgeSwitch 48 500W', k1: 'ES-48-500W' },
        { k2: 'EdgeSwitch 48-Port 500W', k1: 'ES-48-500W' },
        { k1: 'ES-48-500W' }
      ]
    },
    {
      sysids: ['eea2'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: 'ef529122-5400-4fd0-9226-724ac7288faf'
      },
      line: { name: 'EdgeMAX', id: 'edgemax' },
      sysid: 'eea2',
      guids: [],
      uisp: {
        nameLegacy: ['EdgeSwitch 48-Port 750W'],
        bleServices: {},
        line: 'edge_switch',
        firmware: { platform: 'edgeswitch', board: ['eswh'] }
      },
      id: '6a2bd96c-48cd-4999-bbb6-0777225c2ca8',
      product: { abbrev: 'EdgeSwitch 48 750W', name: 'EdgeSwitch 48 750W' },
      shortnames: ['ES-48-750W'],
      triplets: [
        { k2: 'EdgeSwitch 48 750W', k1: 'ES-48-750W' },
        { k2: 'EdgeSwitch 48-Port 750W', k1: 'ES-48-750W' }
      ]
    },
    {
      sysids: ['eea6', 'eeb1'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: 'f89556a7-79dc-4b24-a9c8-3add5b52fcdd'
      },
      line: { name: 'EdgeMAX', id: 'edgemax' },
      sysid: 'eea6',
      guids: [],
      uisp: {
        nameLegacy: ['EdgeSwitch 48-Port Lite'],
        bleServices: {},
        line: 'edge_switch',
        firmware: { platform: 'edgeswitch', board: ['eswh'] }
      },
      id: '9d2b43d8-c263-40b7-9aca-63bfa826fc26',
      product: { abbrev: 'EdgeSwitch 48 Lite', name: 'EdgeSwitch 48 Lite' },
      shortnames: ['ES-48-Lite'],
      triplets: [
        { k2: 'EdgeSwitch 48-Port Lite', k1: 'ES-48-Lite' },
        { k2: 'EdgeSwitch 48 Lite', k1: 'ES-48-Lite' },
        { k1: 'ES-48-Lite' }
      ]
    },
    {
      sysids: ['e700'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '63af681b-6f0d-4c19-b710-761245579e5d'
      },
      line: { name: 'EdgeMAX', id: 'edgemax' },
      sysid: 'e700',
      guids: [],
      uisp: {
        nameLegacy: ['TOUGHSwitch 5 PoE'],
        bleServices: {},
        line: 'tough_switch',
        firmware: { platform: 'edgeswitch', board: ['esxp'] }
      },
      id: 'd3c602aa-9a7f-4206-bc8a-242343a46c8a',
      product: { abbrev: 'EdgeSwitch 5XP', name: 'EdgeSwitch 5XP' },
      shortnames: ['TSW-5-POE', 'TSW-PoE'],
      triplets: [{ k1: 'TSW-PoE' }, { k2: 'EdgeSwitch 5XP', k1: 'TSW-PoE' }]
    },
    {
      sysids: ['eeab'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '2bb8b622-fa0a-4689-a5b4-5e87a7f2d921'
      },
      line: { name: 'EdgeMAX', id: 'edgemax' },
      sysid: 'eeab',
      guids: [],
      uisp: {
        nameLegacy: ['EdgeSwitch 8-Port 150W'],
        bleServices: {},
        line: 'edge_switch',
        firmware: { platform: 'edgeswitch', board: ['eswh'] }
      },
      id: '56de3a75-afaf-4a29-956c-cbffc063d2dc',
      product: { abbrev: 'EdgeSwitch 8 150W', name: 'EdgeSwitch 8 150W' },
      shortnames: ['ES-8-150W'],
      triplets: [
        { k2: 'EdgeSwitch 8 150W', k1: 'ES-8-150W' },
        { k1: 'ES-8-150W' },
        { k2: 'EdgeSwitch 8-Port 150W', k1: 'ES-8-150W' }
      ]
    },
    {
      sysids: [],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '57212013-7160-46f4-8152-b397aa971350'
      },
      line: { name: 'airMAX', id: 'airmax' },
      guids: [],
      uisp: {
        nameLegacy: [],
        bleServices: {},
        line: 'airmax_installer',
        firmware: { platform: 'airmax', board: ['UBI'] }
      },
      id: 'd6f47320-c650-4b27-8c61-531d67fe58aa',
      product: { abbrev: 'ETH SP G2', name: 'Ethernet Surge Protector' },
      shortnames: ['UBI'],
      triplets: [{ k1: 'UBI' }]
    },
    {
      sysids: ['dc9a', 'dc75'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: 'db12f943-a6dc-42f9-bcee-a41c8fd3e353'
      },
      line: { name: 'airMAX', id: 'airmax' },
      sysid: 'dc9a',
      guids: ['6796f4de-8a0d-4955-aa21-f8a7534f027a', '95287a83-ee8d-4266-9e91-708ddde272b4'],
      uisp: {
        nameLegacy: [],
        bleServices: {
          /* eslint-disable @typescript-eslint/naming-convention */
          '95287a83-ee8d-4266-9e91-708ddde272b4': { mode: 'factory' },
          '6796f4de-8a0d-4955-aa21-f8a7534f027a': { mode: 'default' }
          /* eslint-enable @typescript-eslint/naming-convention */
        },
        line: 'airmax_ac60',
        firmware: { platform: 'airmax', board: ['gbe'] }
      },
      btle: {
        factoryDefault: '95287a83-ee8d-4266-9e91-708ddde272b4',
        userConfigured: '6796f4de-8a0d-4955-aa21-f8a7534f027a'
      },
      id: '75990a49-e95d-4f27-a419-a3fd664cd51a',
      product: { abbrev: 'GigaBEAM', name: 'GigaBEAM' },
      shortnames: ['GBE', 'GigaBeam', 'GigaBeam AP'],
      triplets: [
        { k2: 'GigaBeam', k1: 'GigaBeam' },
        { k2: 'GigaBeam AP', k1: 'GigaBeam AP' },
        { k2: 'GigaBeam', k1: 'GBE' }
      ]
    },
    {
      sysids: ['dc99', 'dc85'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '571911a2-5fb2-445c-a239-aef2982a9a56'
      },
      line: { name: 'airMAX', id: 'airmax' },
      sysid: 'dc99',
      guids: ['bff5764b-51ac-47f8-b4d0-0b43766420dd', 'fc3d726b-f843-4be1-a8b6-8594ca887c5a'],
      uisp: {
        nameLegacy: [],
        bleServices: {
          /* eslint-disable @typescript-eslint/naming-convention */
          'fc3d726b-f843-4be1-a8b6-8594ca887c5a': { mode: 'factory' },
          'bff5764b-51ac-47f8-b4d0-0b43766420dd': { mode: 'default' }
          /* eslint-enable @typescript-eslint/naming-convention */
        },
        line: 'airmax_ac60',
        firmware: { platform: 'airmax', board: ['gbe'] }
      },
      btle: {
        factoryDefault: 'fc3d726b-f843-4be1-a8b6-8594ca887c5a',
        userConfigured: 'bff5764b-51ac-47f8-b4d0-0b43766420dd'
      },
      id: '44f9f19f-e262-40f9-b133-0dd4c279e797',
      product: { abbrev: 'GigaBEAM LR', name: 'GigaBEAM LR' },
      shortnames: ['GBE-LR', 'GigaBeam LR'],
      triplets: [{ k2: 'GigaBeam LR', k1: 'GigaBeam LR' }]
    },
    {
      sysids: [],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '8cf5c520-8910-4dba-a0fb-a1289a8f4502'
      },
      line: { name: 'airMAX', id: 'airmax' },
      guids: ['7669789e-738f-44da-8c46-3513553720a5', 'cda15717-383b-42ef-8f1e-7513ff5e4129'],
      uisp: {
        nameLegacy: [],
        bleServices: {
          /* eslint-disable @typescript-eslint/naming-convention */
          '7669789e-738f-44da-8c46-3513553720a5': { mode: 'default' },
          'cda15717-383b-42ef-8f1e-7513ff5e4129': { mode: 'factory' }
          /* eslint-enable @typescript-eslint/naming-convention */
        },
        line: 'airmax_ac60',
        firmware: { platform: 'airmax', board: ['gbe'] }
      },
      btle: {
        factoryDefault: 'cda15717-383b-42ef-8f1e-7513ff5e4129',
        userConfigured: '7669789e-738f-44da-8c46-3513553720a5'
      },
      id: 'fb32e012-ccf5-49ce-8f3c-ff870a294c72',
      product: { abbrev: 'GigaBeam Plus', name: 'GigaBeam Plus' },
      shortnames: ['GBE-Plus', 'GigaBeam Plus'],
      triplets: [{ k2: 'GigaBeam Plus', k1: 'GigaBeam Plus' }]
    },
    {
      sysids: [],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: 'd364969c-319a-43ec-858c-97159f51ecb3'
      },
      line: { name: 'Unknown', id: 'unknown' },
      guids: [],
      id: 'ef48926b-4dfb-4322-86d5-26a1bd919808',
      product: { abbrev: 'airMAX Horn Antenna 5 30', name: 'airMAX Horn Antenna 5 30' },
      shortnames: ['AirMAX Horn Antenna 5 30'],
      triplets: []
    },
    {
      sysids: [],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '5b9fcb98-0649-435d-b702-dfd580a8c1f9'
      },
      line: { name: 'Unknown', id: 'unknown' },
      guids: [],
      id: '0a11927e-ea5e-4634-ba9c-a65c98e1175f',
      product: { abbrev: 'airMAX Horn Antenna 5 45', name: 'airMAX Horn Antenna 5 45' },
      shortnames: ['AirMAX Horn Antenna 5 45'],
      triplets: []
    },
    {
      sysids: [],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '5e9c5b95-72ee-407c-8357-5c17b9c9ad98'
      },
      line: { name: 'Unknown', id: 'unknown' },
      guids: [],
      id: '6e5934b6-db8f-4ac9-ae0b-cfcc165db7ed',
      product: { abbrev: 'airMAX Horn Antenna 5 60', name: 'airMAX Horn Antenna 5 60' },
      shortnames: ['AirMAX Horn Antenna 5 60'],
      triplets: []
    },
    {
      sysids: [],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '74cd5746-5566-49f5-a799-090722082f65'
      },
      line: { name: 'Unknown', id: 'unknown' },
      guids: [],
      id: '339e7229-a546-4e74-861b-7c85f228cce9',
      product: { abbrev: 'airMAX Horn Antenna 5 90', name: 'airMAX Horn Antenna 5 90' },
      shortnames: ['AirMAX Horn Antenna 5 90'],
      triplets: []
    },
    {
      sysids: ['e7f7'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '7e0aa130-5b6f-4e0c-b4bb-941f629344e8'
      },
      line: { name: 'airMAX', id: 'airmax' },
      sysid: 'e7f7',
      guids: [],
      uisp: {
        nameLegacy: ['IS-5AC', 'I5C'],
        bleServices: {},
        line: 'airmax_ac5',
        firmware: { platform: 'airmax', board: ['wa'] }
      },
      id: 'a5312be1-b648-428c-b873-398c002fdb03',
      product: { abbrev: 'ISO Station 5AC', name: 'ISO Station 5AC' },
      shortnames: ['IS-5AC'],
      triplets: [{ k2: 'ISO Station 5AC', k1: 'IS-5AC' }]
    },
    {
      sysids: ['e7f8'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: 'df26820d-2eae-4372-b6eb-d7fdece754ff'
      },
      line: { name: 'airMAX', id: 'airmax' },
      sysid: 'e7f8',
      guids: [],
      uisp: {
        nameLegacy: [],
        bleServices: {},
        line: 'airmax_m5',
        firmware: { platform: 'airmax', board: ['xw'] }
      },
      id: 'c6cbad8c-0852-4ee5-a210-19729b529b46',
      product: { abbrev: 'ISO Station M5', name: 'ISO Station M5' },
      shortnames: ['IS-M5'],
      triplets: [{ k2: 'ISO Station M5', k1: 'IS-M5' }]
    },
    {
      sysids: [],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: 'ee442a01-525c-4cb6-9ab3-1ca219a1d1ad'
      },
      line: { name: 'AirFiber', id: 'airfiber' },
      guids: [],
      id: '8480486e-ad8d-4dc0-96e5-7a61551ed78c',
      product: { abbrev: 'airFiber IsoBeam', name: 'airFiber IsoBeam' },
      shortnames: ['AirFiber IsoBeam'],
      triplets: []
    },
    {
      sysids: ['e885'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '12e760ad-f40e-4d97-a945-91e8f40ec120'
      },
      line: { name: 'airMAX', id: 'airmax' },
      sysid: 'e885',
      guids: [],
      uisp: {
        nameLegacy: [],
        bleServices: {},
        line: 'airmax_m5',
        firmware: { platform: 'airmax', board: ['xw'] }
      },
      id: '6a346df7-25e2-4876-883c-30dbb80ea8d4',
      product: { abbrev: 'PowerBeam M5 620', name: 'PowerBeam M5 620' },
      shortnames: ['P5B-620'],
      triplets: []
    },
    {
      sysids: [],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '471cb4ff-3fd4-485b-ba5f-3e7dd2ed2e4d'
      },
      line: { name: 'mFi', id: 'mfi' },
      guids: [],
      id: '7d488df7-698f-4dff-a374-343c696371e6',
      product: { abbrev: 'In-Wall Outlet', name: 'In-Wall Outlet' },
      shortnames: ['IWO2U'],
      triplets: []
    },
    {
      sysids: ['e4a2'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '4af0883f-5287-43e0-a70b-fb01f4e69e36'
      },
      line: { name: 'airMAX', id: 'airmax' },
      sysid: 'e4a2',
      guids: [],
      uisp: {
        nameLegacy: [],
        bleServices: {},
        line: 'airmax_m2',
        firmware: { platform: 'airmax', board: ['xm'] }
      },
      id: 'acefd916-bb12-4efb-b0ce-218511e20895',
      product: { abbrev: 'airRouter', name: 'airRouter' },
      shortnames: ['LAP'],
      triplets: []
    },
    {
      sysids: ['e8e5'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: 'd30f9787-1bd9-423c-a4ab-cad0fc229bca'
      },
      line: { name: 'airMAX', id: 'airmax' },
      sysid: 'e8e5',
      guids: [],
      uisp: {
        nameLegacy: [
          'LiteBeam 5AC-16-120',
          'LiteAP AC',
          'LiteBeam 5AC 16 120',
          'LBE-5AC-16-120',
          'L5C'
        ],
        bleServices: {},
        line: 'airmax_ac5',
        firmware: { platform: 'airmax', board: ['wa'] }
      },
      id: '0be40e6c-7b14-4e05-b547-a4c8c7974976',
      product: { abbrev: 'LAP-120', name: 'LAP-120' },
      shortnames: ['LAP-120'],
      triplets: [{ k2: 'LiteAP AC', k1: 'LAP-120' }]
    },
    {
      sysids: [],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: 'c86cea62-acd1-4099-9ff9-84e937472f07'
      },
      line: { name: 'airMAX', id: 'airmax' },
      guids: [],
      uisp: {
        nameLegacy: [],
        bleServices: {},
        line: 'airmax_ac5',
        firmware: { platform: 'airmax', board: ['wa'] }
      },
      id: '1ffde68f-3779-45ac-ba14-352e3e7a625c',
      product: { abbrev: 'LiteAP GPS', name: 'LiteAP GPS' },
      shortnames: ['LAP-GPS'],
      triplets: [{ k2: 'LiteAP GPS', k1: 'LAP-GPS' }]
    },
    {
      sysids: ['e4b2'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '3c8ad25e-80ea-49b8-a6d8-93c4fd79bf51'
      },
      line: { name: 'airMAX', id: 'airmax' },
      sysid: 'e4b2',
      guids: [],
      uisp: {
        nameLegacy: [],
        bleServices: {},
        line: 'airmax_m2',
        firmware: { platform: 'airmax', board: ['xm'] }
      },
      id: '4dc3ff1d-e313-4c11-b871-8f1e363b999b',
      product: { abbrev: 'airRouter HP', name: 'airRouter HP' },
      shortnames: ['LAP-HP'],
      triplets: []
    },
    {
      sysids: ['e7f9'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '4ba7b346-72c3-40c1-9e66-1de6980ce54c'
      },
      line: { name: 'airMAX', id: 'airmax' },
      sysid: 'e7f9',
      guids: [],
      uisp: {
        nameLegacy: ['LiteBeam 5AC Gen2', 'LBE-5AC-Gen2', 'LBE-5AC', 'L5C'],
        bleServices: {},
        line: 'airmax_ac5',
        firmware: { platform: 'airmax', board: ['wa'] }
      },
      id: '08e81ebb-9cee-45f9-a0b5-a219160f523f',
      product: { abbrev: 'LiteBeam 5AC', name: 'LiteBeam 5AC' },
      shortnames: ['LBE-5AC-Gen2'],
      triplets: [
        { k2: 'LiteBeam 5AC', k1: 'LBE-5AC-Gen2' },
        { k2: 'LiteBeam 5AC Gen2', k1: 'LBE-5AC-Gen2' }
      ]
    },
    {
      sysids: ['e8f5'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: 'd7786ca3-40f1-4e3f-a7bc-88cb76a596b1'
      },
      line: { name: 'airMAX', id: 'airmax' },
      sysid: 'e8f5',
      guids: [],
      uisp: {
        nameLegacy: ['LBE-5AC-23', 'L5C'],
        bleServices: {},
        line: 'airmax_ac5',
        firmware: { platform: 'airmax', board: ['wa'] }
      },
      id: 'ff79a38f-fe09-4110-8c64-4513fe1e34c9',
      product: { abbrev: 'LiteBeam 5AC 23', name: 'LiteBeam 5AC 23' },
      shortnames: ['LBE-5AC-23'],
      triplets: [{ k2: 'LiteBeam 5AC 23', k1: 'LBE-5AC-23' }]
    },
    {
      sysids: ['e7fe'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '1df30367-3e0c-41f1-918d-71f907419f87'
      },
      line: { name: 'airMAX', id: 'airmax' },
      sysid: 'e7fe',
      guids: [],
      uisp: {
        nameLegacy: [],
        bleServices: {},
        line: 'airmax_ac5',
        firmware: { platform: 'airmax', board: ['wa'] }
      },
      id: '74f2110b-53f0-48bc-80ba-321cdcdf1429',
      product: { abbrev: 'LiteBeam 5AC LR', name: 'LiteBeam 5AC LR' },
      shortnames: ['LBE-5AC-LR'],
      triplets: [{ k2: 'LiteBeam 5AC LR', k1: 'LBE-5AC-LR' }]
    },
    {
      sysids: ['e7ff'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '654ad227-436a-4311-aae3-a6678853d3e0'
      },
      line: { name: 'airMAX', id: 'airmax' },
      sysid: 'e7ff',
      guids: ['15d91100-482c-4c29-b5ba-1458a1026188', '598b0277-2a7c-47e9-a3af-04068b5c7a35'],
      uisp: {
        nameLegacy: ['LiteBeam 5AC XR'],
        bleServices: {
          /* eslint-disable @typescript-eslint/naming-convention */
          '15d91100-482c-4c29-b5ba-1458a1026188': { mode: 'factory' },
          '598b0277-2a7c-47e9-a3af-04068b5c7a35': { mode: 'default' }
          /* eslint-enable @typescript-eslint/naming-convention */
        },
        line: 'airmax_ac5',
        firmware: { platform: 'airmax', board: ['wa'] }
      },
      btle: {
        factoryDefault: '15d91100-482c-4c29-b5ba-1458a1026188',
        userConfigured: '598b0277-2a7c-47e9-a3af-04068b5c7a35'
      },
      id: '51ab738f-0a8e-435a-80f7-acc650c4483a',
      product: { abbrev: 'LiteBeam AC XR', name: 'LiteBeam AC XR' },
      shortnames: ['LBE-5AC-XR'],
      triplets: [
        { k2: 'LiteBeam 5AC XR', k1: 'LBE-5AC-XR' },
        { k2: 'LiteBeam AC XR', k1: 'LBE-5AC-XR' }
      ]
    },
    {
      sysids: ['a669', 'a659'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '69644d8b-9b6e-4473-b8e6-04600e6a09ca'
      },
      line: { name: 'airMAX', id: 'airmax' },
      sysid: 'a669',
      guids: ['582ccb91-54df-4e82-a411-ac988cad5332', '955da4b9-dce8-4372-b7c8-7e663f153296'],
      uisp: {
        nameLegacy: [],
        bleServices: {
          /* eslint-disable @typescript-eslint/naming-convention */
          '582ccb91-54df-4e82-a411-ac988cad5332': { mode: 'default' },
          '955da4b9-dce8-4372-b7c8-7e663f153296': { mode: 'factory' }
          /* eslint-enable @typescript-eslint/naming-convention */
        },
        line: 'airmax_ax5',
        firmware: { platform: 'airmax', board: ['rax', 'lbe'] }
      },
      btle: {
        factoryDefault: '955da4b9-dce8-4372-b7c8-7e663f153296',
        userConfigured: '582ccb91-54df-4e82-a411-ac988cad5332'
      },
      id: '246a82e4-719f-4f70-9636-73bab7d65837',
      product: { abbrev: 'LiteBeam AX', name: 'LiteBeam AX' },
      shortnames: ['LBE-AX'],
      triplets: [{ k2: 'LiteBeam AX', k1: 'LBE-AX' }]
    },
    {
      sysids: ['e865'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: 'bb51301d-190b-4ec4-a738-4dea51deb207'
      },
      line: { name: 'airMAX', id: 'airmax' },
      sysid: 'e865',
      guids: [],
      uisp: {
        nameLegacy: [],
        bleServices: {},
        line: 'airmax_m5',
        firmware: { platform: 'airmax', board: ['xw'] }
      },
      id: '10fe8ecc-cd53-4c9a-8496-7dfb6c1e4c04',
      product: { abbrev: 'LiteBeam M5', name: 'LiteBeam M5' },
      shortnames: ['LB5'],
      triplets: [{ k2: 'LiteBeam M5', k1: 'LB5' }]
    },
    {
      sysids: ['ae10'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '42e49d3c-ab12-4235-a847-851a24cc4f19'
      },
      line: { name: 'LTU', id: 'ltu' },
      sysid: 'ae10',
      guids: ['25e5d218-8a6d-4463-9d73-b6955bffae01', 'cdd4aa77-ef2d-4e37-9198-93f3ecd7f734'],
      uisp: {
        nameLegacy: ['LTU-Feed'],
        bleServices: {
          /* eslint-disable @typescript-eslint/naming-convention */
          '25e5d218-8a6d-4463-9d73-b6955bffae01': { mode: 'default' },
          'cdd4aa77-ef2d-4e37-9198-93f3ecd7f734': { mode: 'factory' }
          /* eslint-enable @typescript-eslint/naming-convention */
        },
        line: 'ltu_ptmp_sta',
        firmware: { platform: 'airfiber', board: ['afltu'] }
      },
      btle: {
        factoryDefault: 'cdd4aa77-ef2d-4e37-9198-93f3ecd7f734',
        userConfigured: '25e5d218-8a6d-4463-9d73-b6955bffae01'
      },
      id: '88bce545-b92f-4910-b633-5552db8a744a',
      product: { abbrev: 'LTU Instant', name: 'LTU Instant' },
      shortnames: ['LTU-Instant'],
      triplets: [{ k2: 'LTU Instant', k1: 'LTU-Instant' }]
    },
    {
      sysids: ['ae0b'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: 'ca6a8559-4f33-4fa8-829f-8d81859c5a32'
      },
      line: { name: 'LTU', id: 'ltu' },
      sysid: 'ae0b',
      guids: ['05ffeb2d-191a-4207-b9f0-75b3ae31f1d9', '8df8e1d4-b4f1-43c2-9556-4deb6675aa36'],
      uisp: {
        nameLegacy: [],
        bleServices: {
          /* eslint-disable @typescript-eslint/naming-convention */
          '05ffeb2d-191a-4207-b9f0-75b3ae31f1d9': { mode: 'factory' },
          '8df8e1d4-b4f1-43c2-9556-4deb6675aa36': { mode: 'default' }
          /* eslint-enable @typescript-eslint/naming-convention */
        },
        line: 'ltu_ptmp_sta',
        firmware: { platform: 'airfiber', board: ['afltu'] }
      },
      btle: {
        factoryDefault: '05ffeb2d-191a-4207-b9f0-75b3ae31f1d9',
        userConfigured: '8df8e1d4-b4f1-43c2-9556-4deb6675aa36'
      },
      id: 'cf9131c3-b3df-4cff-aa0e-52410fa1f4a3',
      product: { abbrev: 'LTU LR', name: 'LTU LR' },
      shortnames: ['LTU-LR'],
      triplets: [{ k2: 'LTU-LR', k1: 'LTU-LR' }]
    },
    {
      sysids: ['ae08'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '4be90270-1242-43c1-97b1-f6095d390f30'
      },
      line: { name: 'LTU', id: 'ltu' },
      sysid: 'ae08',
      guids: ['4ad53301-6364-40e8-be30-b50cddeda108', 'c8fdaea6-e13d-4a21-a14d-59a816097cae'],
      uisp: {
        nameLegacy: [],
        bleServices: {
          /* eslint-disable @typescript-eslint/naming-convention */
          'c8fdaea6-e13d-4a21-a14d-59a816097cae': { mode: 'default' },
          '4ad53301-6364-40e8-be30-b50cddeda108': { mode: 'factory' }
          /* eslint-enable @typescript-eslint/naming-convention */
        },
        line: 'ltu_ptmp_sta',
        firmware: { platform: 'airfiber', board: ['afltu'] }
      },
      btle: {
        factoryDefault: '4ad53301-6364-40e8-be30-b50cddeda108',
        userConfigured: 'c8fdaea6-e13d-4a21-a14d-59a816097cae'
      },
      id: 'a409544e-e681-4c98-b8b8-cc6842bae6a3',
      product: { abbrev: 'LTU Lite', name: 'LTU Lite' },
      shortnames: ['LTU-LITE', 'LTU-Lite'],
      triplets: [
        { k2: 'LTU-Lite', k1: 'LTU-Lite' },
        { k2: 'LTU-Lite', k1: 'LTU-LITE' }
      ]
    },
    {
      sysids: ['ae06'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '54f6bdcf-4eb9-4240-80a0-7822454d2ffa'
      },
      line: { name: 'LTU', id: 'ltu' },
      sysid: 'ae06',
      guids: ['64bf0ee9-0cec-4571-a12c-87fc690309be', 'be4804fd-abdb-438f-9b39-f4a6e5452ee0'],
      uisp: {
        nameLegacy: ['AF-LTU5'],
        bleServices: {
          /* eslint-disable @typescript-eslint/naming-convention */
          '64bf0ee9-0cec-4571-a12c-87fc690309be': { mode: 'factory' },
          'be4804fd-abdb-438f-9b39-f4a6e5452ee0': { mode: 'default' }
          /* eslint-enable @typescript-eslint/naming-convention */
        },
        line: 'ltu_ptmp_sta',
        firmware: { platform: 'airfiber', board: ['afltu'] }
      },
      btle: {
        factoryDefault: '64bf0ee9-0cec-4571-a12c-87fc690309be',
        userConfigured: 'be4804fd-abdb-438f-9b39-f4a6e5452ee0'
      },
      id: 'e36f93fb-7752-4237-95dd-5d53c0bdccfe',
      product: { abbrev: 'LTU Professional', name: 'LTU Professional' },
      shortnames: ['LTU-Pro'],
      triplets: [{ k2: 'LTU-Pro', k1: 'LTU-Pro' }]
    },
    {
      sysids: ['ae05'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '78283cd0-8f46-4ed4-b3ab-2d192390eb88'
      },
      fcc: 'SWX-LTURR',
      line: { name: 'LTU', id: 'ltu' },
      sysid: 'ae05',
      guids: ['7108b460-fe5b-4f7a-abd4-9153b8046e18', 'a34b9c82-5366-45ca-b377-586591569de3'],
      uisp: {
        nameLegacy: ['LTU-Rocket'],
        bleServices: {
          /* eslint-disable @typescript-eslint/naming-convention */
          '7108b460-fe5b-4f7a-abd4-9153b8046e18': { mode: 'default' },
          'a34b9c82-5366-45ca-b377-586591569de3': { mode: 'factory' }
          /* eslint-enable @typescript-eslint/naming-convention */
        },
        line: 'ltu_ptmp_ap',
        firmware: { platform: 'airfiber', board: ['aflturocket'] }
      },
      btle: {
        factoryDefault: 'a34b9c82-5366-45ca-b377-586591569de3',
        userConfigured: '7108b460-fe5b-4f7a-abd4-9153b8046e18'
      },
      ic: '6545A-LTURR',
      id: 'a949413c-65a9-475a-891a-3b537a995d1f',
      product: { abbrev: 'LTU Rocket', name: 'LTU Rocket' },
      shortnames: ['LTU-ROCKET', 'LTU-Rocket'],
      triplets: [{ k2: 'LTU-Rocket', k1: 'LTU-Rocket' }]
    },
    {
      sysids: ['ae11'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '85756e75-21a4-4b16-9160-495a353a0003'
      },
      line: { name: 'LTU', id: 'ltu' },
      sysid: 'ae11',
      guids: ['5ba5d1e5-68a9-4adf-ba50-52391376fc9c', 'a637ed63-a0c5-4b06-9c71-32d2fd71628c'],
      uisp: {
        nameLegacy: [],
        bleServices: {
          /* eslint-disable @typescript-eslint/naming-convention */
          '5ba5d1e5-68a9-4adf-ba50-52391376fc9c': { mode: 'default' },
          'a637ed63-a0c5-4b06-9c71-32d2fd71628c': { mode: 'factory' }
          /* eslint-enable @typescript-eslint/naming-convention */
        },
        line: 'ltu_ptmp_sta',
        firmware: { platform: 'airfiber', board: ['afltu'] }
      },
      btle: {
        factoryDefault: 'a637ed63-a0c5-4b06-9c71-32d2fd71628c',
        userConfigured: '5ba5d1e5-68a9-4adf-ba50-52391376fc9c'
      },
      id: 'fe8bea5c-3a68-43f8-9599-73a154738aa7',
      product: { abbrev: 'LTU XR', name: 'LTU XR' },
      shortnames: ['LTU-XR'],
      triplets: [{ k2: 'LTU-XR', k1: 'LTU-XR' }]
    },
    {
      sysids: ['e7fa'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: 'f28f0b16-0bdd-4fc7-913a-53fa13d44983'
      },
      line: { name: 'airMAX', id: 'airmax' },
      sysid: 'e7fa',
      guids: [],
      uisp: {
        nameLegacy: ['N5L', 'NS-5ACL'],
        bleServices: {},
        line: 'airmax_ac5',
        firmware: { platform: 'airmax', board: ['wa'] }
      },
      id: 'cef0ce7f-3dcd-4cbc-ae2d-662e019624f7',
      product: { abbrev: 'NanoStation 5AC loco', name: 'NanoStation 5AC loco' },
      shortnames: ['Loco5AC'],
      triplets: [{ k2: 'NanoStation 5AC loco', k1: 'Loco5AC' }]
    },
    {
      sysids: ['e0a2'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: 'bc8cbd02-cd2c-448a-a10a-59ed3f4a4c1d'
      },
      line: { name: 'airMAX', id: 'airmax' },
      sysid: 'e0a2',
      guids: [],
      uisp: {
        nameLegacy: ['NanoStation Loco M2'],
        bleServices: {},
        line: 'airmax_m2',
        firmware: { platform: 'airmax', board: ['xm', 'xw'] }
      },
      id: '0a34d79d-c382-4d5b-9b9b-8da38bdbd35c',
      product: { abbrev: 'NanoStation loco M2', name: 'NanoStation loco M2' },
      shortnames: ['LM2'],
      triplets: [
        { k2: 'NanoStation loco M2', k1: 'LM2' },
        { k2: 'NanoStation Loco M2', k1: 'LM2' },
        { k1: 'LM2' }
      ]
    },
    {
      sysids: ['e845', 'e0a5', 'e8a5'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '07289d4a-167b-464d-827d-a215aae6ba0d'
      },
      line: { name: 'airMAX', id: 'airmax' },
      sysid: 'e845',
      guids: [],
      uisp: {
        nameLegacy: ['NanoStation Loco M5'],
        bleServices: {},
        line: 'airmax_m5',
        firmware: { platform: 'airmax', board: ['xm', 'xw'] }
      },
      id: 'aa529bfc-4217-4942-96f8-1742b8ab8764',
      product: { abbrev: 'NanoStation loco M5', name: 'NanoStation loco M5' },
      shortnames: ['LM5'],
      triplets: [
        { k1: 'LM5' },
        { k2: 'NanoStation loco M5', k1: 'LM5' },
        { k2: 'NanoStation Loco M5', k1: 'LM5' }
      ]
    },
    {
      sysids: [],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: 'ddbdc1fa-1230-41dd-8163-135a0cd80bfc'
      },
      line: { name: 'mFi', id: 'mfi' },
      guids: [],
      id: '693fcee9-13cc-438b-93bc-83de96848ad5',
      product: { abbrev: 'mPort', name: 'mPort' },
      shortnames: ['M2M'],
      triplets: [{ k1: 'M2M' }, { k3: 'M2M', k1: 'M2M' }]
    },
    {
      sysids: [],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: 'b70a5007-d1a5-447f-9e6e-c2d56dc82576'
      },
      line: { name: 'mFi', id: 'mfi' },
      guids: [],
      id: '11c957e1-d2cc-4277-8ca3-3112623e19bc',
      product: { abbrev: 'mPort Serial', name: 'mPort Serial' },
      shortnames: ['M2S'],
      triplets: []
    },
    {
      sysids: [],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: 'b26177b2-6b3e-4521-aaa5-c94d5c5c1ac0'
      },
      line: { name: 'UniFi', id: 'unifi-network' },
      guids: [],
      id: '61a3a78f-3ab6-4df7-9251-8953f76a4e7b',
      product: { abbrev: 'NanoSwitch', name: 'NanoSwitch' },
      shortnames: ['NanoSwitch'],
      triplets: []
    },
    {
      sysids: ['e812'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '1aa752f7-ec34-4c09-95f8-549620d6cdd2'
      },
      line: { name: 'airMAX', id: 'airmax' },
      sysid: 'e812',
      guids: [],
      uisp: {
        nameLegacy: [],
        bleServices: {},
        line: 'airmax_m2',
        firmware: { platform: 'airmax', board: ['xw'] }
      },
      id: '82fda072-c6fd-40ff-8767-68fb7c8caa16',
      product: { abbrev: 'NanoBeam M2 13', name: 'NanoBeam M2 13' },
      shortnames: ['N2B-13'],
      triplets: []
    },
    {
      sysids: ['e825'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '174b4dad-3300-4d15-accd-99852d5deb36'
      },
      line: { name: 'airMAX', id: 'airmax' },
      sysid: 'e825',
      guids: [],
      uisp: {
        nameLegacy: ['NanoBeamM5 19'],
        bleServices: {},
        line: 'airmax_m5',
        firmware: { platform: 'airmax', board: ['xw'] }
      },
      id: '8ce4d4b3-644e-41e7-8acc-24518fc8e37b',
      product: { abbrev: 'NanoBeam M5 19', name: 'NanoBeam M5 19' },
      shortnames: ['N5B-19'],
      triplets: [{ k1: 'N5B-19' }, { k2: 'NanoBeam M5 19', k1: 'N5B-19' }]
    },
    {
      sysids: ['e005', 'e805'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: 'd3968aef-0024-40f2-b4bb-77fa320127c9'
      },
      line: { name: 'airMAX', id: 'airmax' },
      sysid: 'e005',
      guids: [],
      uisp: {
        nameLegacy: [],
        bleServices: {},
        line: 'airmax_m5',
        firmware: { platform: 'airmax', board: ['xm', 'xw'] }
      },
      id: 'bad5bf34-9e60-466a-81ab-1d9428232d74',
      product: { abbrev: 'NanoStation M5', name: 'NanoStation M5' },
      shortnames: ['N5N'],
      triplets: []
    },
    {
      sysids: ['e009'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '3c388034-2595-42dc-95ac-160042e91069'
      },
      line: { name: 'airMAX', id: 'airmax' },
      sysid: 'e009',
      guids: [],
      uisp: {
        nameLegacy: ['NanoStation Loco M900'],
        bleServices: {},
        line: 'airmax_m900',
        firmware: { platform: 'airmax', board: ['xm'] }
      },
      id: 'ab0fa73a-3b7a-4e6a-a8bf-8373e4e4808a',
      product: { abbrev: 'NanoStation loco M900', name: 'NanoStation loco M900' },
      shortnames: ['N9N'],
      triplets: [{ k2: 'NanoStation loco M900', k1: 'N9N' }]
    },
    {
      sysids: ['e232'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: 'c3fd6d52-d027-4548-83a7-debac068b4c6'
      },
      line: { name: 'airMAX', id: 'airmax' },
      sysid: 'e232',
      guids: [],
      uisp: {
        nameLegacy: [],
        bleServices: {},
        line: 'airmax_m2',
        firmware: { platform: 'airmax', board: ['xm'] }
      },
      id: 'dca17da4-12cf-4c1c-be69-bff820cf3c8a',
      product: { abbrev: 'NanoBridge M2', name: 'NanoBridge M2' },
      shortnames: ['NB2'],
      triplets: []
    },
    {
      sysids: ['e243'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: 'aeb91a5b-ba35-4379-bbe0-b18843ac670f'
      },
      line: { name: 'airMAX', id: 'airmax' },
      sysid: 'e243',
      guids: [],
      uisp: {
        nameLegacy: [],
        bleServices: {},
        line: 'airmax_m3',
        firmware: { platform: 'airmax', board: ['xm'] }
      },
      id: '25e388d0-c8f7-42f3-9388-a804151876cd',
      product: { abbrev: 'NanoBridge M3', name: 'NanoBridge M3' },
      shortnames: ['NB3'],
      triplets: []
    },
    {
      sysids: ['e239'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '1cc4dfa8-f595-406a-81c5-d1f0a9bb125a'
      },
      line: { name: 'airMAX', id: 'airmax' },
      sysid: 'e239',
      guids: [],
      uisp: {
        nameLegacy: [],
        bleServices: {},
        line: 'airmax_m900',
        firmware: { platform: 'airmax', board: ['xm'] }
      },
      id: 'a4ca73db-6ccd-4001-9f91-54919920dad8',
      product: { abbrev: 'NanoBridge M900', name: 'NanoBridge M900' },
      shortnames: ['NB9'],
      triplets: []
    },
    {
      sysids: ['e4f2'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '19cce56e-c074-4e6a-b609-fd55bcdaee80'
      },
      line: { name: 'airMAX', id: 'airmax' },
      sysid: 'e4f2',
      guids: [],
      uisp: {
        nameLegacy: ['NBE-2AC-13', 'N2C'],
        bleServices: {},
        line: 'airmax_ac2',
        firmware: { platform: 'airmax', board: ['2wa'] }
      },
      id: '2df6587f-e63f-45e5-b15e-672facdddc97',
      product: { abbrev: 'NanoBeam 2AC 13', name: 'NanoBeam 2AC 13' },
      shortnames: ['NBE-2AC-13'],
      triplets: [{ k2: 'NanoBeam 2AC 13', k1: 'NBE-2AC-13' }]
    },
    {
      sysids: ['e3d7'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '219edbac-c600-4a10-8e14-202ea914cd9c'
      },
      line: { name: 'airMAX', id: 'airmax' },
      sysid: 'e3d7',
      guids: [],
      uisp: {
        nameLegacy: ['NanoBeam 5AC Gen2', 'NBE-5AC-Gen2', 'NBE-5AC', 'N5C'],
        bleServices: {},
        line: 'airmax_ac5',
        firmware: { platform: 'airmax', board: ['xc', 'wa'] }
      },
      id: '28237e52-900b-4275-9444-aa623ea6a951',
      product: { abbrev: 'NanoBeam 5AC', name: 'NanoBeam 5AC' },
      shortnames: ['NBE-5AC-Gen2'],
      triplets: [
        { k2: 'NanoBeam 5AC', k1: 'NBE-5AC-Gen2' },
        { k2: 'NanoBeam 5AC Gen2', k1: 'NBE-5AC-Gen2' }
      ]
    },
    {
      sysids: [],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '5de19a89-b376-488b-ac8e-e722c3db2642'
      },
      line: { name: 'airMAX', id: 'airmax' },
      guids: [],
      uisp: {
        nameLegacy: ['NBE-5AC-16', 'N5C'],
        bleServices: {},
        line: 'airmax_ac5',
        firmware: { platform: 'airmax', board: ['wa'] }
      },
      id: '92933ebe-7c96-4625-9816-5b79904795d6',
      product: { abbrev: 'NanoBeam 5AC 16', name: 'NanoBeam 5AC 16' },
      shortnames: ['NBE-5AC-16'],
      triplets: []
    },
    {
      sysids: ['e4f5'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '7d510f59-88af-4f58-bfbe-9f4c85378b68'
      },
      line: { name: 'airMAX', id: 'airmax' },
      sysid: 'e4f5',
      guids: [],
      uisp: {
        nameLegacy: ['NBE-5AC-19', 'N5C'],
        bleServices: {},
        line: 'airmax_ac5',
        firmware: { platform: 'airmax', board: ['xc'] }
      },
      id: '8305b303-dcfe-4adc-86f5-1475fc76c178',
      product: { abbrev: 'NanoBeam 5AC 19', name: 'NanoBeam 5AC 19' },
      shortnames: ['NBE-5AC-19'],
      triplets: []
    },
    {
      sysids: ['e815'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '7a0b2be2-815b-4db7-b1e1-506b61771754'
      },
      line: { name: 'airMAX', id: 'airmax' },
      sysid: 'e815',
      guids: [],
      uisp: {
        nameLegacy: ['NanoBeam M5', 'NanoBeamM5'],
        bleServices: {},
        line: 'airmax_m5',
        firmware: { platform: 'airmax', board: ['xw'] }
      },
      id: '69413918-8bd5-4609-a45a-098ebe427bb5',
      product: { abbrev: 'NanoBeam M5 16', name: 'NanoBeam M5 16' },
      shortnames: ['N5B', 'N5B-16'],
      triplets: [{ k2: 'NanoBeam M5 16', k1: 'N5B-16' }]
    },
    {
      sysids: ['e233'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '7f59806b-aeca-4130-aaab-761a0ef94244'
      },
      line: { name: 'airMAX', id: 'airmax' },
      sysid: 'e233',
      guids: [],
      id: '1656bf8b-8e6c-4607-a59e-0f03368b8c32',
      product: { abbrev: 'NanoBridge M365', name: 'NanoBridge M365' },
      shortnames: ['AirMAX NanoBridge M', 'B36'],
      triplets: []
    },
    {
      sysids: ['e235', 'e2b5'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '2848669b-21a8-4ef9-8b1d-da08be911410'
      },
      line: { name: 'airMAX', id: 'airmax' },
      sysid: 'e235',
      guids: [],
      uisp: {
        nameLegacy: [],
        bleServices: {},
        line: 'airmax_m5',
        firmware: { platform: 'airmax', board: ['xm'] }
      },
      id: '2c9819a5-2815-4f74-81bc-70499a604790',
      product: { abbrev: 'NanoBridge M5', name: 'NanoBridge M5' },
      shortnames: ['NBM5'],
      triplets: []
    },
    {
      sysids: ['e7fb'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '788d950f-b018-42c1-9ed7-37b4f1961aae'
      },
      line: { name: 'airMAX', id: 'airmax' },
      sysid: 'e7fb',
      guids: [],
      uisp: {
        nameLegacy: ['N5C'],
        bleServices: {},
        line: 'airmax_ac5',
        firmware: { platform: 'airmax', board: ['wa'] }
      },
      id: 'f13c6260-5540-4641-84ca-57a783306434',
      product: { abbrev: 'NanoStation 5AC', name: 'NanoStation 5AC' },
      shortnames: ['NS-5AC'],
      triplets: [{ k2: 'NanoStation 5AC', k1: 'NS-5AC' }]
    },
    {
      sysids: ['c003'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '68a1a96b-5132-4377-af06-d264f7c888bc'
      },
      line: { name: 'airMAX', id: 'airmax' },
      sysid: 'c003',
      guids: [],
      uisp: {
        nameLegacy: [],
        bleServices: {},
        line: 'airmax_m3',
        firmware: { platform: 'airmax', board: ['xm'] }
      },
      id: 'b757bcc1-0ad9-4edc-977e-52bd7aabaca9',
      product: { abbrev: 'NanoStation M3', name: 'NanoStation M3' },
      shortnames: ['NS3'],
      triplets: []
    },
    {
      sysids: ['e866', 'e002', 'e012'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '2348885e-3677-4ec4-8876-6a8da579e92a'
      },
      jrf: ['003WWA11253'],
      line: { name: 'airMAX', id: 'airmax' },
      sysid: 'e866',
      guids: [],
      uisp: {
        nameLegacy: [],
        bleServices: {},
        line: 'airmax_m2',
        firmware: { platform: 'airmax', board: ['xm'] }
      },
      id: 'd26632d7-cd18-4177-94b1-43fc8b322480',
      product: { abbrev: 'NanoStation M2', name: 'NanoStation M2' },
      shortnames: ['N2N'],
      triplets: [{ k2: 'NanoStation M2', k1: 'N2N' }, { k1: 'N2N' }]
    },
    {
      sysids: ['e003'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: 'dcb71ec3-48e4-4a07-86f6-2d7c64041d1d'
      },
      line: { name: 'airMAX', id: 'airmax' },
      sysid: 'e003',
      guids: [],
      uisp: {
        nameLegacy: [],
        bleServices: {},
        line: 'airmax_m365',
        firmware: { platform: 'airmax', board: ['xm'] }
      },
      id: '92942900-89d7-4817-86e7-4ccf3d3e174e',
      product: { abbrev: 'NanoStation M365', name: 'NanoStation M365' },
      shortnames: ['N36'],
      triplets: [{ k2: 'NanoStation M365', k1: 'N36' }]
    },
    {
      sysids: ['b719'],
      unifi: { adoptability: 'standalone' },
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '18b34619-b3c4-406d-9569-ffdfa9fb07c6'
      },
      line: { name: 'UniFi Protect', id: 'unifi-protect' },
      sysid: 'b719',
      guids: [],
      id: '7983cd58-b97a-489c-91b8-7a2265d7ff21',
      product: { abbrev: 'UNVR', name: 'Network Video Recorder' },
      shortnames: ['NVR'],
      triplets: [{ k2: 'UniFi NVR', k1: 'NVR' }, { k1: 'NVR' }]
    },
    {
      sysids: [],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '515f4bf4-78c9-4a8c-888e-f2937b6049a8'
      },
      line: { name: 'mFi', id: 'mfi' },
      guids: [],
      id: 'dd59a9b9-baa6-4045-b7c0-2ae9d045fe2c',
      product: { abbrev: 'mPower mini', name: 'mPower mini' },
      shortnames: ['P1E'],
      triplets: []
    },
    {
      sysids: [],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: 'dee28427-2228-46a6-8326-8d0f678796b0'
      },
      line: { name: 'mFi', id: 'mfi' },
      guids: [],
      id: '77eddb39-79c2-487c-8b96-ed3a3d672906',
      product: { abbrev: 'mPower mini', name: 'mPower mini' },
      shortnames: ['P1U'],
      triplets: []
    },
    {
      sysids: ['e1a3'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '80e2b659-d874-45f8-a4d6-6e0a92a440dc'
      },
      line: { name: 'airMAX', id: 'airmax' },
      sysid: 'e1a3',
      guids: [],
      uisp: {
        nameLegacy: [],
        bleServices: {},
        line: 'airmax_m365',
        firmware: { platform: 'airmax', board: ['xm'] }
      },
      id: '3b0f7a62-efa8-45b3-bf74-799fe2c0683d',
      product: { abbrev: 'PowerBridge M365', name: 'PowerBridge M365' },
      shortnames: ['P36'],
      triplets: []
    },
    {
      sysids: [],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: 'd50de2d2-0424-42e0-8a0a-97e7d03d19bc'
      },
      line: { name: 'mFi', id: 'mfi' },
      guids: [],
      id: '783e1e7e-776e-401b-bbbf-ace9283159be',
      product: { abbrev: 'mPower', name: 'mPower' },
      shortnames: ['P3E'],
      triplets: []
    },
    {
      sysids: [],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '49b7dc9a-c322-4b9b-b0ca-1b680f54bf9b'
      },
      line: { name: 'mFi', id: 'mfi' },
      guids: [],
      id: 'a652cf80-6841-4f34-8eae-d7e78db98565',
      product: { abbrev: 'mPower', name: 'mPower' },
      shortnames: ['P3U'],
      triplets: []
    },
    {
      sysids: ['e6e5'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: 'f0788e0f-c1ab-4513-a9f2-737582814e22'
      },
      line: { name: 'airMAX', id: 'airmax' },
      sysid: 'e6e5',
      guids: [],
      uisp: {
        nameLegacy: [],
        bleServices: {},
        line: 'airmax_m5',
        firmware: { platform: 'airmax', board: ['xw'] }
      },
      id: '459507ed-283b-4c88-b378-42643983e44d',
      product: { abbrev: 'PowerBeam M5 400-ISO', name: 'PowerBeam M5 400-ISO' },
      shortnames: ['P5B-400-ISO'],
      triplets: []
    },
    {
      sysids: [],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: 'f7384e14-d8f8-464b-a7cd-415fcc446e05'
      },
      line: { name: 'mFi', id: 'mfi' },
      guids: [],
      id: '6dccd067-02e5-4c5d-867e-33692fd02756',
      product: { abbrev: 'mPower Professional', name: 'mPower Professional' },
      shortnames: ['P6E'],
      triplets: [{ k1: 'P6E' }, { k3: 'P6E', k1: 'P6E' }]
    },
    {
      sysids: [],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '7a93ccb6-0a6e-44cb-a75b-2ddb442248b6'
      },
      line: { name: 'mFi', id: 'mfi' },
      guids: [],
      id: 'ddd962fc-2006-4153-abb8-7823dab3b11a',
      product: { abbrev: 'mPower Professional', name: 'mPower Professional' },
      shortnames: ['P8U'],
      triplets: [{ k1: 'P8U' }, { k3: 'P8U', k1: 'P8U' }]
    },
    {
      sysids: ['e2a3'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: 'd2f6e7d5-c9c7-43ad-9222-c60035c08b58'
      },
      line: { name: 'airMAX', id: 'airmax' },
      sysid: 'e2a3',
      guids: [],
      uisp: {
        nameLegacy: [],
        bleServices: {},
        line: 'airmax_m3',
        firmware: { platform: 'airmax', board: ['xm'] }
      },
      id: '2acc02cb-4eab-4508-b766-a38218e616c9',
      product: { abbrev: 'PowerBridge M3', name: 'PowerBridge M3' },
      shortnames: ['PB3'],
      triplets: []
    },
    {
      sysids: ['e1a5'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '7a7c6293-d5f7-47e5-8d7a-eb6a8b1e726b'
      },
      line: { name: 'airMAX', id: 'airmax' },
      sysid: 'e1a5',
      guids: [],
      uisp: {
        nameLegacy: [],
        bleServices: {},
        line: 'airmax_m5',
        firmware: { platform: 'airmax', board: ['xm'] }
      },
      id: '01057710-0ab2-4863-ad63-a315fb7a75d2',
      product: { abbrev: 'PowerBridge M5', name: 'PowerBridge M5' },
      shortnames: ['PB5'],
      triplets: []
    },
    {
      sysids: ['e3f2'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: 'f695c994-792c-4c65-a442-7854359c38ce'
      },
      line: { name: 'airMAX', id: 'airmax' },
      sysid: 'e3f2',
      guids: [],
      uisp: {
        nameLegacy: ['PBE-2AC-400', 'P2C'],
        bleServices: {},
        line: 'airmax_ac2',
        firmware: { platform: 'airmax', board: ['2wa'] }
      },
      id: '31490975-0478-45a7-9dfa-e6aae188079c',
      product: { abbrev: 'PowerBeam 2AC 400', name: 'PowerBeam 2AC 400' },
      shortnames: ['PBE-2AC-400'],
      triplets: [{ k2: 'PowerBeam 2AC 400', k1: 'PBE-2AC-400' }]
    },
    {
      sysids: ['e3d6'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: 'b3567182-7fa9-467c-a409-0d8fc3b9dc5b'
      },
      line: { name: 'airMAX', id: 'airmax' },
      sysid: 'e3d6',
      guids: [],
      uisp: {
        nameLegacy: ['PowerBeam 5AC Gen2', 'PBE-5AC-Gen2', 'PBE-5AC', 'P5C'],
        bleServices: {},
        line: 'airmax_ac5',
        firmware: { platform: 'airmax', board: ['wa'] }
      },
      id: '2251cd35-718a-43d2-99f5-cfd7fa86151c',
      product: { abbrev: 'PowerBeam 5AC', name: 'PowerBeam 5AC' },
      shortnames: ['PBE-5AC-Gen2'],
      triplets: [
        { k2: 'PowerBeam 5AC', k1: 'PBE-5AC-Gen2' },
        { k2: 'PowerBeam 5AC Gen2', k1: 'PBE-5AC-Gen2' }
      ]
    },
    {
      sysids: ['e3da'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '6b2de4eb-f5dd-41ca-921c-a45199c919de'
      },
      line: { name: 'airMAX', id: 'airmax' },
      sysid: 'e3da',
      guids: [],
      id: '75f76432-4864-4678-830e-564033c3761e',
      product: { abbrev: 'PowerBeam 5AC 300', name: 'PowerBeam 5AC 300' },
      shortnames: ['AirMAX PowerBeam 5AC 300', 'PBE-5AC-300'],
      triplets: [{ k2: 'PowerBeam 5AC 300', k1: 'PBE-5AC-300' }]
    },
    {
      sysids: [],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '91c4e08d-f859-45b6-a7eb-4813693a4ae2'
      },
      line: { name: 'airMAX', id: 'airmax' },
      guids: [],
      uisp: {
        nameLegacy: ['PBE-5AC-300-ISO', 'P5C'],
        bleServices: {},
        line: 'airmax_ac5',
        firmware: { platform: 'airmax', board: ['wa'] }
      },
      id: 'a8929f28-80a8-4e8e-8c7d-368bcb15fdd5',
      product: { abbrev: 'PowerBeam 5AC 300 ISO', name: 'PowerBeam 5AC 300 ISO' },
      shortnames: ['PBE-5AC-300-ISO'],
      triplets: []
    },
    {
      sysids: [],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '56ae022c-43b2-41e5-8e60-bebb6cd7619a'
      },
      line: { name: 'airMAX', id: 'airmax' },
      guids: [],
      id: '0de2a23d-22aa-4f12-96f7-9118f3ae0bef',
      product: { abbrev: 'PowerBeam 5AC 400', name: 'PowerBeam 5AC 400' },
      shortnames: ['AirMAX PowerBeam 5AC 400', 'PBE-5AC-400'],
      triplets: []
    },
    {
      sysids: [],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '5f698222-f47a-46db-9b8a-536b124fd9d8'
      },
      line: { name: 'airMAX', id: 'airmax' },
      guids: [],
      uisp: {
        nameLegacy: ['PBE-5AC-400-ISO', 'P5C'],
        bleServices: {},
        line: 'airmax_ac5',
        firmware: { platform: 'airmax', board: ['wa'] }
      },
      id: '0f405d6a-13ef-4447-b912-3ccb5035bebb',
      product: { abbrev: 'PowerBeam 5AC 400 ISO', name: 'PowerBeam 5AC 400 ISO' },
      shortnames: ['PBE-5AC-400-ISO'],
      triplets: []
    },
    {
      sysids: [],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: 'ef5b4ad2-3fce-4003-9ae3-d69d6abd95dd'
      },
      line: { name: 'airMAX', id: 'airmax' },
      guids: [],
      uisp: {
        nameLegacy: ['PBE-5AC-500', 'P5C'],
        bleServices: {},
        line: 'airmax_ac5',
        firmware: { platform: 'airmax', board: ['xc'] }
      },
      id: 'f4b48e4a-0dca-4770-845a-9d0f15f05b19',
      product: { abbrev: 'PowerBeam 5AC 500', name: 'PowerBeam 5AC 500' },
      shortnames: ['PBE-5AC-500'],
      triplets: [{ k2: 'PowerBeam 5AC 500', k1: 'PBE-5AC-500' }]
    },
    {
      sysids: ['e3d5'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '4dd60274-c886-4125-8904-896287b6ba37'
      },
      line: { name: 'airMAX', id: 'airmax' },
      sysid: 'e3d5',
      guids: [],
      id: 'a2b3015b-e034-4db7-b132-4f858e1c2d84',
      product: { abbrev: 'PowerBeam 5AC 500 ISO', name: 'PowerBeam 5AC 500 ISO' },
      shortnames: ['AirMAX PowerBeam 5AC 500 ISO', 'PBE-5AC-500-ISO'],
      triplets: []
    },
    {
      sysids: [],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '9787bc52-d917-4289-8491-c87f0e229bb6'
      },
      line: { name: 'airMAX', id: 'airmax' },
      guids: [],
      id: '38914e69-6884-4392-9b03-9350ee4cadbf',
      product: {
        abbrev: 'airMAX PowerBeam 5AC ISO  Gen 2',
        name: 'airMAX PowerBeam 5AC ISO  Gen 2'
      },
      shortnames: ['AirMAX PowerBeam 5AC ISO  Gen 2'],
      triplets: []
    },
    {
      sysids: ['e5f5'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '4ce7d0f8-6562-4055-a6ad-80373e5f9967'
      },
      line: { name: 'airMAX', id: 'airmax' },
      sysid: 'e5f5',
      guids: [],
      uisp: {
        nameLegacy: ['PBE-5AC-620', 'P5C'],
        bleServices: {},
        line: 'airmax_ac5',
        firmware: { platform: 'airmax', board: ['xc'] }
      },
      id: 'fa38fde8-6559-4b70-a754-61efb08aa5b3',
      product: { abbrev: 'PowerBeam 5AC 620', name: 'PowerBeam 5AC 620' },
      shortnames: ['PBE-5AC-620'],
      triplets: [{ k2: 'PowerBeam 5AC 620', k1: 'PBE-5AC-620' }]
    },
    {
      sysids: [],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '062809c1-94f1-4cc5-91a3-d80dac5761fb'
      },
      line: { name: 'airMAX', id: 'airmax' },
      guids: [],
      uisp: {
        nameLegacy: ['PowerBeam 5AC ISO Gen2', 'PBE-5AC-ISO-Gen2', 'PBE-5AC-ISO', 'P5C'],
        bleServices: {},
        line: 'airmax_ac5',
        firmware: { platform: 'airmax', board: ['wa'] }
      },
      id: '857e2bfe-f34e-41a7-9968-f57667ce2f22',
      product: { abbrev: 'PowerBeam 5AC ISO', name: 'PowerBeam 5AC ISO' },
      shortnames: ['PBE-5AC-ISO-Gen2'],
      triplets: [
        { k2: 'PowerBeam 5AC ISO Gen2', k1: 'PBE-5AC-ISO-Gen2' },
        { k2: 'PowerBeam 5AC ISO', k1: 'PBE-5AC-ISO-Gen2' }
      ]
    },
    {
      sysids: [],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '64bfd869-a1f7-4a50-ae6f-b24df25fc8d6'
      },
      line: { name: 'airMAX', id: 'airmax' },
      guids: [],
      uisp: {
        nameLegacy: ['PowerBeamM2 400', 'PowerBeam M2'],
        bleServices: {},
        line: 'airmax_m2',
        firmware: { platform: 'airmax', board: ['xw'] }
      },
      id: '87b99658-c490-44c5-94e3-27a636557460',
      product: { abbrev: 'PowerBeam M2 400', name: 'PowerBeam M2 400' },
      shortnames: ['P2B-400'],
      triplets: [{ k2: 'PowerBeam M2 400', k1: 'P2B-400' }, { k1: 'P2B-400' }]
    },
    {
      sysids: [],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '3ffe53db-d90e-4b12-b478-5782c5a95102'
      },
      line: { name: 'airMAX', id: 'airmax' },
      guids: [],
      id: 'bb2cdc74-99a5-4ea7-bddf-4f9d62c2ca90',
      product: { abbrev: 'PowerBeam M5 300', name: 'PowerBeam M5 300' },
      shortnames: ['AirMAX PowerBeam M5 300', 'P5B-300'],
      triplets: [{ k2: 'PowerBeam M5 300', k1: 'P5B-300' }]
    },
    {
      sysids: ['e5e5'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '1e712fb7-5601-4b90-ba6d-31fea2fc161e'
      },
      line: { name: 'airMAX', id: 'airmax' },
      sysid: 'e5e5',
      guids: [],
      uisp: {
        nameLegacy: [],
        bleServices: {},
        line: 'airmax_m5',
        firmware: { platform: 'airmax', board: ['xw'] }
      },
      id: '0927b326-9e41-4da3-9b2a-775c88ec31e8',
      product: { abbrev: 'PowerBeam M5 300-ISO', name: 'PowerBeam M5 300-ISO' },
      shortnames: ['P5B-300-ISO'],
      triplets: []
    },
    {
      sysids: [],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '1cffbbd9-4c33-4f30-8c27-e57a2388d498'
      },
      line: { name: 'airMAX', id: 'airmax' },
      guids: [],
      uisp: {
        nameLegacy: [],
        bleServices: {},
        line: 'airmax_m5',
        firmware: { platform: 'airmax', board: ['xw'] }
      },
      id: 'e55e3052-1922-4290-bd20-facf46a1ae8e',
      product: { abbrev: 'PowerBeam M5 400', name: 'PowerBeam M5 400' },
      shortnames: ['P5B-400'],
      triplets: [{ k2: 'PowerBeam M5 400', k1: 'P5B-400' }]
    },
    {
      sysids: [],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: 'a0127066-0fd5-439f-9252-c98c4b041c1f'
      },
      line: { name: 'airMAX', id: 'airmax' },
      guids: [],
      id: '44856a0a-3c17-42d6-af3a-a275be64966b',
      product: { abbrev: 'airMAX PowerBeam M5 400-ISO', name: 'airMAX PowerBeam M5 400-ISO' },
      shortnames: ['AirMAX PowerBeam M5 400-ISO'],
      triplets: []
    },
    {
      sysids: ['e110'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '2752ae39-f810-4f1a-bc79-78465d3dcbb5'
      },
      line: { name: 'airMAX', id: 'airmax' },
      sysid: 'e110',
      guids: [],
      uisp: {
        nameLegacy: [],
        bleServices: {},
        line: 'airmax_m10',
        firmware: { platform: 'airmax', board: ['xm'] }
      },
      id: '3eb5a16a-3dee-494e-9ac6-b5c2c38708d8',
      product: { abbrev: 'PowerBridge M10', name: 'PowerBridge M10' },
      shortnames: ['PBM10'],
      triplets: []
    },
    {
      sysids: [],
      unifi: {
        adoptability: 'adoptable',
        network: {
          radios: {
            na: { gain: 3, maxPower: 22, maxSpeedMegabitsPerSecond: 150 },
            ng: { gain: 3, maxPower: 22, maxSpeedMegabitsPerSecond: 150 }
          },
          numberOfPorts: 1,
          ethernetMaxSpeedMegabitsPerSecond: 100,
          systemIdHexadecimal: 'e302',
          features: { zh: true },
          chipset: 'b',
          type: 'uap',
          minimumFirmwareRequired: '4.0.6',
          deviceCapabilities: ['ACCESS_POINT', 'HAS_CLIENTS']
        }
      },
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '1a431afe-91c6-400f-bd34-c2eeffec263d'
      },
      fcc: 'SWX-B2',
      line: { name: 'airMAX', id: 'airmax' },
      guids: [],
      ic: '6545A-B2',
      id: 'f52c4866-705e-4c9e-9b87-bb79c7b05aaf',
      product: { abbrev: 'airMAX PicoStation M2', name: 'airMAX PicoStation M2' },
      shortnames: ['P2N', 'p2N'],
      triplets: [{ k2: 'PicoStation M2', k1: 'p2N' }, { k1: 'p2N' }]
    },
    {
      sysids: [],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: 'ced9ebcf-10dc-48be-ba4c-cc7a529d4399'
      },
      line: { name: 'AirFiber', id: 'airfiber' },
      guids: [],
      uisp: {
        nameLegacy: [],
        bleServices: {},
        line: 'airfiber',
        firmware: { platform: null, board: [] }
      },
      id: '54ae1d12-e594-495d-90ef-1e7100d61383',
      product: { abbrev: 'airFiber 5X', name: 'airFiber 5X' },
      shortnames: ['AF5X'],
      triplets: []
    },
    {
      sysids: ['dc35'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: 'df548d33-1321-450d-9726-f43f9b059d0e'
      },
      line: { name: 'airMAX', id: 'airmax' },
      sysid: 'dc35',
      guids: [],
      uisp: {
        nameLegacy: ['PS-5AC', 'P5G'],
        bleServices: {},
        line: 'airmax_ac5',
        firmware: { platform: 'airmax', board: ['xc'] }
      },
      id: '57d9f376-87a9-4890-9c38-35373e9d25ce',
      product: { abbrev: 'PrismStation 5AC', name: 'PrismStation 5AC' },
      shortnames: ['PS-5AC'],
      triplets: [{ k2: 'PrismStation 5AC', k1: 'PS-5AC' }]
    },
    {
      sysids: [],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: 'e444d67c-823d-471f-ba1d-f3b10597e976'
      },
      line: { name: 'airMAX', id: 'airmax' },
      guids: [],
      id: '571c4a50-28a9-49f1-9c9f-3c01b702d0bf',
      product: { abbrev: 'Rocket 2AC Prism', name: 'Rocket 2AC Prism' },
      shortnames: ['AirMAX R2AC-US Rocket AC', 'R2AC', 'R2AC-PRISM'],
      triplets: [{ k2: 'Rocket 2AC Prism', k1: 'R2AC-PRISM' }]
    },
    {
      sysids: ['e1d2'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: 'eaa64d5b-8f8b-4ce5-9c1b-1f2942cb7a98'
      },
      line: { name: 'airMAX', id: 'airmax' },
      sysid: 'e1d2',
      guids: [],
      uisp: {
        nameLegacy: [],
        bleServices: {},
        line: 'airmax_m2',
        firmware: { platform: 'airmax', board: ['ti', 'xw'] }
      },
      id: '7c7077f2-9a96-4823-9876-d0c6a8ca5b10',
      product: { abbrev: 'Rocket M2 Titanium', name: 'Rocket M2 Titanium' },
      shortnames: ['R2T'],
      triplets: []
    },
    {
      sysids: ['e1b3'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: 'c2df43cb-343f-42dd-8088-6d8abd0ef113'
      },
      line: { name: 'airMAX', id: 'airmax' },
      sysid: 'e1b3',
      guids: [],
      uisp: {
        nameLegacy: [],
        bleServices: {},
        line: 'airmax_m365',
        firmware: { platform: 'airmax', board: ['xm'] }
      },
      id: '67c7e81b-7462-45a5-9571-0402dd0e598a',
      product: { abbrev: 'Rocket M365', name: 'Rocket M365' },
      shortnames: ['R36'],
      triplets: []
    },
    {
      sysids: ['e1d3'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '86f4bd7d-13d5-456b-9165-29f916d5563a'
      },
      line: { name: 'airMAX', id: 'airmax' },
      sysid: 'e1d3',
      guids: [],
      uisp: {
        nameLegacy: ['Rocket M365 GPS'],
        bleServices: {},
        line: 'airmax_m365',
        firmware: { platform: 'airmax', board: ['xm'] }
      },
      id: '556f2061-b436-4c84-9eaa-e3511ff4ecf6',
      product: { abbrev: 'Rocket M365', name: 'Rocket M365' },
      shortnames: ['R36-GPS'],
      triplets: []
    },
    {
      sysids: [],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: 'daa0c8af-8df3-455c-acec-aab27bf14c8e'
      },
      line: { name: 'airMAX', id: 'airmax' },
      guids: [],
      uisp: {
        nameLegacy: ['R5AC-Lite', 'R5C'],
        bleServices: {},
        line: 'airmax_ac5',
        firmware: { platform: 'airmax', board: ['xc'] }
      },
      id: '57b1604e-04a8-4080-b037-3737de7114be',
      product: { abbrev: 'Rocket 5AC Lite', name: 'Rocket 5AC Lite' },
      shortnames: ['R5AC-Lite'],
      triplets: [{ k2: 'Rocket 5AC Lite', k1: 'R5AC-Lite' }]
    },
    {
      sysids: [],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: 'a7e62b5f-e57a-4c2a-80ac-276211b84da4'
      },
      line: { name: 'airMAX', id: 'airmax' },
      guids: [],
      uisp: {
        nameLegacy: ['Rocket 5AC Prism M', 'R5AC-PRISM', 'R5AC-PRISM-M', 'R5C'],
        bleServices: {},
        line: 'airmax_ac5',
        firmware: { platform: 'airmax', board: ['xc'] }
      },
      id: 'bb5a9bbd-0505-4301-b07a-0e5fc7ca5e5d',
      product: { abbrev: 'Rocket 5AC Prism', name: 'Rocket 5AC Prism' },
      shortnames: ['R5AC-PRISM-M'],
      triplets: []
    },
    {
      sysids: [],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '3aa67234-64d9-455f-8e0e-d61ec9dc0bbe'
      },
      line: { name: 'airMAX', id: 'airmax' },
      guids: [],
      id: '3d81332f-a5bc-4308-8e57-f90217b7c9e1',
      product: { abbrev: 'Rocket 5AC PTMP', name: 'Rocket 5AC PTMP' },
      shortnames: ['AirMAX Rocket 5AC PTMP', 'R5AC-PTMP'],
      triplets: [{ k2: 'Rocket 5AC PTMP', k1: 'R5AC-PTMP' }]
    },
    {
      sysids: [],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '118d5587-c450-4682-91d4-73c82ee38ca1'
      },
      line: { name: 'airMAX', id: 'airmax' },
      guids: [],
      id: 'f1950622-86ea-48f4-ba90-912c5c5f30d7',
      product: { abbrev: 'Rocket 5AC PTP', name: 'Rocket 5AC PTP' },
      shortnames: ['AirMAX Rocket 5AC PTP', 'R5AC-PTP'],
      triplets: []
    },
    {
      sysids: ['e1c5'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: 'c3f621a0-c72d-4afb-867b-42e045015964'
      },
      line: { name: 'airMAX', id: 'airmax' },
      sysid: 'e1c5',
      guids: [],
      uisp: {
        nameLegacy: ['Rocket M5 GPS'],
        bleServices: {},
        line: 'airmax_m5',
        firmware: { platform: 'airmax', board: ['xm', 'xw'] }
      },
      id: '549e7099-1168-4d8d-be35-2a78fc8546d5',
      product: { abbrev: 'Rocket M5', name: 'Rocket M5' },
      shortnames: ['R5N-GPS'],
      triplets: []
    },
    {
      sysids: ['e1d5', 'e4d5'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '990695dd-5443-46ac-8495-06edd14134da'
      },
      line: { name: 'airMAX', id: 'airmax' },
      sysid: 'e1d5',
      guids: [],
      uisp: {
        nameLegacy: ['Rocket M5 Titanium GPS'],
        bleServices: {},
        line: 'airmax_m5',
        firmware: { platform: 'airmax', board: ['ti', 'xw'] }
      },
      id: '07e915e6-d058-4449-be85-ce26c15b6463',
      product: { abbrev: 'Rocket M5 Titanium', name: 'Rocket M5 Titanium' },
      shortnames: ['R5T-GPS'],
      triplets: []
    },
    {
      sysids: ['e1b6'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: 'e0382f07-989e-4cff-93af-9541059c9ff4'
      },
      line: { name: 'airMAX', id: 'airmax' },
      sysid: 'e1b6',
      guids: [],
      uisp: {
        nameLegacy: [],
        bleServices: {},
        line: 'airmax_m6',
        firmware: { platform: 'airmax', board: ['xm'] }
      },
      id: '434dbb23-3053-4b19-aef6-91d38bc29f32',
      product: { abbrev: 'Rocket M6', name: 'Rocket M6' },
      shortnames: ['R6N'],
      triplets: []
    },
    {
      sysids: ['e1b9'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '697f4954-a6c1-46f9-acbc-74273f78b4eb'
      },
      line: { name: 'airMAX', id: 'airmax' },
      sysid: 'e1b9',
      guids: [],
      uisp: {
        nameLegacy: [],
        bleServices: {},
        line: 'airmax_m900',
        firmware: { platform: 'airmax', board: ['xm'] }
      },
      id: '97817ea9-f5b2-488c-8305-4b303ab29a16',
      product: { abbrev: 'Rocket M900', name: 'Rocket M900' },
      shortnames: ['R9N'],
      triplets: [{ k2: 'Rocket M900', k1: 'R9N' }, { k1: 'R9N' }]
    },
    {
      sysids: ['e1d9'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: 'da9bc442-9422-4b51-91fb-321d3f92ed9b'
      },
      line: { name: 'airMAX', id: 'airmax' },
      sysid: 'e1d9',
      guids: [],
      uisp: {
        nameLegacy: ['Rocket M900 GPS'],
        bleServices: {},
        line: 'airmax_m900',
        firmware: { platform: 'airmax', board: ['xm'] }
      },
      id: 'd6068425-ce60-4c10-88a4-07509142f3eb',
      product: { abbrev: 'Rocket M900', name: 'Rocket M900' },
      shortnames: ['R9N-GPS'],
      triplets: []
    },
    {
      sysids: [],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: 'ebcdac04-563b-4850-a5b1-6a21213b1307'
      },
      line: { name: 'airMAX', id: 'airmax' },
      guids: [],
      id: '3851292d-7c54-40ed-9181-0f15d79605b8',
      product: { abbrev: 'airMAX 2.4 Ghz 24', name: 'airMAX 2.4 Ghz 24' },
      shortnames: ['AirMAX 2.4 Ghz 24', 'AirMAX RocketDish 2G-24'],
      triplets: []
    },
    {
      sysids: [],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '4f30fcb3-f7f1-4585-9372-a8b4e6382cb6'
      },
      line: { name: 'airMAX', id: 'airmax' },
      guids: [],
      id: '54983a14-81b0-485b-b8b6-b9827a6eb781',
      product: { abbrev: 'airMAX 3 Ghz 26', name: 'airMAX 3 Ghz 26' },
      shortnames: ['AirMAX 3 Ghz 26', 'AirMAX RocketDish 3G-26'],
      triplets: []
    },
    {
      sysids: [],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '791e8a7c-8032-41e9-8d92-94ce59e06062'
      },
      line: { name: 'airMAX', id: 'airmax' },
      guids: [],
      id: 'd0af7b41-26ae-4c66-9195-e3a8bc4c80f7',
      product: { abbrev: 'airMAX 5 Ghz 30', name: 'airMAX 5 Ghz 30' },
      shortnames: ['AirMAX 5 Ghz 30', 'AirMAX RocketDish 5G-30'],
      triplets: []
    },
    {
      sysids: [],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: 'dc5692d9-b410-4d1d-9248-e77d4e5a7d49'
      },
      line: { name: 'airMAX', id: 'airmax' },
      guids: [],
      id: '5dc79a52-b63c-427f-823c-2ba28cf72d9e',
      product: { abbrev: 'airMAX RocketDish 5G30-LW', name: 'airMAX RocketDish 5G30-LW' },
      shortnames: ['AirMAX RocketDish 5G30-LW'],
      triplets: []
    },
    {
      sysids: [],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '7dfa47c2-ad88-4cd8-bca0-2a2969296a77'
      },
      line: { name: 'airMAX', id: 'airmax' },
      guids: [],
      id: '18620a1e-0289-4420-a825-ec06811974a3',
      product: { abbrev: 'airMAX RocketDish 5G31-AC', name: 'airMAX RocketDish 5G31-AC' },
      shortnames: ['AirMAX RocketDish 5G31-AC', 'AirMAX RocketDish AC Antenna 5Ghz'],
      triplets: []
    },
    {
      sysids: [],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '3d414b1e-35c1-4aec-95fa-f93376cf13d5'
      },
      line: { name: 'airMAX', id: 'airmax' },
      guids: [],
      id: '876965e3-f740-4f0d-859e-e2aece72f625',
      product: { abbrev: 'airMAX 5 Ghz 34', name: 'airMAX 5 Ghz 34' },
      shortnames: ['AirMAX 5 Ghz 34', 'AirMAX RocketDish 5G-34'],
      triplets: []
    },
    {
      sysids: [],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '6d29c405-2cec-4121-8f90-568320ff7f5e'
      },
      line: { name: 'airMAX', id: 'airmax' },
      guids: [],
      id: '74a97d06-e254-4282-9ef8-276a30ee5717',
      product: { abbrev: 'airMAX Rocket M2 Titanium', name: 'airMAX Rocket M2 Titanium' },
      shortnames: ['AirMAX Rocket M2 Titanium'],
      triplets: []
    },
    {
      sysids: ['e1c3'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '150e4f47-3d0f-4f88-861b-1e4196ab610e'
      },
      line: { name: 'airMAX', id: 'airmax' },
      sysid: 'e1c3',
      guids: [],
      uisp: {
        nameLegacy: [],
        bleServices: {},
        line: 'airmax_m3',
        firmware: { platform: 'airmax', board: ['xm'] }
      },
      id: 'e1687d04-5922-4805-9ddf-4d2d70e1df26',
      product: { abbrev: 'Rocket M3', name: 'Rocket M3' },
      shortnames: ['RM3'],
      triplets: []
    },
    {
      sysids: ['e1e3'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: 'f70db56b-e291-4ead-86b5-f3339ee30302'
      },
      line: { name: 'airMAX', id: 'airmax' },
      sysid: 'e1e3',
      guids: [],
      uisp: {
        nameLegacy: ['Rocket M3 GPS'],
        bleServices: {},
        line: 'airmax_m3',
        firmware: { platform: 'airmax', board: ['xm'] }
      },
      id: '58df3750-41e3-44f1-a955-d4a844b7de3a',
      product: { abbrev: 'Rocket M3', name: 'Rocket M3' },
      shortnames: ['RM3-GPS'],
      triplets: []
    },
    {
      sysids: ['e105', 'e1b5', 'e8b5', 'e6b5'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '1e18ea8b-9752-4cf1-8bbd-6ccfaf8109ac'
      },
      line: { name: 'airMAX', id: 'airmax' },
      sysid: 'e105',
      guids: [],
      uisp: {
        nameLegacy: [],
        bleServices: {},
        line: 'airmax_m5',
        firmware: { platform: 'airmax', board: ['xm', 'xw'] }
      },
      id: 'bf41f5c7-e4a6-4191-9ccc-ad22e9ca992b',
      product: { abbrev: 'Rocket M5', name: 'Rocket M5' },
      shortnames: ['R5N'],
      triplets: [{ k2: 'Rocket M5', k1: 'R5N' }]
    },
    {
      sysids: ['e7e7', 'e7e9'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '52a61baf-07b1-4d5d-aa45-3748fe5ca1b4'
      },
      line: { name: 'airMAX', id: 'airmax' },
      sysid: 'e7e7',
      guids: [],
      id: '8b4197a5-d311-4ecd-b44e-e1408eb90cd2',
      product: { abbrev: 'Rocket Prism 5AC', name: 'Rocket Prism 5AC' },
      shortnames: ['AirMAX Rocket 5AC Prism', 'R5AC-PRISM', 'RP-5AC-Gen2'],
      triplets: [
        { k2: 'Rocket Prism 5AC', k1: 'RP-5AC-Gen2' },
        { k2: 'Rocket Prism 5AC Gen2', k1: 'RP-5AC-Gen2' },
        { k2: 'Rocket 5AC Prism', k1: 'R5AC-PRISM' }
      ]
    },
    {
      sysids: ['e112e1b2', 'e102', 'e112', 'e1b2', 'e1c2'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '344a4ca3-ece7-44b8-b569-38513b62f307'
      },
      line: { name: 'airMAX', id: 'airmax' },
      sysid: 'e112e1b2',
      guids: [],
      id: '6b6681be-1e3d-44a9-9d32-485592b802bc',
      product: { abbrev: 'Rocket M2', name: 'Rocket M2' },
      shortnames: ['AirMAX Rocket M2', 'R2N', 'R2N-GPS'],
      triplets: [{ k2: 'Rocket M2', k1: 'R2N' }, { k1: 'R2N' }]
    },
    {
      images: { default: '80ff7b60652a1261f8c32e4a868274ce' },
      sysids: [],
      icon: {
        resolutions: [
          [25, 25],
          [32, 32],
          [51, 51],
          [64, 64],
          [101, 101],
          [128, 128],
          [129, 129],
          [256, 256],
          [257, 257],
          [512, 512],
          [1000, 1000]
        ],
        id: '9861a425-051e-44f8-962a-c079b2cad854'
      },
      line: { name: 'UniFi', id: 'unifi-network' },
      guids: [],
      id: '94584a8c-d5c9-4f61-8019-c7457e262803',
      deviceType: 'network-server-host',
      product: { abbrev: 'Self Hosted Network Server', name: 'Self Hosted Network Server' },
      shortnames: ['SELF-HOSTED-NETWORK-SERVER', 'controller'],
      triplets: []
    },
    {
      sysids: ['aa20'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '7d971c71-74d9-4ef4-8292-0705dbff5222'
      },
      line: { name: 'SunMAX', id: 'sunmax' },
      sysid: 'aa20',
      guids: [],
      id: '7f197515-6420-4bca-9811-76826f6c7628',
      product: { abbrev: 'SunMAX SolarPoint', name: 'SunMAX SolarPoint' },
      shortnames: ['SM-SP-40', 'SolarPoint'],
      triplets: [{ k2: 'SolarPoint', k1: 'SolarPoint' }]
    },
    {
      sysids: ['aa21'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '48b8b3b1-ebc0-4483-83d1-86c58189b006'
      },
      line: { name: 'SunMAX', id: 'sunmax' },
      sysid: 'aa21',
      guids: [],
      id: '3afaf2e8-108c-42a9-8502-d78a9eb7ccb7',
      product: { abbrev: 'SunMAX SolarSwitch', name: 'SunMAX SolarSwitch' },
      shortnames: ['SB-LITE', 'SolarSwitch'],
      triplets: [
        { k2: 'SolarSwitch', k1: 'SolarSwitch' },
        { k2: 'SolarSwitch', k1: 'SB-LITE' }
      ]
    },
    {
      sysids: [],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: 'f0091e72-e840-4e09-874a-adf49347318f'
      },
      line: { name: 'Unknown', id: 'unknown' },
      guids: [],
      id: 'a6f6e6bb-0fb6-4c68-b653-748b4e9a4356',
      product: { abbrev: 'ToughSwitch 16', name: 'ToughSwitch 16' },
      shortnames: ['Ubiquiti ToughSwitch 16'],
      triplets: []
    },
    {
      sysids: ['e701'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '0ce387b3-bedf-419a-aeee-efb33da6ca26'
      },
      line: { name: 'EdgeMAX', id: 'edgemax' },
      sysid: 'e701',
      guids: [],
      uisp: {
        nameLegacy: ['TOUGHSwitch 8'],
        bleServices: {},
        line: 'tough_switch',
        firmware: { platform: 'edgeswitch', board: ['esxp'] }
      },
      id: '7ea4aeb5-aefd-4e03-9f4e-146d7489603c',
      product: { abbrev: 'EdgeSwitch 8XP', name: 'EdgeSwitch 8XP' },
      shortnames: ['TSW-8'],
      triplets: []
    },
    {
      sysids: ['e702'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '89b714f2-5e8a-465c-9278-0e6b6fe10c60'
      },
      line: { name: 'EdgeMAX', id: 'edgemax' },
      sysid: 'e702',
      guids: [],
      uisp: {
        nameLegacy: ['TOUGHSwitch 8 PoE'],
        bleServices: {},
        line: 'tough_switch',
        firmware: { platform: 'edgeswitch', board: ['esxp'] }
      },
      id: '3885f3e0-eae9-4eaa-a3a7-4beb3547668e',
      product: { abbrev: 'EdgeSwitch 8XP', name: 'EdgeSwitch 8XP' },
      shortnames: ['TSW-8-POE'],
      triplets: []
    },
    {
      sysids: [],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: 'fcbae031-4183-4f4a-a075-b041cd23d636'
      },
      line: { name: 'EdgeMAX', id: 'edgemax' },
      guids: [],
      uisp: {
        nameLegacy: ['TOUGHSwitch PoE PRO', 'TSW-PoE PRO'],
        bleServices: {},
        line: 'tough_switch',
        firmware: { platform: 'edgeswitch', board: ['esxp'] }
      },
      id: 'a53836df-62cd-40b7-be18-542ec101208c',
      product: { abbrev: 'EdgeSwitch 8XP', name: 'EdgeSwitch 8XP' },
      shortnames: ['TSW-PoE PRO'],
      triplets: [{ k2: 'EdgeSwitch 8XP', k1: 'TSW-PoE PRO' }, { k1: 'TSW-PoE PRO' }]
    },
    {
      sysids: [],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: 'a2571213-2e41-4587-93b5-8584c95d995f'
      },
      line: { name: 'airMAX', id: 'airmax' },
      guids: [],
      id: 'f2b5f7be-4067-464b-bfa3-c3e58a5c5159',
      product: { abbrev: 'airMAX Ubiquiti Installer', name: 'airMAX Ubiquiti Installer' },
      shortnames: ['AirMAX Ubiquiti Installer'],
      triplets: []
    },
    {
      sysids: ['e617'],
      unifi: {
        adoptability: 'adoptable',
        network: {
          radios: {
            na: { maxSpeedMegabitsPerSecond: 300 },
            ng: { gain: 2, maxPower: 20, maxSpeedMegabitsPerSecond: 300 }
          },
          numberOfPorts: 1,
          ethernetMaxSpeedMegabitsPerSecond: 1000,
          systemIdHexadecimal: 'e611',
          features: { bandsteer: true, ac: true, gen: 2 },
          chipset: 'b',
          type: 'uap',
          minimumFirmwareRequired: '4.0.6',
          deviceCapabilities: ['ULTE', 'ACCESS_POINT', 'LTE_MODEM']
        }
      },
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: 'fe65d707-1bdb-46a3-b79b-bd600150226e'
      },
      line: { name: 'UniFi LTE', id: 'unifi-lte' },
      sysid: 'e617',
      guids: [],
      id: '0155dcf2-e153-4fa8-91de-03fe5052b069',
      product: { abbrev: 'LTE', name: 'LTE Backup' },
      shortnames: ['U-LTE-US', 'ULTE'],
      triplets: [
        { k3: 'ULTE', k1: 'ULTE' },
        { k2: 'U-LTE', k1: 'ULTE' },
        { k2: 'UAP-LTE', k1: 'ULTE' }
      ]
    },
    {
      sysids: [],
      unifi: {
        adoptability: 'adoptable',
        network: {
          radios: {
            na: { maxSpeedMegabitsPerSecond: 300 },
            ng: { gain: 2, maxPower: 20, maxSpeedMegabitsPerSecond: 300 }
          },
          numberOfPorts: 1,
          ethernetMaxSpeedMegabitsPerSecond: 1000,
          systemIdHexadecimal: 'e612',
          features: { bandsteer: true, ac: true, gen: 2 },
          chipset: 'b',
          type: 'uap',
          minimumFirmwareRequired: '4.0.6',
          deviceCapabilities: ['ULTE', 'ACCESS_POINT', 'LTE_MODEM']
        }
      },
      icon: {
        resolutions: [
          [25, 25],
          [32, 32],
          [51, 51],
          [64, 64],
          [101, 101],
          [128, 128],
          [129, 129],
          [256, 256],
          [257, 257],
          [512, 512],
          [1000, 1000]
        ],
        id: 'efbe5cab-8980-404f-a3a9-cc3dcb21b968'
      },
      line: { name: 'UniFi LTE', id: 'unifi-lte' },
      guids: [],
      id: '5dc0d4df-cdaa-44dc-ac4f-d430260700c6',
      product: { abbrev: 'LTE Pro', name: 'LTE Backup Professional' },
      shortnames: ['U-LTE-Pro-EU', 'ULTEPEU'],
      triplets: [
        { k2: 'U-LTE-Pro-EU', k1: 'ULTEPEU' },
        { k3: 'ULTEPEU', k1: 'ULTEPEU' },
        { k2: 'UniFi LTE Pro EU', k1: 'ULTEPEU' }
      ]
    },
    {
      sysids: [],
      unifi: {
        adoptability: 'adoptable',
        network: {
          radios: {
            na: { maxSpeedMegabitsPerSecond: 300 },
            ng: { gain: 2, maxPower: 20, maxSpeedMegabitsPerSecond: 300 }
          },
          numberOfPorts: 1,
          ethernetMaxSpeedMegabitsPerSecond: 1000,
          systemIdHexadecimal: 'e613',
          features: { bandsteer: true, ac: true, gen: 2 },
          chipset: 'b',
          type: 'uap',
          minimumFirmwareRequired: '4.0.6',
          deviceCapabilities: ['ULTE', 'ACCESS_POINT', 'LTE_MODEM']
        }
      },
      icon: {
        resolutions: [
          [25, 25],
          [32, 32],
          [51, 51],
          [64, 64],
          [101, 101],
          [128, 128],
          [129, 129],
          [256, 256],
          [257, 257],
          [512, 512],
          [1000, 1000]
        ],
        id: 'efbe5cab-8980-404f-a3a9-cc3dcb21b968'
      },
      line: { name: 'UniFi LTE', id: 'unifi-lte' },
      guids: [],
      id: '089999e2-2756-4382-ac3e-ef7dbfa6c290',
      product: { abbrev: 'LTE Pro', name: 'LTE Backup Professional' },
      shortnames: ['ULTEPUS'],
      triplets: [
        { k2: 'U-LTE-Pro', k1: 'ULTEPUS' },
        { k3: 'ULTEPUS', k1: 'ULTEPUS' }
      ]
    },
    {
      sysids: [],
      unifi: {
        adoptability: 'adoptable',
        network: {
          radios: {
            na: { gain: 4, maxPower: 25, maxSpeedMegabitsPerSecond: 2400 },
            ng: { gain: 3, maxPower: 20, maxSpeedMegabitsPerSecond: 570 }
          },
          numberOfPorts: 1,
          ethernetMaxSpeedMegabitsPerSecond: 1000,
          systemIdHexadecimal: 'a642',
          features: {
            outdoorModeSupport: false,
            bandsteer: true,
            ax: true,
            gen: 2,
            atfDisabled: true
          },
          chipset: 'c',
          type: 'uap',
          minimumFirmwareRequired: '6.4.4',
          deviceCapabilities: ['ACCESS_POINT', 'HAS_CLIENTS']
        }
      },
      icon: {
        resolutions: [
          [25, 25],
          [32, 32],
          [51, 51],
          [64, 64],
          [101, 101],
          [128, 128],
          [129, 129],
          [256, 256],
          [257, 257],
          [512, 512],
          [1000, 1000]
        ],
        id: '06a25b40-ef1f-463a-82d9-13236866ea3d'
      },
      fcc: 'SWX-U6P',
      jrf: ['201-230529'],
      line: { name: 'UniFi', id: 'unifi-network' },
      minAdoptVersion: { net: '7.3.76' },
      guids: ['29f55a65-3745-4110-9ca5-57ff968cad9e'],
      ic: '6545A-U6P',
      id: '12923dc3-eb18-481c-9194-02528b34b425',
      product: { abbrev: 'U6+', name: 'Access Point U6+' },
      shortnames: ['UAPL6'],
      triplets: []
    },
    {
      sysids: ['a654'],
      unifi: {
        adoptability: 'adoptable',
        network: {
          radios: {
            na: { gain: 3, maxPower: 26, maxSpeedMegabitsPerSecond: 2400 },
            /* eslint-disable @typescript-eslint/naming-convention */
            '6e': { gain: 6, maxPower: 26 },
            /* eslint-enable @typescript-eslint/naming-convention */
            ng: { gain: 5, maxPower: 22, maxSpeedMegabitsPerSecond: 570 }
          },
          numberOfPorts: 1,
          ethernetMaxSpeedMegabitsPerSecond: 1000,
          systemIdHexadecimal: 'a654',
          features: { bandsteer: true, ax: true, gen: 2, atfDisabled: true },
          chipset: 'f',
          type: 'uap',
          minimumFirmwareRequired: '5.55.12',
          deviceCapabilities: ['ACCESS_POINT', 'HAS_CLIENTS']
        }
      },
      icon: {
        resolutions: [
          [25, 25],
          [32, 32],
          [51, 51],
          [64, 64],
          [101, 101],
          [128, 128],
          [129, 129],
          [256, 256],
          [257, 257],
          [512, 512],
          [1000, 1000]
        ],
        id: 'c429ec89-99a0-4892-ae8a-afcd5c805367'
      },
      fcc: 'SWX-U6EP',
      jrf: ['201-230134'],
      line: { name: 'UniFi', id: 'unifi-network' },
      sysid: 'a654',
      guids: ['3f3f9d29-a929-4bf0-8ef2-6391936a9ecd', '958d5091-8705-498c-b0d5-fc4136b18bcc'],
      btle: {
        factoryDefault: '958d5091-8705-498c-b0d5-fc4136b18bcc',
        userConfigured: '3f3f9d29-a929-4bf0-8ef2-6391936a9ecd'
      },
      ic: '6545A-U6EP',
      id: '6b036438-7ceb-464b-97e7-d681054e41bb',
      product: { abbrev: 'U6 Enterprise', name: 'Access Point U6 Enterprise' },
      shortnames: ['U6-Enterprise', 'U6ENT'],
      triplets: [
        { k2: 'U6-Enterprise', k1: 'U6ENT' },
        { k3: 'U6ENT', k1: 'U6ENT' }
      ]
    },
    {
      sysids: ['a656'],
      unifi: {
        adoptability: 'adoptable',
        network: {
          radios: {
            na: { gain: 6, maxPower: 26, maxSpeedMegabitsPerSecond: 2400 },
            /* eslint-disable @typescript-eslint/naming-convention */
            '6e': { gain: 6, maxPower: 26 },
            /* eslint-enable @typescript-eslint/naming-convention */
            ng: { gain: 4, maxPower: 22, maxSpeedMegabitsPerSecond: 570 }
          },
          bleServices: [
            {
              configured: 'be99fb0e-4457-4d68-a4a4-e419fcfbf1e6',
              default: '417f50af-9ec0-4536-b525-06385c9d9fc9'
            }
          ],
          numberOfPorts: 5,
          hybrid: 'uap+usw',
          ethernetMaxSpeedMegabitsPerSecond: 1000,
          systemIdHexadecimal: 'a656',
          features: { bandsteer: false, ax: true, gen: 2, atfDisabled: true },
          ports: { standard: 4 },
          chipset: 'f',
          type: 'uap',
          minimumFirmwareRequired: '5.76.0',
          deviceCapabilities: ['ACCESS_POINT', 'ACCESS_POINT_SWITCH', 'HAS_CLIENTS']
        }
      },
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '3924bd7e-b16a-4e41-baf8-d8b728fb9b4c'
      },
      line: { name: 'UniFi', id: 'unifi-network' },
      sysid: 'a656',
      guids: ['cd2ea470-ee6e-447b-881d-4932f9e837aa'],
      btle: {
        factoryDefault: '417f50af-9ec0-4536-b525-06385c9d9fc9',
        userConfigured: 'be99fb0e-4457-4d68-a4a4-e419fcfbf1e6'
      },
      id: '34d4210e-10e0-43c2-8854-4f023c6303ab',
      product: { abbrev: 'U6 Enterprise IW', name: 'Access Point U6 Enterprise In-Wall' },
      shortnames: ['U6-Enterprise-IW', 'U6ENTIW'],
      triplets: [
        { k3: 'U6ENTIW', k1: 'U6ENTIW' },
        { k2: 'U6-Enterprise-IW', k1: 'U6ENTIW' }
      ]
    },
    {
      sysids: ['a653'],
      unifi: {
        adoptability: 'adoptable',
        network: {
          radios: {
            na: { gain: 6, maxPower: 25, maxSpeedMegabitsPerSecond: 2400 },
            ng: { gain: 5, maxPower: 20, maxSpeedMegabitsPerSecond: 570 }
          },
          numberOfPorts: 1,
          ethernetMaxSpeedMegabitsPerSecond: 1000,
          systemIdHexadecimal: 'a653',
          features: { bandsteer: true, ax: true, gen: 2, atfDisabled: true },
          chipset: 'f',
          type: 'uap',
          minimumFirmwareRequired: '5.67.0',
          deviceCapabilities: ['ACCESS_POINT', 'HAS_CLIENTS']
        }
      },
      icon: {
        resolutions: [
          [25, 25],
          [32, 32],
          [51, 51],
          [64, 64],
          [101, 101],
          [128, 128],
          [129, 129],
          [256, 256],
          [257, 257],
          [512, 512],
          [1000, 1000]
        ],
        id: 'af2f4815-842f-4b91-9d8e-01ea7ff96a9d'
      },
      fcc: 'SWX-U6EXTR',
      jrf: ['201-220129'],
      line: { name: 'UniFi', id: 'unifi-network' },
      sysid: 'a653',
      guids: ['70f9ce41-e4ea-40e7-9ffe-1f42635d3e52', 'c1903f50-9391-44a3-9b27-7b5a370da94f'],
      btle: {
        factoryDefault: 'c1903f50-9391-44a3-9b27-7b5a370da94f',
        userConfigured: '70f9ce41-e4ea-40e7-9ffe-1f42635d3e52'
      },
      ic: '6545A-U6EXTR',
      id: '5aabd026-2372-4964-9769-418af0559db7',
      product: { abbrev: 'U6 Extender', name: 'Access Point U6 Extender' },
      shortnames: ['U6EXT', 'UAE6'],
      triplets: [
        { k2: 'U6-Extender', k1: 'UAE6' },
        { k2: 'U6-Extender-EA', k1: 'UAE6' },
        { k2: 'U6-Extender', k1: 'U6EXT' },
        { k3: 'U6EXT', k1: 'U6EXT' },
        { k3: 'UAE6', k1: 'UAE6' }
      ]
    },
    {
      sysids: ['a652'],
      unifi: {
        adoptability: 'adoptable',
        network: {
          radios: {
            na: { gain: 4, maxPower: 25, maxSpeedMegabitsPerSecond: 2400 },
            ng: { gain: 3, maxPower: 20, maxSpeedMegabitsPerSecond: 570 }
          },
          bleServices: [
            {
              configured: '6ffe1fae-7a9e-4f70-bc82-8fcf530f9ddc',
              default: '883133c2-2781-4478-aa68-3338e6f3aa3c'
            }
          ],
          numberOfPorts: 5,
          hybrid: 'uap+usw',
          ethernetMaxSpeedMegabitsPerSecond: 1000,
          systemIdHexadecimal: 'a652',
          features: { bandsteer: true, ax: true, gen: 2 },
          ports: { standard: 4 },
          chipset: 'f',
          type: 'uap',
          minimumFirmwareRequired: '5.66.0',
          deviceCapabilities: ['ACCESS_POINT', 'ACCESS_POINT_SWITCH', 'HAS_CLIENTS']
        }
      },
      icon: {
        resolutions: [
          [25, 25],
          [32, 32],
          [51, 51],
          [64, 64],
          [101, 101],
          [128, 128],
          [129, 129],
          [256, 256],
          [257, 257],
          [512, 512],
          [1000, 1000]
        ],
        id: '70fa881e-6e4a-40ca-8edb-bd3420a1b082'
      },
      fcc: 'SWX-U6IWR',
      jrf: ['201-220294'],
      line: { name: 'UniFi', id: 'unifi-network' },
      sysid: 'a652',
      guids: [
        '883133c2-2781-4478-aa68-3338e6f3aa3c',
        '6ffe1fae-7a9e-4f70-bc82-8fcf530f9ddc',
        '53860c6c-2ca8-450b-9138-6d8fbb300fb5',
        'f06176a5-109f-45f0-9734-8d3be87f6db8'
      ],
      btle: {
        factoryDefault: '883133c2-2781-4478-aa68-3338e6f3aa3c',
        userConfigured: '6ffe1fae-7a9e-4f70-bc82-8fcf530f9ddc'
      },
      ic: '6545A-U6IWR',
      id: 'a02124c0-8fc0-47e1-a1eb-be945d0d73f4',
      product: { abbrev: 'U6 IW', name: 'Access Point U6 In-Wall' },
      shortnames: ['U6IW', 'UAIW6'],
      triplets: [
        { k3: 'U6IW', k1: 'U6IW' },
        { k2: 'U6-IW', k1: 'U6IW' },
        { k2: 'U6-IW-EA', k1: 'UAIW6' },
        { k2: 'U6-IW', k1: 'UAIW6' },
        { k3: 'UAIW6', k1: 'UAIW6' }
      ]
    },
    {
      sysids: ['a640'],
      unifi: {
        adoptability: 'adoptable',
        network: {
          radios: {
            na: { gain: 4, maxPower: 25, maxSpeedMegabitsPerSecond: 2400 },
            ng: { gain: 3, maxPower: 20, maxSpeedMegabitsPerSecond: 300 }
          },
          numberOfPorts: 1,
          ethernetMaxSpeedMegabitsPerSecond: 1000,
          systemIdHexadecimal: 'a614',
          features: {
            outdoorModeSupport: true,
            bandsteer: true,
            ax: true,
            gen: 2,
            atfDisabled: true
          },
          chipset: 'c',
          type: 'uap',
          minimumFirmwareRequired: '5.29.0',
          deviceCapabilities: ['ACCESS_POINT', 'HAS_CLIENTS']
        }
      },
      icon: {
        resolutions: [
          [25, 25],
          [32, 32],
          [51, 51],
          [64, 64],
          [101, 101],
          [128, 128],
          [129, 129],
          [256, 256],
          [257, 257],
          [512, 512],
          [1000, 1000]
        ],
        id: '06a25b40-ef1f-463a-82d9-13236866ea3d'
      },
      fcc: 'SWX-U6LR',
      jrf: ['201-220173'],
      line: { name: 'UniFi', id: 'unifi-network' },
      minAdoptVersion: { net: '7.3.76' },
      sysid: 'a640',
      guids: ['3e6e0806-6562-4a01-b6cd-e3409c5f9627', '883ff5a6-f60a-4b56-a0a3-9e22bf1b91f2'],
      btle: {
        factoryDefault: '883ff5a6-f60a-4b56-a0a3-9e22bf1b91f2',
        userConfigured: '3e6e0806-6562-4a01-b6cd-e3409c5f9627'
      },
      ic: '6545A-U6LR',
      id: '5e57b05c-c870-47b7-897e-0c081a0fbb72',
      product: { abbrev: 'U6 LR', name: 'Access Point U6 Long-Range' },
      shortnames: ['UALR6', 'UALR6V2', 'UALR6v2', 'UALR6V3', 'UALR6v3'],
      triplets: [
        { k2: 'U6-LR', k1: 'UALR6v2' },
        { k3: 'UALR6v2', k1: 'UALR6v2' },
        { k2: 'U6-LR', k1: 'UALR6' },
        { k2: 'U6-LR-EA', k1: 'UALR6' },
        { k3: 'UALR6', k1: 'UALR6' }
      ]
    },
    {
      sysids: ['a612'],
      unifi: {
        adoptability: 'adoptable',
        network: {
          radios: {
            na: { gain: 4, maxPower: 25, maxSpeedMegabitsPerSecond: 2400 },
            ng: { gain: 3, maxPower: 20, maxSpeedMegabitsPerSecond: 300 }
          },
          bleServices: [
            {
              configured: '5a65862d-604b-4ff1-8177-940aabca7d21',
              default: '1e6e3f47-38e5-429c-a94f-01475e44e9d0'
            }
          ],
          numberOfPorts: 1,
          ethernetMaxSpeedMegabitsPerSecond: 1000,
          systemIdHexadecimal: 'a612',
          features: { bandsteer: true, ax: true, gen: 2, atfDisabled: true },
          chipset: 'c',
          type: 'uap',
          minimumFirmwareRequired: '5.29.0',
          deviceCapabilities: ['ACCESS_POINT', 'HAS_CLIENTS']
        }
      },
      icon: {
        resolutions: [
          [25, 25],
          [32, 32],
          [51, 51],
          [64, 64],
          [101, 101],
          [128, 128],
          [129, 129],
          [256, 256],
          [257, 257],
          [512, 512],
          [1000, 1000]
        ],
        id: '182fa28c-f63e-4381-9fe5-3ed98db687b5'
      },
      fcc: 'SWX-U6LITE',
      jrf: ['201-210289'],
      line: { name: 'UniFi', id: 'unifi-network' },
      sysid: 'a612',
      guids: ['1e6e3f47-38e5-429c-a94f-01475e44e9d0', '5a65862d-604b-4ff1-8177-940aabca7d21'],
      btle: {
        factoryDefault: '1e6e3f47-38e5-429c-a94f-01475e44e9d0',
        userConfigured: '5a65862d-604b-4ff1-8177-940aabca7d21'
      },
      ic: '6545A-U6LITE',
      id: '3aee50f4-7a04-4b00-a466-791803131293',
      product: { abbrev: 'U6 Lite', name: 'Access Point U6 Lite' },
      shortnames: ['UAL6'],
      triplets: [
        { k2: 'U6-Lite', k1: 'UAL6' },
        { k3: 'UAL6', k1: 'UAL6' }
      ]
    },
    {
      sysids: ['a651'],
      unifi: {
        adoptability: 'adoptable',
        network: {
          radios: {
            na: { gain: 4, maxPower: 25, maxSpeedMegabitsPerSecond: 2400 },
            ng: { gain: 3, maxPower: 20, maxSpeedMegabitsPerSecond: 570 }
          },
          bleServices: [
            {
              configured: '3be3c588-5b16-463d-9d3d-7a1616de451e',
              default: '519dbaaa-123c-4ac7-a906-0d38a500bc54'
            }
          ],
          numberOfPorts: 1,
          ethernetMaxSpeedMegabitsPerSecond: 1000,
          systemIdHexadecimal: 'a651',
          features: {
            outdoorModeSupport: true,
            bandsteer: true,
            ax: true,
            gen: 2,
            atfDisabled: true
          },
          chipset: 'f',
          type: 'uap',
          minimumFirmwareRequired: '5.55.10',
          deviceCapabilities: ['ACCESS_POINT', 'HAS_CLIENTS']
        }
      },
      icon: {
        resolutions: [
          [25, 25],
          [32, 32],
          [51, 51],
          [64, 64],
          [101, 101],
          [128, 128],
          [129, 129],
          [256, 256],
          [257, 257],
          [512, 512],
          [1000, 1000]
        ],
        id: 'aa48f2c1-06f0-426f-aa91-eca96a3d23d9'
      },
      fcc: 'SWX-U6MESHR',
      jrf: ['201-220022'],
      line: { name: 'UniFi', id: 'unifi-network' },
      sysid: 'a651',
      guids: ['3be3c588-5b16-463d-9d3d-7a1616de451e', '519dbaaa-123c-4ac7-a906-0d38a500bc54'],
      btle: {
        factoryDefault: '519dbaaa-123c-4ac7-a906-0d38a500bc54',
        userConfigured: '3be3c588-5b16-463d-9d3d-7a1616de451e'
      },
      ic: '6545A-U6MESHR',
      id: '791d524b-11dc-4221-bbed-b7f1fd4effaf',
      product: { abbrev: 'U6 Mesh', name: 'Access Point U6 Mesh' },
      shortnames: ['U6M', 'UAM6'],
      triplets: [
        { k3: 'U6M', k1: 'U6M' },
        { k2: 'U6-Mesh', k1: 'U6M' },
        { k2: 'U6-Mesh', k1: 'UAM6' },
        { k2: 'U6-Mesh-EA', k1: 'UAM6' },
        { k3: 'UAM6', k1: 'UAM6' }
      ]
    },
    {
      sysids: [],
      unifi: {
        adoptability: 'adoptable',
        network: {
          radios: {
            na: { gain: 4, maxPower: 25, maxSpeedMegabitsPerSecond: 2400 },
            ng: { gain: 3, maxPower: 20, maxSpeedMegabitsPerSecond: 570 }
          },
          numberOfPorts: 1,
          ethernetMaxSpeedMegabitsPerSecond: 1000,
          systemIdHexadecimal: 'a643',
          features: {
            outdoorModeSupport: false,
            bandsteer: true,
            ax: true,
            gen: 2,
            atfDisabled: true
          },
          chipset: 'c',
          type: 'uap',
          minimumFirmwareRequired: '6.4.4',
          deviceCapabilities: ['ACCESS_POINT', 'HAS_CLIENTS']
        }
      },
      icon: {
        resolutions: [
          [25, 25],
          [32, 32],
          [51, 51],
          [64, 64],
          [101, 101],
          [128, 128],
          [129, 129],
          [256, 256],
          [257, 257],
          [512, 512],
          [1000, 1000]
        ],
        id: '182fa28c-f63e-4381-9fe5-3ed98db687b5'
      },
      line: { name: 'UniFi', id: 'unifi-network' },
      guids: ['2950e56a-84d3-47f4-b037-f5ca1533bcb2'],
      id: 'fa66c9b2-ba69-4f34-b346-051753cda2e9',
      product: { abbrev: 'U6 LR+', name: 'Access Point U6 Long-Range+' },
      shortnames: ['UALRPL6'],
      triplets: []
    },
    {
      sysids: [],
      unifi: {
        adoptability: 'adoptable',
        network: {
          radios: {
            na: { gain: 4, maxPower: 25, maxSpeedMegabitsPerSecond: 2400 },
            ng: { gain: 3, maxPower: 20, maxSpeedMegabitsPerSecond: 300 }
          },
          numberOfPorts: 1,
          ethernetMaxSpeedMegabitsPerSecond: 1000,
          systemIdHexadecimal: 'a620',
          features: {
            outdoorModeSupport: true,
            bandsteer: true,
            ax: true,
            gen: 2,
            atfDisabled: true
          },
          chipset: 'c',
          type: 'uap',
          minimumFirmwareRequired: '5.42.0',
          deviceCapabilities: ['ACCESS_POINT', 'HAS_CLIENTS']
        }
      },
      icon: {
        resolutions: [
          [25, 25],
          [32, 32],
          [51, 51],
          [64, 64],
          [101, 101],
          [128, 128],
          [129, 129],
          [256, 256],
          [257, 257],
          [512, 512],
          [1000, 1000]
        ],
        id: '06a25b40-ef1f-463a-82d9-13236866ea3d'
      },
      fcc: 'SWX-U6LR',
      jrf: ['201-220061'],
      line: { name: 'UniFi', id: 'unifi-network' },
      guids: ['03cb814b-0000-40df-9d6f-7c8271da8a89', '892d0802-4ac4-429b-b937-d0e604ebdee7'],
      btle: {
        factoryDefault: '03cb814b-0000-40df-9d6f-7c8271da8a89',
        userConfigured: '892d0802-4ac4-429b-b937-d0e604ebdee7'
      },
      ic: '6545A-U6LR',
      id: 'c8d6f561-10a2-42bb-a4a5-ef97bdff55d5',
      product: { abbrev: 'U6 Pro', name: 'Access Point U6 Professional' },
      shortnames: ['UAP6', 'UAP6MP'],
      triplets: [
        { k2: 'U6-Pro', k1: 'UAP6' },
        { k2: 'U6-Pro', k1: 'UAP6MP' },
        { k3: 'UAP6MP', k1: 'UAP6MP' },
        { k3: 'UAP6', k1: 'UAP6' }
      ]
    },
    {
      sysids: [],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '64fd4793-003f-41d0-a667-5b99539ce43e'
      },
      line: { name: 'UniFi', id: 'unifi-network' },
      guids: [],
      id: '0c888b0c-e15d-4135-a0a6-a36ccccd3f1f',
      product: { abbrev: 'U6 SW 24', name: 'U6 Switch 24' },
      shortnames: ['UniFi 6 Switch 24'],
      triplets: []
    },
    {
      sysids: ['ec3b'],
      unifi: { adoptability: 'adoptable' },
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '13b15dbe-e36f-42ca-ae63-2c991f5bdfe1'
      },
      line: { name: 'UniFi Access', id: 'unifi-access' },
      sysid: 'ec3b',
      guids: ['72326291-ee48-4b23-a890-cd1a123bb70b'],
      id: 'c10ad8b6-e898-4c97-80e6-f8dabcd68d4e',
      product: { abbrev: 'UA Hub Elevator', name: 'Access Elevator Starter Kit' },
      shortnames: ['UA-Elevator'],
      triplets: [{ k3: 'UEL', k1: 'UA-Elevator' }]
    },
    {
      sysids: ['ec4d'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '9fc1a64c-1d64-4672-99e1-d43cfbefbc96'
      },
      line: { name: 'UniFi Access', id: 'unifi-access' },
      sysid: 'ec4d',
      guids: ['e495f881-bf4e-42c7-98b1-c95793c5ba92'],
      id: 'ec46ada5-d87d-419b-abed-7ebc83aac7c0',
      product: { abbrev: 'UA G2', name: 'Access G2 Reader' },
      shortnames: ['G2-MINI', 'UA-G2-Mini'],
      triplets: [{ k3: 'UA-G2-MINI', k2: 'UA-G2-MINI', k1: 'G2-MINI' }]
    },
    {
      sysids: ['ec5e'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '31162628-113a-428b-8786-dfeb82d46c8c'
      },
      line: { name: 'UniFi Access', id: 'unifi-access' },
      sysid: 'ec5e',
      guids: ['06d4277c-3dd3-4691-8aac-3e140abb8699'],
      id: 'd971fee4-ed77-4900-bcdd-231dd29da0b8',
      product: { abbrev: 'UA G2 Pro', name: 'Access G2 Professional' },
      shortnames: ['UA-G2-PRO'],
      triplets: [{ k3: 'UA-G2-PRO', k1: 'UA-G2-PRO' }]
    },
    {
      sysids: ['ec46'],
      unifi: { adoptability: 'adoptable' },
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '265a6153-1e88-466e-877f-46e2095921a8'
      },
      line: { name: 'UniFi Access', id: 'unifi-access' },
      sysid: 'ec46',
      guids: [],
      id: '0d61e9d3-2009-45ac-b695-08605f3a883f',
      product: { abbrev: 'UA Hub', name: 'Access Hub' },
      shortnames: ['UA-HUB', 'UAH', 'UDA-HUB'],
      triplets: [{ k3: 'UAH', k1: 'UA-HUB' }]
    },
    {
      sysids: ['ec5f', 'ec37'],
      unifi: { adoptability: 'adoptable' },
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '469d7d21-835a-4a07-b2f7-00d3a08f0bb3'
      },
      fcc: 'SWX-UAPROE',
      jrf: ['020-210123', 'AC-21075'],
      line: { name: 'UniFi Access', id: 'unifi-access' },
      sysid: 'ec5f',
      guids: [],
      ic: '6545A-UAPROE',
      id: 'ac32b5ba-bda4-420f-ab8f-a6659ba984b8',
      product: { abbrev: 'UA Pro', name: 'Access Reader Professional' },
      shortnames: ['UA-PRO', 'UDA', 'UDA-PRO'],
      triplets: [{ k3: 'UDA', k1: 'UA-PRO' }]
    },
    {
      sysids: ['ec31'],
      unifi: { adoptability: 'adoptable' },
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: 'f2501e35-0e97-4472-8721-c33e2817df5b'
      },
      fcc: 'SWX-UALITE',
      jrf: ['020-210090', 'AC-21065'],
      line: { name: 'UniFi Access', id: 'unifi-access' },
      sysid: 'ec31',
      guids: [],
      ic: '6545A-UALITE',
      id: 'c7b9837d-00e9-498b-bdfa-6afcfa1b30ad',
      product: { abbrev: 'UA Reader Lite', name: 'Access Reader Lite' },
      shortnames: ['UA-LITE', 'UDA-LITE'],
      triplets: [{ k3: 'UDA-LITE', k2: 'UA-LITE', k1: 'UA-LITE' }]
    },
    {
      sysids: ['ec2a'],
      unifi: {
        adoptability: 'adoptable',
        network: {
          radios: {
            na: { maxSpeedMegabitsPerSecond: 300 },
            ng: { gain: 5, maxPower: 23, maxSpeedMegabitsPerSecond: 300 }
          },
          numberOfPorts: 1,
          ethernetMaxSpeedMegabitsPerSecond: 100,
          systemIdHexadecimal: 'e502',
          features: { zh: true },
          chipset: 'b',
          type: 'uap',
          minimumFirmwareRequired: '4.0.6',
          deviceCapabilities: ['ACCESS_POINT', 'HAS_CLIENTS']
        }
      },
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '15323988-b998-4663-ac56-f519a931e529'
      },
      fcc: 'SWX-UAP',
      line: { name: 'UniFi', id: 'unifi-network' },
      sysid: 'ec2a',
      guids: [],
      ic: '6545A-UAP',
      id: 'ed103a3b-4dce-4330-9313-af30688e5a40',
      product: { abbrev: 'UAP', name: 'Access Point' },
      shortnames: ['BZ2', 'U2S48'],
      triplets: [{ k2: 'UAP', k1: 'BZ2' }, { k3: 'BZ2', k1: 'BZ2' }, { k3: 'BZ2' }]
    },
    {
      sysids: [],
      unifi: {
        adoptability: 'adoptable',
        network: {
          radios: {
            na: { maxSpeedMegabitsPerSecond: 300 },
            ng: { gain: 0, maxPower: 23, maxSpeedMegabitsPerSecond: 300 }
          },
          numberOfPorts: 1,
          ethernetMaxSpeedMegabitsPerSecond: 100,
          systemIdHexadecimal: 'e572',
          features: { zh: true },
          chipset: 'b',
          type: 'uap',
          minimumFirmwareRequired: '4.0.6',
          deviceCapabilities: ['ACCESS_POINT', 'HAS_CLIENTS']
        }
      },
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: 'a48d1e0d-8471-41b0-bc31-2901e1c63ec8'
      },
      fcc: 'SWX-UAP',
      line: { name: 'UniFi', id: 'unifi-network' },
      guids: [],
      ic: '6545A-UAP',
      id: 'c38fdc61-f3de-4aa2-ba96-3fe8ba9b741c',
      product: { abbrev: 'UAP', name: 'Access Point' },
      shortnames: ['U2SV2', 'U2Sv2'],
      triplets: [
        { k2: 'UAPv2', k1: 'U2Sv2' },
        { k3: 'U2Sv2', k1: 'U2Sv2' }
      ]
    },
    {
      sysids: ['e920'],
      unifi: {
        adoptability: 'adoptable',
        network: {
          radios: {
            na: { gain: 4, maxPower: 24, maxSpeedMegabitsPerSecond: 1300 },
            ng: { gain: 4, maxPower: 22, maxSpeedMegabitsPerSecond: 450 }
          },
          numberOfPorts: 2,
          ethernetMaxSpeedMegabitsPerSecond: 1000,
          systemIdHexadecimal: 'e900',
          features: { ac: true, brcm: true },
          chipset: 'g',
          type: 'uap',
          minimumFirmwareRequired: '4.0.6',
          deviceCapabilities: ['ACCESS_POINT', 'HAS_CLIENTS']
        }
      },
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '9063f7a8-5680-4025-b53c-459f5cd0e0e4'
      },
      fcc: 'SWX-UAPAC',
      line: { name: 'UniFi', id: 'unifi-network' },
      sysid: 'e920',
      guids: [],
      ic: '6545A-UAPAC',
      id: 'acabff5f-85c1-46ee-8d04-17cd1adc9cc8',
      product: { abbrev: 'UAP AC', name: 'Access Point AC' },
      shortnames: ['U7E', 'U7EV2', 'U7Ev2', 'U7ev2'],
      triplets: [
        { k3: 'U7E', k1: 'U7E' },
        { k2: 'UAP-AC', k1: 'U7E' },
        { k3: 'U7E' },
        { k2: 'UAP-ACv2', k1: 'U7Ev2' },
        { k3: 'U7Ev2' },
        { k3: 'U7Ev2', k1: 'U7Ev2' }
      ]
    },
    {
      sysids: [],
      unifi: {
        adoptability: 'adoptable',
        network: {
          radios: {
            na: { gain: 3, maxPower: 22, maxSpeedMegabitsPerSecond: 1300 },
            ng: { gain: 3, maxPower: 22, maxSpeedMegabitsPerSecond: 450 }
          },
          numberOfPorts: 1,
          ethernetMaxSpeedMegabitsPerSecond: 1000,
          systemIdHexadecimal: 'e547',
          features: { bandsteer: true, ac: true, gen: 2 },
          chipset: 'b',
          type: 'uap',
          minimumFirmwareRequired: '4.0.6',
          deviceCapabilities: ['ACCESS_POINT', 'HAS_CLIENTS']
        }
      },
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '83669f8a-bc79-458f-8d78-e665bb0c99f0'
      },
      fcc: 'SWX-UAPACPRO',
      line: { name: 'UniFi', id: 'unifi-network' },
      guids: [],
      ic: '6545A-UAPACPRO',
      id: '13ddabd6-7a68-4f23-8edd-1e83db8dbbb4',
      product: { abbrev: 'AC EDU', name: 'Access Point AC EDU' },
      shortnames: ['U7EDU'],
      triplets: [
        { k3: 'U7EDU', k1: 'U7EDU' },
        { k2: 'UAP-AC-EDU', k1: 'U7EDU' }
      ]
    },
    {
      sysids: [],
      unifi: {
        adoptability: 'adoptable',
        network: {
          radios: {
            na: { gain: 4, maxPower: 25, maxSpeedMegabitsPerSecond: 1733 },
            ng: { gain: 3, maxPower: 25, maxSpeedMegabitsPerSecond: 800 }
          },
          numberOfPorts: 1,
          ethernetMaxSpeedMegabitsPerSecond: 1000,
          systemIdHexadecimal: 'e530',
          features: { outdoorModeSupport: true, bandsteer: true, ac: true, gen: 2 },
          chipset: 'd',
          type: 'uap',
          minimumFirmwareRequired: '4.0.6',
          deviceCapabilities: ['ACCESS_POINT', 'HAS_CLIENTS']
        }
      },
      icon: {
        resolutions: [
          [25, 25],
          [32, 32],
          [51, 51],
          [64, 64],
          [101, 101],
          [128, 128],
          [129, 129],
          [256, 256],
          [257, 257],
          [512, 512],
          [1000, 1000]
        ],
        id: '63240ec2-0796-48e9-83e0-aad97006473d'
      },
      fcc: 'SWX-UAPACHD',
      line: { name: 'UniFi', id: 'unifi-network' },
      guids: [],
      ic: '6545A-UAPACHD',
      id: 'bc0e1444-3b03-4b10-9997-4f200cdf3709',
      product: { abbrev: 'AC HD', name: 'Access Point AC HD' },
      shortnames: ['U7HD', 'UniFi AC HD'],
      triplets: [
        { k2: 'UAP-HD', k1: 'U7HD' },
        { k3: 'U7HD', k1: 'U7HD' }
      ]
    },
    {
      sysids: [],
      unifi: {
        adoptability: 'adoptable',
        network: {
          radios: {
            na: { gain: 1, maxPower: 20, maxSpeedMegabitsPerSecond: 867 },
            ng: { gain: 2, maxPower: 20, maxSpeedMegabitsPerSecond: 300 }
          },
          numberOfPorts: 3,
          hybrid: 'uap+usw',
          ethernetMaxSpeedMegabitsPerSecond: 1000,
          systemIdHexadecimal: 'e587',
          features: { bandsteer: true, ac: true, gen: 2 },
          ports: { standard: 2 },
          chipset: 'b',
          type: 'uap',
          minimumFirmwareRequired: '4.0.6',
          deviceCapabilities: ['ACCESS_POINT', 'ACCESS_POINT_SWITCH', 'HAS_CLIENTS']
        }
      },
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: 'af3b43aa-6c45-4f7f-b521-34799f2bc6a7'
      },
      fcc: 'SWX-UAPACIW',
      line: { name: 'UniFi', id: 'unifi-network' },
      guids: [],
      ic: '6545A-UAPACIW',
      id: '0ff522c9-cfd1-492b-87ed-effc6d3c9fe6',
      product: { abbrev: 'AC IW', name: 'Access Point AC In-Wall' },
      shortnames: ['U7IW', 'UniFi AC In Wall'],
      triplets: [
        { k2: 'UAP-AC-InWall', k1: 'U7IW' },
        { k3: 'U7IW', k1: 'U7IW' }
      ]
    },
    {
      sysids: [],
      unifi: {
        adoptability: 'adoptable',
        network: {
          radios: {
            na: { gain: 6, maxPower: 22, maxSpeedMegabitsPerSecond: 1300 },
            ng: { gain: 5, maxPower: 22, maxSpeedMegabitsPerSecond: 450 }
          },
          numberOfPorts: 3,
          hybrid: 'uap+usw',
          ethernetMaxSpeedMegabitsPerSecond: 1000,
          systemIdHexadecimal: 'e597',
          features: { bandsteer: true, ac: true, gen: 2 },
          ports: { standard: 2 },
          chipset: 'b',
          type: 'uap',
          minimumFirmwareRequired: '4.0.6',
          deviceCapabilities: ['ACCESS_POINT', 'ACCESS_POINT_SWITCH', 'HAS_CLIENTS']
        }
      },
      icon: {
        resolutions: [
          [25, 25],
          [32, 32],
          [51, 51],
          [64, 64],
          [101, 101],
          [128, 128],
          [129, 129],
          [256, 256],
          [257, 257],
          [512, 512],
          [1000, 1000]
        ],
        id: '43160877-5f33-4c03-a7b3-955fc6c1b313'
      },
      fcc: 'SWX-UAPACIWP',
      line: { name: 'UniFi', id: 'unifi-network' },
      guids: [],
      ic: '6545A-UAPACIWP',
      id: '7a1db3e5-2a52-4bfa-9d30-1f0acbd97cc9',
      product: { abbrev: 'AC IW Pro', name: 'Access Point AC In-Wall Professional' },
      shortnames: ['U7IWP', 'UniFi AC In Wall AP Pro'],
      triplets: [
        { k2: 'UAP-AC-InWall-Pro', k1: 'U7IWP' },
        { k3: 'U7IWP', k1: 'U7IWP' }
      ]
    },
    {
      sysids: ['e517'],
      unifi: {
        adoptability: 'adoptable',
        network: {
          radios: {
            na: { gain: 3, maxPower: 20, maxSpeedMegabitsPerSecond: 867 },
            ng: { gain: 3, maxPower: 20, maxSpeedMegabitsPerSecond: 300 }
          },
          numberOfPorts: 1,
          ethernetMaxSpeedMegabitsPerSecond: 1000,
          systemIdHexadecimal: 'e517',
          features: { bandsteer: true, ac: true, gen: 2 },
          chipset: 'b',
          type: 'uap',
          minimumFirmwareRequired: '4.0.6',
          deviceCapabilities: ['ACCESS_POINT', 'HAS_CLIENTS']
        }
      },
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: 'a59ffc16-3878-4d1f-892b-f2a90bf22505'
      },
      fcc: 'SWX-UAPACL',
      line: { name: 'UniFi', id: 'unifi-network' },
      sysid: 'e517',
      guids: [],
      ic: '6545A-UAPACL',
      id: '181ce560-876b-4619-bee6-5f4e20fb2f93',
      product: { abbrev: 'AC Lite', name: 'Access Point AC Lite' },
      shortnames: ['U7LT'],
      triplets: [
        { k2: 'UAP-AC-Lite', k1: 'U7LT' },
        { k3: 'U7LT', k1: 'U7LT' }
      ]
    },
    {
      sysids: ['e527'],
      unifi: {
        adoptability: 'adoptable',
        network: {
          radios: {
            na: { gain: 3, maxPower: 22, maxSpeedMegabitsPerSecond: 867 },
            ng: { gain: 3, maxPower: 24, maxSpeedMegabitsPerSecond: 450 }
          },
          numberOfPorts: 1,
          ethernetMaxSpeedMegabitsPerSecond: 1000,
          systemIdHexadecimal: 'e527',
          features: { bandsteer: true, ac: true, gen: 2 },
          chipset: 'b',
          type: 'uap',
          minimumFirmwareRequired: '4.0.6',
          deviceCapabilities: ['ACCESS_POINT', 'HAS_CLIENTS']
        }
      },
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '28bfbf2e-4d13-4b3a-86b9-114023a0b6dc'
      },
      fcc: 'SWX-UAPACLR',
      line: { name: 'UniFi', id: 'unifi-network' },
      sysid: 'e527',
      guids: [],
      ic: '6545A-UAPACLR',
      id: 'e47c4f7c-19a7-4a7a-9f25-d0fea75861b1',
      product: { abbrev: 'AC LR', name: 'Access Point AC Long-Range' },
      shortnames: ['U7LR'],
      triplets: [
        { k2: 'UAP-AC-LR', k1: 'U7LR' },
        { k3: 'U7LR', k1: 'U7LR' }
      ]
    },
    {
      sysids: [],
      unifi: {
        adoptability: 'adoptable',
        network: {
          radios: {
            na: { gain: 4, maxPower: 20, maxSpeedMegabitsPerSecond: 867 },
            ng: { gain: 3, maxPower: 20, maxSpeedMegabitsPerSecond: 300 }
          },
          numberOfPorts: 1,
          ethernetMaxSpeedMegabitsPerSecond: 1000,
          systemIdHexadecimal: 'e557',
          features: { outdoorModeSupport: true, bandsteer: true, ac: true, gen: 2 },
          chipset: 'b',
          type: 'uap',
          minimumFirmwareRequired: '4.0.6',
          deviceCapabilities: ['ACCESS_POINT', 'HAS_CLIENTS']
        }
      },
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '899c4dc3-e1a1-4149-a9d0-13cc26dd4481'
      },
      fcc: 'SWX-UAPACM',
      line: { name: 'UniFi', id: 'unifi-network' },
      guids: [],
      ic: '6545A-UAPACM',
      id: 'd21c5e6d-4929-4320-8166-1fd29f6c90c5',
      product: { abbrev: 'AC Mesh', name: 'Access Point AC Mesh' },
      shortnames: ['U7MSH'],
      triplets: [
        { k2: 'UAP-AC-Mesh', k1: 'U7MSH' },
        { k3: 'U7MSH', k1: 'U7MSH' }
      ]
    },
    {
      sysids: [],
      unifi: {
        adoptability: 'adoptable',
        network: {
          radios: {
            na: { gain: 8, maxPower: 22, maxSpeedMegabitsPerSecond: 1300 },
            ng: { gain: 8, maxPower: 22, maxSpeedMegabitsPerSecond: 450 }
          },
          numberOfPorts: 1,
          ethernetMaxSpeedMegabitsPerSecond: 1000,
          systemIdHexadecimal: 'e567',
          features: { outdoorModeSupport: true, bandsteer: true, ac: true, gen: 2 },
          chipset: 'b',
          type: 'uap',
          minimumFirmwareRequired: '4.0.6',
          deviceCapabilities: ['ACCESS_POINT', 'HAS_CLIENTS']
        }
      },
      icon: {
        resolutions: [
          [25, 25],
          [32, 32],
          [51, 51],
          [64, 64],
          [101, 101],
          [128, 128],
          [129, 129],
          [256, 256],
          [257, 257],
          [512, 512],
          [1000, 1000]
        ],
        id: 'e23f9b90-f80d-4455-b75c-ee50057b40cb'
      },
      fcc: 'SWX-UAPACMPRO',
      line: { name: 'UniFi', id: 'unifi-network' },
      guids: [],
      ic: '6545A-UAPACMPRO',
      id: '4fe04b74-3564-43eb-8060-07b3d60cb79b',
      product: { abbrev: 'AC Mesh Pro', name: 'Access Point AC Mesh Professional' },
      shortnames: ['U7MP'],
      triplets: [
        { k2: 'UAP-AC-Mesh-Pro', k1: 'U7MP' },
        { k3: 'U7MP', k1: 'U7MP' }
      ]
    },
    {
      sysids: [],
      unifi: {
        adoptability: 'adoptable',
        network: {
          radios: {
            na: { gain: 4, maxPower: 24, maxSpeedMegabitsPerSecond: 1300 },
            ng: { gain: 4, maxPower: 22, maxSpeedMegabitsPerSecond: 450 }
          },
          numberOfPorts: 2,
          ethernetMaxSpeedMegabitsPerSecond: 1000,
          systemIdHexadecimal: 'e910',
          features: { outdoorModeSupport: true, ac: true, brcm: true },
          chipset: 'g',
          type: 'uap',
          minimumFirmwareRequired: '4.0.6',
          deviceCapabilities: ['ACCESS_POINT', 'HAS_CLIENTS']
        }
      },
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: 'd1061906-47e1-40a7-836e-53d3e1809e33'
      },
      fcc: 'SWX-UAPAC',
      line: { name: 'UniFi', id: 'unifi-network' },
      guids: [],
      ic: '6545A-UAPAC',
      id: 'd5ac5867-f79c-4127-af41-cd696b116b2b',
      product: { abbrev: 'UAP AC Outdoor', name: 'Access Point AC Outdoor' },
      shortnames: ['U7O'],
      triplets: [{ k3: 'U7O', k1: 'U7O' }]
    },
    {
      sysids: [],
      unifi: {
        adoptability: 'adoptable',
        network: {
          radios: {
            na: { gain: 3, maxPower: 23, maxSpeedMegabitsPerSecond: 1300 },
            ng: { gain: 3, maxPower: 22, maxSpeedMegabitsPerSecond: 450 }
          },
          numberOfPorts: 1,
          ethernetMaxSpeedMegabitsPerSecond: 1000,
          systemIdHexadecimal: 'e537',
          features: { outdoorModeSupport: true, bandsteer: true, ac: true, gen: 2 },
          chipset: 'b',
          type: 'uap',
          minimumFirmwareRequired: '4.0.6',
          deviceCapabilities: ['ACCESS_POINT', 'HAS_CLIENTS']
        }
      },
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '4538e4a6-b426-4549-aa4d-9c3771b4b169'
      },
      jpa: ['D 16-0018 202'],
      fcc: 'SWX-UAPACPRO',
      jrf: ['202-SME042'],
      line: { name: 'UniFi', id: 'unifi-network' },
      guids: [],
      ic: '6545A-UAPACPRO',
      id: '39b470a0-67da-430f-9433-683a8e714425',
      product: { abbrev: 'AC Pro', name: 'Access Point AC Professional' },
      shortnames: ['U7PG2', 'UniFi AC PRO'],
      triplets: [
        { k2: 'UAP-AC-Pro-Gen2', k1: 'U7PG2' },
        { k3: 'U7PG2', k1: 'U7PG2' }
      ]
    },
    {
      sysids: [],
      unifi: {
        adoptability: 'adoptable',
        network: {
          radios: {
            na: { gain: 8, maxPower: 25, maxSpeedMegabitsPerSecond: 1733 },
            ng: { gain: 6, maxPower: 25, maxSpeedMegabitsPerSecond: 800 }
          },
          numberOfPorts: 1,
          ethernetMaxSpeedMegabitsPerSecond: 1000,
          systemIdHexadecimal: 'e540',
          features: {
            outdoorModeSupport: true,
            bandsteer: true,
            airView: true,
            ac: true,
            gen: 2,
            airTime: true
          },
          chipset: 'd',
          type: 'uap',
          minimumFirmwareRequired: '4.0.6',
          deviceCapabilities: ['ACCESS_POINT', 'HAS_CLIENTS']
        }
      },
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '8050a10c-7b22-4cfa-bbed-d8a4e2e9ea16'
      },
      fcc: 'SWX-UAPACSHD',
      line: { name: 'UniFi', id: 'unifi-network' },
      guids: [],
      ic: '6545A-UAPACSHD',
      id: '1e6b3848-a078-43ab-be80-5878ea795f57',
      product: { abbrev: 'AC SHD', name: 'Access Point AC SHD' },
      shortnames: ['U7SHD', 'U7SHDv2'],
      triplets: [
        { k2: 'UAP-SHD', k1: 'U7SHD' },
        { k3: 'U7SHD', k1: 'U7SHD' },
        { k2: 'UAP-SHDv2', k1: 'U7SHDv2' }
      ]
    },
    {
      sysids: ['ec25'],
      unifi: {
        adoptability: 'adoptable',
        network: {
          radios: {
            na: { gain: 4, maxPower: 25, maxSpeedMegabitsPerSecond: 1733 },
            ng: { gain: 3, maxPower: 20, maxSpeedMegabitsPerSecond: 300 }
          },
          numberOfPorts: 1,
          ethernetMaxSpeedMegabitsPerSecond: 1000,
          systemIdHexadecimal: 'ea11',
          features: { bandsteer: true, ac: true, gen: 2, atfDisabled: true },
          chipset: 'c',
          type: 'uap',
          minimumFirmwareRequired: '4.0.6',
          deviceCapabilities: ['ACCESS_POINT', 'HAS_CLIENTS']
        }
      },
      icon: {
        resolutions: [
          [25, 25],
          [32, 32],
          [51, 51],
          [64, 64],
          [101, 101],
          [128, 128],
          [129, 129],
          [256, 256],
          [257, 257],
          [512, 512],
          [1000, 1000]
        ],
        id: '29cfc9cc-712f-4094-af5e-ac1e40d3324b'
      },
      line: { name: 'UniFi', id: 'unifi-network' },
      sysid: 'ec25',
      guids: [],
      id: '345e7d69-4b52-4a69-9acd-9948ef5cbabc',
      product: { abbrev: 'BeaconHD', name: 'Access Point BeaconHD' },
      shortnames: ['UAP-BeaconHD', 'UDMB'],
      triplets: [
        { k2: 'UAP-BeaconHD', k1: 'UDMB' },
        { k3: 'UDMB', k1: 'UDMB' },
        { k2: 'UniFi Dream Machine Mesh Beacon', k1: 'UDMB' }
      ]
    },
    {
      sysids: [],
      unifi: {
        adoptability: 'adoptable',
        network: {
          radios: {
            na: { gain: 4, maxPower: 25, maxSpeedMegabitsPerSecond: 1733 },
            ng: { gain: 3, maxPower: 20, maxSpeedMegabitsPerSecond: 300 }
          },
          numberOfPorts: 1,
          ethernetMaxSpeedMegabitsPerSecond: 1000,
          systemIdHexadecimal: 'ec26',
          features: {
            outdoorModeSupport: true,
            bandsteer: true,
            ac: true,
            gen: 2,
            atfDisabled: true
          },
          chipset: 'c',
          type: 'uap',
          minimumFirmwareRequired: '4.0.6',
          deviceCapabilities: ['ACCESS_POINT', 'HAS_CLIENTS']
        }
      },
      icon: {
        resolutions: [
          [25, 25],
          [32, 32],
          [51, 51],
          [64, 64],
          [101, 101],
          [128, 128],
          [129, 129],
          [256, 256],
          [257, 257],
          [512, 512],
          [1000, 1000]
        ],
        id: '89f10568-d2c0-4b29-bfe5-3bc4f6a0ef1d'
      },
      fcc: 'SWX-UAPFLEXHD',
      jrf: ['201-200968'],
      line: { name: 'UniFi', id: 'unifi-network' },
      guids: [],
      ic: '6545A-UAPFLEXHD',
      id: 'f84319ea-3df6-429e-a0b5-36587271d094',
      product: { abbrev: 'FlexHD', name: 'Access Point FlexHD' },
      shortnames: ['UFLHD'],
      triplets: [
        { k2: 'UAP-FlexHD', k1: 'UFLHD' },
        { k3: 'UFLHD', k1: 'UFLHD' },
        { k2: 'UAP Flex HD', k1: 'UFLHD' }
      ]
    },
    {
      sysids: [],
      unifi: {
        adoptability: 'adoptable',
        network: {
          radios: {
            na: { maxSpeedMegabitsPerSecond: 150 },
            ng: { gain: 1, maxPower: 18, maxSpeedMegabitsPerSecond: 150 }
          },
          numberOfPorts: 3,
          hybrid: 'uap+usw',
          ethernetMaxSpeedMegabitsPerSecond: 100,
          systemIdHexadecimal: 'e592',
          features: { zh: true },
          ports: { standard: 2 },
          chipset: 'b',
          type: 'uap',
          minimumFirmwareRequired: '4.0.6',
          deviceCapabilities: ['ACCESS_POINT', 'ACCESS_POINT_SWITCH', 'HAS_CLIENTS']
        }
      },
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '0979fac5-7f3b-41b5-910a-9b165a4588a4'
      },
      fcc: 'SWX-UAPIW',
      line: { name: 'UniFi', id: 'unifi-network' },
      guids: [],
      ic: '6545A-UAPIW',
      id: 'bcc0a8ac-d44b-43e8-8a92-57388da6df8a',
      product: { abbrev: 'UAP IW', name: 'Access Point In-Wall' },
      shortnames: ['U2IW', 'UniFi AP In Wall'],
      triplets: [
        { k2: 'UAP-InWall', k1: 'U2IW' },
        { k3: 'U2IW', k1: 'U2IW' }
      ]
    },
    {
      sysids: ['ec22'],
      unifi: {
        adoptability: 'adoptable',
        network: {
          radios: {
            na: { gain: 4, maxPower: 25, maxSpeedMegabitsPerSecond: 1733 },
            ng: { gain: 3, maxPower: 20, maxSpeedMegabitsPerSecond: 300 }
          },
          numberOfPorts: 5,
          hybrid: 'uap+usw',
          ethernetMaxSpeedMegabitsPerSecond: 1000,
          systemIdHexadecimal: 'ec22',
          features: { bandsteer: true, ac: true, gen: 2, atfDisabled: true },
          ports: { standard: 4 },
          chipset: 'c',
          type: 'uap',
          minimumFirmwareRequired: '4.0.6',
          deviceCapabilities: ['ACCESS_POINT', 'ACCESS_POINT_SWITCH', 'HAS_CLIENTS']
        }
      },
      icon: {
        resolutions: [
          [25, 25],
          [32, 32],
          [51, 51],
          [64, 64],
          [101, 101],
          [128, 128],
          [129, 129],
          [256, 256],
          [257, 257],
          [512, 512],
          [1000, 1000]
        ],
        id: 'c8c09423-4e65-4a84-9e4b-5c62cf6f957c'
      },
      fcc: 'SWX-UAPIWHD',
      jrf: ['201-190121'],
      line: { name: 'UniFi', id: 'unifi-network' },
      sysid: 'ec22',
      guids: [],
      ic: '6545A-UAPIWHD',
      id: 'f4ad7798-a1f2-49ae-bc00-73d0361a4009',
      product: { abbrev: 'IW HD', name: 'Access Point In-Wall HD' },
      shortnames: ['UAP-IW-HD', 'UHDIW'],
      triplets: [
        { k2: 'UAP-HD-IW', k1: 'UHDIW' },
        { k3: 'UHDIW', k1: 'UHDIW' }
      ]
    },
    {
      sysids: ['e582'],
      unifi: {
        adoptability: 'adoptable',
        network: {
          radios: {
            na: { maxSpeedMegabitsPerSecond: 300 },
            ng: { gain: 3, maxPower: 28, maxSpeedMegabitsPerSecond: 300 }
          },
          numberOfPorts: 1,
          ethernetMaxSpeedMegabitsPerSecond: 100,
          systemIdHexadecimal: 'e512',
          features: { zh: true },
          chipset: 'b',
          type: 'uap',
          minimumFirmwareRequired: '4.0.6',
          deviceCapabilities: ['ACCESS_POINT', 'HAS_CLIENTS']
        }
      },
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '0d680fa3-fd4f-4a96-9282-6e5831572521'
      },
      fcc: 'SWX-UAP',
      line: { name: 'UniFi', id: 'unifi-network' },
      sysid: 'e582',
      guids: [],
      ic: '6545A-UAP',
      id: '7ded8c1e-1969-4661-ba79-88874d2ba476',
      product: { abbrev: 'UAP LR', name: 'Access Point Long-Range' },
      shortnames: ['BZ2LR', 'U2L48'],
      triplets: [{ k2: 'UAP-LR', k1: 'BZ2LR' }, { k3: 'BZ2LR', k1: 'BZ2LR' }, { k3: 'BZ2LR' }]
    },
    {
      sysids: [],
      unifi: {
        adoptability: 'adoptable',
        network: {
          radios: {
            na: { maxSpeedMegabitsPerSecond: 300 },
            ng: { gain: 3, maxPower: 28, maxSpeedMegabitsPerSecond: 300 }
          },
          numberOfPorts: 1,
          ethernetMaxSpeedMegabitsPerSecond: 100,
          systemIdHexadecimal: 'e582',
          features: { zh: true },
          chipset: 'b',
          type: 'uap',
          minimumFirmwareRequired: '4.0.6',
          deviceCapabilities: ['ACCESS_POINT', 'HAS_CLIENTS']
        }
      },
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '6144adc0-ce06-4011-94f5-dda67f67b599'
      },
      fcc: 'SWX-UAP',
      line: { name: 'UniFi', id: 'unifi-network' },
      guids: [],
      ic: '6545A-UAP',
      id: '53607bcb-2775-4bb3-91c3-2ca22c06c82c',
      product: { abbrev: 'UAP LR', name: 'Access Point Long-Range' },
      shortnames: ['U2LV2', 'U2Lv2'],
      triplets: [
        { k2: 'UAP-LRv2', k1: 'U2Lv2' },
        { k3: 'U2Lv2', k1: 'U2Lv2' }
      ]
    },
    {
      sysids: [],
      unifi: {
        adoptability: 'adoptable',
        network: {
          radios: {
            na: { maxSpeedMegabitsPerSecond: 300 },
            ng: { gain: 6, maxPower: 28, maxSpeedMegabitsPerSecond: 300 }
          },
          numberOfPorts: 1,
          ethernetMaxSpeedMegabitsPerSecond: 100,
          systemIdHexadecimal: 'e532',
          features: { outdoorModeSupport: true, zh: true },
          chipset: 'b',
          type: 'uap',
          minimumFirmwareRequired: '4.0.6',
          deviceCapabilities: ['ACCESS_POINT', 'HAS_CLIENTS']
        }
      },
      icon: {
        resolutions: [
          [25, 25],
          [32, 32],
          [51, 51],
          [64, 64],
          [101, 101],
          [128, 128],
          [129, 129],
          [256, 256],
          [257, 257],
          [512, 512],
          [1000, 1000]
        ],
        id: '66787b16-d25f-4750-b633-bb52a69573b1'
      },
      fcc: 'SWX-M2',
      line: { name: 'UniFi', id: 'unifi-network' },
      guids: [],
      ic: '6545A-M2',
      id: '80482989-83b6-40cd-a54c-bc305addd9d9',
      product: { abbrev: 'UAP Outdoor', name: 'Access Point Outdoor' },
      shortnames: ['U2O', 'UniFi AP Outdoor', 'UniFi Mesh Outdoor'],
      triplets: [
        { k2: 'UAP-Outdoor', k1: 'U2O' },
        { k3: 'U2O', k1: 'U2O' }
      ]
    },
    {
      sysids: [],
      unifi: {
        adoptability: 'adoptable',
        network: {
          radios: {
            na: { maxSpeedMegabitsPerSecond: 300 },
            ng: { gain: 5, maxPower: 30, maxSpeedMegabitsPerSecond: 300 }
          },
          numberOfPorts: 1,
          ethernetMaxSpeedMegabitsPerSecond: 100,
          systemIdHexadecimal: 'e562',
          features: { outdoorModeSupport: true, zh: true },
          chipset: 'b',
          type: 'uap',
          minimumFirmwareRequired: '4.0.6',
          deviceCapabilities: ['ACCESS_POINT', 'HAS_CLIENTS']
        }
      },
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: 'b1cfd781-c43a-41a2-b21a-7b6bf47bf552'
      },
      fcc: 'SWX-UAPOUTDOOR',
      line: { name: 'UniFi', id: 'unifi-network' },
      guids: [],
      ic: '6545A-UAPOUTDOOR',
      id: 'b3ff0a59-22d0-4176-8d55-60cd6a5aacfb',
      product: { abbrev: 'UAP Outdoor+', name: 'Access Point Outdoor+' },
      shortnames: ['U2HSR'],
      triplets: [{ k2: 'UAP-Outdoor+', k1: 'U2HSR' }, { k3: 'U2HSR', k1: 'U2HSR' }, { k3: 'U2HSR' }]
    },
    {
      sysids: ['e515'],
      unifi: {
        adoptability: 'adoptable',
        network: {
          radios: {
            na: { gain: 6, maxPower: 27, maxSpeedMegabitsPerSecond: 300 },
            ng: { maxSpeedMegabitsPerSecond: 300 }
          },
          numberOfPorts: 1,
          ethernetMaxSpeedMegabitsPerSecond: 100,
          systemIdHexadecimal: 'e515',
          features: { outdoorModeSupport: true, dfs: true, zh: true },
          chipset: 'b',
          type: 'uap',
          minimumFirmwareRequired: '4.0.6',
          deviceCapabilities: ['ACCESS_POINT', 'HAS_CLIENTS']
        }
      },
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: 'fb5abc29-e5fd-4c5e-8485-c3c77f4fa0bc'
      },
      fcc: 'SWX-M5',
      line: { name: 'UniFi', id: 'unifi-network' },
      sysid: 'e515',
      guids: [],
      ic: '6545A-M5',
      id: 'd0c96929-e831-4bac-a624-caf1a9c308b3',
      product: { abbrev: 'UAP Outdoor5', name: 'Access Point Outdoor5' },
      shortnames: ['U5O'],
      triplets: [
        { k2: 'UAP-Outdoor5G', k1: 'U5O' },
        { k3: 'U5O', k1: 'U5O' }
      ]
    },
    {
      sysids: ['1F90'],
      unifi: {
        adoptability: 'adoptable',
        network: {
          radios: {
            na: { gain: 4, maxPower: 23, maxSpeedMegabitsPerSecond: 300 },
            ng: { gain: 5, maxPower: 30, maxSpeedMegabitsPerSecond: 450 }
          },
          numberOfPorts: 2,
          ethernetMaxSpeedMegabitsPerSecond: 1000,
          systemIdHexadecimal: 'e507',
          features: { bandsteer: true, dfs: true, zh: true },
          chipset: 'b',
          type: 'uap',
          minimumFirmwareRequired: '4.0.6',
          deviceCapabilities: ['ACCESS_POINT', 'HAS_CLIENTS']
        }
      },
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '09f1f14e-99f5-42c6-aebc-880f466f9b81'
      },
      fcc: 'SWX-UAPRO',
      line: { name: 'UniFi', id: 'unifi-network' },
      sysid: '1F90',
      guids: [],
      ic: '6545A-UAPRO',
      id: '4bb12a25-ca20-479c-831a-0e098e62806c',
      product: { abbrev: 'UAP Pro', name: 'Access Point Professional' },
      shortnames: ['U7P'],
      triplets: [{ k2: 'UAP-Pro', k1: 'U7P' }, { k3: 'U7P', k1: 'U7P' }, { k3: 'U7P' }]
    },
    {
      sysids: [],
      unifi: {
        adoptability: 'adoptable',
        network: {
          radios: {
            na: { gain: 8, maxPower: 25, maxSpeedMegabitsPerSecond: 1733 },
            ng: { gain: 6, maxPower: 25, maxSpeedMegabitsPerSecond: 800 }
          },
          numberOfPorts: 1,
          ethernetMaxSpeedMegabitsPerSecond: 1000,
          systemIdHexadecimal: 'e560',
          features: { outdoorModeSupport: true, bandsteer: true, ac: true, gen: 2 },
          chipset: 'd',
          type: 'uap',
          minimumFirmwareRequired: '4.0.6',
          deviceCapabilities: ['ACCESS_POINT', 'HAS_CLIENTS']
        }
      },
      icon: {
        resolutions: [
          [25, 25],
          [32, 32],
          [51, 51],
          [64, 64],
          [101, 101],
          [128, 128],
          [129, 129],
          [256, 256],
          [257, 257],
          [512, 512],
          [1000, 1000]
        ],
        id: '4ddbc8d4-827f-49f7-bd78-9323adcb346c'
      },
      fcc: 'SWX-UAPXG',
      line: { name: 'UniFi', id: 'unifi-network' },
      guids: [],
      ic: '6545A-UAPXG',
      id: '70b77741-d7a5-4d02-a8e9-e54f465a12af',
      product: { abbrev: 'UAP XG', name: 'Access Point XG' },
      shortnames: ['UCXG'],
      triplets: [
        { k2: 'UAP-XG', k1: 'UCXG' },
        { k3: 'UCXG', k1: 'UCXG' }
      ]
    },
    {
      sysids: [],
      unifi: {
        adoptability: 'adoptable',
        network: {
          radios: {
            na: { gain: 4, maxPower: 25, maxSpeedMegabitsPerSecond: 1733 },
            ng: { gain: 3, maxPower: 20, maxSpeedMegabitsPerSecond: 300 }
          },
          numberOfPorts: 1,
          ethernetMaxSpeedMegabitsPerSecond: 1000,
          systemIdHexadecimal: 'ec20',
          features: { bandsteer: true, ac: true, gen: 2, atfDisabled: true },
          chipset: 'c',
          type: 'uap',
          minimumFirmwareRequired: '4.0.6',
          deviceCapabilities: ['ACCESS_POINT', 'HAS_CLIENTS']
        }
      },
      icon: {
        resolutions: [
          [25, 25],
          [32, 32],
          [51, 51],
          [64, 64],
          [101, 101],
          [128, 128],
          [129, 129],
          [256, 256],
          [257, 257],
          [512, 512],
          [1000, 1000]
        ],
        id: '68006a79-cb84-4cb7-b29c-449dd11d2698'
      },
      fcc: 'SWX-UAPHDNANO',
      jrf: ['201-180859'],
      line: { name: 'UniFi', id: 'unifi-network' },
      guids: [],
      ic: '6545A-UAPHDNANO',
      id: '847aa05f-7155-411c-82ea-47cc8f1eb3e3',
      product: { abbrev: 'nanoHD', name: 'Access Point nanoHD' },
      shortnames: ['U7NHD'],
      triplets: [
        { k2: 'UAP-nanoHD', k1: 'U7NHD' },
        { k3: 'U7NHD', k1: 'U7NHD' }
      ]
    },
    {
      sysids: ['0450'],
      unifi: {
        adoptability: 'standalone',
        network: {
          radios: {},
          bleServices: [
            {
              configured: '8eeb0dea-f4cd-4c8a-8e6e-5e385ca18dae',
              default: '6868ac9f-fb18-4f2c-9b01-50ab0743907d'
            }
          ],
          type: 'uas',
          deviceCapabilities: ['SERVER', 'NETWORK_APPLICATION', null]
        }
      },
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '2e27c884-4b0e-41c8-baaf-fc23750da686'
      },
      line: { name: 'UniFi', id: 'unifi-network' },
      sysid: '0450',
      guids: [
        '8d546d7a-2734-4fb2-acfa-f52291cfd884',
        '500bf375-4036-4be6-83b8-688822f2c279',
        '6868ac9f-fb18-4f2c-9b01-50ab0743907d',
        '8eeb0dea-f4cd-4c8a-8e6e-5e385ca18dae'
      ],
      btle: {
        factoryDefault: '8d546d7a-2734-4fb2-acfa-f52291cfd884',
        userConfigured: '500bf375-4036-4be6-83b8-688822f2c279'
      },
      id: 'c558246f-bfd7-4dc5-b077-659675d691dc',
      product: { abbrev: 'UAS XG', name: 'Application Server XG' },
      shortnames: ['UAS', 'UASXG'],
      triplets: []
    },
    {
      sysids: [],
      unifi: {
        adoptability: 'adoptable',
        network: {
          radios: {},
          numberOfPorts: 1,
          ethernetMaxSpeedMegabitsPerSecond: 1000,
          systemIdHexadecimal: 'dc98',
          chipset: 'e',
          type: 'ubb',
          minimumFirmwareRequired: '1.0.5',
          deviceCapabilities: ['BUILDING_BRIDGE', 'BRIDGE', 'HAS_TEMPERATURE_SENSOR', 'HAS_CLIENTS']
        }
      },
      icon: {
        resolutions: [
          [25, 25],
          [32, 32],
          [51, 51],
          [64, 64],
          [101, 101],
          [128, 128],
          [129, 129],
          [256, 256],
          [257, 257],
          [512, 512],
          [1000, 1000]
        ],
        id: '8d5d77fa-161c-480a-aee8-c0ecbb52e4b2'
      },
      fcc: 'SWX-UBB',
      line: { name: 'UniFi', id: 'unifi-network' },
      guids: ['36bc4d72-856b-e397-2c04-6344972be6dc', '31f1dffc-8425-1200-f520-60467e717ce2'],
      btle: {
        factoryDefault: '36bc4d72-856b-e397-2c04-6344972be6dc',
        userConfigured: '31f1dffc-8425-1200-f520-60467e717ce2'
      },
      ic: '6545A-UBB',
      id: '0a849b7d-cdef-464b-8693-bfff25f96c15',
      product: { abbrev: 'UBB', name: 'Building Bridge' },
      shortnames: ['UBB'],
      triplets: [{ k3: 'UBB', k1: 'UBB' }]
    },
    {
      sysids: ['dd12'],
      unifi: {
        adoptability: 'adoptable',
        network: {
          radios: {},
          numberOfPorts: 1,
          ethernetMaxSpeedMegabitsPerSecond: 1000,
          systemIdHexadecimal: 'dd12',
          chipset: 'e',
          type: 'ubb',
          minimumFirmwareRequired: '0.9.12',
          deviceCapabilities: ['BUILDING_BRIDGE', 'BRIDGE', 'HAS_TEMPERATURE_SENSOR', 'HAS_CLIENTS']
        }
      },
      icon: {
        resolutions: [
          [25, 25],
          [32, 32],
          [51, 51],
          [64, 64],
          [101, 101],
          [128, 128],
          [129, 129],
          [256, 256],
          [257, 257],
          [512, 512],
          [1000, 1000]
        ],
        id: '99dc4934-1f36-42aa-9cdf-94636c064e01'
      },
      fcc: 'SWX-UBBXG',
      line: { name: 'UniFi', id: 'unifi-network' },
      sysid: 'dd12',
      guids: ['438d0dbc-4f73-4c30-a77e-9d274a29c789', '03f42284-caef-4b89-9b39-4501ce8da012'],
      btle: {
        factoryDefault: '438d0dbc-4f73-4c30-a77e-9d274a29c789',
        userConfigured: '03f42284-caef-4b89-9b39-4501ce8da012'
      },
      ic: '6545A-UBBXG',
      id: '97ea9c85-da1b-4ff6-9a89-0de727a527f2',
      product: { abbrev: 'UBB XG', name: 'Building Bridge XG' },
      shortnames: ['UBB-XG', 'UBBXG'],
      triplets: [
        { k2: 'UniFi Building-to-Building XG', k1: 'UBBXG' },
        { k3: 'UBBXG', k1: 'UBBXG' }
      ]
    },
    {
      sysids: ['e930'],
      icon: {
        resolutions: [
          [25, 25],
          [32, 32],
          [51, 51],
          [64, 64],
          [101, 101],
          [128, 128],
          [129, 129],
          [256, 256],
          [257, 257],
          [512, 512],
          [1000, 1000]
        ],
        id: '9d86c072-b064-43e0-ae90-e3c50f155f64'
      },
      jrf: ['201-180678'],
      line: { name: 'UniFi', id: 'unifi-network' },
      sysid: 'e930',
      guids: [],
      id: '9216317d-3df5-4cdd-b83a-9312d97c52e2',
      product: { abbrev: 'UC CK', name: 'Cloud Key' },
      shortnames: ['UniFi Cloud-Key'],
      triplets: []
    },
    {
      sysids: ['ef90'],
      unifi: { adoptability: 'adoptable' },
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '94a02e5f-2f5c-4431-be60-08664e62578b'
      },
      fcc: 'SWX-UCCAST',
      jrf: ['201-220474'],
      line: { name: 'UniFi Connect', id: 'unifi-connect' },
      sysid: 'ef90',
      guids: ['616c0abc-0131-46a6-b143-1ee9ba585184'],
      ic: '6545A-UCCAST',
      id: 'b29bcbf8-1e1f-4405-9bee-573837f40255',
      product: { abbrev: 'UC Cast', name: 'Connect Cast' },
      shortnames: ['UC-Cast'],
      triplets: [{ k1: 'UC-Cast' }]
    },
    {
      sysids: [],
      unifi: { adoptability: 'adoptable' },
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '18f11353-65a4-4452-802f-3ac204f1d429'
      },
      line: { name: 'UniFi Connect', id: 'unifi-connect' },
      guids: ['0d6cb781-b039-4704-ac20-144af38ec9ca'],
      id: 'c4fc6d32-1426-47bb-a2d3-4d2a7c8fb944',
      product: { abbrev: 'UC Display 13', name: 'Connect Display 13' },
      shortnames: ['UC-Display-SE-13'],
      triplets: []
    },
    {
      sysids: [],
      unifi: { adoptability: 'adoptable' },
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: 'dabd50d8-38e7-4931-bec0-bb7496f7b62c'
      },
      line: { name: 'UniFi Connect', id: 'unifi-connect' },
      guids: ['93237ba3-3721-4d84-a802-14b1f2a2a10b'],
      id: '034ab454-313a-4221-8b97-2c2716cc6d6b',
      product: { abbrev: 'UC Display', name: 'Connect Display' },
      shortnames: ['UC-Display-SE-21'],
      triplets: []
    },
    {
      sysids: [],
      unifi: { adoptability: 'adoptable' },
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '0d67ef1b-e10b-40ae-a0eb-18a37a3214da'
      },
      line: { name: 'UniFi Connect', id: 'unifi-connect' },
      guids: ['679b01d2-d286-4f7d-a189-c06a4bba5931'],
      id: '047c334e-f984-4e63-90ae-bff5382de184',
      product: { abbrev: 'UC Display Max', name: 'Connect Display Max' },
      shortnames: ['UC-Display-SE-27'],
      triplets: []
    },
    {
      sysids: [],
      unifi: { adoptability: 'adoptable' },
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '675ab4ad-493e-4134-884a-05cc2bb3e5e6'
      },
      line: { name: 'UniFi Connect', id: 'unifi-connect' },
      guids: ['ac9eee12-a914-4fde-a778-4f841f8f04e8'],
      id: '907b8ae0-cc73-4d58-b69e-410400edf221',
      product: { abbrev: 'UC Display 7', name: 'Connect Display 7' },
      shortnames: ['UC-Display-SE-7'],
      triplets: []
    },
    {
      sysids: [],
      unifi: { adoptability: 'adoptable' },
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '4f361e75-f3c5-4c9c-9c57-fd99d5a16065'
      },
      line: { name: 'UniFi Connect', id: 'unifi-connect' },
      guids: ['59a0e5b6-a790-41ea-bb1a-808c05e8aa72'],
      id: 'dac38861-80b6-4162-8ca3-af4763b4338d',
      product: { abbrev: 'UC Display 13', name: 'Connect Display 13' },
      shortnames: ['UC-Display-13', 'UC-Display13'],
      triplets: [{ k1: 'UC-Display-13' }]
    },
    {
      sysids: [],
      unifi: { adoptability: 'adoptable' },
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '46822437-f694-4130-b3a8-9f6b7e2368e3'
      },
      line: { name: 'UniFi Connect', id: 'unifi-connect' },
      guids: ['81d9b843-08b2-4f07-820d-eb2fb54757ee'],
      id: '2382a141-77cc-44fd-b4ef-012f6c345760',
      product: { abbrev: 'UC Display 21', name: 'Connect Display 21' },
      shortnames: ['UC-Display-21', 'UC-Display21'],
      triplets: [{ k1: 'UC-Display-21' }]
    },
    {
      sysids: [],
      unifi: { adoptability: 'adoptable' },
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '8432d904-fc9f-4318-af47-5c32571e5810'
      },
      line: { name: 'UniFi Connect', id: 'unifi-connect' },
      guids: ['c323bffb-f4c2-45d6-a033-d6e713916492'],
      id: '6de2bfba-066b-466d-b1fa-fa300de29d2c',
      product: { abbrev: 'UC Display 27', name: 'Connect Display 27' },
      shortnames: ['UC-Display-27', 'UC-Display27'],
      triplets: [{ k1: 'UC-Display-27' }]
    },
    {
      sysids: [],
      unifi: { adoptability: 'adoptable' },
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '2cb4eac6-4225-428d-aaa8-398c44837417'
      },
      line: { name: 'UniFi Connect', id: 'unifi-connect' },
      guids: ['8617cf93-f268-4977-b3e9-b2b99db0f24b'],
      id: 'da5b35a8-7a19-4e0a-a1c9-5cc00bb2727e',
      product: { abbrev: 'UC Display 7', name: 'Connect Display 7' },
      shortnames: ['UC-Display-7', 'UC-Display7'],
      triplets: [{ k1: 'UC-Display-7' }]
    },
    {
      sysids: [],
      unifi: { adoptability: 'adoptable' },
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '885c3130-987a-4b6c-86eb-d019fbe490d5'
      },
      line: { name: 'UniFi Connect', id: 'unifi-connect' },
      guids: ['584b9528-428b-44cb-8802-ff639752daae'],
      id: '3518a51f-9fb9-4244-b77c-bdd6fb2ce60e',
      product: { abbrev: 'EV Station', name: 'EV Station' },
      shortnames: ['UC-EV-Station'],
      triplets: [{ k1: 'UC-EV-Station' }]
    },
    {
      images: { default: 'b331b61d7167a2ed42b7ad15bd977f38' },
      sysids: [],
      unifi: {
        adoptability: 'standalone',
        network: {
          radios: {},
          type: 'uck',
          deviceCapabilities: ['CLOUD_KEY', 'NETWORK_APPLICATION', null]
        }
      },
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: 'c228374c-4408-4216-a8ba-80ee71ec7003'
      },
      fcc: 'SWX-UCCK',
      line: { name: 'UniFi', id: 'unifi-network' },
      guids: ['bc3caa52-e57c-4eb3-a609-ed7310564517', '054e1ac8-1ad8-4c10-a0de-e55fc4f268e5'],
      btle: {
        factoryDefault: 'bc3caa52-e57c-4eb3-a609-ed7310564517',
        userConfigured: '054e1ac8-1ad8-4c10-a0de-e55fc4f268e5'
      },
      ic: '6545A-UCCK',
      id: '3fadd594-e932-43f6-9f85-37fa624c262e',
      deviceType: 'network-server-host',
      product: { abbrev: 'UCK', name: 'Cloud Key' },
      shortnames: ['UCK', 'UCK-V2', 'UCK-v2', 'UCK-V3', 'UCK-v3'],
      triplets: [
        { k2: 'UniFi CloudKey v2', k1: 'UCK-v2' },
        { k2: 'UniFi CloudKey v3', k1: 'UCK-v3' }
      ]
    },
    {
      images: { default: '96e396ba8a1ecf83fd6ac70eed98fe36' },
      sysids: [],
      unifi: {
        adoptability: 'standalone',
        network: {
          radios: {},
          bleServices: [
            {
              configured: '45caadb4-6de8-4466-9680-313f1a692594',
              default: '78c68045-eba1-40f3-bf5e-52bc7f9ed797'
            },
            {
              configured: 'f6ac3f8a-6c0b-4403-a1bc-8bf4b5d13dd8',
              default: 'c6c75474-090d-4ed0-813e-c77d3dae9e33',
              features: { ucore: true }
            }
          ],
          type: 'uck',
          deviceCapabilities: ['CLOUD_KEY', 'NETWORK_APPLICATION', null]
        }
      },
      icon: {
        resolutions: [
          [25, 25],
          [32, 32],
          [51, 51],
          [64, 64],
          [101, 101],
          [128, 128],
          [129, 129],
          [256, 256],
          [257, 257],
          [512, 512],
          [1000, 1000]
        ],
        id: '169590e9-641e-4284-aef7-4abe7ee219be'
      },
      fcc: 'SWX-UCKG2',
      jrf: ['201-180679'],
      line: { name: 'UniFi', id: 'unifi-network' },
      guids: [
        '45caadb4-6de8-4466-9680-313f1a692594',
        '78c68045-eba1-40f3-bf5e-52bc7f9ed797',
        'c6c75474-090d-4ed0-813e-c77d3dae9e33',
        'f6ac3f8a-6c0b-4403-a1bc-8bf4b5d13dd8'
      ],
      btle: {
        factoryDefault: '78c68045-eba1-40f3-bf5e-52bc7f9ed797',
        userConfigured: '45caadb4-6de8-4466-9680-313f1a692594'
      },
      ic: '6545A-UCKG2',
      id: '180a4f60-1030-4935-b2df-6499e308524f',
      deviceType: 'network-server-host',
      product: { abbrev: 'UCK G2', name: 'Cloud Key Gen2' },
      shortnames: ['UCKG2'],
      triplets: [
        { k3: 'UCKG2', k1: 'UCKG2' },
        { k2: 'UniFi CloudKey Gen2', k1: 'UCKG2' }
      ]
    },
    {
      images: { default: 'a3f45ff2b3645c1e311086be3121070f' },
      sysids: [],
      icon: {
        resolutions: [
          [25, 25],
          [32, 32],
          [51, 51],
          [64, 64],
          [101, 101],
          [128, 128],
          [129, 129],
          [256, 256],
          [257, 257],
          [512, 512],
          [1000, 1000]
        ],
        id: '27eedcd2-c28b-4acd-865e-4711edc53b4b'
      },
      line: { name: 'UniFi', id: 'unifi-network' },
      guids: [],
      id: '215bdc21-70e6-47fc-9370-1d2ede70a349',
      deviceType: 'network-server-host',
      product: { abbrev: 'UCK G2', name: 'Cloud Key Gen2' },
      shortnames: ['UCK-G2-BK', 'UCK-G2-Black'],
      triplets: []
    },
    {
      images: { default: '440185df5573369b9cfa32005ddd74ff' },
      sysids: [],
      unifi: {
        adoptability: 'standalone',
        network: {
          radios: {},
          bleServices: [
            {
              configured: '9287211b-af83-4542-97fb-f9a845475309',
              default: '59352787-2e1d-4dcd-874d-d351b6a8938d'
            },
            {
              configured: 'e756dc71-b12c-442c-9c43-efa65ec5fdd8',
              default: 'd5f28bcd-c761-4ae0-a8f2-dfaa7e8bf1c5',
              features: { ucore: true }
            }
          ],
          type: 'uck',
          deviceCapabilities: ['CLOUD_KEY', 'NETWORK_APPLICATION', null]
        }
      },
      icon: {
        resolutions: [
          [25, 25],
          [32, 32],
          [51, 51],
          [64, 64],
          [101, 101],
          [128, 128],
          [129, 129],
          [256, 256],
          [257, 257],
          [512, 512],
          [1000, 1000]
        ],
        id: '3ecc69bf-a04b-401a-83bb-181a644c4246'
      },
      fcc: 'SWX-UCKG2P',
      jrf: ['201-190047'],
      line: { name: 'UniFi', id: 'unifi-network' },
      guids: [
        '59352787-2e1d-4dcd-874d-d351b6a8938d',
        '9287211b-af83-4542-97fb-f9a845475309',
        'd5f28bcd-c761-4ae0-a8f2-dfaa7e8bf1c5',
        'e756dc71-b12c-442c-9c43-efa65ec5fdd8'
      ],
      btle: {
        factoryDefault: '59352787-2e1d-4dcd-874d-d351b6a8938d',
        userConfigured: '9287211b-af83-4542-97fb-f9a845475309'
      },
      ic: '6545A-UCKG2P',
      id: 'ed67d43e-2d5c-4928-ace8-edf984baeff1',
      deviceType: 'network-server-host',
      product: { abbrev: 'UCK G2 Plus', name: 'Cloud Key Gen2 Plus' },
      shortnames: ['UCK-G2-PLUS', 'UCKP'],
      triplets: [
        { k1: 'UCK-G2-PLUS' },
        { k2: 'UniFi Cloudkey Plus', k1: 'UCKP' },
        { k3: 'UCKP', k1: 'UCKP' }
      ]
    },
    {
      images: { default: 'dd9a6895da2a570e17cb63937b5d5e8f' },
      sysids: [],
      unifi: {
        adoptability: 'standalone',
        network: {
          radios: {},
          bleServices: [
            {
              configured: 'add7492c-e71c-420f-9f02-881f068e955f',
              default: '4c96be8e-9a26-40a7-8dbb-00f59314e7de',
              features: { ucore: true }
            }
          ],
          type: 'uck',
          deviceCapabilities: ['CLOUD_KEY', 'NETWORK_APPLICATION', null]
        }
      },
      icon: {
        resolutions: [
          [25, 25],
          [32, 32],
          [51, 51],
          [64, 64],
          [101, 101],
          [128, 128],
          [129, 129],
          [256, 256],
          [257, 257],
          [512, 512],
          [1000, 1000]
        ],
        id: '4476a062-ea83-433a-8bec-21e994b3d3b7'
      },
      fcc: 'SWX-CKEP',
      line: { name: 'UniFi', id: 'unifi-network' },
      minAdoptVersion: { net: '7.3.83' },
      guids: ['26b79f30-37f1-445b-9d17-688c5c531448'],
      btle: {
        factoryDefault: '4c96be8e-9a26-40a7-8dbb-00f59314e7de',
        userConfigured: 'add7492c-e71c-420f-9f02-881f068e955f'
      },
      ic: '6545A-CKEP',
      id: '8dc148ad-2825-450c-af1b-b10888bc1260',
      deviceType: 'network-server-host',
      product: { abbrev: 'UCK Ent', name: 'Cloud Key Enterprise' },
      shortnames: ['UCKENT'],
      triplets: [{ k1: 'UCKENT' }]
    },
    {
      sysids: ['ec08'],
      unifi: { adoptability: 'adoptable' },
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: 'ffcef522-b25a-4f3b-b3c4-89b0066bbeaf'
      },
      line: { name: 'UniFi Connect', id: 'unifi-connect' },
      sysid: 'ec08',
      guids: [],
      btle: {
        factoryDefault: 'e87455ae-b373-4c9b-aa3f-2a19ec0489a1',
        userConfigured: '52eb5387-28af-4aa5-acff-ddaa8f015c49'
      },
      id: '3a3872c0-a478-4dec-9e84-2b04dc38b6c9',
      product: { abbrev: 'UDIM AC', name: 'Dimmer Switch AC' },
      shortnames: ['ULD3AC'],
      triplets: [{ k2: 'UDIM-AC', k1: 'ULD3AC' }]
    },
    {
      sysids: ['ec04'],
      unifi: { adoptability: 'adoptable' },
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: 'ffcef522-b25a-4f3b-b3c4-89b0066bbeaf'
      },
      line: { name: 'UniFi LED', id: 'unifi-led' },
      sysid: 'ec04',
      guids: [],
      id: 'a7a5a655-757d-485a-ae93-68c7b77bc589',
      product: { abbrev: 'UDIM AC', name: 'Dimmer Switch AC' },
      shortnames: ['ULDAC', 'ULDAC2', 'UniFi Light Dimmer'],
      triplets: [{ k2: 'UDIM-AC', k1: 'ULDAC2' }]
    },
    {
      sysids: ['ec06'],
      unifi: { adoptability: 'adoptable' },
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: 'd45f3230-d7af-4a5a-8bec-20fe6930c36b'
      },
      line: { name: 'UniFi Connect', id: 'unifi-connect' },
      sysid: 'ec06',
      guids: [],
      id: 'a4281475-a977-4307-9ca0-7160b98aa55d',
      product: { abbrev: 'UDIM AT', name: 'Dimmer Switch AT' },
      shortnames: ['ULD3PE'],
      triplets: [{ k2: 'UDIM-AT', k1: 'ULD3PE' }]
    },
    {
      sysids: ['ec02'],
      unifi: { adoptability: 'adoptable' },
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: 'd45f3230-d7af-4a5a-8bec-20fe6930c36b'
      },
      line: { name: 'UniFi LED', id: 'unifi-led' },
      sysid: 'ec02',
      guids: [],
      id: 'bd75e87a-94da-4162-935b-9281ef80a748',
      product: { abbrev: 'UDIM AT', name: 'Dimmer Switch AT' },
      shortnames: ['ULDPE', 'ULDPE2'],
      triplets: [{ k2: 'UDIM-AT', k1: 'ULDPE2' }]
    },
    {
      images: { default: 'a589bad4d02c52452d0d12851391685f' },
      sysids: ['ea11'],
      unifi: {
        adoptability: 'standalone',
        network: {
          subtypes: ['ugw', 'usw', 'uap'],
          radios: {
            na: { gain: 4, maxPower: 25, maxSpeedMegabitsPerSecond: 1733 },
            ng: { gain: 3, maxPower: 20, maxSpeedMegabitsPerSecond: 300 }
          },
          bleServices: [
            {
              configured: 'd83b80e3-e81f-4f66-879b-779be5f6a693',
              default: '59a52bba-e33b-4739-a82d-7e875c8ded0e'
            }
          ],
          diagram: ['01 02 03 04 __ 05'],
          numberOfPorts: 5,
          ethernetMaxSpeedMegabitsPerSecond: 1000,
          systemIdHexadecimal: 'ea11',
          features: { bandsteer: true, ac: true, gen: 2 },
          details: { ipsThroughput: '850 Mbps' },
          ports: { eth1: 'LAN', eth0: 'LAN', eth3: 'LAN', eth4: 'WAN', eth2: 'LAN' },
          networkGroups: {
            eth1: 'LAN',
            eth0: 'LAN',
            eth3: 'LAN',
            eth4: 'WAN',
            eth2: 'LAN'
          },
          chipset: 'j',
          type: 'udm',
          linkNegotiation: {
            eth4: {
              supportedValues: ['autoneg', '1000 FDX', '100 FDX', '100 HDX', '10 FDX', '10 HDX'],
              portIdx: 5
            }
          },
          minimumFirmwareRequired: '0.9.0',
          deviceCapabilities: [
            'GATEWAY',
            'SWITCH',
            'ACCESS_POINT',
            'NETWORK_APPLICATION',
            'CONTROLLER',
            'APPLICATION_MODE',
            'HAS_CLIENTS'
          ],
          knownUnsupportedFeatures: [
            'SWITCH_CAP_DOT1X',
            'SWITCH_CAP_PORT_ISOLATION',
            'SWITCH_CAP_STORM_CONTROL',
            'SWITCH_CAP_STP',
            'SWITCH_CAP_LLDP_MED',
            'SWITCH_CAP_EGRESS_RATE_LIMIT'
          ]
        }
      },
      icon: {
        resolutions: [
          [25, 25],
          [32, 32],
          [51, 51],
          [64, 64],
          [101, 101],
          [128, 128],
          [129, 129],
          [256, 256],
          [257, 257],
          [512, 512],
          [1000, 1000]
        ],
        id: '4851e95c-e577-4141-89c5-1c8839261943'
      },
      jpa: ['D 19 0104 201'],
      fcc: 'SWX-UDM',
      jrf: ['201-190410'],
      line: { name: 'UniFi', id: 'unifi-network' },
      sysid: 'ea11',
      guids: ['59a52bba-e33b-4739-a82d-7e875c8ded0e', 'd83b80e3-e81f-4f66-879b-779be5f6a693'],
      btle: {
        factoryDefault: '59a52bba-e33b-4739-a82d-7e875c8ded0e',
        userConfigured: 'd83b80e3-e81f-4f66-879b-779be5f6a693'
      },
      ic: '6545A-UDM',
      id: '142cd194-8164-46a1-ba48-bef078757393',
      deviceType: 'console',
      product: { abbrev: 'UDM', name: 'Dream Machine' },
      shortnames: ['UDM'],
      triplets: [
        { k3: 'UDM', k1: 'UDM' },
        { k2: 'UniFi Dream Machine', k1: 'UDM' }
      ]
    },
    {
      images: { default: 'feea000b4db1e4cda39ec93c3532bfd5' },
      sysids: ['ea15'],
      unifi: {
        adoptability: 'standalone',
        network: {
          subtypes: ['ugw', 'usw'],
          radios: {},
          bleServices: [
            {
              configured: '26816cf6-334b-4580-bc3f-f1b72ef5d93e',
              default: 'afcad778-a44c-48d2-9b50-dbbaeff1e77a'
            }
          ],
          diagram: ['01 03 05 07 __ __ 10', '02 04 06 08 __ 09 11'],
          numberOfPorts: 11,
          ethernetMaxSpeedMegabitsPerSecond: 1000,
          systemIdHexadecimal: 'ea15',
          details: { ipsThroughput: '3.5 Gbps' },
          ports: {
            eth6: 'LAN',
            eth1: 'LAN',
            eth10: 'LAN',
            standard: 9,
            eth0: 'LAN',
            eth5: 'LAN',
            eth3: 'LAN',
            plus: [10, 11],
            eth4: 'LAN',
            eth9: 'WAN2',
            eth2: 'LAN',
            eth7: 'LAN',
            eth8: 'WAN'
          },
          networkGroups: {
            eth6: 'LAN',
            eth1: 'LAN',
            eth10: 'LAN',
            eth0: 'LAN',
            eth5: 'LAN',
            eth3: 'LAN',
            eth4: 'LAN',
            eth9: 'WAN2',
            eth2: 'LAN',
            eth7: 'LAN',
            eth8: 'WAN'
          },
          chipset: 'j',
          type: 'udm',
          linkNegotiation: {
            eth10: { supportedValues: ['autoneg', '10000 FDX', '1000 FDX'], portIdx: 11 },
            eth9: { supportedValues: ['autoneg', '10000 FDX', '1000 FDX'], portIdx: 10 },
            eth7: {
              supportedValues: ['autoneg', '1000 FDX', '100 FDX', '100 HDX', '10 FDX', '10 HDX'],
              portIdx: 8
            },
            eth8: {
              supportedValues: ['autoneg', '1000 FDX', '100 FDX', '100 HDX', '10 FDX', '10 HDX'],
              portIdx: 9
            }
          },
          minimumFirmwareRequired: '0.9.0',
          deviceCapabilities: [
            'GATEWAY',
            'SWITCH',
            'NETWORK_APPLICATION',
            'PROTECT_APPLICATION',
            'CONTROLLER',
            'APPLICATION_MODE',
            'HAS_CLIENTS'
          ],
          knownUnsupportedFeatures: [
            'SWITCH_CAP_DOT1X',
            'SWITCH_CAP_PORT_ISOLATION',
            'SWITCH_CAP_STORM_CONTROL',
            'SWITCH_CAP_STP',
            'SWITCH_CAP_LLDP_MED',
            'SWITCH_CAP_EGRESS_RATE_LIMIT'
          ]
        }
      },
      icon: {
        resolutions: [
          [25, 25],
          [32, 32],
          [51, 51],
          [64, 64],
          [101, 101],
          [128, 128],
          [129, 129],
          [256, 256],
          [257, 257],
          [512, 512],
          [1000, 1000]
        ],
        id: 'a685746f-cd8f-4453-90c7-68a3ba9c1953'
      },
      jpa: ['D20-0093001', 'L20-0007'],
      fcc: 'SWX-UDMPRO',
      jrf: ['209-J00427'],
      line: { name: 'UniFi', id: 'unifi-network' },
      sysid: 'ea15',
      guids: ['26816cf6-334b-4580-bc3f-f1b72ef5d93e', 'afcad778-a44c-48d2-9b50-dbbaeff1e77a'],
      btle: {
        factoryDefault: 'afcad778-a44c-48d2-9b50-dbbaeff1e77a',
        userConfigured: '26816cf6-334b-4580-bc3f-f1b72ef5d93e'
      },
      ic: '6545A-UDMPRO',
      id: '1812513c-f8a1-41c1-a698-86ac70b8bd87',
      deviceType: 'console',
      product: { abbrev: 'UDM Pro', name: 'Dream Machine Professional' },
      shortnames: ['UDM-PRO', 'UDM-Pro', 'UDMPRO'],
      triplets: [
        { k1: 'UDM-PRO' },
        { k3: 'UDMPRO', k1: 'UDMPRO' },
        { k2: 'UniFi Dream Machine Pro', k1: 'UDMPRO' }
      ]
    },
    {
      images: { default: '2af4410d6f1d9b4b1c6126add3257929' },
      sysids: ['ea13'],
      unifi: {
        adoptability: 'standalone',
        network: {
          subtypes: ['ugw', 'usw'],
          radios: {},
          bleServices: [
            {
              configured: '0fd8c390-a0e8-4cb2-b93a-7b3051c83c46',
              default: '5b3d311d-d2b0-4091-af46-6de7a90bacf8'
            }
          ],
          diagram: ['01 03 05 07 __ __ 10', '02 04 06 08 __ 09 11'],
          numberOfPorts: 11,
          ethernetMaxSpeedMegabitsPerSecond: 1000,
          systemIdHexadecimal: 'ea2c',
          features: { poe: true },
          power: { capacity: 190 },
          details: { ipsThroughput: '3.5 Gbps' },
          ports: {
            eth6: 'LAN',
            eth1: 'LAN',
            eth10: 'LAN',
            standard: 9,
            eth0: 'LAN',
            eth5: 'LAN',
            eth3: 'LAN',
            plus: [10, 11],
            eth4: 'LAN',
            eth9: 'WAN2',
            eth2: 'LAN',
            eth7: 'LAN',
            eth8: 'WAN'
          },
          networkGroups: {
            eth6: 'LAN',
            eth1: 'LAN',
            eth10: 'LAN',
            eth0: 'LAN',
            eth5: 'LAN',
            eth3: 'LAN',
            eth4: 'LAN',
            eth9: 'WAN2',
            eth2: 'LAN',
            eth7: 'LAN',
            eth8: 'WAN'
          },
          chipset: 'j',
          type: 'udm',
          linkNegotiation: {
            eth10: { supportedValues: ['autoneg', '10000 FDX', '1000 FDX'], portIdx: 11 },
            eth9: { supportedValues: ['autoneg', '10000 FDX', '1000 FDX'], portIdx: 10 },
            eth7: {
              supportedValues: ['autoneg', '1000 FDX', '100 FDX', '100 HDX', '10 FDX', '10 HDX'],
              portIdx: 8
            },
            eth8: {
              supportedValues: [
                'autoneg',
                '2500 FDX',
                '1000 FDX',
                '100 FDX',
                '100 HDX',
                '10 FDX',
                '10 HDX'
              ],
              portIdx: 9
            }
          },
          minimumFirmwareRequired: '0.9.0',
          deviceCapabilities: [
            'GATEWAY',
            'SWITCH',
            'NETWORK_APPLICATION',
            'PROTECT_APPLICATION',
            'CONTROLLER',
            'APPLICATION_MODE',
            'HAS_CLIENTS'
          ],
          knownUnsupportedFeatures: [
            'SWITCH_CAP_DOT1X',
            'SWITCH_CAP_PORT_ISOLATION',
            'SWITCH_CAP_STORM_CONTROL',
            'SWITCH_CAP_STP',
            'SWITCH_CAP_LLDP_MED',
            'SWITCH_CAP_EGRESS_RATE_LIMIT'
          ]
        }
      },
      icon: {
        resolutions: [
          [25, 25],
          [32, 32],
          [51, 51],
          [64, 64],
          [101, 101],
          [128, 128],
          [129, 129],
          [256, 256],
          [257, 257],
          [512, 512],
          [1000, 1000]
        ],
        id: '429ba332-ff7a-46e1-9354-b6b800919f83'
      },
      jpa: ['D22-0053001', 'L22-0007'],
      fcc: 'SWX-UDMPROSE',
      jrf: ['201-220213'],
      line: { name: 'UniFi', id: 'unifi-network' },
      sysid: 'ea13',
      guids: [
        '0fd8c390-a0e8-4cb2-b93a-7b3051c83c46',
        '5b3d311d-d2b0-4091-af46-6de7a90bacf8',
        'f5a8e9b9-3e75-44e2-9126-c5b33d2578aa',
        '04a8878e-c929-4519-82e2-566e5d44bd57'
      ],
      btle: {
        factoryDefault: 'f5a8e9b9-3e75-44e2-9126-c5b33d2578aa',
        userConfigured: '04a8878e-c929-4519-82e2-566e5d44bd57'
      },
      ic: '6545A-UDMPROSE',
      id: 'e85485da-54c3-4906-8f19-3cef4116ff02',
      deviceType: 'console',
      product: { abbrev: 'UDM SE', name: 'Dream Machine Special Edition' },
      shortnames: ['UDM-PRO-SE', 'UDMPROSE', 'UDM-SE', 'UDMSE'],
      triplets: [{ k1: 'UDM-PRO-SE' }, { k3: 'UDMPROSE', k1: 'UDMPROSE' }]
    },
    {
      images: { default: '8d1314e8f9af77a59cc2607d019ca33a' },
      sysids: ['eccc'],
      unifi: {
        adoptability: 'standalone',
        network: {
          subtypes: ['ugw', 'usw', 'uap'],
          radios: {
            na: { gain: 4, maxPower: 26, maxSpeedMegabitsPerSecond: 1733 },
            ng: { gain: 3, maxPower: 26, maxSpeedMegabitsPerSecond: 300 }
          },
          bleServices: [
            {
              configured: 'fe33e6b5-25c7-4bba-a6d2-41761765a961',
              default: 'ff3d0b52-98ac-4590-b991-c9f90324df9c'
            }
          ],
          diagram: ['01 02 03 04 __ 05'],
          numberOfPorts: 5,
          ethernetMaxSpeedMegabitsPerSecond: 1000,
          systemIdHexadecimal: 'eccc',
          features: { bandsteer: true, ac: true, ax: true, gen: 2, poe: true },
          power: { capacity: 40 },
          ports: { eth1: 'LAN', eth0: 'LAN', eth3: 'LAN', eth4: 'WAN', eth2: 'LAN' },
          networkGroups: {
            eth1: 'LAN',
            eth0: 'LAN',
            eth3: 'LAN',
            eth4: 'WAN',
            eth2: 'LAN'
          },
          chipset: 'j',
          type: 'udm',
          linkNegotiation: {
            eth4: {
              supportedValues: ['autoneg', '1000 FDX', '100 FDX', '100 HDX', '10 FDX', '10 HDX'],
              portIdx: 5
            }
          },
          minimumFirmwareRequired: '0.9.0',
          deviceCapabilities: [
            'GATEWAY',
            'SWITCH',
            'ACCESS_POINT',
            'NETWORK_APPLICATION',
            'PROTECT_APPLICATION',
            'CONTROLLER',
            'APPLICATION_MODE',
            'HAS_CLIENTS'
          ],
          knownUnsupportedFeatures: [
            'SWITCH_CAP_DOT1X',
            'SWITCH_CAP_PORT_ISOLATION',
            'SWITCH_CAP_STORM_CONTROL',
            'SWITCH_CAP_STP',
            'SWITCH_CAP_LLDP_MED',
            'SWITCH_CAP_EGRESS_RATE_LIMIT'
          ]
        }
      },
      icon: {
        resolutions: [
          [25, 25],
          [32, 32],
          [51, 51],
          [64, 64],
          [101, 101],
          [128, 128],
          [129, 129],
          [256, 256],
          [257, 257],
          [512, 512],
          [1000, 1000]
        ],
        id: '03f1f91e-47f0-464b-92ae-64af34e00b92'
      },
      jpa: ['D 21-0204201'],
      fcc: 'SWX-UDR',
      jrf: ['201-210928'],
      line: { name: 'UniFi', id: 'unifi-network' },
      sysid: 'eccc',
      guids: ['fe33e6b5-25c7-4bba-a6d2-41761765a961', 'ff3d0b52-98ac-4590-b991-c9f90324df9c'],
      btle: {
        factoryDefault: 'ff3d0b52-98ac-4590-b991-c9f90324df9c',
        userConfigured: 'fe33e6b5-25c7-4bba-a6d2-41761765a961'
      },
      ic: '6545A-UDR',
      id: '93503494-17ff-4738-a820-312ad9911f36',
      deviceType: 'console',
      product: { abbrev: 'UDR', name: 'Dream Router' },
      shortnames: ['UDR'],
      triplets: [{ k1: 'UDR' }, { k3: 'UDR', k1: 'UDR' }]
    },
    {
      images: { default: '3d811f0c42ef7a6781bb77c6f7d4488c' },
      sysids: ['ea2a'],
      unifi: {
        adoptability: 'standalone',
        network: {
          subtypes: ['ugw', 'usw', 'uap'],
          radios: {
            na: { gain: 4, maxPower: 25, maxSpeedMegabitsPerSecond: 1733 },
            ng: { gain: 3, maxPower: 20, maxSpeedMegabitsPerSecond: 300 }
          },
          bleServices: [
            {
              configured: '27f442d2-e082-4548-917c-46ed072babf5',
              default: '1ccfb2de-23cd-4966-802d-2b7237980910'
            }
          ],
          diagram: [
            '01 02 03 04 05 06 07 08 09 10 11 12 13 14 15 16 17',
            '__ __ __ __ __ __ __ __ __ __ __ __ __ __ 18 19 20'
          ],
          numberOfPorts: 20,
          ethernetMaxSpeedMegabitsPerSecond: 1000,
          systemIdHexadecimal: 'ea2a',
          features: { poe: true },
          power: { capacity: 450 },
          details: { ipsThroughput: '3.5 Gbps' },
          ports: {
            eth17: 'LAN',
            eth6: 'LAN',
            eth1: 'LAN',
            eth10: 'LAN',
            standard: 19,
            eth11: 'LAN',
            eth0: 'LAN',
            eth5: 'LAN',
            eth14: 'LAN',
            eth12: 'LAN',
            eth3: 'LAN',
            plus: [17, 20],
            eth15: 'LAN',
            eth4: 'LAN',
            eth18: 'WAN',
            eth9: 'LAN',
            eth2: 'LAN',
            eth13: 'LAN',
            eth7: 'LAN',
            eth16: 'LAN',
            eth8: 'LAN',
            eth19: 'WAN2'
          },
          networkGroups: {
            eth17: 'LAN',
            eth6: 'LAN',
            eth1: 'LAN',
            eth10: 'LAN',
            eth11: 'LAN',
            eth0: 'LAN',
            eth5: 'LAN',
            eth14: 'LAN',
            eth12: 'LAN',
            eth3: 'LAN',
            eth15: 'LAN',
            eth4: 'LAN',
            eth18: 'WAN',
            eth9: 'LAN',
            eth2: 'LAN',
            eth13: 'LAN',
            eth7: 'LAN',
            eth16: 'LAN',
            eth8: 'LAN',
            eth19: 'WAN2'
          },
          chipset: 'j',
          type: 'udm',
          linkNegotiation: {
            eth15: {
              supportedValues: ['autoneg', '1000 FDX', '100 FDX', '100 HDX', '10 FDX', '10 HDX'],
              portIdx: 16
            },
            eth18: {
              supportedValues: [
                'autoneg',
                '2500 FDX',
                '1000 FDX',
                '100 FDX',
                '100 HDX',
                '10 FDX',
                '10 HDX'
              ],
              portIdx: 19
            },
            eth16: { supportedValues: ['autoneg', '10000 FDX', '1000 FDX'], portIdx: 17 },
            eth19: { supportedValues: ['autoneg', '10000 FDX', '1000 FDX'], portIdx: 20 }
          },
          minimumFirmwareRequired: '0.9.0',
          deviceCapabilities: [
            'GATEWAY',
            'SWITCH',
            'ACCESS_POINT',
            'NETWORK_APPLICATION',
            'CONTROLLER',
            'APPLICATION_MODE',
            'HAS_CLIENTS'
          ],
          knownUnsupportedFeatures: [
            'SWITCH_CAP_DOT1X',
            'SWITCH_CAP_PORT_ISOLATION',
            'SWITCH_CAP_STORM_CONTROL',
            'SWITCH_CAP_STP',
            'SWITCH_CAP_LLDP_MED',
            'SWITCH_CAP_EGRESS_RATE_LIMIT'
          ]
        }
      },
      icon: {
        resolutions: [
          [25, 25],
          [32, 32],
          [51, 51],
          [64, 64],
          [101, 101],
          [128, 128],
          [129, 129],
          [256, 256],
          [257, 257],
          [512, 512],
          [1000, 1000]
        ],
        id: 'f66802f6-8115-49c8-bd12-7c7402805add'
      },
      jpa: ['D23-0075001', 'L23-0011'],
      fcc: 'SWX-UDW',
      line: { name: 'UniFi', id: 'unifi-network' },
      minAdoptVersion: { net: '7.0.23' },
      sysid: 'ea2a',
      guids: [
        'da72108e-5d14-4cf7-8ee4-24f386b2548a',
        '1ccfb2de-23cd-4966-802d-2b7237980910',
        '27f442d2-e082-4548-917c-46ed072babf5'
      ],
      btle: {
        factoryDefault: '1ccfb2de-23cd-4966-802d-2b7237980910',
        userConfigured: '27f442d2-e082-4548-917c-46ed072babf5'
      },
      ic: '6545A-UDW',
      id: '3904d899-2536-40db-b437-055eb0bd61df',
      deviceType: 'console',
      product: { abbrev: 'UDW', name: 'Dream Wall' },
      shortnames: ['UDW'],
      triplets: [{ k3: 'UDW', k1: 'UDW' }, { k1: 'UDW' }]
    },
    {
      sysids: [],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: 'fa8024cd-7daa-49b1-bf86-7eec6c8215e0'
      },
      line: { name: 'UFiber', id: 'ufiber' },
      guids: [],
      uisp: {
        nameLegacy: [],
        bleServices: {},
        line: 'ufiber_onu',
        firmware: { platform: null, board: [] }
      },
      id: '95c28dca-6825-4ba1-9e2d-9dc3d5bc57b8',
      product: { abbrev: 'UF AE', name: 'UFiber Active Ethernet' },
      shortnames: ['UF-AE'],
      triplets: []
    },
    {
      sysids: ['eec6'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: 'd32d26fc-110f-4cdc-845a-5ec655cf7a47'
      },
      line: { name: 'UFiber', id: 'ufiber' },
      sysid: 'eec6',
      guids: [],
      uisp: {
        nameLegacy: [],
        bleServices: {},
        line: 'ufiber_onu',
        firmware: { platform: null, board: [] }
      },
      id: 'f3c6ded6-cf61-4aca-b0f3-fdf866b652cc',
      product: { abbrev: 'UF Instant', name: 'UFiber Instant' },
      shortnames: ['UF-Instant'],
      triplets: []
    },
    {
      sysids: [],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '67341c21-71a5-45de-a393-f54a528acfce'
      },
      line: { name: 'UFiber', id: 'ufiber' },
      guids: [],
      uisp: {
        nameLegacy: ['UF-LO'],
        bleServices: {},
        line: 'ufiber_onu',
        firmware: { platform: null, board: [] }
      },
      id: '9c1ea77e-7bb4-4e98-8d7d-d3d1b30cd12a',
      product: { abbrev: 'UF Loco', name: 'UFiber Loco' },
      shortnames: ['UF-LOCO'],
      triplets: [{ k1: 'UF-LOCO' }]
    },
    {
      sysids: [],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '4a67f679-51f5-4327-9fa6-5f108976001c'
      },
      line: { name: 'UFiber', id: 'ufiber' },
      guids: [],
      uisp: {
        nameLegacy: ['UFiber Nano G', 'U-Fiber Nano G', 'UFiber Nano', 'UF-NG'],
        bleServices: {},
        line: 'ufiber_onu',
        firmware: { platform: null, board: [] }
      },
      id: 'b204f2f8-af2e-4667-9b1d-afe5ebbdf59b',
      product: { abbrev: 'UF Nano', name: 'UFiber NanoG' },
      shortnames: ['UF-Nano'],
      triplets: []
    },
    {
      sysids: ['eeaf', 'eeae'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '437bdd05-99b8-47f0-be4d-148fdaafe984'
      },
      line: { name: 'UFiber', id: 'ufiber' },
      sysid: 'eeaf',
      guids: [],
      uisp: {
        nameLegacy: [],
        bleServices: {},
        line: 'ufiber_olt',
        firmware: { platform: 'linux', board: ['uf-olt'] }
      },
      id: 'c98102b2-c28d-47b3-9af4-fb88f6e770eb',
      product: { abbrev: 'UF OLT', name: 'UFiber OLT' },
      shortnames: ['UF-OLT'],
      triplets: [{ k2: 'UFiber OLT', k1: 'UF-OLT' }, { k1: 'UF-OLT' }]
    },
    {
      sysids: ['eec0'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '4117f9a4-2933-4574-aca3-b393322acc37'
      },
      line: { name: 'UFiber', id: 'ufiber' },
      sysid: 'eec0',
      guids: [],
      uisp: {
        nameLegacy: [],
        bleServices: {},
        line: 'ufiber_olt',
        firmware: { platform: 'linux', board: ['uf-olt'] }
      },
      id: '84447095-f107-4682-b7e8-d6cbf1c6990b',
      product: { abbrev: 'UF OLT 4', name: 'UFiber OLT 4' },
      shortnames: ['UF-OLT4'],
      triplets: [{ k2: 'UFiber OLT4', k1: 'UF-OLT4' }, { k1: 'UF-OLT4' }]
    },
    {
      sysids: ['eec4'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '121d124b-0b6a-410c-ac41-c8eefdfc78a9'
      },
      line: { name: 'UFiber', id: 'ufiber' },
      sysid: 'eec4',
      guids: [],
      uisp: {
        nameLegacy: [],
        bleServices: {},
        line: 'ufiber_onu_wifi',
        firmware: { platform: null, board: [] }
      },
      id: 'f24468bb-9764-4d00-9b5e-5bba08302b75',
      product: { abbrev: 'UF WiFi', name: 'UFiber WiFi' },
      shortnames: ['UF-WIFI', 'UF-WiFi'],
      triplets: [{ k1: 'UF-WIFI' }]
    },
    {
      sysids: [],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '98702c27-c680-4d23-bd75-155c7f07b013'
      },
      line: { name: 'UniFi Protect', id: 'unifi-protect' },
      guids: [],
      id: '30de2ec3-99f0-4848-b571-c55d6779eaa5',
      /* eslint-disable @typescript-eslint/naming-convention */
      is_service: true,
      /* eslint-enable @typescript-eslint/naming-convention */
      product: { abbrev: 'UP Bridge', name: 'Protect UAP Bridge' },
      shortnames: ['UFP-UAP-B'],
      triplets: [{ k2: 'Unifi-Protect-UAP-Bridge', k1: 'UFP-UAP-B' }]
    },
    {
      sysids: ['e980'],
      unifi: { adoptability: 'adoptable' },
      icon: {
        resolutions: [
          [25, 25],
          [32, 32],
          [51, 51],
          [64, 64],
          [101, 101],
          [128, 128],
          [129, 129],
          [256, 256],
          [257, 257],
          [512, 512],
          [1000, 1000]
        ],
        id: 'f7b2ac50-c514-4cdd-ba37-02296cc061d2'
      },
      fcc: 'SWX-UFPVP',
      jrf: ['201-210326'],
      line: { name: 'UniFi Protect', id: 'unifi-protect' },
      sysid: 'e980',
      guids: ['1385fe74-06ad-496f-933e-c1785e3d7947'],
      ic: '6545A-UFPVP',
      id: '19ccb734-dd21-4d93-bfdf-02bca31d8587',
      deviceType: 'viewer',
      product: { abbrev: 'UP Viewport', name: 'Protect Viewport' },
      shortnames: ['UFP Viewport', 'UP Viewport'],
      triplets: [{ k1: 'UFP Viewport' }, { k1: 'UP Viewport' }]
    },
    {
      sysids: [],
      unifi: {
        network: {
          radios: {},
          numberOfPorts: 8,
          ethernetMaxSpeedMegabitsPerSecond: 1000,
          systemIdHexadecimal: 'ee31',
          chipset: 'i',
          type: 'ugw',
          minimumFirmwareRequired: '4.4.34',
          deviceCapabilities: []
        }
      },
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: 'fa9cf57b-6569-4f5a-bbb4-14af3533e305'
      },
      line: { name: 'UniFi', id: 'unifi-network' },
      guids: [],
      id: '5418881a-6fb6-409f-86bc-7c845ca66366',
      product: { abbrev: 'USG Pro', name: 'USG Professional' },
      shortnames: ['UGW8'],
      triplets: []
    },
    {
      sysids: ['ee6a'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '3af1df03-557b-4243-9aaf-91abbb97aac6'
      },
      line: { name: 'UISP', id: 'uisp' },
      sysid: 'ee6a',
      guids: ['405a3564-cb33-448a-badb-b96fe05a8de0', '8f30f895-c8e7-463e-9c5c-91b29b3f139e'],
      uisp: {
        nameLegacy: [],
        bleServices: {
          /* eslint-disable @typescript-eslint/naming-convention */
          '8f30f895-c8e7-463e-9c5c-91b29b3f139e': { mode: 'factory' },
          '405a3564-cb33-448a-badb-b96fe05a8de0': { mode: 'default' }
          /* eslint-enable @typescript-eslint/naming-convention */
        },
        line: 'uisp_router',
        firmware: { platform: 'uispr', board: ['alpinev2', 'unmsr', 'uispr'] }
      },
      btle: {
        factoryDefault: '8f30f895-c8e7-463e-9c5c-91b29b3f139e',
        userConfigured: '405a3564-cb33-448a-badb-b96fe05a8de0'
      },
      id: 'ea399acc-5398-438d-afb1-2414d5b66d68',
      product: { abbrev: 'UISP Console', name: 'UISP Console' },
      shortnames: ['UISP-Console'],
      triplets: []
    },
    {
      sysids: ['eec7'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '21352e02-bd24-416c-8c90-41c168007547'
      },
      line: { name: 'UFiber', id: 'ufiber' },
      sysid: 'eec7',
      guids: [
        '39585c7e-8020-4fc7-b5f8-f2878b49f348',
        '54be8418-9930-4af7-aad4-44957c869716',
        '699f2281-5b70-42b6-b798-481e5fee2f54'
      ],
      uisp: {
        nameLegacy: [],
        bleServices: {
          /* eslint-disable @typescript-eslint/naming-convention */
          '54be8418-9930-4af7-aad4-44957c869716': { mode: 'factory' },
          '699f2281-5b70-42b6-b798-481e5fee2f54': { mode: 'default' }
          /* eslint-enable @typescript-eslint/naming-convention */
        },
        line: 'ufiber_olt',
        firmware: { platform: 'linux', board: ['uf-olt'] }
      },
      btle: {
        factoryDefault: '54be8418-9930-4af7-aad4-44957c869716',
        userConfigured: '699f2281-5b70-42b6-b798-481e5fee2f54'
      },
      id: 'e8f3a188-4086-417c-982c-3cbaf1581a9f',
      product: { abbrev: 'UISP FIBER OLT XGS', name: 'UISP Fiber OLT XGS' },
      shortnames: ['UISP-FIBER-OLT-XGS'],
      triplets: []
    },
    {
      sysids: ['eec8'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: 'bae76a4e-5a4c-41df-996f-6681077e12f9'
      },
      line: { name: 'UFiber', id: 'ufiber' },
      sysid: 'eec8',
      guids: ['ce3808da-6901-4a6e-a41e-d6a780d6030c'],
      uisp: {
        nameLegacy: [],
        bleServices: {},
        line: 'ufiber_onu',
        firmware: { platform: null, board: [] }
      },
      id: '1f3348ef-af9f-4aaf-b86f-d7259d143ca2',
      product: { abbrev: 'UISP FIBER XG', name: 'UISP Fiber XG' },
      shortnames: ['UISP-FIBER-XG'],
      triplets: []
    },
    {
      sysids: ['eec9'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '773ecf76-23b7-4c29-92ba-ffe74466f9d6'
      },
      line: { name: 'UFiber', id: 'ufiber' },
      sysid: 'eec9',
      guids: ['7fddc855-bd08-43ad-aa3b-81aba5e92e1f'],
      uisp: {
        nameLegacy: [],
        bleServices: {},
        line: 'ufiber_onu',
        firmware: { platform: null, board: [] }
      },
      id: '61e273d6-0193-429d-b154-bc0ca599b7e0',
      product: { abbrev: 'UISP FIBER XGS', name: 'UISP Fiber XGS' },
      shortnames: ['UISP-FIBER-XGS'],
      triplets: []
    },
    {
      sysids: ['dca2', 'dca3'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '708c1918-a149-4c8b-9d4a-4897ac7bcf10'
      },
      line: { name: 'UISP', id: 'uisp' },
      sysid: 'dca2',
      guids: ['24cfc582-2598-451b-87a8-75faa06ce004', '755fc123-590b-4f73-95a3-5246795717ac'],
      uisp: {
        nameLegacy: ['UISP-LTE'],
        bleServices: {
          /* eslint-disable @typescript-eslint/naming-convention */
          '24cfc582-2598-451b-87a8-75faa06ce004': { mode: 'factory' },
          '755fc123-590b-4f73-95a3-5246795717ac': { mode: 'default' }
          /* eslint-enable @typescript-eslint/naming-convention */
        },
        line: 'uisp_lte',
        firmware: { platform: 'uisp-lte', board: ['ll', 'unmslte'] }
      },
      btle: {
        factoryDefault: '24cfc582-2598-451b-87a8-75faa06ce004',
        userConfigured: '755fc123-590b-4f73-95a3-5246795717ac'
      },
      id: '4eab393c-058b-49f2-a231-b1fcb0443103',
      product: { abbrev: 'UISP LTE', name: 'UISP LTE' },
      shortnames: ['UISP-LTE'],
      triplets: [{ k2: 'UISP LTE', k1: 'UISP-LTE' }]
    },
    {
      sysids: ['ee5a'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '6d45ce62-b73d-453f-bd14-7ab9020ca205'
      },
      line: { name: 'UISP', id: 'uisp' },
      sysid: 'ee5a',
      guids: ['bea546b6-b7a4-4f0e-b4b3-a9a5f01b3255', 'e481242f-6f2c-4019-aadf-b1fae07e549f'],
      uisp: {
        nameLegacy: [],
        bleServices: {
          /* eslint-disable @typescript-eslint/naming-convention */
          'bea546b6-b7a4-4f0e-b4b3-a9a5f01b3255': { mode: 'default' },
          'e481242f-6f2c-4019-aadf-b1fae07e549f': { mode: 'factory' }
          /* eslint-enable @typescript-eslint/naming-convention */
        },
        line: 'uisp_power',
        firmware: { platform: 'uisp-power', board: ['uispp'] }
      },
      btle: {
        factoryDefault: 'e481242f-6f2c-4019-aadf-b1fae07e549f',
        userConfigured: 'bea546b6-b7a4-4f0e-b4b3-a9a5f01b3255'
      },
      id: '1d7d6c04-c752-4d3c-b7f0-5e48aa4927d3',
      product: { abbrev: 'UISP P', name: 'UISP Power' },
      shortnames: ['UISP-P'],
      triplets: [{ k2: 'UISP Power', k1: 'UISP-P' }]
    },
    {
      sysids: ['ee5b'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '570be64c-01dc-4624-b2b2-b6bd2dd1e1fb'
      },
      line: { name: 'UISP', id: 'uisp' },
      sysid: 'ee5b',
      guids: ['5942299f-235e-49a1-b961-834a75a73671', '8e615d89-ad4b-426f-92db-a36ec576ce0b'],
      uisp: {
        nameLegacy: [],
        bleServices: {
          /* eslint-disable @typescript-eslint/naming-convention */
          '5942299f-235e-49a1-b961-834a75a73671': { mode: 'factory' },
          '8e615d89-ad4b-426f-92db-a36ec576ce0b': { mode: 'default' }
          /* eslint-enable @typescript-eslint/naming-convention */
        },
        line: 'uisp_power',
        firmware: { platform: 'uisp-power', board: ['uispp'] }
      },
      btle: {
        factoryDefault: '5942299f-235e-49a1-b961-834a75a73671',
        userConfigured: '8e615d89-ad4b-426f-92db-a36ec576ce0b'
      },
      id: '9b0f94cd-5500-4872-84b0-e3470648546b',
      product: { abbrev: 'UISP P Pro', name: 'UISP Power Professional' },
      shortnames: ['UISP-P-Pro'],
      triplets: []
    },
    {
      sysids: ['ee6e'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '3896753a-e81a-48ed-bdbb-9df160de9354'
      },
      line: { name: 'UISP', id: 'uisp' },
      sysid: 'ee6e',
      guids: ['2a35b1b9-2856-43ab-a0f6-945a8c6bea59', '64850447-626d-4385-8b09-0c77a3e26f7f'],
      uisp: {
        nameLegacy: ['UISP-R', 'UISP-R-Micro'],
        bleServices: {
          /* eslint-disable @typescript-eslint/naming-convention */
          '2a35b1b9-2856-43ab-a0f6-945a8c6bea59': { mode: 'factory' },
          '64850447-626d-4385-8b09-0c77a3e26f7f': { mode: 'default' }
          /* eslint-enable @typescript-eslint/naming-convention */
        },
        line: 'uisp_router',
        firmware: { platform: 'uispr', board: ['mt7621', 'unmsr'] }
      },
      btle: {
        factoryDefault: '2a35b1b9-2856-43ab-a0f6-945a8c6bea59',
        userConfigured: '64850447-626d-4385-8b09-0c77a3e26f7f'
      },
      id: '5f55f54a-bbae-4c4f-a22e-b6ee48115872',
      product: { abbrev: 'UISP R', name: 'UISP Router' },
      shortnames: ['UISP-R'],
      triplets: [{ k2: 'UISP Router', k1: 'UISP-R' }, { k1: 'UISP-R' }]
    },
    {
      sysids: ['ee6b'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '13ec994b-47d1-4578-bdc4-5aa98e541965'
      },
      line: { name: 'UISP', id: 'uisp' },
      sysid: 'ee6b',
      guids: ['dba08c38-0447-4e15-a897-d406e20a3e32', 'fbfc5eda-440a-4efd-a022-ef7646f8aef5'],
      uisp: {
        nameLegacy: ['UNMS-R-Lite', 'UISP-R-Lite'],
        bleServices: {
          /* eslint-disable @typescript-eslint/naming-convention */
          'dba08c38-0447-4e15-a897-d406e20a3e32': { mode: 'default' },
          'fbfc5eda-440a-4efd-a022-ef7646f8aef5': { mode: 'factory' }
          /* eslint-enable @typescript-eslint/naming-convention */
        },
        line: 'uisp_router',
        firmware: { platform: 'uispr', board: ['mt7621', 'unmsr'] }
      },
      btle: {
        factoryDefault: 'fbfc5eda-440a-4efd-a022-ef7646f8aef5',
        userConfigured: 'dba08c38-0447-4e15-a897-d406e20a3e32'
      },
      id: '8dafa46d-f74e-4b57-8bec-046a121fbf28',
      product: { abbrev: 'UISP R Lite', name: 'UISP Router Lite' },
      shortnames: ['UISP-R-Lite'],
      triplets: [{ k2: 'UISP Router Lite', k1: 'UISP-R-Lite' }]
    },
    {
      sysids: ['ee6d'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: 'fbda060f-2193-46ba-b976-d56a92f21673'
      },
      line: { name: 'UISP', id: 'uisp' },
      sysid: 'ee6d',
      guids: [
        '5d7ab98d-3819-4407-b6f3-99936dc844e3',
        '3bd4507d-9014-441a-90f4-42879aecc2e9',
        '73df9595-308f-4261-9887-13bb25b95e2b'
      ],
      uisp: {
        nameLegacy: ['UISP Router Pro', 'UNMS Router Pro', 'UISP-R-Pro'],
        bleServices: {
          /* eslint-disable @typescript-eslint/naming-convention */
          '73df9595-308f-4261-9887-13bb25b95e2b': { mode: 'default' },
          '3bd4507d-9014-441a-90f4-42879aecc2e9': { mode: 'factory' }
          /* eslint-enable @typescript-eslint/naming-convention */
        },
        line: 'uisp_router',
        firmware: { platform: 'uispr', board: ['alpinev2r'] }
      },
      btle: {
        factoryDefault: '3bd4507d-9014-441a-90f4-42879aecc2e9',
        userConfigured: '73df9595-308f-4261-9887-13bb25b95e2b'
      },
      id: '038d0b30-ddb2-4225-8152-6db8f5898be8',
      product: { abbrev: 'UISP R Pro', name: 'UISP Router Professional' },
      shortnames: ['UISP-R-Pro'],
      triplets: []
    },
    {
      sysids: ['ee6f'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: 'ed633492-0985-4d42-9643-47a28c754aea'
      },
      line: { name: 'UISP', id: 'uisp' },
      sysid: 'ee6f',
      guids: ['2139c5cd-4ad4-4ff9-9225-d1721d2e3db9', '9220676d-2c22-40cb-aed8-7aad9b1da9ec'],
      uisp: {
        nameLegacy: ['UISP-S', 'UISP-S-Micro'],
        bleServices: {
          /* eslint-disable @typescript-eslint/naming-convention */
          '2139c5cd-4ad4-4ff9-9225-d1721d2e3db9': { mode: 'default' },
          '9220676d-2c22-40cb-aed8-7aad9b1da9ec': { mode: 'factory' }
          /* eslint-enable @typescript-eslint/naming-convention */
        },
        line: 'uisp_switch',
        firmware: { platform: 'uisp-switch', board: ['uisps'] }
      },
      btle: {
        factoryDefault: '9220676d-2c22-40cb-aed8-7aad9b1da9ec',
        userConfigured: '2139c5cd-4ad4-4ff9-9225-d1721d2e3db9'
      },
      id: '2b48b51c-597b-4480-b849-79c8f552b4dc',
      product: { abbrev: 'UISP S', name: 'UISP Switch' },
      shortnames: ['UISP-S'],
      triplets: [{ k2: 'UISP Switch', k1: 'UISP-S' }]
    },
    {
      sysids: ['eed1'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '6aa4eb7f-a3e8-4b55-bf37-918d0176559f'
      },
      line: { name: 'UISP', id: 'uisp' },
      sysid: 'eed1',
      guids: ['40236e8d-b84f-43bb-830f-b900d175ca9f', '7aaef447-0467-478d-9be8-fdf73282bab7'],
      uisp: {
        nameLegacy: [],
        bleServices: {
          /* eslint-disable @typescript-eslint/naming-convention */
          '7aaef447-0467-478d-9be8-fdf73282bab7': { mode: 'factory' },
          '40236e8d-b84f-43bb-830f-b900d175ca9f': { mode: 'default' }
          /* eslint-enable @typescript-eslint/naming-convention */
        },
        line: 'uisp_switch',
        firmware: { platform: 'uisp-switch', board: ['uispspro'] }
      },
      btle: {
        factoryDefault: '7aaef447-0467-478d-9be8-fdf73282bab7',
        userConfigured: '40236e8d-b84f-43bb-830f-b900d175ca9f'
      },
      id: 'ccda41c6-8041-4145-b3fe-493a98180c0e',
      product: { abbrev: 'UISP S Pro', name: 'UISP Switch Professional' },
      shortnames: ['UISP-S-Pro'],
      triplets: [{ k2: 'UISP Switch Pro', k1: 'UISP-S-Pro' }]
    },
    {
      sysids: ['ec0c'],
      unifi: { adoptability: 'adoptable' },
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '8461e2ad-b50b-4638-9008-0c30d1256468'
      },
      line: { name: 'UniFi Connect', id: 'unifi-connect' },
      sysid: 'ec0c',
      guids: [],
      btle: {
        factoryDefault: 'dda645e3-69e7-470f-a515-170ea3a81508',
        userConfigured: '362c81d4-7038-4702-805c-0f1308ca0e08'
      },
      id: '647adc05-1788-4273-a11b-aefc366bc8cd',
      product: { abbrev: 'ULED AC', name: 'LED Panel AC' },
      shortnames: ['ULP3AC'],
      triplets: [{ k2: 'ULED-AC', k1: 'ULP3AC' }]
    },
    {
      sysids: ['ec03'],
      unifi: { adoptability: 'adoptable' },
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '8461e2ad-b50b-4638-9008-0c30d1256468'
      },
      line: { name: 'UniFi LED', id: 'unifi-led' },
      sysid: 'ec03',
      guids: [],
      id: '7a070ae2-02f4-46cc-b461-198a3ee0e0d2',
      product: { abbrev: 'ULED AC', name: 'LED Panel AC' },
      shortnames: ['ULP2AC', 'ULP2AC2', 'ULP2AC3'],
      triplets: [
        { k2: 'ULED-AC', k1: 'ULP2AC2' },
        { k2: 'ULED-AC', k1: 'ULP2AC3' }
      ]
    },
    {
      sysids: ['ec05'],
      unifi: { adoptability: 'adoptable' },
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '0bd85f15-112b-4963-b03e-d5954eb58109'
      },
      line: { name: 'UniFi Connect', id: 'unifi-connect' },
      sysid: 'ec05',
      guids: [],
      id: '31aa5696-921d-4146-ba79-f2620d8dcadc',
      product: { abbrev: 'ULED AT', name: 'LED Panel AT' },
      shortnames: ['ULP3PE'],
      triplets: [{ k2: 'ULED-AT', k1: 'ULP3PE' }]
    },
    {
      sysids: ['ec01'],
      unifi: { adoptability: 'adoptable' },
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '0bd85f15-112b-4963-b03e-d5954eb58109'
      },
      line: { name: 'UniFi LED', id: 'unifi-led' },
      sysid: 'ec01',
      guids: [],
      id: '0ee2450a-bc1d-4df9-8dee-ae3d9a94fa4b',
      product: { abbrev: 'ULED AT', name: 'LED Panel AT' },
      shortnames: ['ULP2PE', 'ULP2PE2'],
      triplets: [
        { k2: 'ULED-AT', k1: 'ULP2PE' },
        { k2: 'ULED-AT', k1: 'ULP2PE2' }
      ]
    },
    {
      sysids: ['ec50'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: 'b80097dc-1647-4353-99ee-966db0130e80'
      },
      line: { name: 'UniFi LED', id: 'unifi-led' },
      sysid: 'ec50',
      guids: [],
      id: 'b93e923b-9643-4a24-9fc9-87115589b9fc',
      product: { abbrev: 'ULS', name: 'Motion Sensor' },
      shortnames: ['ULED-S', 'ULS'],
      triplets: [{ k2: 'ULED-S', k1: 'ULS' }]
    },
    {
      sysids: [],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '832614c8-6e36-4867-a2de-246d7115c687'
      },
      line: { name: 'UniFi', id: 'unifi-network' },
      guids: [],
      id: 'bec6fd7f-104a-4db7-9167-f8f00d4881ea',
      product: { abbrev: 'Mesh DB Antenna', name: 'Access Point Mesh Dual-Band Antenna' },
      shortnames: ['UniFi Antenna', 'UniFi Mesh Antenna'],
      triplets: []
    },
    {
      sysids: [],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '1606c40f-e9b7-46d9-aeaf-e9afe52416e5'
      },
      line: { name: 'UniFi', id: 'unifi-network' },
      guids: ['3f92f5a0-b886-45ae-9dce-e2dc616c3e64'],
      id: '84aa8e5f-be37-4326-8c52-b2d99ca40a21',
      product: { abbrev: 'UMR', name: 'Mobile Router' },
      shortnames: ['UMR', 'openwrt'],
      triplets: [
        { k3: 'UMR-Flex', k1: 'openwrt' },
        { k2: 'UMR', k1: 'UMR' }
      ]
    },
    {
      images: { default: 'b6671cf0f91b77e4dd83eb39c9f50363' },
      sysids: ['ea51'],
      unifi: {
        adoptability: 'standalone',
        network: {
          radios: {},
          bleServices: [
            {
              configured: 'edb1f0b7-bdcc-4b06-a326-17ff99997c5b',
              default: 'ec4c399c-49c9-4192-a4fd-b32f1622443e',
              features: { ucore: true }
            }
          ],
          type: 'unas',
          deviceCapabilities: ['STORAGE', null]
        }
      },
      icon: {
        resolutions: [
          [25, 25],
          [32, 32],
          [51, 51],
          [64, 64],
          [101, 101],
          [128, 128],
          [129, 129],
          [256, 256],
          [257, 257],
          [512, 512],
          [1000, 1000]
        ],
        id: '4a76316a-011a-485e-bcd8-de9fd5a54b0b'
      },
      line: { name: 'UniFi Drive', id: 'unifi-drive' },
      sysid: 'ea51',
      guids: [
        '8dfefbcd-5791-411b-9724-b53f37f0ac0f',
        'ec4c399c-49c9-4192-a4fd-b32f1622443e',
        'edb1f0b7-bdcc-4b06-a326-17ff99997c5b'
      ],
      btle: {
        factoryDefault: 'ec4c399c-49c9-4192-a4fd-b32f1622443e',
        userConfigured: 'edb1f0b7-bdcc-4b06-a326-17ff99997c5b'
      },
      id: '894e86f4-579e-42cd-9bf0-6bd4d1d3f3a0',
      product: { abbrev: 'UNAS Pro', name: 'Network Attached Storage Professional' },
      shortnames: ['UNASPRO'],
      triplets: [{ k1: 'UNASPRO' }]
    },
    {
      images: { default: '49c99792b156a2bda00c8bac702b5234' },
      sysids: [],
      icon: {
        resolutions: [
          [25, 25],
          [32, 32],
          [51, 51],
          [64, 64],
          [101, 101],
          [128, 128],
          [129, 129],
          [256, 256],
          [257, 257],
          [512, 512],
          [1000, 1000]
        ],
        id: 'e090b17e-a8b5-49e9-9f31-65a47fb8866f'
      },
      line: { name: 'Unknown', id: 'unknown' },
      guids: [],
      id: '2fe994cd-f09e-41dd-8fa3-f5bc707040d1',
      deviceType: 'console',
      product: { abbrev: 'Unknown Console', name: 'Unknown Console' },
      shortnames: ['UNKNOWN-CONSOLE'],
      triplets: []
    },
    {
      sysids: ['eed0'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: 'f28c47ea-e6bf-47d6-b14a-c3c56c20463e'
      },
      line: { name: 'Unknown', id: 'unknown' },
      sysid: 'eed0',
      guids: [],
      id: '40993424-4366-4623-aff7-a899493e2654',
      product: { abbrev: 'UNMS Switch Lite', name: 'UNMS Switch Lite' },
      shortnames: ['UNMS-S-Lite'],
      triplets: [{ k2: 'UNMS-S-Lite', k1: 'UNMS-S-Lite' }]
    },
    {
      images: { default: '354b4ebd2b00277ade13b86ef614c9c8' },
      sysids: ['ea16'],
      unifi: {
        adoptability: 'standalone',
        network: {
          radios: {},
          bleServices: [
            {
              configured: '9fb9ae81-e7fb-49b2-b7f8-dfef4e09e3f4',
              default: '049df97a-5894-408c-bc87-b4872b2a6346',
              features: { ucore: true }
            }
          ],
          type: 'unvr',
          deviceCapabilities: ['PROTECT_APPLICATION', 'STORAGE', null]
        }
      },
      icon: {
        resolutions: [
          [25, 25],
          [32, 32],
          [51, 51],
          [64, 64],
          [101, 101],
          [128, 128],
          [129, 129],
          [256, 256],
          [257, 257],
          [512, 512],
          [1000, 1000]
        ],
        id: '8cc7b4fa-3850-416d-9890-27420cf09911'
      },
      jrf: ['201-210328'],
      line: { name: 'UniFi Protect', id: 'unifi-protect' },
      sysid: 'ea16',
      guids: ['049df97a-5894-408c-bc87-b4872b2a6346', '9fb9ae81-e7fb-49b2-b7f8-dfef4e09e3f4'],
      btle: {
        factoryDefault: '049df97a-5894-408c-bc87-b4872b2a6346',
        userConfigured: '9fb9ae81-e7fb-49b2-b7f8-dfef4e09e3f4'
      },
      id: 'f0eeb243-1e33-435d-9c83-0ab0e856aa6f',
      deviceType: 'console',
      product: { abbrev: 'UNVR', name: 'Network Video Recorder' },
      shortnames: ['UNVR', 'UNVR-4', 'UNVR4', 'UniFi Video NVR', 'UniFi Video NVR 2TB'],
      triplets: [
        { k2: 'Protect Network Video Recorder', k1: 'UNVR' },
        { k2: 'Unifi NVR 4bays', k1: 'UNVR4' },
        { k1: 'UNVR4' },
        { k1: 'UNVR' },
        { k2: 'UniFi Network Video Recorder', k1: 'UNVR' }
      ]
    },
    {
      images: { default: '44f1b23e1f514254eb4f999f5728afe5' },
      sysids: ['ea20'],
      unifi: {
        adoptability: 'standalone',
        network: {
          radios: {},
          bleServices: [
            {
              configured: '10b3fc63-28eb-4f7e-b8de-7579cd609cf5',
              default: '575ef462-1589-42ec-941a-3002313393f2',
              features: { ucore: true }
            }
          ],
          type: 'unvr',
          deviceCapabilities: ['PROTECT_APPLICATION', 'STORAGE', null]
        }
      },
      icon: {
        resolutions: [
          [25, 25],
          [32, 32],
          [51, 51],
          [64, 64],
          [101, 101],
          [128, 128],
          [129, 129],
          [256, 256],
          [257, 257],
          [512, 512],
          [1000, 1000]
        ],
        id: '3c1a4721-cf28-43d9-9cd6-b612622b7788'
      },
      jrf: ['201-210355'],
      line: { name: 'UniFi Protect', id: 'unifi-protect' },
      sysid: 'ea20',
      guids: ['10b3fc63-28eb-4f7e-b8de-7579cd609cf5', '575ef462-1589-42ec-941a-3002313393f2'],
      btle: {
        factoryDefault: '575ef462-1589-42ec-941a-3002313393f2',
        userConfigured: '10b3fc63-28eb-4f7e-b8de-7579cd609cf5'
      },
      id: '73a1d73d-f16f-4c19-9c13-8a62bb2da9d6',
      deviceType: 'console',
      product: { abbrev: 'UNVR Pro', name: 'Network Video Recorder Professional' },
      shortnames: ['UNVR-PRO', 'UNVR-Pro', 'UNVRPRO'],
      triplets: [
        { k1: 'UNVR-PRO' },
        { k2: 'Unifi NVR PRO', k1: 'UNVRPRO' },
        { k1: 'UNVRPRO' },
        { k2: 'UniFi Network Video Recorder Pro', k1: 'UNVRPRO' }
      ]
    },
    {
      sysids: ['ab12'],
      unifi: { adoptability: 'adoptable' },
      icon: {
        resolutions: [
          [25, 25],
          [32, 32],
          [51, 51],
          [64, 64],
          [101, 101],
          [128, 128],
          [129, 129],
          [256, 256],
          [257, 257],
          [512, 512],
          [1000, 1000]
        ],
        id: '4932bfd8-ec26-4d49-bbf8-0ed815464394'
      },
      fcc: 'SWX-UPCME',
      jrf: ['020-220210'],
      line: { name: 'UniFi Protect', id: 'unifi-protect' },
      sysid: 'ab12',
      guids: ['d085c321-807b-4aa7-be9e-4ada10fa5b1b', '8d391a83-3158-4de5-8f9c-7346e35fbda5'],
      btle: {
        factoryDefault: 'd085c321-807b-4aa7-be9e-4ada10fa5b1b',
        userConfigured: '8d391a83-3158-4de5-8f9c-7346e35fbda5'
      },
      ic: '6545A-UPCME',
      id: 'a7d619f8-6c63-4b12-b8a0-2db2fad8e9d3',
      deviceType: 'chime',
      product: { abbrev: 'UP Chime', name: 'WiFi Chime' },
      shortnames: ['UP Chime', 'UP-Chime'],
      triplets: [{ k1: 'UP Chime' }]
    },
    {
      sysids: ['ab14'],
      unifi: { adoptability: 'adoptable' },
      icon: {
        resolutions: [
          [25, 25],
          [32, 32],
          [51, 51],
          [64, 64],
          [101, 101],
          [128, 128],
          [129, 129],
          [256, 256],
          [257, 257],
          [512, 512],
          [1000, 1000]
        ],
        id: '981fdbe8-c83a-4490-bc6d-c67fb292ffac'
      },
      line: { name: 'UniFi Protect', id: 'unifi-protect' },
      sysid: 'ab14',
      guids: ['caf4395d-53d6-4a67-93fb-69c7dd879c93'],
      id: '20c4be2f-8b47-4484-868c-b14f50eb04d3',
      deviceType: 'chime',
      product: { abbrev: 'UP Chime PoE', name: 'Chime PoE' },
      shortnames: ['UP Chime PoE', 'UP-Chime-PoE'],
      triplets: [{ k2: 'UP-Chime-PoE', k1: 'UP-Chime-PoE' }, { k1: 'UP Chime PoE' }]
    },
    {
      sysids: ['a941', 'a911'],
      unifi: { adoptability: 'adoptable' },
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '76e72c53-6f9f-435a-bdbd-8b3d4898babd'
      },
      line: { name: 'UniFi Protect', id: 'unifi-protect' },
      sysid: 'a941',
      guids: ['086c4441-b0e1-4f4f-a31d-138f58174fe6', '1e98e827-dafa-426d-8f25-bfc0ed9b24a7'],
      btle: {
        factoryDefault: '086c4441-b0e1-4f4f-a31d-138f58174fe6',
        userConfigured: '1e98e827-dafa-426d-8f25-bfc0ed9b24a7'
      },
      id: 'f9405710-d23e-4a35-8207-f9007a586cfe',
      deviceType: 'doorlock',
      product: { abbrev: 'UP Door Lock', name: 'Protect Door Lock' },
      shortnames: ['UFP-LOCK-R', 'UFP-Lock', 'UP-DoorLock', 'UniFi Protect Lock'],
      triplets: []
    },
    {
      sysids: [],
      unifi: { adoptability: 'adoptable' },
      icon: {
        resolutions: [
          [25, 25],
          [32, 32],
          [51, 51],
          [64, 64],
          [101, 101],
          [128, 128],
          [129, 129],
          [256, 256],
          [257, 257],
          [512, 512],
          [1000, 1000]
        ],
        id: '55127946-fa55-432b-8241-fdb764ecad64'
      },
      fcc: 'SWX-UFPSFL',
      line: { name: 'UniFi Protect', id: 'unifi-protect' },
      guids: [],
      ic: '6545A-UFPSFL',
      id: '2661e603-6e20-479d-982d-6cb3dcd159cd',
      deviceType: 'light',
      product: { abbrev: 'UP Flood Light', name: 'Protect Flood Light' },
      shortnames: ['UFP-SFL', 'UP FloodLight'],
      triplets: [{ k2: 'UniFi-Protect-Smart-FloodLight', k1: 'UP FloodLight' }]
    },
    {
      sysids: ['a912'],
      unifi: { adoptability: 'adoptable' },
      icon: {
        resolutions: [
          [25, 25],
          [32, 32],
          [51, 51],
          [64, 64],
          [101, 101],
          [128, 128],
          [129, 129],
          [256, 256],
          [257, 257],
          [512, 512],
          [1000, 1000]
        ],
        id: 'eb86e8c0-f32a-4c06-825d-87c6c8cf68fb'
      },
      jrf: ['020-220248'],
      line: { name: 'UniFi Protect', id: 'unifi-protect' },
      sysid: 'a912',
      guids: ['d3331f5c-b661-4790-8257-0583af660553', '4be1d028-966d-4e40-9074-c783889e908c'],
      btle: {
        factoryDefault: 'd3331f5c-b661-4790-8257-0583af660553',
        userConfigured: '4be1d028-966d-4e40-9074-c783889e908c'
      },
      id: '67a5915a-57f6-4765-b289-8c81853cbb59',
      deviceType: 'sensor',
      product: { abbrev: 'UP Sense', name: 'Protect Sensor' },
      shortnames: ['UFP-SENSE', 'UP-SENSE'],
      triplets: []
    },
    {
      sysids: [],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: 'c7ab0f7f-3408-4dc0-b528-d2585eaf3ba4'
      },
      line: { name: 'UniFi', id: 'unifi-network' },
      guids: [],
      id: 'e377dbcb-7da8-4c2c-b0bf-ee42be72665a',
      product: { abbrev: 'US 16', name: 'Switch 16' },
      shortnames: ['UniFi Switch 16'],
      triplets: []
    },
    {
      sysids: ['eb21'],
      unifi: {
        adoptability: 'adoptable',
        network: {
          radios: {},
          numberOfPorts: 18,
          ethernetMaxSpeedMegabitsPerSecond: 1000,
          systemIdHexadecimal: 'eb22',
          features: { fan: 'simple', poe: true },
          power: { capacity: 150 },
          ports: { standard: 16, sfp: [17, 18] },
          chipset: 'g',
          type: 'usw',
          minimumFirmwareRequired: '4.0.6',
          deviceCapabilities: ['SWITCH', 'HAS_TEMPERATURE_SENSOR', 'HAS_CLIENTS']
        }
      },
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '5692a190-8cd8-48ac-9997-68c34eee8626'
      },
      fcc: 'Compliant',
      line: { name: 'UniFi', id: 'unifi-network' },
      sysid: 'eb21',
      guids: [],
      ic: 'Compliant',
      id: '34cb6371-02d6-461f-a318-0e6568528aee',
      product: { abbrev: 'US 16 PoE 150W', name: 'Switch 16 PoE 150W' },
      shortnames: ['S216150', 'US16P150'],
      triplets: [
        { k3: 'S216150', k1: 'S216150' },
        { k3: 'US16P150', k1: 'US16P150' }
      ]
    },
    {
      sysids: ['eb20'],
      unifi: {
        adoptability: 'adoptable',
        network: {
          radios: {},
          diagram: ['01 03 05 07 09 11 __ __ __ __ __', '02 04 06 08 10 12 __ 13 14 15 16'],
          numberOfPorts: 16,
          ethernetMaxSpeedMegabitsPerSecond: 1000,
          systemIdHexadecimal: 'eb20',
          ports: { standard: '13-16', plus: '1-12' },
          chipset: 'g',
          type: 'usw',
          minimumFirmwareRequired: '4.0.6',
          deviceCapabilities: ['SWITCH', 'HAS_TEMPERATURE_SENSOR', 'HAS_CLIENTS']
        }
      },
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: 'e24ac7d3-ee09-4c3a-a910-b7e824b0f726'
      },
      fcc: 'Compliant',
      line: { name: 'UniFi', id: 'unifi-network' },
      sysid: 'eb20',
      guids: [],
      ic: 'Compliant',
      id: 'c0563b69-fcc4-47c7-be11-4dbc676ec9c6',
      product: { abbrev: 'US XG 16', name: 'Switch XG 16' },
      shortnames: ['USXG'],
      triplets: [
        { k2: 'US-16-XG', k1: 'USXG' },
        { k3: 'USXG', k1: 'USXG' }
      ]
    },
    {
      sysids: ['eb30'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: 'dbfd547d-189c-4994-ac4f-93a7c5e4a350'
      },
      line: { name: 'UniFi', id: 'unifi-network' },
      sysid: 'eb30',
      guids: [],
      id: '593fd9d0-4526-4256-8f89-722fcae129a7',
      product: { abbrev: 'US 24', name: 'Switch 24' },
      shortnames: ['UniFi Switch 24'],
      triplets: []
    },
    {
      sysids: ['eb31'],
      unifi: {
        adoptability: 'adoptable',
        network: {
          radios: {},
          numberOfPorts: 26,
          ethernetMaxSpeedMegabitsPerSecond: 1000,
          systemIdHexadecimal: 'eb34',
          features: { fan: 'alwayson', poe: true },
          power: { capacity: 250 },
          ports: { standard: 24, sfp: [25, 26] },
          chipset: 'g',
          type: 'usw',
          minimumFirmwareRequired: '4.0.6',
          deviceCapabilities: ['SWITCH', 'HAS_TEMPERATURE_SENSOR', 'HAS_CLIENTS']
        }
      },
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '2cbe5288-cb21-49b6-a7c0-25c0be456b78'
      },
      fcc: 'Compliant',
      line: { name: 'UniFi', id: 'unifi-network' },
      sysid: 'eb31',
      guids: [],
      ic: 'Compliant',
      id: 'fc91bf40-ed01-4f12-bfe6-d9c5f86f7504',
      product: { abbrev: 'US 24 PoE 250W', name: 'Switch 24 PoE 250W' },
      shortnames: ['S224250', 'US24P250', 'UniFi Switch AT 24 250W'],
      triplets: [
        { k3: 'S224250', k1: 'S224250' },
        { k3: 'US24P250' },
        { k3: 'US24P250', k1: 'US24P250' }
      ]
    },
    {
      sysids: ['eb32'],
      unifi: {
        adoptability: 'adoptable',
        network: {
          radios: {},
          numberOfPorts: 26,
          ethernetMaxSpeedMegabitsPerSecond: 1000,
          systemIdHexadecimal: 'eb35',
          features: { fan: 'alwayson', poe: true },
          power: { capacity: 500 },
          ports: { standard: 24, sfp: [25, 26] },
          chipset: 'g',
          type: 'usw',
          minimumFirmwareRequired: '4.0.6',
          deviceCapabilities: ['SWITCH', 'HAS_TEMPERATURE_SENSOR', 'HAS_CLIENTS']
        }
      },
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '2c82b548-2497-4ef2-94f9-85cd96889a37'
      },
      fcc: 'Compliant',
      line: { name: 'UniFi', id: 'unifi-network' },
      sysid: 'eb32',
      guids: [],
      ic: 'Compliant',
      id: 'a789749d-91a1-45ae-a0f9-1d79d3127947',
      product: { abbrev: 'US 24 PoE 500W', name: 'Switch 24 PoE 500W' },
      shortnames: ['S224500', 'US24P500'],
      triplets: [{ k3: 'US24P500', k1: 'US24P500' }]
    },
    {
      sysids: ['eb30'],
      unifi: {
        adoptability: 'adoptable',
        network: {
          radios: {},
          numberOfPorts: 26,
          ethernetMaxSpeedMegabitsPerSecond: 1000,
          systemIdHexadecimal: 'eb30',
          features: { fan: 'simple' },
          ports: { standard: 24, sfp: [25, 26] },
          chipset: 'g',
          type: 'usw',
          minimumFirmwareRequired: '4.0.6',
          deviceCapabilities: ['SWITCH', 'HAS_TEMPERATURE_SENSOR', 'HAS_CLIENTS']
        }
      },
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '607245ea-5b62-4e85-87c5-c5b4f453a265'
      },
      fcc: 'Compliant',
      line: { name: 'UniFi', id: 'unifi-network' },
      sysid: 'eb30',
      guids: [],
      ic: 'Compliant',
      id: 'b4a5f4be-f2f4-4246-be40-b797988bcc53',
      product: { abbrev: 'US 24', name: 'Switch 24' },
      shortnames: ['US24'],
      triplets: [{ k3: 'US24', k1: 'US24' }]
    },
    {
      sysids: [],
      unifi: {
        adoptability: 'adoptable',
        network: {
          radios: {},
          diagram: [
            '01 02 03 04 05 06 07 08 09 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 __ 25 26'
          ],
          numberOfPorts: 26,
          ethernetMaxSpeedMegabitsPerSecond: 1000,
          systemIdHexadecimal: 'eb29',
          ports: { standard: '1-24', plus: '25-26' },
          chipset: 'g',
          type: 'usw',
          minimumFirmwareRequired: '4.0.6',
          deviceCapabilities: ['SWITCH', 'HAS_CLIENTS']
        }
      },
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '1a3a766b-69db-4276-a499-7a3d44794e23'
      },
      fcc: 'Compliant',
      line: { name: 'UniFi', id: 'unifi-network' },
      guids: [],
      ic: 'Compliant',
      id: '4f36b078-8707-4006-a505-48d5d1ebbe0b',
      product: { abbrev: 'US Ent XG 24', name: 'Switch Enterprise XG 24' },
      shortnames: ['US-24-XG', 'USXG24', 'UniFi Enterprise Switch XG 24'],
      triplets: [{ k3: 'USXG24', k1: 'USXG24' }]
    },
    {
      sysids: ['eb60'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '503a0835-6976-4dcb-9503-1093a032c4ce'
      },
      line: { name: 'UniFi', id: 'unifi-network' },
      sysid: 'eb60',
      guids: [],
      id: 'cecf1549-d2d0-4b89-bea9-8034d6f182fa',
      product: { abbrev: 'US 48', name: 'Switch 48' },
      shortnames: ['UniFi Switch 48'],
      triplets: []
    },
    {
      sysids: ['eb62'],
      unifi: {
        adoptability: 'adoptable',
        network: {
          radios: {},
          numberOfPorts: 52,
          ethernetMaxSpeedMegabitsPerSecond: 1000,
          systemIdHexadecimal: 'eb64',
          features: { fan: 'alwayson', poe: true },
          power: { capacity: 500 },
          ports: { standard: 48, plus: [49, 50], sfp: [51, 52] },
          chipset: 'g',
          type: 'usw',
          minimumFirmwareRequired: '4.0.6',
          deviceCapabilities: ['SWITCH', 'HAS_TEMPERATURE_SENSOR', 'HAS_CLIENTS']
        }
      },
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: 'aa2d54af-643f-450c-a704-73cb666d3513'
      },
      fcc: 'Compliant',
      line: { name: 'UniFi', id: 'unifi-network' },
      sysid: 'eb62',
      guids: [],
      ic: 'Compliant',
      id: '77d2e3c4-822a-4c8c-b896-7e69c5a5981e',
      product: { abbrev: 'US 48 PoE 500W', name: 'Switch 48 PoE 500W' },
      shortnames: ['S248500', 'US48P500', 'UniFi Switch 48 AT 500W'],
      triplets: [
        { k3: 'S248500', k1: 'S248500' },
        { k3: 'US48P500', k1: 'US48P500' }
      ]
    },
    {
      sysids: ['eb63'],
      unifi: {
        adoptability: 'adoptable',
        network: {
          radios: {},
          numberOfPorts: 52,
          ethernetMaxSpeedMegabitsPerSecond: 1000,
          systemIdHexadecimal: 'eb65',
          features: { fan: 'alwayson', poe: true },
          power: { capacity: 750 },
          ports: { standard: 48, plus: [49, 50], sfp: [51, 52] },
          chipset: 'g',
          type: 'usw',
          minimumFirmwareRequired: '4.0.6',
          deviceCapabilities: ['SWITCH', 'HAS_TEMPERATURE_SENSOR', 'HAS_CLIENTS']
        }
      },
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '97712082-0897-4dcf-bf89-18374034d6c6'
      },
      fcc: 'Compliant',
      line: { name: 'UniFi', id: 'unifi-network' },
      sysid: 'eb63',
      guids: [],
      ic: 'Compliant',
      id: 'b2046642-47a5-4044-a8b1-9d0cc5b51c55',
      product: { abbrev: 'US 48 PoE 750W', name: 'Switch 48 PoE 750W' },
      shortnames: ['S248750', 'US48P750', 'UniFi Switch 48 AT 750W'],
      triplets: [
        { k3: 'S248750', k1: 'S248750' },
        { k3: 'US48P750', k1: 'US48P750' }
      ]
    },
    {
      sysids: ['eb60'],
      unifi: {
        adoptability: 'adoptable',
        network: {
          radios: {},
          numberOfPorts: 52,
          ethernetMaxSpeedMegabitsPerSecond: 1000,
          systemIdHexadecimal: 'eb60',
          features: { fan: 'simple' },
          ports: { standard: 48, plus: [49, 50], sfp: [51, 52] },
          chipset: 'g',
          type: 'usw',
          minimumFirmwareRequired: '4.0.6',
          deviceCapabilities: ['SWITCH', 'HAS_TEMPERATURE_SENSOR', 'HAS_CLIENTS']
        }
      },
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '4998086b-78f8-4614-a783-e5946b33b58d'
      },
      fcc: 'Compliant',
      line: { name: 'UniFi', id: 'unifi-network' },
      sysid: 'eb60',
      guids: [],
      ic: 'Compliant',
      id: '123b7f0d-83eb-48c1-b8c4-8e7f90b2eb1a',
      product: { abbrev: 'US 48', name: 'Switch 48' },
      shortnames: ['US48'],
      triplets: [{ k3: 'US48', k1: 'US48' }]
    },
    {
      sysids: ['eb19'],
      unifi: {
        adoptability: 'adoptable',
        network: {
          radios: {},
          numberOfPorts: 8,
          ethernetMaxSpeedMegabitsPerSecond: 1000,
          systemIdHexadecimal: 'eb19',
          features: { poe: true },
          power: { capacity: 10 },
          ports: { standard: 8 },
          chipset: 'g',
          type: 'usw',
          minimumFirmwareRequired: '4.0.6',
          deviceCapabilities: ['SWITCH', 'HAS_CLIENTS']
        }
      },
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '76c7dbea-e685-47a4-aaa1-6a774e668cb9'
      },
      fcc: 'Compliant',
      line: { name: 'UniFi', id: 'unifi-network' },
      sysid: 'eb19',
      guids: [],
      ic: 'Compliant',
      id: 'c0741279-2498-4e18-ad71-0ef0ce947e2b',
      product: { abbrev: 'US 8', name: 'Switch 8' },
      shortnames: ['US-8', 'US8', 'USC8'],
      triplets: [
        { k3: 'US8', k1: 'US8' },
        { k3: 'USC8', k1: 'USC8' }
      ]
    },
    {
      sysids: ['eb10'],
      unifi: {
        adoptability: 'adoptable',
        network: {
          radios: {},
          numberOfPorts: 10,
          ethernetMaxSpeedMegabitsPerSecond: 1000,
          systemIdHexadecimal: 'eb11',
          features: { poe: true },
          power: { capacity: 150 },
          ports: { standard: 8, sfp: [9, 10] },
          chipset: 'g',
          type: 'usw',
          minimumFirmwareRequired: '4.0.6',
          deviceCapabilities: ['SWITCH', 'HAS_TEMPERATURE_SENSOR', 'HAS_CLIENTS']
        }
      },
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '8c1931af-758d-4bdc-9c90-cd7914a59333'
      },
      fcc: 'Compliant',
      line: { name: 'UniFi', id: 'unifi-network' },
      sysid: 'eb10',
      guids: [],
      ic: 'Compliant',
      id: 'b1b2fbb6-90fe-4cbb-90d7-cb8d8406c99f',
      product: { abbrev: 'US 8 PoE 150W', name: 'Switch 8 PoE 150W' },
      shortnames: ['S28150', 'US8P150', 'USC8P150'],
      triplets: [
        { k3: 'S28150', k1: 'S28150' },
        { k3: 'US8P150', k1: 'US8P150' }
      ]
    },
    {
      sysids: ['eb18'],
      unifi: {
        adoptability: 'adoptable',
        network: {
          radios: {},
          numberOfPorts: 8,
          ethernetMaxSpeedMegabitsPerSecond: 1000,
          systemIdHexadecimal: 'eb18',
          features: { poe: true },
          power: { capacity: 60 },
          ports: { standard: 8 },
          chipset: 'g',
          type: 'usw',
          minimumFirmwareRequired: '4.0.6',
          deviceCapabilities: ['SWITCH', 'HAS_CLIENTS']
        }
      },
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: 'a24ba258-e642-4082-b267-2cc8b49f29e3'
      },
      fcc: 'Compliant',
      line: { name: 'UniFi', id: 'unifi-network' },
      sysid: 'eb18',
      guids: [],
      ic: 'Compliant',
      id: '362d2d31-470f-4d63-8e06-9e9230adedb8',
      product: { abbrev: 'US 8 60W', name: 'Switch 8 60W' },
      shortnames: ['US8P60', 'USC8P60'],
      triplets: [{ k3: 'US8P60', k1: 'US8P60' }]
    },
    {
      sysids: [],
      unifi: {
        adoptability: 'adoptable',
        network: {
          radios: {},
          numberOfPorts: 26,
          ethernetMaxSpeedMegabitsPerSecond: 1000,
          systemIdHexadecimal: 'eb33',
          features: { fan: 'alwayson', poe: true },
          ports: { standard: 24, sfp: [25, 26] },
          chipset: 'g',
          type: 'usw',
          minimumFirmwareRequired: '4.0.6',
          deviceCapabilities: ['SWITCH', 'HAS_TEMPERATURE_SENSOR', 'HAS_CLIENTS']
        }
      },
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '7cc330a5-fc73-4af2-9b85-63fb1aaca62f'
      },
      fcc: 'Compliant',
      line: { name: 'UniFi', id: 'unifi-network' },
      guids: [],
      ic: 'Compliant',
      id: '9b793384-296d-413d-9d55-bf59a76147bb',
      product: { abbrev: 'US L2 24 PoE', name: 'Switch L2 24 PoE' },
      shortnames: ['US-L2-24-PoE', 'US24PL2'],
      triplets: [
        { k2: 'US-L2-24-PoE', k1: 'US24PL2' },
        { k3: 'US24PL2', k1: 'US24PL2' }
      ]
    },
    {
      sysids: [],
      unifi: {
        adoptability: 'adoptable',
        network: {
          radios: {},
          numberOfPorts: 52,
          ethernetMaxSpeedMegabitsPerSecond: 1000,
          systemIdHexadecimal: 'eb66',
          features: { fan: 'alwayson', poe: true },
          ports: { standard: 48, plus: [49, 50], sfp: [51, 52] },
          chipset: 'g',
          type: 'usw',
          minimumFirmwareRequired: '4.0.6',
          deviceCapabilities: ['SWITCH', 'HAS_TEMPERATURE_SENSOR', 'HAS_CLIENTS']
        }
      },
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '9a68edd9-6044-4837-b2de-f0152f1318d3'
      },
      fcc: 'Compliant',
      line: { name: 'UniFi', id: 'unifi-network' },
      guids: [],
      ic: 'Compliant',
      id: '1e69003c-37b5-401d-95a2-95f79ae4a248',
      product: { abbrev: 'US L2 48 PoE', name: 'Switch L2 48 PoE' },
      shortnames: ['US-L2-48-PoE', 'US48PL2'],
      triplets: [
        { k2: 'US-L2-48-PoE', k1: 'US48PL2' },
        { k3: 'US48PL2', k1: 'US48PL2' }
      ]
    },
    {
      sysids: ['eb23'],
      unifi: {
        adoptability: 'adoptable',
        network: {
          radios: {},
          diagram: ['01 02 03 04 __ 05 06'],
          numberOfPorts: 6,
          ethernetMaxSpeedMegabitsPerSecond: 1000,
          systemIdHexadecimal: 'eb23',
          features: { poe: true },
          ports: { standard: '1-4', plus: '5-6' },
          chipset: 'g',
          type: 'usw',
          minimumFirmwareRequired: '4.0.6',
          deviceCapabilities: ['SWITCH', 'HAS_TEMPERATURE_SENSOR', 'HAS_CLIENTS']
        }
      },
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '307961a5-cf3e-4845-8dec-a44ad9fba4de'
      },
      fcc: 'Compliant',
      line: { name: 'UniFi', id: 'unifi-network' },
      sysid: 'eb23',
      guids: [],
      ic: 'Compliant',
      id: '3c396908-57d8-4f48-b34b-81ec0ed33dff',
      product: { abbrev: 'US XG 6 PoE', name: 'Switch XG 6 PoE' },
      shortnames: ['US-XG-6PoE', 'US6XG150'],
      triplets: [
        { k2: 'US-XG-6PoE', k1: 'US6XG150' },
        { k3: 'US6XG150', k1: 'US6XG150' }
      ]
    },
    {
      sysids: ['ee21'],
      unifi: {
        adoptability: 'adoptable',
        network: {
          radios: {},
          diagram: ['01 02 03 04'],
          ports: { eth1: '1', eth0: '0', eth3: '3', eth2: '2' },
          type: 'ugw',
          deviceCapabilities: ['GATEWAY', null]
        }
      },
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '2c01c37d-e1ce-416e-bf8f-36f43dba11ce'
      },
      jpa: ['D 20-0094001'],
      line: { name: 'UniFi', id: 'unifi-network' },
      sysid: 'ee21',
      guids: [],
      id: 'f3c83eb7-1972-4b08-8e7d-9652ece3fd52',
      product: { abbrev: 'USG', name: 'Security Gateway' },
      shortnames: ['UGWHD4'],
      triplets: []
    },
    {
      sysids: [],
      unifi: {
        adoptability: 'adoptable',
        network: {
          radios: {},
          diagram: ['01 02 03'],
          numberOfPorts: 3,
          ethernetMaxSpeedMegabitsPerSecond: 1000,
          systemIdHexadecimal: 'ee21',
          features: { legacyPortRemap: true },
          details: { legacyPortRemap: true, ipsThroughput: '85 Mbps' },
          ports: { eth1: 'LAN', eth0: 'WAN', eth2: 'WAN2/LAN2' },
          networkGroups: { eth1: 'LAN', eth0: 'WAN', eth2: 'WAN2/LAN2' },
          chipset: 'i',
          type: 'ugw',
          linkNegotiation: {
            eth1: {
              supportedValues: ['autoneg', '100 FDX', '100 HDX', '10 FDX', '10 HDX'],
              portIdx: 2
            },
            eth0: {
              supportedValues: ['autoneg', '100 FDX', '100 HDX', '10 FDX', '10 HDX'],
              portIdx: 1
            },
            eth2: {
              supportedValues: ['autoneg', '100 FDX', '100 HDX', '10 FDX', '10 HDX'],
              portIdx: 3
            }
          },
          minimumFirmwareRequired: '4.4.34',
          deviceCapabilities: ['GATEWAY', 'HAS_CLIENTS']
        }
      },
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '2c01c37d-e1ce-416e-bf8f-36f43dba11ce'
      },
      fcc: 'Compliant',
      line: { name: 'UniFi', id: 'unifi-network' },
      guids: [],
      ic: 'Compliant',
      id: 'aca62980-de77-42e3-abf4-19b8e3cabcf7',
      product: { abbrev: 'USG 3P', name: 'Security Gateway 3P' },
      shortnames: ['UGW3'],
      triplets: [{ k3: 'UGW3', k1: 'UGW3' }, { k1: 'UGW3' }]
    },
    {
      sysids: ['ee32'],
      unifi: {
        adoptability: 'adoptable',
        network: {
          radios: {},
          diagram: ['01 02 03 04'],
          numberOfPorts: 4,
          temperatureSensors: [
            { maxTemp: 105, sensor: 'PHY' },
            { maxTemp: 100, sensor: 'CPU' },
            { sensor: 'Board (PHY)' },
            { sensor: 'Board (CPU)' }
          ],
          ethernetMaxSpeedMegabitsPerSecond: 1000,
          systemIdHexadecimal: 'ee32',
          details: { ipsThroughput: '250 Mbps' },
          ports: { eth1: 'LAN2', eth0: 'LAN', eth3: 'WAN2', eth2: 'WAN' },
          networkGroups: { eth1: 'LAN2', eth0: 'LAN', eth3: 'WAN2', eth2: 'WAN' },
          chipset: 'i',
          type: 'ugw',
          linkNegotiation: {
            eth1: {
              supportedValues: ['autoneg', '100 FDX', '100 HDX', '10 FDX', '10 HDX'],
              portIdx: 2
            },
            eth0: {
              supportedValues: ['autoneg', '100 FDX', '100 HDX', '10 FDX', '10 HDX'],
              portIdx: 1
            },
            eth3: {
              supportedValues: ['autoneg', '100 FDX', '100 HDX', '10 FDX', '10 HDX'],
              portIdx: 4
            },
            eth2: {
              supportedValues: ['autoneg', '100 FDX', '100 HDX', '10 FDX', '10 HDX'],
              portIdx: 3
            }
          },
          minimumFirmwareRequired: '4.4.34',
          deviceCapabilities: ['GATEWAY', 'HAS_CLIENTS']
        }
      },
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '90deb2d1-7409-45b0-b640-8802ea75dcac'
      },
      fcc: 'Compliant',
      line: { name: 'UniFi', id: 'unifi-network' },
      sysid: 'ee32',
      guids: [],
      ic: 'Compliant',
      id: 'f5e4600c-e9fd-4261-b998-b4867beeb29f',
      product: { abbrev: 'USG Pro', name: 'Security Gateway Professional' },
      shortnames: ['UGW4', 'USG PRO 4'],
      triplets: [{ k1: 'UGW4' }, { k3: 'UGW4', k1: 'UGW4' }]
    },
    {
      sysids: [],
      unifi: {
        adoptability: 'adoptable',
        network: {
          radios: {},
          bleServices: [
            {
              configured: '8e760c3c-6b5d-11e8-adc0-fa7ae01bbebc',
              default: '60dbfe9e-6b5d-11e8-adc0-fa7ae01bbebc'
            }
          ],
          diagram: ['02 04 06 08 __', '03 05 07 09 01'],
          numberOfPorts: 9,
          temperatureSensors: [
            { sensor: 'Board 1' },
            { sensor: 'Board 2' },
            { maxTemp: 95, sensor: 'CPU' },
            { maxTemp: 100, sensor: 'PHY 1' },
            { maxTemp: 100, sensor: 'PHY 2' }
          ],
          ethernetMaxSpeedMegabitsPerSecond: 1000,
          systemIdHexadecimal: 'ee33',
          features: { sfpPlusSupported: true },
          details: { ipsThroughput: '1 Gbps' },
          ports: {
            eth6: '6',
            eth1: '1',
            eth0: '0',
            eth5: '5',
            eth3: '3',
            eth4: '4',
            eth2: '2',
            eth7: '7',
            eth8: '8'
          },
          networkGroups: {
            eth6: 'LAN6',
            eth1: 'LAN',
            eth0: 'WAN2',
            eth5: 'LAN5',
            eth3: 'LAN3',
            eth4: 'LAN4',
            eth2: 'LAN2',
            eth7: 'LAN7',
            eth8: 'WAN'
          },
          chipset: 'i',
          type: 'ugw',
          linkNegotiation: {
            eth6: { bindWith: 'eth5' },
            eth1: { supportedValues: ['autoneg', '10000 FDX', '1000 FDX'], portIdx: 2 },
            eth0: {
              supportedValues: ['autoneg', '100 FDX', '100 HDX', '10 FDX', '10 HDX'],
              portIdx: 1
            },
            eth5: { supportedValues: ['autoneg', '10000 FDX', '1000 FDX'], portIdx: 6 },
            eth3: { bindWith: 'eth1' },
            eth4: { bindWith: 'eth1' },
            eth2: { bindWith: 'eth1' },
            eth7: { bindWith: 'eth5' },
            eth8: { bindWith: 'eth5' }
          },
          minimumFirmwareRequired: '4.4.34',
          deviceCapabilities: ['GATEWAY', 'HAS_CLIENTS']
        }
      },
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '3d869d6b-c11e-4653-802a-a4204637eb13'
      },
      fcc: 'Compliant',
      line: { name: 'UniFi', id: 'unifi-network' },
      guids: ['60dbfe9e-6b5d-11e8-adc0-fa7ae01bbebc', '8e760c3c-6b5d-11e8-adc0-fa7ae01bbebc'],
      btle: {
        factoryDefault: '60dbfe9e-6b5d-11e8-adc0-fa7ae01bbebc',
        userConfigured: '8e760c3c-6b5d-11e8-adc0-fa7ae01bbebc'
      },
      ic: 'Compliant',
      id: '43973cc0-7687-4bee-a33d-5af315ca9c0b',
      product: { abbrev: 'USG XG 8', name: 'Security Gateway XG 8' },
      shortnames: ['UGWXG'],
      triplets: [{ k3: 'UGWXG', k1: 'UGWXG' }]
    },
    {
      sysids: [],
      unifi: {
        adoptability: 'adoptable',
        network: {
          radios: {},
          numberOfPorts: 16,
          ethernetMaxSpeedMegabitsPerSecond: 1000,
          systemIdHexadecimal: 'ed54',
          features: { poe: true },
          ports: { standard: 16 },
          chipset: 'l',
          type: 'usw',
          minimumFirmwareRequired: '4.0.6',
          deviceCapabilities: ['SWITCH', 'HAS_CLIENTS']
        }
      },
      icon: {
        resolutions: [
          [25, 25],
          [32, 32],
          [51, 51],
          [64, 64],
          [101, 101],
          [128, 128],
          [129, 129],
          [256, 256],
          [257, 257],
          [512, 512],
          [1000, 1000]
        ],
        id: 'ea06a05c-0434-4dc1-b423-cff51ff5a017'
      },
      line: { name: 'UniFi', id: 'unifi-network' },
      guids: [],
      id: '33606a89-370f-4930-b7b5-05376950f90b',
      product: { abbrev: 'USW Lite 16 PoE', name: 'Switch Lite 16 PoE' },
      shortnames: ['USL16LPB'],
      triplets: [{ k3: 'USL16LPB', k1: 'USL16LPB' }]
    },
    {
      sysids: [],
      unifi: {
        adoptability: 'adoptable',
        network: {
          radios: {},
          numberOfPorts: 18,
          ethernetMaxSpeedMegabitsPerSecond: 1000,
          systemIdHexadecimal: 'ed2e',
          features: { poe: true },
          ports: { standard: 16, sfp: [17, 18] },
          chipset: 'l',
          type: 'usw',
          minimumFirmwareRequired: '4.0.6',
          deviceCapabilities: ['SWITCH', 'HAS_CLIENTS']
        }
      },
      icon: {
        resolutions: [
          [25, 25],
          [32, 32],
          [51, 51],
          [64, 64],
          [101, 101],
          [128, 128],
          [129, 129],
          [256, 256],
          [257, 257],
          [512, 512],
          [1000, 1000]
        ],
        id: 'c70814d7-8070-4237-8a9a-353f2f32484e'
      },
      line: { name: 'UniFi', id: 'unifi-network' },
      guids: [],
      id: '04b22422-15d0-4288-9c47-1cfe232af98e',
      product: { abbrev: 'USW 16 PoE', name: 'Switch 16 PoE' },
      shortnames: ['USL16PB'],
      triplets: [{ k3: 'USL16PB', k1: 'USL16PB' }]
    },
    {
      sysids: [],
      unifi: {
        adoptability: 'adoptable',
        network: {
          radios: {},
          numberOfPorts: 26,
          ethernetMaxSpeedMegabitsPerSecond: 1000,
          systemIdHexadecimal: 'ed51',
          ports: { standard: 24, sfp: [25, 26] },
          chipset: 'l',
          type: 'usw',
          minimumFirmwareRequired: '4.0.6',
          deviceCapabilities: ['SWITCH', 'HAS_CLIENTS']
        }
      },
      icon: {
        resolutions: [
          [25, 25],
          [32, 32],
          [51, 51],
          [64, 64],
          [101, 101],
          [128, 128],
          [129, 129],
          [256, 256],
          [257, 257],
          [512, 512],
          [1000, 1000]
        ],
        id: 'de10c0fe-f20e-43b7-9cb2-6c7e988aa0e2'
      },
      line: { name: 'UniFi', id: 'unifi-network' },
      guids: [],
      id: '2444596d-37ea-4399-88b6-500464bcb987',
      product: { abbrev: 'USW 24', name: 'Switch 24' },
      shortnames: ['USL24B'],
      triplets: [{ k3: 'USL24B', k1: 'USL24B' }]
    },
    {
      sysids: [],
      unifi: {
        adoptability: 'adoptable',
        network: {
          radios: {},
          numberOfPorts: 26,
          ethernetMaxSpeedMegabitsPerSecond: 1000,
          systemIdHexadecimal: 'ed50',
          features: { poe: true },
          ports: { standard: 24, sfp: [25, 26] },
          chipset: 'l',
          type: 'usw',
          minimumFirmwareRequired: '4.0.6',
          deviceCapabilities: ['SWITCH', 'HAS_CLIENTS']
        }
      },
      icon: {
        resolutions: [
          [25, 25],
          [32, 32],
          [51, 51],
          [64, 64],
          [101, 101],
          [128, 128],
          [129, 129],
          [256, 256],
          [257, 257],
          [512, 512],
          [1000, 1000]
        ],
        id: '45ab1100-1a8a-4b7d-990d-444bbe7deac5'
      },
      line: { name: 'UniFi', id: 'unifi-network' },
      guids: [],
      id: '981eeb6e-08dd-4fe2-916b-7b0cdd8583c0',
      product: { abbrev: 'USW 24 PoE', name: 'Switch 24 PoE' },
      shortnames: ['USL24PB'],
      triplets: [{ k3: 'USL24PB', k1: 'USL24PB' }]
    },
    {
      sysids: [],
      unifi: {
        adoptability: 'adoptable',
        network: {
          radios: {},
          numberOfPorts: 52,
          ethernetMaxSpeedMegabitsPerSecond: 1000,
          systemIdHexadecimal: 'ed53',
          ports: { standard: 48, sfp: [49, 50, 51, 52] },
          chipset: 'l',
          type: 'usw',
          minimumFirmwareRequired: '4.0.6',
          deviceCapabilities: ['SWITCH', 'HAS_CLIENTS']
        }
      },
      icon: {
        resolutions: [
          [25, 25],
          [32, 32],
          [51, 51],
          [64, 64],
          [101, 101],
          [128, 128],
          [129, 129],
          [256, 256],
          [257, 257],
          [512, 512],
          [1000, 1000]
        ],
        id: 'cbad0f50-58c8-45a6-b58c-72fdb4d18ac4'
      },
      line: { name: 'UniFi', id: 'unifi-network' },
      guids: [],
      id: '304ff3f6-a5c0-46ba-be07-aaf9a537dee1',
      product: { abbrev: 'USW 48', name: 'Switch 48' },
      shortnames: ['USL48B'],
      triplets: [{ k3: 'USL48B', k1: 'USL48B' }]
    },
    {
      sysids: [],
      unifi: {
        adoptability: 'adoptable',
        network: {
          radios: {},
          numberOfPorts: 52,
          ethernetMaxSpeedMegabitsPerSecond: 1000,
          systemIdHexadecimal: 'ed52',
          features: { poe: true },
          ports: { standard: 48, sfp: [49, 50, 51, 52] },
          chipset: 'l',
          type: 'usw',
          minimumFirmwareRequired: '4.0.6',
          deviceCapabilities: ['SWITCH', 'HAS_CLIENTS']
        }
      },
      icon: {
        resolutions: [
          [25, 25],
          [32, 32],
          [51, 51],
          [64, 64],
          [101, 101],
          [128, 128],
          [129, 129],
          [256, 256],
          [257, 257],
          [512, 512],
          [1000, 1000]
        ],
        id: '896e056e-41cd-4484-88d5-9b34621d4c32'
      },
      line: { name: 'UniFi', id: 'unifi-network' },
      guids: [],
      id: '51bc007d-c9a0-48d2-87a9-9f36336cc023',
      product: { abbrev: 'USW 48 PoE', name: 'Switch 48 PoE' },
      shortnames: ['USL48PB'],
      triplets: [{ k3: 'USL48PB', k1: 'USL48PB' }]
    },
    {
      sysids: [],
      unifi: {
        adoptability: 'adoptable',
        network: {
          radios: {},
          numberOfPorts: 8,
          ethernetMaxSpeedMegabitsPerSecond: 1000,
          systemIdHexadecimal: 'ed55',
          features: { poe: true },
          ports: { standard: 8 },
          chipset: 'l',
          type: 'usw',
          minimumFirmwareRequired: '4.0.6',
          deviceCapabilities: ['SWITCH', 'HAS_CLIENTS']
        }
      },
      icon: {
        resolutions: [
          [25, 25],
          [32, 32],
          [51, 51],
          [64, 64],
          [101, 101],
          [128, 128],
          [129, 129],
          [256, 256],
          [257, 257],
          [512, 512],
          [1000, 1000]
        ],
        id: '89ee387a-8871-4d62-9bcd-1f557ee1c97f'
      },
      line: { name: 'UniFi', id: 'unifi-network' },
      guids: [],
      id: '7a776f5a-b03b-4530-ad49-688f8c19342a',
      product: { abbrev: 'USW Lite 8 PoE', name: 'Switch Lite 8 PoE' },
      shortnames: ['USL8LPB'],
      triplets: [{ k3: 'USL8LPB', k1: 'USL8LPB' }]
    },
    {
      sysids: [],
      unifi: {
        adoptability: 'adoptable',
        network: {
          radios: {},
          numberOfPorts: 26,
          ethernetMaxSpeedMegabitsPerSecond: 1000,
          systemIdHexadecimal: 'ed56',
          features: { poe: true },
          ports: { standard: 24, plus: [25, 26] },
          chipset: 'l',
          type: 'usw',
          minimumFirmwareRequired: '4.0.6',
          deviceCapabilities: ['SWITCH', 'HAS_CLIENTS']
        }
      },
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '07cecefa-4be6-4a88-9a3c-8b2d910cd653'
      },
      line: { name: 'UniFi', id: 'unifi-network' },
      guids: [],
      id: 'ede11d7d-29a7-4fe2-9d68-19cd9564c635',
      product: { abbrev: 'USW Pro 24 PoE', name: 'Switch Pro 24 PoE' },
      shortnames: ['USLP24P'],
      triplets: [{ k3: 'USLP24P', k1: 'USLP24P' }]
    },
    {
      sysids: [],
      unifi: {
        adoptability: 'adoptable',
        network: {
          radios: {},
          features: { poe: true },
          ports: { standard: 48, plus: '49-52' },
          type: 'usw',
          deviceCapabilities: ['SWITCH', null]
        }
      },
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '848c6a6d-573e-48d4-8c10-e011da91a2db'
      },
      line: { name: 'UniFi', id: 'unifi-network' },
      guids: [],
      id: '9639c5fb-c916-4094-bec9-25835a9974b5',
      product: { abbrev: 'USW Pro 48 PoE', name: 'Switch Pro 48 PoE' },
      shortnames: ['USLP48P'],
      triplets: [{ k3: 'USLP48P', k1: 'USLP48P' }]
    },
    {
      sysids: [],
      unifi: {
        adoptability: 'adoptable',
        network: {
          radios: {},
          features: { poe: true },
          ports: { standard: 8, plus: [9, 10] },
          type: 'usw',
          deviceCapabilities: ['SWITCH', null]
        }
      },
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '288a0546-25b7-4090-a27c-f53bfd0b3b3b'
      },
      line: { name: 'UniFi', id: 'unifi-network' },
      guids: ['31d47f9d-142d-45cf-9778-c1d480c46746'],
      id: 'b5a1a302-35fe-4605-92ef-6a4f66222097',
      product: { abbrev: 'USW Pro 8 PoE', name: 'Switch Pro 8 PoE' },
      shortnames: ['USLP8P'],
      triplets: [{ k1: 'USLP8P' }, { k3: 'USLP8P', k1: 'USLP8P' }]
    },
    {
      sysids: [],
      unifi: {
        adoptability: 'adoptable',
        network: {
          radios: {},
          numberOfPorts: 5,
          ethernetMaxSpeedMegabitsPerSecond: 1000,
          systemIdHexadecimal: 'ed31',
          ports: { standard: 5 },
          chipset: 'o',
          type: 'usw',
          minimumFirmwareRequired: '1.2.1',
          deviceCapabilities: ['SWITCH', 'HAS_LOW_RESOURCES', 'HAS_CLIENTS'],
          primaryPortGroupCount: 5
        }
      },
      icon: {
        resolutions: [
          [25, 25],
          [32, 32],
          [51, 51],
          [64, 64],
          [101, 101],
          [128, 128],
          [129, 129],
          [256, 256],
          [257, 257],
          [512, 512],
          [1000, 1000]
        ],
        id: '7a060fbb-8a8b-471c-9f57-da477ff3e04e'
      },
      line: { name: 'UniFi', id: 'unifi-network' },
      guids: [],
      id: 'e52b69d3-9477-4f57-a373-b8795550cf8f',
      product: { abbrev: 'USW Flex Mini', name: 'Switch Flex Mini' },
      shortnames: ['USMINI2'],
      triplets: []
    },
    {
      sysids: ['ed12'],
      unifi: {
        adoptability: 'adoptable',
        network: {
          radios: {},
          diagram: ['__', '1'],
          numberOfPorts: 1,
          ethernetMaxSpeedMegabitsPerSecond: 1000,
          systemIdHexadecimal: 'ed12',
          ports: { standard: 1 },
          outletsDiagram: ['01 03 __ 05 06 07 08 09 10 11 12 13 14 15 16', '02 04 __ 17 18 19 20'],
          chipset: 'c',
          outlets: { usb: '1-4', standard: '5-20' },
          type: 'usw',
          primaryOutletGroupCount: 32,
          minimumFirmwareRequired: '4.0.6',
          deviceCapabilities: ['SMART_POWER', 'SWITCH'],
          knownUnsupportedFeatures: ['SWITCH_CAP_DOT1X', 'SWITCH_CAP_STP', 'SWITCH_CAP_LLDP_MED'],
          primaryPortGroupCount: 32
        }
      },
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '17b0dc97-ef92-4ffa-a2e0-cbc927470783'
      },
      line: { name: 'UniFi', id: 'unifi-network' },
      sysid: 'ed12',
      guids: [],
      id: '79e1c24d-7fca-462a-b1d7-3abc78181c4f',
      product: { abbrev: 'USP PDU Pro', name: 'Power Distribution Professional' },
      shortnames: ['USP-PDU-Pro', 'USPPDUP'],
      triplets: [
        { k3: 'USPPDUP', k1: 'USPPDUP' },
        { k2: 'USP-PDU-Pro', k1: 'USPPDUP' },
        { k2: 'USP-Pro-PDU', k1: 'USPPDUP' }
      ]
    },
    {
      sysids: ['ee73'],
      unifi: {
        adoptability: 'adoptable',
        network: {
          radios: {
            na: { maxSpeedMegabitsPerSecond: 72 },
            ng: { maxSpeedMegabitsPerSecond: 72 }
          },
          numberOfPorts: 1,
          ethernetMaxSpeedMegabitsPerSecond: 1000,
          systemIdHexadecimal: 'ee73',
          outletsDiagram: ['01'],
          chipset: 'o',
          type: 'uap',
          primaryOutletGroupCount: 1,
          minimumFirmwareRequired: '1.1.0',
          deviceCapabilities: ['SMART_POWER', 'ACCESS_POINT', 'HAS_LOW_RESOURCES']
        }
      },
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '4d043035-2ad5-442a-a4e3-474db720dd6d'
      },
      line: { name: 'UniFi', id: 'unifi-network' },
      sysid: 'ee73',
      guids: [],
      id: '4aa601aa-4c2b-4e0c-886a-41ebf8c731f8',
      product: { abbrev: 'USP Plug', name: 'SmartPower Plug' },
      shortnames: ['UP1'],
      triplets: []
    },
    {
      sysids: ['ed11'],
      unifi: {
        adoptability: 'adoptable',
        network: {
          radios: {},
          numberOfPorts: 1,
          rps: { diagram: ['01 03 05', '02 04 06'], primaryPortGroupCount: 6 },
          ethernetMaxSpeedMegabitsPerSecond: 1000,
          systemIdHexadecimal: 'ed11',
          chipset: 'c',
          type: 'usw',
          minimumFirmwareRequired: '4.0.6',
          deviceCapabilities: ['REDUNDANT_POWER', 'SWITCH']
        }
      },
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '590a85a9-932a-43eb-b0ae-7be874005a7c'
      },
      line: { name: 'UniFi', id: 'unifi-network' },
      sysid: 'ed11',
      guids: [],
      id: '1d905584-35b7-4ad1-9e48-0c1c4822629d',
      product: { abbrev: 'USP RPS', name: 'Power Backup' },
      shortnames: ['USP-RPS', 'USPRPS'],
      triplets: [
        { k3: 'USPRPS', k1: 'USPRPS' },
        { k2: 'USP-RPS', k1: 'USPRPS' }
      ]
    },
    {
      sysids: ['ed13'],
      unifi: {
        adoptability: 'adoptable',
        network: {
          radios: {},
          diagram: ['1'],
          numberOfPorts: 1,
          rps: { diagram: ['01 05', '02 06', '03 07', '04 08'], primaryPortGroupCount: 8 },
          ethernetMaxSpeedMegabitsPerSecond: 1000,
          systemIdHexadecimal: 'ed13',
          features: { fan: 'simple' },
          ports: { standard: 1 },
          outletsDiagram: ['01'],
          chipset: 'c',
          outlets: { standard: 1 },
          type: 'usw',
          primaryOutletGroupCount: 1,
          minimumFirmwareRequired: '4.0.6',
          deviceCapabilities: ['REDUNDANT_POWER', 'SMART_POWER', 'SWITCH', 'EXTERNAL_BATTERY']
        }
      },
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: 'bfee7310-98ff-4c50-bae9-e409006fbc05'
      },
      line: { name: 'UniFi', id: 'unifi-network' },
      minAdoptVersion: { net: '7.0.23' },
      sysid: 'ed13',
      guids: ['8dcba984-8aa9-423c-8063-13fda5eb654e'],
      id: 'c1e64a8b-9524-47e7-aed8-ea235c16a46b',
      product: { abbrev: 'USP RSP Pro', name: 'Power Backup Professional' },
      shortnames: ['USP-RPS-Pro', 'USPRPSP'],
      triplets: [
        { k2: 'USP-RPS-Pro', k1: 'USPRPSP' },
        { k3: 'USPRPSP', k1: 'USPRPSP' }
      ]
    },
    {
      sysids: ['ee74'],
      unifi: {
        adoptability: 'adoptable',
        network: {
          radios: {
            na: { maxSpeedMegabitsPerSecond: 72 },
            ng: { maxSpeedMegabitsPerSecond: 72 }
          },
          numberOfPorts: 1,
          ethernetMaxSpeedMegabitsPerSecond: 1000,
          systemIdHexadecimal: 'ee74',
          outletsDiagram: ['01 03 05 07 07', '02 04 06 07 07'],
          chipset: 'o',
          outlets: { usb: [7], standard: 6 },
          type: 'uap',
          primaryOutletGroupCount: 7,
          minimumFirmwareRequired: '2.0.0',
          deviceCapabilities: ['SMART_POWER', 'ACCESS_POINT', 'HAS_LOW_RESOURCES']
        }
      },
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: 'd420b791-9ed3-4f97-b5d2-d8d9530be6fe'
      },
      line: { name: 'UniFi', id: 'unifi-network' },
      sysid: 'ee74',
      guids: [],
      id: 'fb410453-da92-403b-bbec-74f8ff0bf0b0',
      product: { abbrev: 'USP Strip', name: 'SmartPower Strip' },
      shortnames: ['UP6'],
      triplets: []
    },
    {
      sysids: ['ed2e'],
      unifi: {
        adoptability: 'adoptable',
        network: {
          radios: {},
          numberOfPorts: 18,
          ethernetMaxSpeedMegabitsPerSecond: 1000,
          systemIdHexadecimal: 'ed20',
          features: { poe: true },
          ports: { standard: 16, sfp: [17, 18] },
          chipset: 'l',
          type: 'usw',
          minimumFirmwareRequired: '4.0.6',
          deviceCapabilities: ['SWITCH', 'HAS_CLIENTS']
        }
      },
      icon: {
        resolutions: [
          [25, 25],
          [32, 32],
          [51, 51],
          [64, 64],
          [101, 101],
          [128, 128],
          [129, 129],
          [256, 256],
          [257, 257],
          [512, 512],
          [1000, 1000]
        ],
        id: 'c70814d7-8070-4237-8a9a-353f2f32484e'
      },
      fcc: 'Compliant',
      line: { name: 'UniFi', id: 'unifi-network' },
      sysid: 'ed2e',
      guids: [],
      ic: 'Compliant',
      id: 'd953ec3e-765c-469b-a229-88b676e6155a',
      product: { abbrev: 'USW 16 PoE', name: 'Switch 16 PoE' },
      shortnames: ['USL16P', 'USW-16-PoE'],
      triplets: [
        { k2: 'USW-16-PoE', k1: 'USL16P' },
        { k3: 'USL16P', k1: 'USL16P' }
      ]
    },
    {
      sysids: ['ed51'],
      unifi: {
        adoptability: 'adoptable',
        network: {
          radios: {},
          numberOfPorts: 26,
          ethernetMaxSpeedMegabitsPerSecond: 1000,
          systemIdHexadecimal: 'ed23',
          ports: { standard: 24, sfp: [25, 26] },
          chipset: 'l',
          type: 'usw',
          minimumFirmwareRequired: '4.0.6',
          deviceCapabilities: ['SWITCH', 'HAS_CLIENTS']
        }
      },
      icon: {
        resolutions: [
          [25, 25],
          [32, 32],
          [51, 51],
          [64, 64],
          [101, 101],
          [128, 128],
          [129, 129],
          [256, 256],
          [257, 257],
          [512, 512],
          [1000, 1000]
        ],
        id: 'de10c0fe-f20e-43b7-9cb2-6c7e988aa0e2'
      },
      fcc: 'Compliant',
      line: { name: 'UniFi', id: 'unifi-network' },
      sysid: 'ed51',
      guids: [],
      ic: 'Compliant',
      id: 'f8988ed4-6ebf-432d-be99-ffca32acba7e',
      product: { abbrev: 'USW 24', name: 'Switch 24' },
      shortnames: ['USL24'],
      triplets: [
        { k2: 'USW-24-G2', k1: 'USL24' },
        { k3: 'USL24', k1: 'USL24' }
      ]
    },
    {
      sysids: ['ed50'],
      unifi: {
        adoptability: 'adoptable',
        network: {
          radios: {},
          numberOfPorts: 26,
          ethernetMaxSpeedMegabitsPerSecond: 1000,
          systemIdHexadecimal: 'ed21',
          features: { poe: true },
          ports: { standard: 24, sfp: [25, 26] },
          chipset: 'l',
          type: 'usw',
          minimumFirmwareRequired: '4.0.6',
          deviceCapabilities: ['SWITCH', 'HAS_CLIENTS']
        }
      },
      icon: {
        resolutions: [
          [25, 25],
          [32, 32],
          [51, 51],
          [64, 64],
          [101, 101],
          [128, 128],
          [129, 129],
          [256, 256],
          [257, 257],
          [512, 512],
          [1000, 1000]
        ],
        id: '45ab1100-1a8a-4b7d-990d-444bbe7deac5'
      },
      fcc: 'Compliant',
      line: { name: 'UniFi', id: 'unifi-network' },
      sysid: 'ed50',
      guids: [],
      ic: 'Compliant',
      id: '6c244018-abdf-4185-a77b-9f496052971d',
      product: { abbrev: 'USW 24 PoE', name: 'Switch 24 PoE' },
      shortnames: ['USL24P', 'USW-24-PoE', 'UniFi Switch PoE 24'],
      triplets: [
        { k2: 'USW-24-PoE', k1: 'USL24P' },
        { k3: 'USL24P', k1: 'USL24P' }
      ]
    },
    {
      sysids: ['ed53'],
      unifi: {
        adoptability: 'adoptable',
        network: {
          radios: {},
          numberOfPorts: 52,
          ethernetMaxSpeedMegabitsPerSecond: 1000,
          systemIdHexadecimal: 'ed25',
          ports: { standard: 48, sfp: [49, 50, 51, 52] },
          chipset: 'l',
          type: 'usw',
          minimumFirmwareRequired: '4.0.6',
          deviceCapabilities: ['SWITCH', 'HAS_CLIENTS']
        }
      },
      icon: {
        resolutions: [
          [25, 25],
          [32, 32],
          [51, 51],
          [64, 64],
          [101, 101],
          [128, 128],
          [129, 129],
          [256, 256],
          [257, 257],
          [512, 512],
          [1000, 1000]
        ],
        id: 'cbad0f50-58c8-45a6-b58c-72fdb4d18ac4'
      },
      fcc: 'Compliant',
      line: { name: 'UniFi', id: 'unifi-network' },
      sysid: 'ed53',
      guids: [],
      ic: 'Compliant',
      id: '1d98afcd-27e3-4b13-850b-33197fea8f9a',
      product: { abbrev: 'USW 48', name: 'Switch 48' },
      shortnames: ['USL48'],
      triplets: [
        { k2: 'USW-48-G2', k1: 'USL48' },
        { k3: 'USL48', k1: 'USL48' }
      ]
    },
    {
      sysids: ['ed52'],
      unifi: {
        adoptability: 'adoptable',
        network: {
          radios: {},
          numberOfPorts: 52,
          ethernetMaxSpeedMegabitsPerSecond: 1000,
          systemIdHexadecimal: 'ed22',
          features: { poe: true },
          ports: { standard: 48, sfp: [49, 50, 51, 52] },
          chipset: 'l',
          type: 'usw',
          minimumFirmwareRequired: '4.0.6',
          deviceCapabilities: ['SWITCH', 'HAS_CLIENTS']
        }
      },
      icon: {
        resolutions: [
          [25, 25],
          [32, 32],
          [51, 51],
          [64, 64],
          [101, 101],
          [128, 128],
          [129, 129],
          [256, 256],
          [257, 257],
          [512, 512],
          [1000, 1000]
        ],
        id: '896e056e-41cd-4484-88d5-9b34621d4c32'
      },
      fcc: 'Compliant',
      line: { name: 'UniFi', id: 'unifi-network' },
      sysid: 'ed52',
      guids: [],
      ic: 'Compliant',
      id: '27447c8b-5c26-44cf-b25f-f58b5cce0ce5',
      product: { abbrev: 'USW 48 PoE', name: 'Switch 48 PoE' },
      shortnames: ['USL48P', 'USW-48-PoE', 'UniFi Switch PoE 48'],
      triplets: [
        { k2: 'USW-48-PoE', k1: 'USL48P' },
        { k3: 'USL48P', k1: 'USL48P' }
      ]
    },
    {
      sysids: ['ed2d'],
      unifi: {
        adoptability: 'adoptable',
        network: {
          radios: {},
          diagram: ['01 03 05 07', '02 04 06 08'],
          numberOfPorts: 8,
          ethernetMaxSpeedMegabitsPerSecond: 1000,
          systemIdHexadecimal: 'ed2d',
          ports: { plus: 8 },
          chipset: 'l',
          type: 'usw',
          minimumFirmwareRequired: '4.0.6',
          deviceCapabilities: ['SWITCH', 'HAS_CLIENTS']
        }
      },
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '89b20796-b1ca-4d89-85b3-78df32242d52'
      },
      fcc: 'Compliant',
      line: { name: 'UniFi', id: 'unifi-network' },
      sysid: 'ed2d',
      guids: [],
      ic: 'Compliant',
      id: 'd1a8d7d9-533b-4269-b3a8-9c4602ac74d5',
      product: { abbrev: 'USW Aggregation', name: 'Switch Aggregation' },
      shortnames: ['USL8A'],
      triplets: [
        { k2: 'USW-Aggregation', k1: 'USL8A' },
        { k3: 'USL8A', k1: 'USL8A' }
      ]
    },
    {
      sysids: ['eb38'],
      unifi: {
        adoptability: 'adoptable',
        network: {
          radios: {},
          diagram: [
            '01 02 03 04 05 06 07 08 09 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 __ 25 26'
          ],
          numberOfPorts: 26,
          ethernetMaxSpeedMegabitsPerSecond: 1000,
          systemIdHexadecimal: 'eb38',
          features: { poe: true },
          ports: { standard: 24, plus: [25, 26] },
          chipset: 'g',
          type: 'usw',
          minimumFirmwareRequired: '4.0.6',
          deviceCapabilities: ['SWITCH', 'HAS_CLIENTS']
        }
      },
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: 'e9237854-a073-4ce7-a386-c8bb83dab97b'
      },
      line: { name: 'UniFi', id: 'unifi-network' },
      sysid: 'eb38',
      guids: [],
      id: 'd7458d4f-14ca-4899-8720-312026211295',
      product: { abbrev: 'USW Ent 24 PoE', name: 'Switch Enterprise 24 PoE' },
      shortnames: ['US624P'],
      triplets: [
        { k2: 'USW-Enterprise-24-PoE', k1: 'US624P' },
        { k3: 'US624P', k1: 'US624P' }
      ]
    },
    {
      sysids: ['eb28'],
      unifi: {
        adoptability: 'adoptable',
        network: {
          radios: {},
          diagram: [
            '01 03 05 07 09 11 13 15 17 19 21 23 25 27 29 31 33 35 37 39 41 43 45 47 __ 49 51',
            '02 04 06 08 10 12 14 16 18 20 22 24 26 28 30 32 34 36 38 40 42 44 46 48 __ 50 52'
          ],
          numberOfPorts: 52,
          ethernetMaxSpeedMegabitsPerSecond: 1000,
          systemIdHexadecimal: 'eb28',
          features: { poe: true },
          ports: { standard: '1-48', plus: '49-54' },
          chipset: 'g',
          type: 'usw',
          minimumFirmwareRequired: '4.0.6',
          deviceCapabilities: ['SWITCH', 'HAS_CLIENTS']
        }
      },
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: 'b3208e53-4726-48da-aa45-cc437d961616'
      },
      line: { name: 'UniFi', id: 'unifi-network' },
      sysid: 'eb28',
      guids: [],
      id: '377cb41b-571a-49ec-837b-51ed7bd0a958',
      product: { abbrev: 'USW Ent 48 PoE', name: 'Switch Enterprise 48 PoE' },
      shortnames: ['US648P', 'UniFi Enterprise Switch 48 PoE'],
      triplets: [
        { k2: 'USW-Enterprise-48-PoE', k1: 'US648P' },
        { k3: 'US648P', k1: 'US648P' }
      ]
    },
    {
      sysids: ['ed41'],
      unifi: {
        adoptability: 'adoptable',
        network: {
          radios: {},
          numberOfPorts: 10,
          ethernetMaxSpeedMegabitsPerSecond: 1000,
          systemIdHexadecimal: 'ed41',
          features: { poe: true },
          ports: { standard: 8, sfp: [9, 10] },
          chipset: 'p',
          type: 'usw',
          minimumFirmwareRequired: '4.0.6',
          deviceCapabilities: ['SWITCH', 'HAS_CLIENTS']
        }
      },
      icon: {
        resolutions: [
          [25, 25],
          [32, 32],
          [51, 51],
          [64, 64],
          [101, 101],
          [128, 128],
          [129, 129],
          [256, 256],
          [257, 257],
          [512, 512],
          [1000, 1000]
        ],
        id: '08201357-3e85-4e7f-b0d9-400f2d871441'
      },
      fcc: 'Compliant',
      line: { name: 'UniFi', id: 'unifi-network' },
      sysid: 'ed41',
      guids: [],
      ic: 'Compliant',
      id: '5931f835-5029-42da-8676-c4e57003b2cd',
      product: { abbrev: 'USW Ent 8 PoE', name: 'Switch Enterprise 8 PoE' },
      shortnames: ['US68P'],
      triplets: [{ k3: 'US68P', k1: 'US68P' }]
    },
    {
      sysids: ['ed10'],
      unifi: {
        adoptability: 'adoptable',
        network: {
          radios: {},
          numberOfPorts: 5,
          ethernetMaxSpeedMegabitsPerSecond: 1000,
          systemIdHexadecimal: 'ed10',
          features: { poe: true },
          power: { capacity: 60 },
          ports: { standard: 5 },
          chipset: 'c',
          type: 'usw',
          minimumFirmwareRequired: '4.0.6',
          deviceCapabilities: ['SWITCH', 'HAS_CLIENTS']
        }
      },
      icon: {
        resolutions: [
          [25, 25],
          [32, 32],
          [51, 51],
          [64, 64],
          [101, 101],
          [128, 128],
          [129, 129],
          [256, 256],
          [257, 257],
          [512, 512],
          [1000, 1000]
        ],
        id: '50c43208-6f5a-4a93-95fe-e48151e28bfc'
      },
      fcc: 'Compliant',
      line: { name: 'UniFi', id: 'unifi-network' },
      sysid: 'ed10',
      guids: [],
      ic: 'Compliant',
      id: '1725ba05-79e0-43d1-9551-be834f7fe536',
      product: { abbrev: 'USW Flex', name: 'Switch Flex' },
      shortnames: ['USF5P'],
      triplets: [
        { k2: 'USW-Flex', k1: 'USF5P' },
        { k3: 'USF5P', k1: 'USF5P' },
        { k2: 'USW-5-Flex', k1: 'USF5P' }
      ]
    },
    {
      sysids: ['ed31'],
      unifi: {
        adoptability: 'adoptable',
        network: {
          radios: {},
          numberOfPorts: 5,
          ethernetMaxSpeedMegabitsPerSecond: 1000,
          systemIdHexadecimal: 'ed30',
          ports: { standard: 5 },
          chipset: 'n',
          type: 'usw',
          minimumFirmwareRequired: '1.2.1',
          deviceCapabilities: ['SWITCH', 'HAS_LOW_RESOURCES', 'HAS_CLIENTS'],
          primaryPortGroupCount: 5
        }
      },
      icon: {
        resolutions: [
          [25, 25],
          [32, 32],
          [51, 51],
          [64, 64],
          [101, 101],
          [128, 128],
          [129, 129],
          [256, 256],
          [257, 257],
          [512, 512],
          [1000, 1000]
        ],
        id: '7a060fbb-8a8b-471c-9f57-da477ff3e04e'
      },
      fcc: 'Compliant',
      line: { name: 'UniFi', id: 'unifi-network' },
      sysid: 'ed31',
      guids: [],
      ic: 'Compliant',
      id: 'b13610ef-7e73-4a14-985a-53bb75a62401',
      product: { abbrev: 'USW Flex Mini', name: 'Switch Flex Mini' },
      shortnames: ['USMINI', 'USW-Mini'],
      triplets: [{ k3: 'USMINI', k1: 'USMINI' }]
    },
    {
      sysids: ['ed40'],
      unifi: {
        adoptability: 'adoptable',
        network: {
          radios: {},
          diagram: ['01 __ 02 03 04 05'],
          numberOfPorts: 5,
          ethernetMaxSpeedMegabitsPerSecond: 1000,
          systemIdHexadecimal: 'ed40',
          ports: { standard: 5 },
          chipset: 'p',
          type: 'usw',
          minimumFirmwareRequired: '4.0.6',
          deviceCapabilities: ['SWITCH', 'HAS_CLIENTS']
        }
      },
      icon: {
        resolutions: [
          [25, 25],
          [32, 32],
          [51, 51],
          [64, 64],
          [101, 101],
          [128, 128],
          [129, 129],
          [256, 256],
          [257, 257],
          [512, 512],
          [1000, 1000]
        ],
        id: '494c797e-85b2-4be5-9d6c-15f05c5e034d'
      },
      line: { name: 'UniFi', id: 'unifi-network' },
      sysid: 'ed40',
      guids: [],
      id: '13071604-6ab0-42c2-9c95-65aff66e89b4',
      product: { abbrev: 'USW Flex XG', name: 'Switch Flex XG' },
      shortnames: ['USFXG'],
      triplets: [{ k3: 'USFXG', k1: 'USFXG' }]
    },
    {
      sysids: [],
      unifi: {
        adoptability: 'adoptable',
        network: {
          radios: {},
          diagram: ['__ __ __ __ __ __ __ __ __ 09', '01 02 03 04 05 06 07 08 __ 10'],
          numberOfPorts: 10,
          ethernetMaxSpeedMegabitsPerSecond: 1000,
          systemIdHexadecimal: 'ed04',
          features: { poe: true },
          power: { capacity: 450 },
          ports: { standard: 10 },
          chipset: 'h',
          type: 'usw',
          minimumFirmwareRequired: '4.0.6',
          deviceCapabilities: ['SWITCH', 'HAS_CLIENTS']
        }
      },
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: 'ce4b6415-4082-40f8-9539-74880f84db51'
      },
      fcc: 'Compliant',
      line: { name: 'UniFi', id: 'unifi-network' },
      guids: [],
      ic: 'Compliant',
      id: '1a99c881-4948-4ba6-9864-0eef7372335d',
      product: { abbrev: 'USW Industrial', name: 'Switch Industrial' },
      shortnames: ['USC8P450'],
      triplets: [
        { k2: 'USW-Industrial', k1: 'USC8P450' },
        { k3: 'USC8P450', k1: 'USC8P450' }
      ]
    },
    {
      sysids: ['f060'],
      unifi: {
        adoptability: 'adoptable',
        network: {
          radios: {},
          bleServices: [
            {
              configured: 'f5f0fc99-0867-427c-a231-6a028a104efd',
              default: 'f04efea7-faf0-4637-afd5-bee983444005'
            }
          ],
          diagram: [
            '01 03 05 07 09 11 13 15 17 19 21 23 25 27 29 31 33 35 37 39 41 43 45 47 49 51 53',
            '02 04 06 08 10 12 14 16 18 20 22 24 26 28 30 32 34 36 38 40 42 44 46 48 50 52 54'
          ],
          numberOfPorts: 54,
          ethernetMaxSpeedMegabitsPerSecond: 1000,
          systemIdHexadecimal: 'f060',
          ports: { sfp28: '1-48', qsfp28: '49-54' },
          chipset: 'm',
          type: 'usw',
          minimumFirmwareRequired: '4.0.6',
          deviceCapabilities: ['SWITCH', 'SWITCH_LEAF', 'HAS_TEMPERATURE_SENSOR', 'HAS_CLIENTS'],
          knownUnsupportedFeatures: [
            'SWITCH_CAP_DOT1X',
            'SWITCH_CAP_LLDP_MED',
            'SWITCH_CAP_EGRESS_RATE_LIMIT'
          ]
        }
      },
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '6e492722-c7a2-4945-a411-5db5e77b8519'
      },
      line: { name: 'UniFi', id: 'unifi-network' },
      sysid: 'f060',
      guids: ['f04efea7-faf0-4637-afd5-bee983444005', 'f5f0fc99-0867-427c-a231-6a028a104efd'],
      btle: {
        factoryDefault: 'f04efea7-faf0-4637-afd5-bee983444005',
        userConfigured: 'f5f0fc99-0867-427c-a231-6a028a104efd'
      },
      id: '5e7dc81c-38f3-4ac3-9bc7-bc806e94a309',
      product: { abbrev: 'USW Leaf', name: 'Switch Leaf' },
      shortnames: ['UDC48X6', 'USW-Leaf'],
      triplets: []
    },
    {
      sysids: ['ed54'],
      unifi: {
        adoptability: 'adoptable',
        network: {
          radios: {},
          numberOfPorts: 16,
          ethernetMaxSpeedMegabitsPerSecond: 1000,
          systemIdHexadecimal: 'ed24',
          features: { poe: true },
          ports: { standard: 16 },
          chipset: 'l',
          type: 'usw',
          minimumFirmwareRequired: '4.0.6',
          deviceCapabilities: ['SWITCH', 'HAS_CLIENTS']
        }
      },
      icon: {
        resolutions: [
          [25, 25],
          [32, 32],
          [51, 51],
          [64, 64],
          [101, 101],
          [128, 128],
          [129, 129],
          [256, 256],
          [257, 257],
          [512, 512],
          [1000, 1000]
        ],
        id: 'ea06a05c-0434-4dc1-b423-cff51ff5a017'
      },
      fcc: 'Compliant',
      line: { name: 'UniFi', id: 'unifi-network' },
      sysid: 'ed54',
      guids: [],
      ic: 'Compliant',
      id: '8d084b12-98d6-4b10-9168-cf319e170cef',
      product: { abbrev: 'USW Lite 16 PoE', name: 'Switch Lite 16 PoE' },
      shortnames: ['USL16LP'],
      triplets: [
        { k2: 'USW-Lite-16-PoE', k1: 'USL16LP' },
        { k3: 'USL16LP', k1: 'USL16LP' }
      ]
    },
    {
      sysids: ['ed55'],
      unifi: {
        adoptability: 'adoptable',
        network: {
          radios: {},
          numberOfPorts: 8,
          ethernetMaxSpeedMegabitsPerSecond: 1000,
          systemIdHexadecimal: 'ed2a',
          features: { poe: true },
          ports: { standard: 8 },
          chipset: 'l',
          type: 'usw',
          minimumFirmwareRequired: '4.0.6',
          deviceCapabilities: ['SWITCH', 'HAS_CLIENTS']
        }
      },
      icon: {
        resolutions: [
          [25, 25],
          [32, 32],
          [51, 51],
          [64, 64],
          [101, 101],
          [128, 128],
          [129, 129],
          [256, 256],
          [257, 257],
          [512, 512],
          [1000, 1000]
        ],
        id: '89ee387a-8871-4d62-9bcd-1f557ee1c97f'
      },
      fcc: 'Compliant',
      line: { name: 'UniFi', id: 'unifi-network' },
      sysid: 'ed55',
      guids: [],
      ic: 'Compliant',
      id: 'b6a7f692-39e2-4942-989e-874e5166ef3b',
      product: { abbrev: 'USW Lite 8 PoE', name: 'Switch Lite 8 PoE' },
      shortnames: ['USL8LP'],
      triplets: [
        { k2: 'USW-Lite-8-PoE', k1: 'USL8LP' },
        { k3: 'USL8LP', k1: 'USL8LP' }
      ]
    },
    {
      sysids: ['ed2c'],
      unifi: {
        adoptability: 'adoptable',
        network: {
          radios: {},
          diagram: ['01 02 03 04 05 06 07 08 _ 09'],
          numberOfPorts: 9,
          ethernetMaxSpeedMegabitsPerSecond: 1000,
          systemIdHexadecimal: 'ed2c',
          features: { poe: true },
          ports: { standard: 9 },
          outletsDiagram: ['01 02'],
          chipset: 'l',
          type: 'usw',
          primaryOutletGroupCount: 2,
          minimumFirmwareRequired: '4.0.6',
          deviceCapabilities: [
            'SWITCH',
            'SMART_POWER',
            'ULTE',
            'BATTERY_POWER',
            'HAS_CLIENTS',
            'EXTERNAL_BATTERY'
          ]
        }
      },
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '79e60ea3-2e16-4e2a-8da7-28e1d8e4689e'
      },
      line: { name: 'UniFi', id: 'unifi-network' },
      sysid: 'ed2c',
      guids: [],
      id: 'da39c065-41f2-46c5-8463-fc08c948240c',
      product: { abbrev: 'USW Mission Critical', name: 'Switch Mission Critical' },
      shortnames: ['USL8MP'],
      triplets: [
        { k2: 'USW-Mission-Critical', k1: 'USL8MP' },
        { k3: 'USL8MP', k1: 'USL8MP' }
      ]
    },
    {
      sysids: ['ed57'],
      unifi: {
        adoptability: 'adoptable',
        network: {
          radios: {},
          numberOfPorts: 26,
          ethernetMaxSpeedMegabitsPerSecond: 1000,
          systemIdHexadecimal: 'eb37',
          ports: { standard: 24, plus: [25, 26] },
          chipset: 'g',
          type: 'usw',
          minimumFirmwareRequired: '4.0.6',
          deviceCapabilities: ['SWITCH', 'HAS_CLIENTS']
        }
      },
      icon: {
        resolutions: [
          [25, 25],
          [32, 32],
          [51, 51],
          [64, 64],
          [101, 101],
          [128, 128],
          [129, 129],
          [256, 256],
          [257, 257],
          [512, 512],
          [1000, 1000]
        ],
        id: '519f89a7-e6c6-4dd1-8d7e-fa79085d0899'
      },
      fcc: 'Compliant',
      line: { name: 'UniFi', id: 'unifi-network' },
      sysid: 'ed57',
      guids: [],
      ic: 'Compliant',
      id: 'b9cd00b8-4048-4b1b-af66-9f781e6494d6',
      product: { abbrev: 'USW Pro 24', name: 'Switch Professional 24' },
      shortnames: ['US24PRO2'],
      triplets: [
        { k2: 'USW-Pro-24', k1: 'US24PRO2' },
        { k3: 'US24PRO2', k1: 'US24PRO2' }
      ]
    },
    {
      sysids: ['ed56'],
      unifi: {
        adoptability: 'adoptable',
        network: {
          radios: {},
          numberOfPorts: 26,
          ethernetMaxSpeedMegabitsPerSecond: 1000,
          systemIdHexadecimal: 'eb36',
          features: { poe: true },
          ports: { standard: 24, plus: [25, 26] },
          chipset: 'g',
          type: 'usw',
          minimumFirmwareRequired: '4.0.6',
          deviceCapabilities: ['SWITCH', 'HAS_CLIENTS']
        }
      },
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '07cecefa-4be6-4a88-9a3c-8b2d910cd653'
      },
      fcc: 'Compliant',
      line: { name: 'UniFi', id: 'unifi-network' },
      sysid: 'ed56',
      guids: [],
      ic: 'Compliant',
      id: '95b82866-f941-4cb0-aa79-58392dbcb7f6',
      product: { abbrev: 'USW Pro 24 PoE', name: 'Switch Professional 24 PoE' },
      shortnames: ['US24PRO'],
      triplets: [
        { k2: 'USW-Pro-24-PoE', k1: 'US24PRO' },
        { k3: 'US24PRO', k1: 'US24PRO' }
      ]
    },
    {
      sysids: ['ed59'],
      unifi: {
        adoptability: 'adoptable',
        network: {
          radios: {},
          numberOfPorts: 52,
          ethernetMaxSpeedMegabitsPerSecond: 1000,
          systemIdHexadecimal: 'eb68',
          ports: { standard: 48, plus: '49-52' },
          chipset: 'g',
          type: 'usw',
          minimumFirmwareRequired: '4.0.6',
          deviceCapabilities: ['SWITCH', 'HAS_CLIENTS']
        }
      },
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '6e2e6a89-41d2-4b76-8d2d-d0b6910ccc06'
      },
      fcc: 'Compliant',
      line: { name: 'UniFi', id: 'unifi-network' },
      sysid: 'ed59',
      guids: [],
      ic: 'Compliant',
      id: '11a0b2e2-7f95-4a29-a511-602914420534',
      product: { abbrev: 'USW Pro 48', name: 'Switch Professional 48' },
      shortnames: ['US48PRO2'],
      triplets: [
        { k2: 'USW-Pro-48', k1: 'US48PRO2' },
        { k3: 'US48PRO2', k1: 'US48PRO2' }
      ]
    },
    {
      sysids: ['ed58'],
      unifi: {
        adoptability: 'adoptable',
        network: {
          radios: {},
          numberOfPorts: 52,
          ethernetMaxSpeedMegabitsPerSecond: 1000,
          systemIdHexadecimal: 'eb67',
          features: { poe: true },
          ports: { standard: 48, plus: '49-52' },
          chipset: 'g',
          type: 'usw',
          minimumFirmwareRequired: '4.0.6',
          deviceCapabilities: ['SWITCH', 'HAS_CLIENTS']
        }
      },
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '848c6a6d-573e-48d4-8c10-e011da91a2db'
      },
      fcc: 'Compliant',
      line: { name: 'UniFi', id: 'unifi-network' },
      sysid: 'ed58',
      guids: [],
      ic: 'Compliant',
      id: '4dd6c574-8137-4acc-9b1a-64f15aac54a6',
      product: { abbrev: 'USW Pro 48 PoE', name: 'Switch Professional 48 PoE' },
      shortnames: ['US48PRO', 'USW-Pro-48-PoE'],
      triplets: [
        { k2: 'USW-Pro-48-PoE', k1: 'US48PRO' },
        { k3: 'US48PRO', k1: 'US48PRO' }
      ]
    },
    {
      sysids: [],
      unifi: {
        adoptability: 'adoptable',
        network: {
          radios: {},
          diagram: [
            '01 03 05 07 09 11 13 15 17 19 21 23 25 27 __ 29 31',
            '02 04 06 08 10 12 14 16 18 20 22 24 26 28 __ 30 32'
          ],
          numberOfPorts: 32,
          ethernetMaxSpeedMegabitsPerSecond: 1000,
          systemIdHexadecimal: 'eb27',
          ports: { sfp28: '29-32', plus: '1-28' },
          chipset: 'g',
          type: 'usw',
          minimumFirmwareRequired: '4.0.6',
          deviceCapabilities: ['SWITCH', 'HAS_CLIENTS'],
          primaryPortGroupCount: 32
        }
      },
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '8795a92b-e57e-4bb3-9e7f-06d90b85c31b'
      },
      fcc: 'Compliant',
      line: { name: 'UniFi', id: 'unifi-network' },
      guids: [],
      ic: 'Compliant',
      id: 'ea344ef8-6fcf-417c-a5f0-2e0821f1b888',
      product: { abbrev: 'USW Pro Aggregation', name: 'Switch Professional Aggregation' },
      shortnames: ['USAGGPRO', 'USW-Pro-Aggregation'],
      triplets: [
        { k2: 'USW-Aggregation-Pro', k1: 'USAGGPRO' },
        { k3: 'USAGGPRO', k1: 'USAGGPRO' }
      ]
    },
    {
      sysids: [],
      unifi: { adoptability: 'adoptable' },
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '79f05736-4313-45fa-8bde-575c3fdf5850'
      },
      line: { name: 'UniFi Talk', id: 'unifi-talk' },
      guids: [],
      id: 'e503bb73-0d80-43f0-b727-99216c7403ec',
      product: { abbrev: 'UT ATA', name: 'Talk Telephone Adapter' },
      shortnames: ['UT-ATA'],
      triplets: [{ k3: 'UT-ATA', k1: 'UT-ATA' }]
    },
    {
      sysids: [],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '9dc98aa3-aa7d-4ad2-9e7c-e76bb2fbe263'
      },
      line: { name: 'UniFi Talk', id: 'unifi-talk' },
      guids: [],
      id: 'ba7ed318-e042-4698-9ceb-78c659621ea0',
      product: { abbrev: 'UT Conference', name: 'Talk Conference Speaker' },
      shortnames: ['UT-CONFERENCE'],
      triplets: [{ k3: 'UT-CONFERENCE', k1: 'UT-CONFERENCE' }]
    },
    {
      images: { default: '1d0d7312c1ba8f3a309b34dfca8f5a2e' },
      sysids: [],
      unifi: { adoptability: 'adoptable' },
      icon: {
        resolutions: [
          [25, 25],
          [32, 32],
          [51, 51],
          [64, 64],
          [101, 101],
          [128, 128],
          [129, 129],
          [256, 256],
          [257, 257],
          [512, 512],
          [1000, 1000]
        ],
        id: '349a39cf-90f5-46df-9f79-b10451811ce9'
      },
      line: { name: 'UniFi Talk', id: 'unifi-talk' },
      guids: [],
      id: '0908bf26-7764-413a-ab17-05eaf458aac7',
      product: { abbrev: 'UTP Flex', name: 'Phone Flex' },
      shortnames: ['UTP-Flex', 'UVP-FLEX'],
      triplets: [{ k3: 'UVP-FLEX', k1: 'UVP-FLEX' }]
    },
    {
      images: { default: '3452223945023a8fda35056bf0810505' },
      sysids: ['ef82'],
      unifi: { adoptability: 'adoptable' },
      icon: {
        resolutions: [
          [25, 25],
          [32, 32],
          [51, 51],
          [64, 64],
          [101, 101],
          [128, 128],
          [129, 129],
          [256, 256],
          [257, 257],
          [512, 512],
          [1000, 1000]
        ],
        id: '401dccb4-175b-4933-9e4d-c53668885a96'
      },
      line: { name: 'UniFi Talk', id: 'unifi-talk' },
      sysid: 'ef82',
      guids: [],
      id: 'bbd99e34-f105-4f85-a66e-2a10ab7cc69e',
      product: { abbrev: 'UTP Touch', name: 'Phone Touch' },
      shortnames: ['UTP-Touch', 'UVP-TOUCH', 'UVP-Touch'],
      triplets: [{ k3: 'UVP-TOUCH', k1: 'UVP-TOUCH' }]
    },
    {
      images: { default: '4b5a1e688fe79a6288b07974803c3c31' },
      sysids: ['ef13'],
      unifi: { adoptability: 'adoptable' },
      icon: {
        resolutions: [
          [25, 25],
          [32, 32],
          [51, 51],
          [64, 64],
          [101, 101],
          [128, 128],
          [129, 129],
          [256, 256],
          [257, 257],
          [512, 512],
          [1000, 1000]
        ],
        id: 'c582d6a6-6918-44da-a897-a5a8c9f5a201'
      },
      line: { name: 'UniFi Talk', id: 'unifi-talk' },
      sysid: 'ef13',
      guids: [],
      id: '13e34d04-579d-4170-b4df-644c3e600f35',
      product: { abbrev: 'UTP Touch W', name: 'Phone Touch White' },
      shortnames: ['UTP-Touch-W', 'UVP-TOUCH-W', 'UVP-Touch-W'],
      triplets: []
    },
    {
      images: { default: '68d06ee08376298e769e6362be6fea23' },
      sysids: ['ef0e'],
      unifi: { adoptability: 'adoptable' },
      icon: {
        resolutions: [
          [25, 25],
          [32, 32],
          [51, 51],
          [64, 64],
          [101, 101],
          [128, 128],
          [129, 129],
          [256, 256],
          [257, 257],
          [512, 512],
          [1000, 1000]
        ],
        id: 'a45dd2dd-7781-4d82-bee9-9e71ebcb9c08'
      },
      line: { name: 'UniFi Talk', id: 'unifi-talk' },
      sysid: 'ef0e',
      guids: [],
      id: '345312ac-ecda-45c3-9650-888630b9da7a',
      product: { abbrev: 'UTP Touch Max', name: 'Phone Touch Max' },
      shortnames: ['UTP-Touch-Max', 'UVP-TOUCH-MAX', 'UVP-TouchMax'],
      triplets: [{ k3: 'UVP-TOUCH-MAX', k1: 'UVP-TOUCH-MAX' }]
    },
    {
      images: { default: '34759b2ddaab1d23b35094f78541327f' },
      sysids: ['ef14'],
      unifi: { adoptability: 'adoptable' },
      icon: {
        resolutions: [
          [25, 25],
          [32, 32],
          [51, 51],
          [64, 64],
          [101, 101],
          [128, 128],
          [129, 129],
          [256, 256],
          [257, 257],
          [512, 512],
          [1000, 1000]
        ],
        id: '47a8f078-4c85-4ffd-b78b-6c39bbb349b2'
      },
      line: { name: 'UniFi Talk', id: 'unifi-talk' },
      sysid: 'ef14',
      guids: [],
      id: 'a5e6abcc-4d26-4fcc-9363-2fec7e7a7343',
      product: { abbrev: 'UTP Touch Max W', name: 'Phone Touch Max White' },
      shortnames: ['UTP-TouchMax-W', 'UVP-TouchMax-W'],
      triplets: []
    },
    {
      sysids: ['a5a0'],
      unifi: { adoptability: 'adoptable', protect: { fov: 360, suggestedDistance: 5 } },
      icon: {
        resolutions: [
          [25, 25],
          [32, 32],
          [51, 51],
          [64, 64],
          [101, 101],
          [128, 128],
          [129, 129],
          [256, 256],
          [257, 257],
          [512, 512],
          [1000, 1000]
        ],
        id: '19294b80-0922-4a83-b5c5-1022ca22764a'
      },
      line: { name: 'UniFi Protect', id: 'unifi-protect' },
      sysid: 'a5a0',
      guids: [],
      id: '14612913-3fb1-4524-97f9-edc40085d1fe',
      deviceType: 'camera',
      product: { abbrev: 'AI 360', name: 'Camera AI 360' },
      shortnames: ['UVC AI 360', 'UVC G4 AI360'],
      triplets: [{ k1: 'UVC AI 360' }, { k1: 'UVC G4 AI360' }]
    },
    {
      sysids: ['a5a2'],
      unifi: { adoptability: 'adoptable' },
      icon: {
        resolutions: [
          [25, 25],
          [32, 32],
          [51, 51],
          [64, 64],
          [101, 101],
          [128, 128],
          [129, 129],
          [256, 256],
          [257, 257],
          [512, 512],
          [1000, 1000]
        ],
        id: 'f09d42d0-dbd4-4f15-a014-5a770daf4f96'
      },
      line: { name: 'UniFi Protect', id: 'unifi-protect' },
      sysid: 'a5a2',
      guids: ['e6fe8013-42fc-41c2-b254-577e88db0c06'],
      id: '714844ad-1fa5-458b-9cbd-c838a8e94ed9',
      deviceType: 'camera',
      product: { abbrev: 'AI Bullet', name: 'Camera AI Bullet' },
      shortnames: ['UVC AI Bullet', 'UVC-AI-Bullet'],
      triplets: [{ k1: 'UVC AI Bullet' }]
    },
    {
      sysids: ['a5b0'],
      unifi: { adoptability: 'adoptable' },
      icon: {
        resolutions: [
          [25, 25],
          [32, 32],
          [51, 51],
          [64, 64],
          [101, 101],
          [128, 128],
          [129, 129],
          [256, 256],
          [257, 257],
          [512, 512],
          [1000, 1000]
        ],
        id: 'a023dcd5-610a-4b78-a9ad-ec3a4a3dd9ae'
      },
      line: { name: 'UniFi Protect', id: 'unifi-protect' },
      minAdoptVersion: { protect: '2.7.18' },
      sysid: 'a5b0',
      guids: ['c1163ed7-3ce0-442b-9a6b-77a85bd88944'],
      id: 'ae4194d1-451c-427c-9946-a390c19e09e1',
      deviceType: 'camera',
      product: { abbrev: 'AI DSLR', name: 'Camera AI DSLR' },
      shortnames: ['UVC AI DSLR', 'UVC DSLR BULLET', 'UVC-DSLR-Bullet'],
      triplets: [{ k1: 'UVC AI DSLR' }, { k1: 'UVC-DSLR-Bullet' }, { k1: 'UVC DSLR BULLET' }]
    },
    {
      sysids: ['a5a4'],
      unifi: { adoptability: 'adoptable' },
      icon: {
        resolutions: [
          [25, 25],
          [32, 32],
          [51, 51],
          [64, 64],
          [101, 101],
          [128, 128],
          [129, 129],
          [256, 256],
          [257, 257],
          [512, 512],
          [1000, 1000]
        ],
        id: '7815b053-0e66-4bf5-98ec-5de15a6d4521'
      },
      line: { name: 'UniFi Protect', id: 'unifi-protect' },
      sysid: 'a5a4',
      guids: ['b1dc5ee2-b486-41ac-851e-890b12c2b577'],
      id: '7a81cc83-a481-4bb0-b564-f623cdb9aece',
      deviceType: 'camera',
      product: { abbrev: 'AI Pro', name: 'Camera AI Professional' },
      shortnames: ['UVC AI PRO', 'UVC AI Pro', 'UVC-AI-Pro'],
      triplets: [{ k1: 'UVC AI PRO' }]
    },
    {
      sysids: ['a5a3'],
      unifi: { adoptability: 'adoptable' },
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '7ed56a98-c92c-43b6-bb0e-99c39f5cae7c'
      },
      line: { name: 'UniFi Protect', id: 'unifi-protect' },
      sysid: 'a5a3',
      guids: ['46fc4ed2-592f-45d7-8644-760b22d61da0'],
      id: 'e20e3e46-8f07-42b4-88b7-e5a890578d1b',
      deviceType: 'camera',
      product: { abbrev: 'AI Theta', name: 'Camera AI Theta' },
      shortnames: ['UVC AI THETA', 'UVC AI Theta'],
      triplets: [{ k1: 'UVC AI Theta' }, { k1: 'UVC AI THETA' }]
    },
    {
      sysids: ['a525'],
      unifi: { adoptability: 'adoptable' },
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: 'aed32e7e-5504-4c1f-9a44-0eef26b32d90'
      },
      line: { name: 'UniFi Protect', id: 'unifi-protect' },
      sysid: 'a525',
      guids: [],
      id: '4803f566-2814-4abf-b6dc-296a4350897f',
      deviceType: 'camera',
      product: { abbrev: 'G2 Dome', name: 'Camera G2 Dome' },
      shortnames: ['UVC Dome'],
      triplets: [{ k1: 'UVC Dome' }]
    },
    {
      sysids: [],
      unifi: { adoptability: 'adoptable' },
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '87755bb9-00d4-4790-ad1b-15072b04e9a3'
      },
      line: { name: 'UniFi Protect', id: 'unifi-protect' },
      guids: [],
      id: 'f49a104e-97d4-47bb-bf21-71d4a24ad25c',
      deviceType: 'camera',
      product: { abbrev: 'Camera G2', name: 'Camera G2' },
      shortnames: ['UVC G2 Camera'],
      triplets: []
    },
    {
      sysids: [],
      unifi: { adoptability: 'adoptable', protect: { fov: 85, suggestedDistance: 6 } },
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: 'eb3db5d7-b6d4-4da6-85f7-ee579dedea0c'
      },
      line: { name: 'UniFi Protect', id: 'unifi-protect' },
      guids: [],
      id: '38d3fc52-7bfb-4386-bde6-fc0f4c55b157',
      deviceType: 'camera',
      product: { abbrev: 'G3 AF', name: 'Camera G3 AF' },
      shortnames: ['UniFi Video Camera G3 AF'],
      triplets: []
    },
    {
      sysids: ['a5a4'],
      unifi: { adoptability: 'adoptable', protect: { fov: 85, suggestedDistance: 6 } },
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: 'fd65593a-2cbe-456c-ab39-f9f61f067287'
      },
      line: { name: 'UniFi Protect', id: 'unifi-protect' },
      sysid: 'a5a4',
      guids: [],
      id: '1ebed7f4-dd78-4d2c-b5d0-6adfaa2a4587',
      deviceType: 'camera',
      product: { abbrev: 'G3 Bullet', name: 'Camera G3 Bullet' },
      shortnames: ['UVC', 'UVC G3', 'UniFi Protect G3', 'UniFi Protect G3 Bullet'],
      triplets: [{ k1: 'UVC' }, { k1: 'UVC G3' }]
    },
    {
      sysids: [],
      unifi: { adoptability: 'adoptable', protect: { fov: 87.8, suggestedDistance: 5 } },
      icon: {
        resolutions: [
          [25, 25],
          [32, 32],
          [51, 51],
          [64, 64],
          [101, 101],
          [128, 128],
          [129, 129],
          [256, 256],
          [257, 257],
          [512, 512],
          [1000, 1000]
        ],
        id: 'fee1fa20-77ae-4af5-ae24-b3c9afbd0000'
      },
      fcc: 'Compliant',
      line: { name: 'UniFi Protect', id: 'unifi-protect' },
      guids: [],
      ic: 'Compliant',
      id: 'e8006f66-1914-4159-b01d-a9a2fa8a4ec2',
      deviceType: 'camera',
      product: { abbrev: 'G3 Dome', name: 'Camera G3 Dome' },
      shortnames: ['UVC G3 Dome'],
      triplets: [{ k1: 'UVC G3 Dome' }]
    },
    {
      sysids: ['a534'],
      unifi: { adoptability: 'adoptable', protect: { fov: 87, suggestedDistance: 6 } },
      icon: {
        resolutions: [
          [25, 25],
          [32, 32],
          [51, 51],
          [64, 64],
          [101, 101],
          [128, 128],
          [129, 129],
          [256, 256],
          [257, 257],
          [512, 512],
          [1000, 1000]
        ],
        id: '6bfdcbc0-4ed5-47af-a840-4d7003017aee'
      },
      line: { name: 'UniFi Protect', id: 'unifi-protect' },
      sysid: 'a534',
      guids: [],
      id: '2e6d8087-3f80-482e-b690-cce969fc2719',
      deviceType: 'camera',
      product: { abbrev: 'G3 Flex', name: 'Camera G3 Flex' },
      shortnames: ['UVC G3 Flex'],
      triplets: [{ k1: 'UVC G3 Flex' }]
    },
    {
      sysids: ['a590'],
      unifi: { adoptability: 'adoptable', protect: { fov: 111.3, suggestedDistance: 4 } },
      icon: {
        resolutions: [
          [25, 25],
          [32, 32],
          [51, 51],
          [64, 64],
          [101, 101],
          [128, 128],
          [129, 129],
          [256, 256],
          [257, 257],
          [512, 512],
          [1000, 1000]
        ],
        id: '50c18cf8-6de0-4961-8a0e-95d65a6d31fe'
      },
      fcc: 'SWX-UVCG3INS',
      jrf: ['201-210315'],
      line: { name: 'UniFi Protect', id: 'unifi-protect' },
      sysid: 'a590',
      guids: ['0c430d0c-00ef-4367-bc6f-ca7c51e6b61f', '7fd44273-4eb5-4724-8c61-ecea476f172a'],
      btle: {
        factoryDefault: '0c430d0c-00ef-4367-bc6f-ca7c51e6b61f',
        userConfigured: '7fd44273-4eb5-4724-8c61-ecea476f172a'
      },
      ic: '6545A-UVCG3INS',
      id: '588282eb-0b6e-4809-9e2f-329c2a536b8c',
      deviceType: 'camera',
      product: { abbrev: 'G3 Instant', name: 'Camera G3 Instant' },
      shortnames: ['UVC G3 Instant', 'UVC-G3-INS'],
      triplets: [{ k1: 'UVC G3 Instant' }]
    },
    {
      sysids: ['a552'],
      unifi: { adoptability: 'adoptable', protect: { fov: 92, suggestedDistance: 4 } },
      icon: {
        resolutions: [
          [25, 25],
          [32, 32],
          [51, 51],
          [64, 64],
          [101, 101],
          [128, 128],
          [129, 129],
          [256, 256],
          [257, 257],
          [512, 512],
          [1000, 1000]
        ],
        id: 'aea0b2dd-53a7-4a01-9057-d4278f7430bc'
      },
      line: { name: 'UniFi Protect', id: 'unifi-protect' },
      sysid: 'a552',
      guids: ['021470b2-cf86-40c7-9267-f1c16a1f23dc', '79325618-9184-4039-a4f2-af8c202dd60d'],
      btle: {
        factoryDefault: '021470b2-cf86-40c7-9267-f1c16a1f23dc',
        userConfigured: '79325618-9184-4039-a4f2-af8c202dd60d'
      },
      id: '921e4d7c-e479-4d44-8ddc-3b375fee1d42',
      deviceType: 'camera',
      product: { abbrev: 'G3 Micro', name: 'Camera G3 Micro' },
      shortnames: ['UVC G3 Micro'],
      triplets: [{ k1: 'UVC G3 Micro' }]
    },
    {
      sysids: [],
      unifi: { adoptability: 'adoptable', protect: { fov: 111.3, suggestedDistance: 4 } },
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '3847c358-d33c-4875-9422-01a8af47fbe8'
      },
      line: { name: 'UniFi Protect', id: 'unifi-protect' },
      guids: [],
      id: '37bb2286-7272-470d-ae5a-8bad2b58551f',
      deviceType: 'camera',
      product: { abbrev: 'G3 Mini', name: 'Camera G3 Mini' },
      shortnames: ['UVC G3 Mini'],
      triplets: [{ k1: 'UVC G3 Mini' }]
    },
    {
      sysids: ['a532'],
      unifi: { adoptability: 'adoptable', protect: { fov: 108, suggestedDistance: 17 } },
      icon: {
        resolutions: [
          [25, 25],
          [32, 32],
          [51, 51],
          [64, 64],
          [101, 101],
          [128, 128],
          [129, 129],
          [256, 256],
          [257, 257],
          [512, 512],
          [1000, 1000]
        ],
        id: 'f1d33285-d84b-4262-b3cc-daaee17d386a'
      },
      line: { name: 'UniFi Protect', id: 'unifi-protect' },
      sysid: 'a532',
      guids: [],
      id: '37b78600-c4ed-444a-af4e-5505435370be',
      deviceType: 'camera',
      product: { abbrev: 'G3 Pro', name: 'Camera G3 Professional' },
      shortnames: ['UVC G3 Pro'],
      triplets: [{ k1: 'UVC G3 Pro' }]
    },
    {
      sysids: ['a572'],
      unifi: { adoptability: 'adoptable', protect: { fov: 86, suggestedDistance: 20 } },
      icon: {
        resolutions: [
          [25, 25],
          [32, 32],
          [51, 51],
          [64, 64],
          [101, 101],
          [128, 128],
          [129, 129],
          [256, 256],
          [257, 257],
          [512, 512],
          [1000, 1000]
        ],
        id: 'f7d8d4e4-243c-45c0-996d-9d6244cde198'
      },
      line: { name: 'UniFi Protect', id: 'unifi-protect' },
      sysid: 'a572',
      guids: [],
      id: '137d6537-f2d8-413b-8eb7-565abbb69498',
      deviceType: 'camera',
      product: { abbrev: 'G4 Bullet', name: 'Camera G4 Bullet' },
      shortnames: ['UVC G4 Bullet', 'UVC-G4-BULLET'],
      triplets: [{ k1: 'UVC G4 Bullet' }]
    },
    {
      sysids: ['a573'],
      unifi: { adoptability: 'adoptable', protect: { fov: 102.4, suggestedDistance: 9 } },
      icon: {
        resolutions: [
          [25, 25],
          [32, 32],
          [51, 51],
          [64, 64],
          [101, 101],
          [128, 128],
          [129, 129],
          [256, 256],
          [257, 257],
          [512, 512],
          [1000, 1000]
        ],
        id: 'cd0e22da-56d4-43a7-b8c1-b40d04e6c231'
      },
      line: { name: 'UniFi Protect', id: 'unifi-protect' },
      sysid: 'a573',
      guids: [],
      id: '3e98a520-7ab4-4c22-b3f0-3eeca3449bd8',
      deviceType: 'camera',
      product: { abbrev: 'G4 Dome', name: 'Camera G4 Dome' },
      shortnames: ['UVC G4 Dome', 'UVC-G4-DOME'],
      triplets: [{ k1: 'UVC G4 Dome' }]
    },
    {
      sysids: ['a571'],
      unifi: { adoptability: 'adoptable', protect: { fov: 160, suggestedDistance: 6.5 } },
      icon: {
        resolutions: [
          [25, 25],
          [32, 32],
          [51, 51],
          [64, 64],
          [101, 101],
          [128, 128],
          [129, 129],
          [256, 256],
          [257, 257],
          [512, 512],
          [1000, 1000]
        ],
        id: 'b854f2e4-5c06-4eb2-9e19-7829db65db8d'
      },
      fcc: 'SWX-UVCG4DB',
      jrf: ['201-210356'],
      line: { name: 'UniFi Protect', id: 'unifi-protect' },
      sysid: 'a571',
      guids: ['0f83bda7-0dd3-4448-a332-b7c37ad175be', '738d9bad-9477-41c4-8d8d-60a40df0d302'],
      btle: {
        factoryDefault: '0f83bda7-0dd3-4448-a332-b7c37ad175be',
        userConfigured: '738d9bad-9477-41c4-8d8d-60a40df0d302'
      },
      ic: 'SWX-UVCG4DB',
      id: 'f56733df-4553-48ed-83bc-74abcaebd025',
      deviceType: 'camera',
      product: { abbrev: 'G4 Doorbell', name: 'G4 Doorbell' },
      shortnames: ['UVC G4 Doorbell', 'UVC-G4-DoorBell'],
      triplets: [{ k1: 'UVC G4 Doorbell' }]
    },
    {
      sysids: ['a574'],
      unifi: { adoptability: 'adoptable' },
      icon: {
        resolutions: [
          [25, 25],
          [32, 32],
          [51, 51],
          [64, 64],
          [101, 101],
          [128, 128],
          [129, 129],
          [256, 256],
          [257, 257],
          [512, 512],
          [1000, 1000]
        ],
        id: 'b0bd9368-2e24-4a35-9e3d-ffe24841348c'
      },
      fcc: 'SWX-UVCG4DP',
      jrf: ['201-220245'],
      line: { name: 'UniFi Protect', id: 'unifi-protect' },
      sysid: 'a574',
      guids: [
        '048c75b4-af8a-4991-84b6-dc7fc3858d3f',
        '0b478f1a-7b25-4557-a692-2b25488f1985',
        '772479ec-60f4-4996-8860-48165e18ea55'
      ],
      btle: {
        factoryDefault: '0b478f1a-7b25-4557-a692-2b25488f1985',
        userConfigured: '772479ec-60f4-4996-8860-48165e18ea55'
      },
      ic: '6545A-UVCG4DP',
      id: 'ae230ee8-d503-418b-b6cc-93c8ee6dc087',
      deviceType: 'camera',
      product: { abbrev: 'G4 Doorbell Pro', name: 'G4 Doorbell Professional' },
      shortnames: ['UVC G4 Doorbell Pro', 'UVC-G4-Doorbell-PRO'],
      triplets: [{ k1: 'UVC G4 Doorbell Pro' }]
    },
    {
      sysids: ['a575'],
      unifi: { adoptability: 'adoptable' },
      icon: {
        resolutions: [
          [25, 25],
          [32, 32],
          [51, 51],
          [64, 64],
          [101, 101],
          [128, 128],
          [129, 129],
          [256, 256],
          [257, 257],
          [512, 512],
          [1000, 1000]
        ],
        id: '4080886f-4d9e-4071-8552-a893097999e2'
      },
      line: { name: 'UniFi Protect', id: 'unifi-protect' },
      sysid: 'a575',
      guids: ['3608354e-bf8b-4624-ba94-76197c144ae4'],
      id: 'ea1ad15d-c3eb-45c2-8a0d-ee63d17ba6b1',
      deviceType: 'camera',
      product: { abbrev: 'G4 Doorbell Pro PoE', name: 'G4 Doorbell Professional PoE' },
      shortnames: ['UVC G4 Doorbell Pro PoE', 'UVC-G4-Doorbell-Pro-PoE'],
      triplets: [{ k1: 'UVC G4 Doorbell Pro PoE' }]
    },
    {
      sysids: ['a595'],
      unifi: { adoptability: 'adoptable' },
      icon: {
        resolutions: [
          [25, 25],
          [32, 32],
          [51, 51],
          [64, 64],
          [101, 101],
          [128, 128],
          [129, 129],
          [256, 256],
          [257, 257],
          [512, 512],
          [1000, 1000]
        ],
        id: '8eaf8dfd-b33d-4e19-92fc-332d74832301'
      },
      fcc: 'SWX-UVCG4INS',
      jrf: ['201-220254'],
      line: { name: 'UniFi Protect', id: 'unifi-protect' },
      sysid: 'a595',
      guids: [
        'd3cb945e-60aa-4498-af28-f630263611b1',
        '04313ed3-8c7e-4e2e-9771-a415cd2b4623',
        '799b84eb-1fa5-4f80-bb69-11d5acbf6f7c'
      ],
      btle: {
        factoryDefault: '04313ed3-8c7e-4e2e-9771-a415cd2b4623',
        userConfigured: '799b84eb-1fa5-4f80-bb69-11d5acbf6f7c'
      },
      ic: '6545A-UVCG4INS',
      id: '81bddd15-fe58-495c-b9c5-fd592c154889',
      deviceType: 'camera',
      product: { abbrev: 'G4 Instant', name: 'Camera G4 Instant' },
      shortnames: ['UVC G4 Instant', 'UVC-G4-INS'],
      triplets: [{ k1: 'UVC G4 Instant' }]
    },
    {
      sysids: ['a563'],
      unifi: {
        adoptability: 'adoptable',
        protect: { fov: 109.9, suggestedDistance: 20 }
      },
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '37780143-f874-4b07-bad7-d350982ee79a'
      },
      line: { name: 'UniFi Protect', id: 'unifi-protect' },
      sysid: 'a563',
      guids: [],
      id: 'fc65bd1c-f4d3-4c81-a29e-708e184cf2a8',
      deviceType: 'camera',
      product: { abbrev: 'G4 Pro', name: 'Camera G4 Professional' },
      shortnames: ['UVC G4 Pro'],
      triplets: [{ k1: 'UVC G4 Pro' }]
    },
    {
      sysids: ['a564'],
      unifi: { adoptability: 'adoptable', protect: { fov: 64, suggestedDistance: 20 } },
      icon: {
        resolutions: [
          [25, 25],
          [32, 32],
          [51, 51],
          [64, 64],
          [101, 101],
          [128, 128],
          [129, 129],
          [256, 256],
          [257, 257],
          [512, 512],
          [1000, 1000]
        ],
        id: '6a69b0cd-116e-4d27-8d1d-64d28cf802da'
      },
      line: { name: 'UniFi Protect', id: 'unifi-protect' },
      sysid: 'a564',
      guids: [],
      id: 'e7365bb1-8bb9-4749-87d2-e842c992948a',
      deviceType: 'camera',
      product: { abbrev: 'G4 PTZ', name: 'Camera G4 PTZ' },
      shortnames: ['UVC G4 PTZ', 'UVC-G4-PTZ'],
      triplets: [{ k1: 'UVC G4 PTZ' }]
    },
    {
      sysids: ['a591'],
      unifi: { adoptability: 'adoptable' },
      icon: {
        resolutions: [
          [25, 25],
          [32, 32],
          [51, 51],
          [64, 64],
          [101, 101],
          [128, 128],
          [129, 129],
          [256, 256],
          [257, 257],
          [512, 512],
          [1000, 1000]
        ],
        id: '07d3ce1a-9b17-456a-aef0-f7e66c9c380f'
      },
      line: { name: 'UniFi Protect', id: 'unifi-protect' },
      sysid: 'a591',
      guids: ['afabdce0-f8eb-42d2-85fe-fc77f2c37bf6'],
      id: '65ea9a34-0f7d-41fd-ba66-d440716e6497',
      deviceType: 'camera',
      product: { abbrev: 'G5 Bullet', name: 'Camera G5 Bullet' },
      shortnames: ['UVC G5 Bullet', 'UVC-G5-Bullet'],
      triplets: [{ k1: 'UVC G5 Bullet' }]
    },
    {
      sysids: ['a592'],
      unifi: { adoptability: 'adoptable' },
      icon: {
        resolutions: [
          [25, 25],
          [32, 32],
          [51, 51],
          [64, 64],
          [101, 101],
          [128, 128],
          [129, 129],
          [256, 256],
          [257, 257],
          [512, 512],
          [1000, 1000]
        ],
        id: '4ea46db7-8408-4100-9e70-d76bad57b8d4'
      },
      line: { name: 'UniFi Protect', id: 'unifi-protect' },
      sysid: 'a592',
      guids: ['982a69fe-5163-408d-8285-5d13a302b1c1'],
      id: '9185f35a-f2c5-4ad4-987e-a9528ddb3494',
      deviceType: 'camera',
      product: { abbrev: 'G5 Dome', name: 'Camera G5 Dome' },
      shortnames: ['UVC G5 Dome', 'UVC-G5-Dome'],
      triplets: [{ k1: 'UVC G5 Dome' }]
    },
    {
      sysids: ['a593'],
      unifi: { adoptability: 'adoptable' },
      icon: {
        resolutions: [
          [25, 25],
          [32, 32],
          [51, 51],
          [64, 64],
          [101, 101],
          [128, 128],
          [129, 129],
          [256, 256],
          [257, 257],
          [512, 512],
          [1000, 1000]
        ],
        id: '8d63b7a9-0a75-44e3-b8f9-352669e6d7c9'
      },
      line: { name: 'UniFi Protect', id: 'unifi-protect' },
      sysid: 'a593',
      guids: ['27e00887-3892-461f-aab8-f93b668ae5f8'],
      id: 'b1f6f1bb-4a40-4e0e-ad3f-c5fea0da2a9c',
      deviceType: 'camera',
      product: { abbrev: 'G5 Flex', name: 'Camera G5 Flex' },
      shortnames: ['UVC G5 Flex', 'UVC-G5-Flex'],
      triplets: [{ k1: 'UVC G5 Flex' }]
    },
    {
      sysids: ['a598'],
      unifi: { adoptability: 'adoptable' },
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '3b44569c-2d21-4089-87b3-856847c030e1'
      },
      line: { name: 'UniFi Protect', id: 'unifi-protect' },
      minAdoptVersion: { protect: '2.7.34' },
      sysid: 'a598',
      guids: ['929d92b5-c2c9-435e-be50-a6d6eea160ec'],
      id: '878073eb-6a16-48f9-be14-f32f0cbf320e',
      deviceType: 'camera',
      product: { abbrev: 'G5 Pro', name: 'Camera G5 Professional' },
      shortnames: ['UVC G5 Pro', 'UVC-G5-Pro'],
      triplets: [{ k1: 'UVC G5 Pro' }]
    },
    {
      sysids: ['a526'],
      unifi: { adoptability: 'adoptable' },
      icon: {
        resolutions: [
          [25, 25],
          [32, 32],
          [51, 51],
          [64, 64],
          [101, 101],
          [128, 128],
          [129, 129],
          [256, 256],
          [257, 257],
          [512, 512],
          [1000, 1000]
        ],
        id: 'aea0b2dd-53a7-4a01-9057-d4278f7430bc'
      },
      line: { name: 'UniFi Protect', id: 'unifi-protect' },
      sysid: 'a526',
      guids: [],
      id: '85035bdb-bf41-499f-ad8c-a7256fbb3b96',
      deviceType: 'camera',
      product: { abbrev: 'G1 Micro', name: 'Camera Micro' },
      shortnames: ['UVC Micro', 'UniFi Video Camera Micro'],
      triplets: [{ k1: 'UVC Micro' }]
    },
    {
      sysids: ['a521'],
      unifi: { adoptability: 'adoptable' },
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '3b56db1a-c987-49d4-9c45-409179d7fc03'
      },
      line: { name: 'UniFi Protect', id: 'unifi-protect' },
      sysid: 'a521',
      guids: [],
      id: '8e5283fa-55ed-4040-9835-e0d0fba5b0be',
      deviceType: 'camera',
      product: { abbrev: 'G1 Pro', name: 'Camera G1 Professional' },
      shortnames: ['UVC Pro'],
      triplets: [{ k1: 'UVC Pro' }]
    },
    {
      sysids: ['ef0c'],
      unifi: {
        adoptability: 'adoptable',
        network: { radios: {}, type: 'uph', deviceCapabilities: ['PHONE', null] }
      },
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: 'f2311f6b-b1ac-4023-834c-41b46d546392'
      },
      line: { name: 'UniFi Talk', id: 'unifi-talk' },
      sysid: 'ef0c',
      guids: [],
      id: '26f4c920-3bce-480d-b9cb-78542ffdca42',
      product: { abbrev: 'UT Phone', name: 'Talk Phone' },
      shortnames: ['UP5', 'UP5C', 'UP5c'],
      triplets: []
    },
    {
      sysids: ['ef04'],
      unifi: {
        adoptability: 'adoptable',
        network: { radios: {}, type: 'uph', deviceCapabilities: ['PHONE', null] }
      },
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '44725643-b3d4-434f-bf9e-f319e5dd0019'
      },
      fcc: 'SWX-UVPEXT',
      line: { name: 'UniFi Talk', id: 'unifi-talk' },
      sysid: 'ef04',
      guids: [],
      ic: '6545A-UVPEXT',
      id: 'ea3363e5-9bc4-42e9-b306-0313121e524c',
      product: { abbrev: 'UTP Executive', name: 'Phone Executive' },
      shortnames: ['UP7', 'UP7C', 'UP7c'],
      triplets: []
    },
    {
      sysids: ['ef03'],
      unifi: {
        adoptability: 'adoptable',
        network: { radios: {}, type: 'uph', deviceCapabilities: ['PHONE', null] }
      },
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '453ee99b-26c3-479d-bf1e-3b7ee548cfcb'
      },
      fcc: 'SWX-UVPPRO',
      line: { name: 'UniFi Talk', id: 'unifi-talk' },
      sysid: 'ef03',
      guids: [],
      ic: '6545A-UVPPRO',
      id: '069cb01b-f6c2-40db-96a7-9120e9f61f7f',
      product: { abbrev: 'UTP Pro', name: 'Phone Professional' },
      shortnames: ['UP5T', 'UP5t', 'UP5TC', 'UP5tc'],
      triplets: []
    },
    {
      sysids: [],
      unifi: {
        adoptability: 'adoptable',
        network: { radios: {}, type: 'uph', deviceCapabilities: ['PHONE', null] }
      },
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: 'f2311f6b-b1ac-4023-834c-41b46d546392'
      },
      line: { name: 'UniFi Talk', id: 'unifi-talk' },
      guids: [],
      id: '3becafbc-f312-4b3d-a9ea-2c4416798d97',
      product: { abbrev: 'UT Phone X', name: 'Talk Phone X' },
      shortnames: ['UP4'],
      triplets: []
    },
    {
      sysids: [],
      unifi: {
        adoptability: 'adoptable',
        network: {
          radios: {
            na: { gain: 10, maxPower: 25, maxSpeedMegabitsPerSecond: 1733 },
            ng: { maxSpeedMegabitsPerSecond: 0 }
          },
          numberOfPorts: 1,
          ethernetMaxSpeedMegabitsPerSecond: 1000,
          systemIdHexadecimal: 'e580',
          features: { outdoorModeSupport: true, bandsteer: true, ac: true, gen: 2 },
          chipset: 'd',
          type: 'uap',
          minimumFirmwareRequired: '4.0.6',
          deviceCapabilities: ['ACCESS_POINT', 'HAS_CLIENTS']
        }
      },
      icon: {
        resolutions: [
          [25, 25],
          [32, 32],
          [51, 51],
          [64, 64],
          [101, 101],
          [128, 128],
          [129, 129],
          [256, 256],
          [257, 257],
          [512, 512],
          [1000, 1000]
        ],
        id: '561083bd-597d-4611-adc8-b674a43708a1'
      },
      fcc: 'SWX-UAPSTMXG',
      jrf: ['201-190663'],
      line: { name: 'UniFi', id: 'unifi-network' },
      guids: [],
      ic: '6545A-UAPSTMXG',
      id: 'f1b7c72f-afef-4a72-b1f2-be6dfb8ef291',
      product: { abbrev: 'UWB XG', name: 'WiFi BaseStation XG' },
      shortnames: ['UXSDM'],
      triplets: [
        { k2: 'UAP-BaseStationXG', k1: 'UXSDM' },
        { k3: 'UXSDM', k1: 'UXSDM' }
      ]
    },
    {
      sysids: [],
      unifi: {
        adoptability: 'adoptable',
        network: {
          radios: {
            na: { gain: 10, maxPower: 25, maxSpeedMegabitsPerSecond: 1733 },
            ng: { maxSpeedMegabitsPerSecond: 0 }
          },
          numberOfPorts: 1,
          ethernetMaxSpeedMegabitsPerSecond: 1000,
          systemIdHexadecimal: 'e585',
          features: { bandsteer: true, ac: true, gen: 2 },
          chipset: 'd',
          type: 'uap',
          minimumFirmwareRequired: '4.0.6',
          deviceCapabilities: ['ACCESS_POINT', 'HAS_CLIENTS']
        }
      },
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: 'a7f55606-1b20-4393-8ad2-5bd55db38b2f'
      },
      fcc: 'SWX-UAPSTMXG',
      line: { name: 'UniFi', id: 'unifi-network' },
      guids: [],
      ic: '6545A-UAPSTMXG',
      id: '345a2ec1-6f7f-4077-b1ee-09ba9c59ed41',
      product: { abbrev: 'UWB XG', name: 'WiFi BaseStation XG' },
      shortnames: ['UXBSDM'],
      triplets: [{ k2: 'UAP-BlackBaseStationXG', k1: 'UXBSDM' }]
    },
    {
      images: { default: '56dff292c65e19ee18cd1fdb7961ec86' },
      sysids: ['a667'],
      unifi: {
        adoptability: 'standalone',
        network: {
          subtypes: ['ugw', 'usw', 'uap'],
          radios: {
            na: { gain: 4, maxPower: 26, maxSpeedMegabitsPerSecond: 2400 },
            ng: { gain: 3, maxPower: 26, maxSpeedMegabitsPerSecond: 570 }
          },
          bleServices: [
            {
              configured: '73fff104-20bd-40a7-b1ad-0a67d332a37b',
              default: '3243e044-ad0b-4872-a6d4-ab457f1afdcf'
            }
          ],
          diagram: ['01 02'],
          numberOfPorts: 2,
          ethernetMaxSpeedMegabitsPerSecond: 1000,
          systemIdHexadecimal: 'a667',
          features: { bandsteer: true, ac: true, ax: true, gen: 2, poe: true },
          power: { capacity: 40 },
          ports: { eth1: 'WAN', eth0: 'LAN' },
          networkGroups: { eth1: 'WAN', eth0: 'LAN' },
          chipset: 'j',
          type: 'udm',
          linkNegotiation: {
            eth1: {
              supportedValues: ['autoneg', '1000 FDX', '100 FDX', '100 HDX', '10 FDX', '10 HDX'],
              portIdx: 2
            }
          },
          minimumFirmwareRequired: '0.9.0',
          deviceCapabilities: [
            'GATEWAY',
            'SWITCH',
            'ACCESS_POINT',
            'NETWORK_APPLICATION',
            'CONTROLLER',
            'APPLICATION_MODE',
            'HAS_CLIENTS'
          ],
          knownUnsupportedFeatures: [
            'SWITCH_CAP_DOT1X',
            'SWITCH_CAP_PORT_ISOLATION',
            'SWITCH_CAP_STORM_CONTROL',
            'SWITCH_CAP_STP',
            'SWITCH_CAP_LLDP_MED',
            'SWITCH_CAP_EGRESS_RATE_LIMIT'
          ]
        }
      },
      icon: {
        resolutions: [
          [25, 25],
          [32, 32],
          [51, 51],
          [64, 64],
          [101, 101],
          [128, 128],
          [129, 129],
          [256, 256],
          [257, 257],
          [512, 512],
          [1000, 1000]
        ],
        id: 'b3bbac27-aa9d-47a6-8556-676c4687c315'
      },
      line: { name: 'UniFi', id: 'unifi-network' },
      sysid: 'a667',
      guids: ['a63895cb-5406-4d81-b9b8-a220e61e017f', '9c2d4868-497f-4758-a5d5-d87a5b35b091'],
      btle: {
        factoryDefault: '3243e044-ad0b-4872-a6d4-ab457f1afdcf',
        userConfigured: '73fff104-20bd-40a7-b1ad-0a67d332a37b'
      },
      id: '30140cf8-0af4-4e3d-be26-87e41b8090e1',
      deviceType: 'console',
      product: { abbrev: 'Express', name: 'Express' },
      shortnames: ['UEX', 'UX'],
      triplets: [{ k3: 'UX', k1: 'UX' }]
    },
    {
      images: { default: 'e41c7e612b826876b4d1b5a3742bf529' },
      sysids: [],
      unifi: {
        adoptability: 'adoptable',
        network: {
          subtypes: ['ugw'],
          radios: {},
          bleServices: [
            {
              configured: 'dc6b2b9a-4563-42bc-a7c1-e0b4f600bd2a',
              default: 'd778bd0f-7e04-4291-a6df-2c1fca78dd67'
            }
          ],
          diagram: ['01 02'],
          ports: { eth1: 'WAN', standard: [0, 1], eth0: 'LAN' },
          networkGroups: { eth1: 'WAN', eth0: 'LAN' },
          type: 'uxg',
          linkNegotiation: {
            eth1: {
              supportedValues: ['autoneg', '1000 FDX', '100 FDX', '100 HDX', '10 FDX', '10 HDX'],
              portIdx: 2
            }
          },
          deviceCapabilities: ['GATEWAY', null]
        }
      },
      icon: {
        resolutions: [
          [25, 25],
          [32, 32],
          [51, 51],
          [64, 64],
          [101, 101],
          [128, 128],
          [129, 129],
          [256, 256],
          [257, 257],
          [512, 512],
          [1000, 1000]
        ],
        id: 'ce4be4fa-359e-4917-9e62-3245b1c784ad'
      },
      line: { name: 'UniFi', id: 'unifi-network' },
      guids: ['28a67baa-6dd5-4d4e-b6e7-9f28da21fa45'],
      btle: {
        factoryDefault: 'd778bd0f-7e04-4291-a6df-2c1fca78dd67',
        userConfigured: 'dc6b2b9a-4563-42bc-a7c1-e0b4f600bd2a'
      },
      id: '06112bf7-eae4-4bf4-a55c-de007c76dc45',
      product: { abbrev: 'UXG Lite', name: 'Next-Generation Gateway Lite' },
      shortnames: ['UXG'],
      triplets: []
    },
    {
      sysids: ['b084'],
      unifi: {
        adoptability: 'adoptable',
        network: {
          subtypes: ['ugw'],
          radios: {},
          bleServices: [
            {
              configured: '3d8bac06-22b2-4cf0-a974-bb256b4810f5',
              default: 'ae1655d6-86ec-4d42-a92d-42cf6a219e76'
            }
          ],
          diagram: ['01 03', '02 04'],
          numberOfPorts: 4,
          ethernetMaxSpeedMegabitsPerSecond: 1000,
          systemIdHexadecimal: 'ea19',
          ports: {
            eth1: 'LAN',
            standard: [0, 1],
            eth0: 'WAN',
            eth3: 'LAN2',
            plus: [2, 3],
            eth2: 'WAN2'
          },
          networkGroups: { eth1: 'LAN', eth0: 'WAN', eth3: 'LAN2', eth2: 'WAN2' },
          outletsDiagram: ['01'],
          chipset: 'j',
          type: 'uxg',
          linkNegotiation: {
            eth1: {
              supportedValues: ['autoneg', '1000 FDX', '100 FDX', '100 HDX', '10 FDX', '10 HDX'],
              portIdx: 2
            },
            eth0: {
              supportedValues: ['autoneg', '1000 FDX', '100 FDX', '100 HDX', '10 FDX', '10 HDX'],
              portIdx: 1
            },
            eth3: { supportedValues: ['autoneg', '10000 FDX', '1000 FDX'], portIdx: 4 },
            eth2: { supportedValues: ['autoneg', '10000 FDX', '1000 FDX'], portIdx: 3 }
          },
          primaryOutletGroupCount: 1,
          minimumFirmwareRequired: '0.0.1',
          deviceCapabilities: ['GATEWAY', 'APPLICATION_GATEWAY', 'SMART_POWER', 'HAS_CLIENTS']
        }
      },
      icon: {
        resolutions: [
          [25, 25],
          [32, 32],
          [51, 51],
          [64, 64],
          [101, 101],
          [128, 128],
          [129, 129],
          [256, 256],
          [257, 257],
          [512, 512],
          [1000, 1000]
        ],
        id: '80eb09d7-64db-491d-890d-28d555db9b24'
      },
      fcc: 'SWX-UXGPRO',
      line: { name: 'UniFi', id: 'unifi-network' },
      sysid: 'b084',
      guids: ['3d8bac06-22b2-4cf0-a974-bb256b4810f5', 'ae1655d6-86ec-4d42-a92d-42cf6a219e76'],
      btle: {
        factoryDefault: 'ae1655d6-86ec-4d42-a92d-42cf6a219e76',
        userConfigured: '3d8bac06-22b2-4cf0-a974-bb256b4810f5'
      },
      ic: '6545A-UXGPRO',
      id: 'c18d6e40-b775-4229-8f59-6ec875aa3825',
      product: { abbrev: 'UXG Pro', name: 'Next-Generation Gateway Professional' },
      shortnames: ['UXG-PRO', 'UXGPRO'],
      triplets: [
        { k3: 'UXGPRO', k1: 'UXGPRO' },
        { k2: 'Unifi NeXt-Gen Gateway Pro', k1: 'UXGPRO' }
      ]
    },
    {
      sysids: [],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '0de45e1b-496b-4f71-ae09-969471e310b7'
      },
      line: { name: 'WiFiMan', id: 'wifiman' },
      guids: ['933e9255-f5be-43c6-84e3-3c64e7c68df1', 'e0373cc2-d3bc-4eac-9c6e-423d0fe5d738'],
      uisp: {
        nameLegacy: [],
        /* eslint-disable @typescript-eslint/naming-convention */
        bleServices: { 'e0373cc2-d3bc-4eac-9c6e-423d0fe5d738': { mode: 'default' } },
        /* eslint-enable @typescript-eslint/naming-convention */
        line: 'wifiman',
        firmware: { platform: 'MTK7931', board: ['WiFiMan-Wizard'] }
      },
      id: 'a3cd30e9-7066-4390-a188-12fa549d6d64',
      product: { abbrev: 'WM Wizard', name: 'WiFiman Wizard' },
      shortnames: ['WM-W'],
      triplets: []
    },
    {
      sysids: ['ac16'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '5c3bb219-3e97-4333-9cef-d585c1f2a588'
      },
      line: { name: 'Wave', id: 'wave' },
      sysid: 'ac16',
      guids: [
        'dffb5c1c-21ca-4744-9b34-0707b267f92d',
        '73b08668-52df-4626-a3e3-7638815b781a',
        'dd71d062-2c19-4a26-a43b-d99c7cc12483'
      ],
      uisp: {
        nameLegacy: ['Wave-Micro'],
        bleServices: {
          /* eslint-disable @typescript-eslint/naming-convention */
          '73b08668-52df-4626-a3e3-7638815b781a': { mode: 'default' },
          'dd71d062-2c19-4a26-a43b-d99c7cc12483': { mode: 'factory' }
          /* eslint-enable @typescript-eslint/naming-convention */
        },
        line: 'wave_60',
        firmware: { platform: 'airfiber', board: ['mgmp'] }
      },
      btle: {
        factoryDefault: 'dd71d062-2c19-4a26-a43b-d99c7cc12483',
        userConfigured: '73b08668-52df-4626-a3e3-7638815b781a'
      },
      id: '733c150f-db4d-4bf0-b5a8-ba58028d090d',
      product: { abbrev: 'Wave AP Micro', name: 'Wave Micro' },
      shortnames: ['Wave-AP-Micro'],
      triplets: []
    },
    {
      sysids: ['ac1b', 'ae0a', 'dc9f', 'ac14', 'ac1a'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '25d04bd0-3ca9-43a2-8dc0-e27992b573ef'
      },
      line: { name: 'AirFiber', id: 'airfiber' },
      sysid: 'ac1b',
      guids: ['4b06ab8b-64ce-469e-862c-b64370180587', 'c86b8dd1-8c91-4ecc-8a85-6f32c54d50c3'],
      btle: {
        factoryDefault: '4b06ab8b-64ce-469e-862c-b64370180587',
        userConfigured: 'c86b8dd1-8c91-4ecc-8a85-6f32c54d50c3'
      },
      id: '70b2cb9b-ac5a-4acd-a42c-918681994497',
      product: { abbrev: 'Wave AP', name: 'Wave Access Point' },
      shortnames: ['AirFiber Wave AP', 'Wave-AP', 'WaveAP'],
      triplets: [
        { k2: 'WaveAP', k1: 'WaveAP' },
        { k2: 'Wave AP', k1: 'Wave-AP' }
      ]
    },
    {
      sysids: [],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: 'aca9cae2-a724-45c3-9a5c-49eeb00a7795'
      },
      line: { name: 'mFi', id: 'mfi' },
      guids: [],
      id: '43a6ef2d-e80d-4766-85d3-af5df9472b91',
      product: { abbrev: 'Dimmer Switch', name: 'Dimmer Switch' },
      shortnames: ['IWD1U', 'IWS1U'],
      triplets: [{ k1: 'IWD1U' }, { k3: 'IWD1U', k1: 'IWD1U' }]
    },
    {
      sysids: [],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '66ea8aa5-decc-4ff5-bb02-10cfca7ec924'
      },
      line: { name: 'mFi', id: 'mfi' },
      guids: [],
      id: 'd2685d29-20e3-4229-a637-1823825dfc9a',
      product: { abbrev: 'Dimmer Switch', name: 'Dimmer Switch' },
      shortnames: ['mFI mSwitch Black'],
      triplets: []
    },
    {
      sysids: [],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: '248b9b7e-775f-40aa-9023-9ea2bf99141e'
      },
      line: { name: 'mFi', id: 'mfi' },
      guids: [],
      id: 'fdc871d5-5db8-4a34-860f-757b54c71103',
      product: { abbrev: 'mFI In-Wall Outlet Black', name: 'mFI In-Wall Outlet Black' },
      shortnames: ['mFI In-Wall Outlet Black'],
      triplets: []
    },
    {
      sysids: ['e302', 'c3a2'],
      icon: {
        resolutions: [
          [25, 25],
          [51, 51],
          [101, 101],
          [129, 129],
          [257, 257]
        ],
        id: 'c536174d-e0b7-4241-96bd-2c8fb532d668'
      },
      line: { name: 'airMAX', id: 'airmax' },
      sysid: 'e302',
      guids: [],
      uisp: {
        nameLegacy: ['PicoStation2 HP'],
        bleServices: {},
        line: 'airmax_m2',
        firmware: { platform: 'airmax', board: ['xm'] }
      },
      id: 'f44c21e2-68be-431c-8435-7ffee32f4915',
      product: { abbrev: 'PicoStation M2', name: 'PicoStation M2' },
      shortnames: ['pS2-HP'],
      triplets: []
    }
  ]
};
