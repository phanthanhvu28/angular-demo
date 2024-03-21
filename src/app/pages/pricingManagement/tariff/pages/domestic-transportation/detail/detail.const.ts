import { TableDataCell } from '@models/base-data-list';
import { DecimalNumberOption } from 'src/app/pipes/decimalNumber.pipe';
import { TariffHelper } from '../../../utils/tariff-helper.service';

// TRANSPORT_COL_PROVIDER
export const TRANSPORT_VIEW_DETAIL_COLS: Array<TableDataCell> = [
  { title: 'trid', key: 'tariffCode', width: '92px' },
  { title: 'Charge name', key: 'chargeNameEN', width: '130px' },
  {
    title: 'Mode Of Transport',
    key: 'modeOfTransportNameEN',
    width: '100px'
  },
  { title: 'Rail Service Type', key: 'railServiceType', width: '95px' },
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
      decimalNumber: {
        decimal: 2,
        suffix: '%'
      } as DecimalNumberOption
    }
  },
  {
    title: 'Markup Flat',
    key: 'flat',
    width: '147px',
    rightStick: true,
    formatRenderer: {
      numberFormat: true
    }
  }
];
export const TRANSPORT_EDIT_DETAIL_COLS: Array<TableDataCell> = [
  ...TariffHelper.spliceAndInsert(
    TRANSPORT_VIEW_DETAIL_COLS,
    TRANSPORT_VIEW_DETAIL_COLS.length - 2,
    2,
    ...[
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
        title: 'markup flat',
        key: 'flat',
        width: '147px',
        rightStick: true,
        formatRenderer: {
          flat: true
        }
      }
    ]
  )
];
export const TRANSPORT_APPROVAL_DETAIL_COLS: Array<TableDataCell> = [
  {
    title: '',
    width: '44px',
    formatRenderer: {
      selection: true
    }
  },
  ...TariffHelper.spliceAndInsert(
    TRANSPORT_VIEW_DETAIL_COLS,
    TRANSPORT_VIEW_DETAIL_COLS.length - 3,
    0,
    {
      title: 'Reason',
      key: 'reasons',
      width: '235px',
      formatRenderer: {
        tooltip: true
      }
    }
  ),
  {
    title: 'Status',
    headerRenderClass: 'nv-text-center nv-justify-center',
    key: 'processAction',
    width: '72px',
    rightStick: true,
    formatRenderer: {
      status: true
    }
  },
  {
    title: 'Actions',
    width: '100px',
    rightStick: true,
    formatRenderer: {
      actionGroup: true
    }
  }
];
export const TRANSPORT_REJECTED_VIEW_DETAIL_COLS: Array<TableDataCell> = [
  ...TariffHelper.spliceAndInsert(
    TRANSPORT_VIEW_DETAIL_COLS,
    TRANSPORT_VIEW_DETAIL_COLS.length - 3,
    0,
    {
      title: 'Reason',
      key: 'reasons',
      width: '235px',
      formatRenderer: {
        tooltip: true
      }
    }
  )
];
export const TRANSPORT_REJECTED_CHECK_DETAIL_COLS: Array<TableDataCell> = [
  {
    title: '',
    width: '44px',
    formatRenderer: {
      selection: true
    }
  },
  ...structuredClone(TRANSPORT_REJECTED_VIEW_DETAIL_COLS),
  {
    title: 'Status',
    headerRenderClass: 'nv-text-center nv-justify-center',
    key: 'processAction',
    width: '72px',
    rightStick: true,
    formatRenderer: {
      status: true
    }
  },
  {
    title: 'Actions',
    width: '100px',
    rightStick: true,
    formatRenderer: {
      actionGroup: true
    }
  }
];
export const TRANSPORT_REJECTED_CREATERE_DETAIL_COLS: Array<TableDataCell> = [
  ...TariffHelper.spliceAndInsert(
    TRANSPORT_EDIT_DETAIL_COLS,
    TRANSPORT_EDIT_DETAIL_COLS.length - 3,
    0,
    {
      title: 'Reason',
      key: 'reasons',
      width: '235px',
      formatRenderer: {
        tooltip: true
      }
    }
  )
];

