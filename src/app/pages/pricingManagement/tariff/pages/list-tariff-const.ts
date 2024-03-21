import { TableDataCell } from '@models/base-data-list';

export const TRANSPORT_LIST_COLS: Array<TableDataCell> = [
  { title: 'TARIFF ID', key: 'tariffCode', width: '100px',
    formatRenderer: {
      templateID: true
    } 
  },
  {
    title: 'CREATE DATE',
    key: 'createAt',
    width: '130px',
    formatRenderer: {
      date: 'dd/MM/YYYY'
    }
  },
  { title: 'CREATE By', key: 'createBy', width: '120px' },
  { title: 'Decline By', key: 'declineBy', width: '120px' },
  {
    title: 'Approved By',
    key: 'approvalBy',
    width: '120px',
    formatRenderer: {
      tooltip: true
    }
  },
  {
    title: 'Approved DATE',
    key: 'approvalAt',
    width: '130px',
    formatRenderer: {
      date: 'dd/MM/YYYY'
    }
  },
  {
    title: 'Valid DATE',
    key: 'validDate',
    width: '200px',
    formatRenderer: {
      range: ['validFrom', 'validTo']
    }
  },
  {
    title: 'status',
    key: 'status',
    width: '160px',
    headerRenderClass: 'nv-text-center',
    cellRenderClass: 'nv-text-center',
    formatRenderer: {
      template: true
    }
  }
];
export const VAS_LIST_COLS: Array<TableDataCell> =
  structuredClone(TRANSPORT_LIST_COLS);
export const BLC_LIST_COLS: Array<TableDataCell> =
  structuredClone(TRANSPORT_LIST_COLS);
