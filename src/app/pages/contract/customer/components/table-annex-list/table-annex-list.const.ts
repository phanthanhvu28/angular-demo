import { TableDataCell } from '@models/base-data-list';
export const TABLE_ANNEX_LIST_COLS: Array<TableDataCell> = [
  {
    title: 'ANNEX ID ',
    key: 'code',
    width: '180px',
    cellRenderClass: 'nv-text-primary-400 nv-pointer',
    formatRenderer: {
      templateHyperlinkFile: true
    }
  },
  {
    title: 'ANNEX TYPE',
    key: 'annexTypeName',
    width: '160px',
    nzShowSort: true,
    sortKey: 'annexType',
    filterConfigs: {
      type: 'selection',
      filterKey: 'annexType'
    }
  },
  {
    title: 'ANNEX DURATION',
    key: 'validFrom',
    width: '120px',
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
    title: 'SALESMAN',
    key: 'salesManFullName',
    width: '120px',
    nzShowSort: true
  },
  {
    title: 'CREATED DATE',
    key: 'createDate',
    width: '120px',
    nzShowSort: true,
    formatRenderer: {
      date: 'dd/MM/yyyy hh:mm'
    },
    filterConfigs: {
      type: 'date'
    }
  },
  {
    title: 'STATUS',
    key: 'status',
    width: '80px',
    headerRenderClass: 'nv-text-center nv-justify-center',
    cellRenderClass: 'nv-text-center',
    nzShowSort: true,
    formatRenderer: {
      templateStatus: true
    },
    filterConfigs: {
      type: 'selection'
    }
  }
];
export const TABLE_ANNEX_LIST_FULLSCREEN_COLS: Array<TableDataCell> = [
  {
    title: 'ANNEX ID ',
    key: 'code',
    width: '160px',
    cellRenderClass: 'nv-text-primary-400 nv-pointer',
    formatRenderer: {
      templateHyperlinkFile: true
    }
  },
  {
    title: 'CONTRACT ID ',
    key: 'contractCode',
    width: '160px',
    cellRenderClass: 'nv-text-primary-400 nv-pointer',
    formatRenderer: {
      templateHyperlinkFile: true
    }
  },
  {
    title: 'ANNEX NO.',
    key: 'annexNumber',
    width: '120px'
  },
  {
    title: "Customer's Abr Name ",
    key: 'customerFullName',
    width: '250px',
    formatRenderer: {
      templateText: true
    }
  },
  {
    title: 'ANNEX TYPE',
    key: 'annexTypeName',
    sortKey: 'annexType',
    width: '120px',
    nzShowSort: true,
    filterConfigs: {
      type: 'selection',
      filterKey: 'annexType'
    }
  },
  {
    title: 'ANNEX DURATION',
    key: 'uploadDate',
    width: '180px',
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
    title: 'CREATE BY',
    key: 'createBy',
    width: '120px',
    nzShowSort: true,
    isHidden: true
  },

  {
    title: 'CREATED DATE',
    key: 'createDate',
    width: '120px',
    nzShowSort: true,
    formatRenderer: {
      date: 'dd/MM/yyyy hh:mm'
    },
    filterConfigs: {
      type: 'date'
    }
  },
  {
    title: 'STATUS',
    key: 'status',
    width: '100px',
    headerRenderClass: 'nv-text-center nv-justify-center',
    cellRenderClass: 'nv-text-center',
    sortKey: 'sortStatus',
    nzShowSort: true,
    formatRenderer: {
      templateStatus: true
    },
    filterConfigs: {
      type: 'selection',
      isMulti: true
    }
  }
];
