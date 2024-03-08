import { TableDataCell } from '@models/base-data-list';
export const ANNEX_LIST_COLS: Array<TableDataCell> = [
  {
    title: 'ANNEX ID ',
    key: 'code',
    width: '160px',
    nzShowSort: true,
    cellRenderClass: 'nv-text-primary-400 nv-pointer',
    formatRenderer: {
      templateID: true
    }
  },
  {
    title: 'ANNEX NO.',
    key: 'annexNumber',
    width: '160px',
    nzShowSort: true,
    formatRenderer: {
      templateTextLongDotThree: true
    }
  },
  {
    title: 'CONTRACT ID ',
    key: 'contractCode',
    width: '160px',
    cellRenderClass: 'nv-text-primary-400 nv-pointer',
    formatRenderer: {
      templateLinkToContract: true
    }
  },
  {
    title: 'SUPPLIER',
    key: 'supplierFullName',
    width: '250px',
    nzShowSort: true,
    formatRenderer: {
      templateTextLongDotThree: true
    }
  },
  {
    title: 'ANNEX TYPE',
    key: 'annexTypeName',
    sortKey: 'annexType',
    width: '150px',
    nzShowSort: true,
    filterConfigs: {
      type: 'selection',
      filterKey: 'annexType'
    },
    formatRenderer: {
      annexTypeTemplate: true
    }
  },
  {
    title: 'ANNEX DURATION',
    key: 'uploadDate',
    width: '160px',
    formatRenderer: {
      templateAnnexDuration: true
    },
    filterConfigs: {
      type: 'range-date',
      startRangeKey: 'validFrom',
      endRangeKey: 'validTo'
    }
  },
  {
    title: 'OPEX IN CHARGE',
    key: 'opexFullName',
    width: '160px',
    nzShowSort: true,
    formatRenderer: {
      templateTextLongDotThree: true
    }
  },
  {
    title: 'CREATED BY',
    key: 'createBy',
    width: '150px',
    nzShowSort: true,
    isHidden: true
  },
  {
    title: 'CREATED DATE',
    key: 'createDate',
    width: '120px',
    nzShowSort: true,
    formatRenderer: {
      templateCreatedDate: true
    },
    filterConfigs: {
      type: 'date'
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
      type: 'selection',
      isMulti: true
    },
    formatRenderer: {
      templateStatus: true
    }
  }
];
