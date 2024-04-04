import { TableDataCell } from '@models/base-data-list';
import { DecimalNumberOption } from 'src/app/pipes/decimalNumber.pipe';

export const TRANSPORT_NEW_COLS: Array<TableDataCell> = [
  { title: 'trid', key: 'tariffCode', width: '92px' },
  { title: 'Charge name', key: 'chargeNameEN', width: '130px' },
  {
    title: 'Mode Of Transport',
    key: 'modeOfTransportNameEN',
    width: '100px'
  },
  { title: 'Rail Service Type', key: 'railServiceType', width: '110px' },
  { title: 'Carrier', key: 'airlineCarrierName', width: '85px' },
  { title: 'Additional Request', key: 'additionalRequest', width: '130px' },
  { title: 'Origin City', key: 'originProvinceNameEN', width: '107px' },
  { title: 'Origin District', key: 'originDistrictNameEN', width: '107px' },
  { title: 'Origin Port', key: 'originPortNameEN', width: '107px' },
  {
    title: 'Destination City',
    key: 'destinationProvinceNameEN',
    width: '107px'
  },
  {
    title: 'Destination District',
    key: 'destinationDistrictNameEN',
    width: '107px'
  },
  { title: 'Destination Port', key: 'destinationPortNameEN', width: '107px' },
  { title: 'Vol Range Per UOM', key: 'volumeRangePerUoMName', width: '148px' },
  {
    title: 'Volume Range Per Month',
    key: 'volumeRangePerMonthName',
    width: '148px'
  },
  { title: 'UoM of Transport', key: 'uoMOfTransportNameEN', width: '140px' },
  { title: 'Lead Time', key: 'leadTime', width: '100px' },
  { title: 'Currency', key: 'currency', width: '100px' },
  {
    title: 'Market Rate',
    key: 'marketRate',
    width: '108px',
    formatRenderer: {
      decimalNumber: {
        zeroIsEmpty: true
      } as DecimalNumberOption
    }
  },
  {
    title: 'MAX',
    key: 'max',
    width: '100px',
    formatRenderer: {
      numberFormat: true
    }
  },
  {
    title: 'MIN',
    key: 'min',
    width: '100px',
    formatRenderer: {
      numberFormat: true
    }
  },
  {
    title: '%Dif Max',
    key: 'differentMax',
    width: '96px',
    formatRenderer: {
      decimalNumber: {
        decimal: 4,
        suffix: '%'
      } as DecimalNumberOption
    }
  },
  {
    title: '%Dif MIN',
    key: 'differentMin',
    width: '96px',
    formatRenderer: {
      decimalNumber: {
        decimal: 4,
        suffix: '%'
      } as DecimalNumberOption
    }
  },
  {
    title: 'Cost Average',
    key: 'costAverage',
    width: '120px',
    formatRenderer: {
      numberFormat: true
    }
  },
  {
    title: 'New Rate',
    key: 'newRate',
    width: '120px',
    rightStick: true,
    formatRenderer: {
      numberFormat: true
    }
  },
  {
    title: '%Markup',
    key: 'markup',
    width: '147px',
    rightStick: true,
    formatRenderer: {
      markup: true
    }
  },
  {
    title: 'Markup Flat',
    key: 'flat',
    width: '147px',
    rightStick: true,
    formatRenderer: {
      flat: true
    }
  }
];
export const VAS_NEW_COLS: Array<TableDataCell> = [
  { title: 'trid', key: 'tariffCode', width: '92px' },
  { title: 'Charge name', key: 'chargeNameEN', width: '105px' },
  {
    title: 'Mode Of Transport',
    key: 'modeOfTransportNameEN',
    width: '100px'
  },
  {
    title: 'UoM of VAS',
    key: 'uoMOfVASNameEN',
    width: '111px'
  },
  { title: 'Currency', key: 'currency', width: '100px' },
  {
    title: 'Market Rate',
    key: 'marketRate',
    width: '108px',
    formatRenderer: {
      decimalNumber: {
        zeroIsEmpty: true
      } as DecimalNumberOption
    }
  },
  {
    title: 'MAX',
    key: 'max',
    width: '100px',
    formatRenderer: {
      numberFormat: true
    }
  },
  {
    title: 'MIN',
    key: 'min',
    width: '100px',
    formatRenderer: {
      numberFormat: true
    }
  },
  {
    title: '%Dif Max',
    key: 'differentMax',
    width: '96px',
    formatRenderer: {
      decimalNumber: {
        decimal: 4,
        suffix: '%'
      } as DecimalNumberOption
    }
  },
  {
    title: '%Dif MIN',
    key: 'differentMin',
    width: '96px',
    formatRenderer: {
      decimalNumber: {
        decimal: 4,
        suffix: '%'
      } as DecimalNumberOption
    }
  },
  {
    title: 'Cost Average',
    key: 'costAverage',
    width: '120px',
    formatRenderer: {
      numberFormat: true
    }
  },
  {
    title: 'New Rate',
    key: 'newRate',
    width: '120px',
    rightStick: true,
    formatRenderer: {
      numberFormat: true
    }
  },
  {
    title: '%Markup',
    key: 'markup',
    width: '147px',
    rightStick: true,
    formatRenderer: {
      markup: true
    }
  },
  {
    title: 'Markup Flat',
    key: 'flat',
    width: '147px',
    rightStick: true,
    formatRenderer: {
      flat: true
    }
  },
  {
    title: 'Remark',
    key: 'remark',
    width: '300px',
    rightStick: true,
    formatRenderer: {
      tooltipDefault: true
    }
  }
];
export const BLC_NEW_COLS: Array<TableDataCell> = [
  { title: 'trid', key: 'tariffCode', width: '92px' },
  { title: 'Charge name', key: 'chargeNameEN', width: '105px' },
  {
    title: 'Mode Of Transport',
    key: 'modeOfTransportNameEN',
    width: '100px'
  },
  { title: 'UoM of BLC', key: 'uoMOfTransportNameEN', width: '111px' },
  { title: 'Currency', key: 'currency', width: '100px' },
  {
    title: 'Market Rate',
    key: 'marketRate',
    width: '108px',
    formatRenderer: {
      decimalNumber: {
        zeroIsEmpty: true
      } as DecimalNumberOption
    }
  },
  {
    title: 'MAX',
    key: 'max',
    width: '100px',
    formatRenderer: {
      numberFormat: true
    }
  },
  {
    title: 'MIN',
    key: 'min',
    width: '100px',
    formatRenderer: {
      numberFormat: true
    }
  },
  {
    title: '%Dif Max',
    key: 'differentMax',
    width: '96px',
    formatRenderer: {
      decimalNumber: {
        decimal: 4,
        suffix: '%'
      } as DecimalNumberOption
    }
  },
  {
    title: '%Dif MIN',
    key: 'differentMin',
    width: '96px',
    formatRenderer: {
      decimalNumber: {
        decimal: 4,
        suffix: '%'
      } as DecimalNumberOption
    }
  },
  {
    title: 'Cost Average',
    key: 'costAverage',
    width: '120px',
    formatRenderer: {
      numberFormat: true
    }
  },
  {
    title: 'New Rate',
    key: 'newRate',
    width: '120px',
    rightStick: true,
    formatRenderer: {
      numberFormat: true
    }
  },
  {
    title: '%Markup',
    key: 'markup',
    width: '147px',
    rightStick: true,
    formatRenderer: {
      markup: true
    }
  },
  {
    title: 'Markup Flat',
    key: 'flat',
    width: '147px',
    rightStick: true,
    formatRenderer: {
      flat: true
    }
  },
  {
    title: 'Remark',
    key: 'remark',
    width: '300px',
    rightStick: true,
    formatRenderer: {
      tooltipDefault: true
    }
  }
];
