import { TableDataCell } from "src/app/models/base-data-list";

export const CONTRACT_LIST_COLS: Array<TableDataCell> = [
  {
    title: 'CONTRACT ID ',
    key: 'code',
    width: '160px',
    nzShowSort: true,
    cellRenderClass: 'nv-text-primary-400 nv-pointer',
    formatRenderer: {
      templateID: true
    }
  },
  {
    title: 'CONTRACT NO.',
    key: 'contractNumber',
    width: '160px',
    nzShowSort: true,
    cellRenderClass: 'nv-text-primary-400 nv-pointer',
    formatRenderer: {
      templateContractNO: true
    }
  },
  {
    title: "Customer's Abr Name",
    key: 'customerFullName',
    width: '250px',
    nzShowSort: true,
    formatRenderer: {
      templateTextLongDotThree: 18
    }
  },
  {
    title: 'SALESMAN',
    key: 'salesManUserName',
    width: '150px',
    nzShowSort: true,
    formatRenderer: {
      templateTextLongDotThree: 18
    }
  },
  {
    title: 'CREDIT LIMIT',
    key: 'creditLimited',
    width: '150px',
    nzShowSort: true,
    formatRenderer: {
      templateCreditLimited: true
    }
  },
  {
    title: 'CREDIT TERM',
    key: 'creditTerm',
    width: '100px',
    nzShowSort: true,
    formatRenderer: {
      templateCreditTerm: true
    }
  },
  {
    title: 'CONTRACT DURATION',
    key: 'validFrom',
    width: '180px',
    nzShowSort: true,
    formatRenderer: {
      templateContractDuration: true
    }
  },
  {
    title: 'CREATED BY',
    key: 'createBy',
    width: '150px',
    nzShowSort: true
  },
  {
    title: 'CREATED DATE',
    key: 'createAt',
    width: '150px',
    nzShowSort: true,
    formatRenderer: {
      templateCreatedDate: true
    }
  },
  {
    title: 'STATUS',
    key: 'status',
    width: '120px',
    headerRenderClass: 'nv-text-center nv-justify-center',
    cellRenderClass: 'nv-text-center',
    sortKey: 'sortStatus',
    nzShowSort: true,
    filterConfigs: {
      required: false,
      type: 'text'
    },
    formatRenderer: {
      templateStatus: true
    }
  }
];