// VAS_COL_PROVIDER
export const VAS_VIEW_DETAIL_COLS: Array<TableDataCell> = [
  { title: 'trid', key: 'tariffCode', width: '92px' },
  { title: 'Charge name', key: 'chargeNameEN', width: '105px' },
  {
    title: 'Mode Of Transport',
    key: 'modeOfTransportNameEN',
    width: '100px'
  },
  { title: 'Uom Of VAS', key: 'uoMOfVASNameEN', width: '111px' },
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
      decimalNumber: {
        decimal: 2,
        suffix: '%'
      } as DecimalNumberOption
    }
  },
  {
    title: 'Markup Flat',
    key: 'flat',
    width: '147px',
    rightStick: true,
    formatRenderer: {
      numberFormat: true
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
export const VAS_EDIT_DETAIL_COLS: Array<TableDataCell> = [
  ...TariffHelper.spliceAndInsert(
    VAS_VIEW_DETAIL_COLS,
    VAS_VIEW_DETAIL_COLS.length - 3,
    2,
    ...[
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
        title: 'markup flat',
        key: 'flat',
        width: '147px',
        rightStick: true,
        formatRenderer: {
          flat: true
        }
      }
    ]
  )
];
export const VAS_APPROVAL_DETAIL_COLS: Array<TableDataCell> = [
  {
    title: '',
    width: '44px',
    formatRenderer: {
      selection: true
    }
  },
  ...TariffHelper.spliceAndInsert(
    VAS_VIEW_DETAIL_COLS,
    VAS_VIEW_DETAIL_COLS.length - 4,
    0,
    {
      title: 'Reason',
      key: 'reasons',
      width: '235px',
      formatRenderer: {
        tooltip: true
      }
    }
  ),
  {
    title: 'Status',
    headerRenderClass: 'nv-text-center nv-justify-center',
    key: 'processAction',
    width: '72px',
    rightStick: true,
    formatRenderer: {
      status: true
    }
  },
  {
    title: 'Actions',
    width: '100px',
    rightStick: true,
    formatRenderer: {
      actionGroup: true
    }
  }
];
export const VAS_REJECTED_VIEW_DETAIL_COLS: Array<TableDataCell> = [
  ...TariffHelper.spliceAndInsert(
    VAS_VIEW_DETAIL_COLS,
    VAS_VIEW_DETAIL_COLS.length - 4,
    0,
    {
      title: 'Reason',
      key: 'reasons',
      width: '235px',
      formatRenderer: {
        tooltip: true
      }
    }
  )
];
export const VAS_REJECTED_CHECK_DETAIL_COLS: Array<TableDataCell> = [
  {
    title: '',
    width: '44px',
    formatRenderer: {
      selection: true
    }
  },
  ...structuredClone(VAS_REJECTED_VIEW_DETAIL_COLS),
  {
    title: 'Status',
    headerRenderClass: 'nv-text-center nv-justify-center',
    key: 'processAction',
    width: '72px',
    rightStick: true,
    formatRenderer: {
      status: true
    }
  },
  {
    title: 'Actions',
    width: '100px',
    rightStick: true,
    formatRenderer: {
      actionGroup: true
    }
  }
];
export const VAS_REJECTED_CREATERE_DETAIL_COLS: Array<TableDataCell> = [
  ...TariffHelper.spliceAndInsert(
    VAS_EDIT_DETAIL_COLS,
    VAS_EDIT_DETAIL_COLS.length - 4,
    0,
    {
      title: 'Reason',
      key: 'reasons',
      width: '235px',
      formatRenderer: {
        tooltip: true
      }
    }
  )
];
// BLC_COL_PROVIDER
export const BLC_VIEW_DETAIL_COLS: Array<TableDataCell> = [
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
      decimalNumber: {
        decimal: 2,
        suffix: '%'
      } as DecimalNumberOption
    }
  },
  {
    title: 'Markup Flat',
    key: 'flat',
    width: '147px',
    rightStick: true,
    formatRenderer: {
      numberFormat: true
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
export const BLC_EDIT_DETAIL_COLS: Array<TableDataCell> = [
  ...TariffHelper.spliceAndInsert(
    BLC_VIEW_DETAIL_COLS,
    BLC_VIEW_DETAIL_COLS.length - 3,
    2,
    ...[
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
        title: 'markup flat',
        key: 'flat',
        width: '147px',
        rightStick: true,
        formatRenderer: {
          flat: true
        }
      }
    ]
  )
];
export const BLC_APPROVAL_DETAIL_COLS: Array<TableDataCell> = [
  {
    title: '',
    width: '44px',
    formatRenderer: {
      selection: true
    }
  },
  ...TariffHelper.spliceAndInsert(
    BLC_VIEW_DETAIL_COLS,
    BLC_VIEW_DETAIL_COLS.length - 4,
    0,
    {
      title: 'Reason',
      key: 'reasons',
      width: '235px',
      formatRenderer: {
        tooltip: true
      }
    }
  ),
  {
    title: 'Status',
    headerRenderClass: 'nv-text-center nv-justify-center',
    key: 'processAction',
    width: '72px',
    rightStick: true,
    formatRenderer: {
      status: true
    }
  },
  {
    title: 'Actions',
    width: '100px',
    rightStick: true,
    formatRenderer: {
      actionGroup: true
    }
  }
];
export const BLC_REJECTED_VIEW_DETAIL_COLS: Array<TableDataCell> = [
  ...TariffHelper.spliceAndInsert(
    BLC_VIEW_DETAIL_COLS,
    BLC_VIEW_DETAIL_COLS.length - 4,
    0,
    {
      title: 'Reason',
      key: 'reasons',
      width: '235px',
      formatRenderer: {
        tooltip: true
      }
    }
  )
];
export const BLC_REJECTED_CHECK_DETAIL_COLS: Array<TableDataCell> = [
  {
    title: '',
    width: '44px',
    formatRenderer: {
      selection: true
    }
  },
  ...structuredClone(BLC_REJECTED_VIEW_DETAIL_COLS),
  {
    title: 'Status',
    headerRenderClass: 'nv-text-center nv-justify-center',
    key: 'processAction',
    width: '72px',
    rightStick: true,
    formatRenderer: {
      status: true
    }
  },
  {
    title: 'Actions',
    width: '100px',
    rightStick: true,
    formatRenderer: {
      actionGroup: true
    }
  }
];
export const BLC_REJECTED_CREATERE_DETAIL_COLS: Array<TableDataCell> = [
  ...TariffHelper.spliceAndInsert(
    BLC_EDIT_DETAIL_COLS,
    BLC_EDIT_DETAIL_COLS.length - 4,
    0,
    {
      title: 'Reason',
      key: 'reasons',
      width: '235px',
      formatRenderer: {
        tooltip: true
      }
    }
  )
];
