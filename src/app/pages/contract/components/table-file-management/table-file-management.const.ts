import { TableDataCell } from '@models/base-data-list';
export function getTableContractCols(
  isAnnex: boolean,
  isEdit: boolean
): Array<TableDataCell> {
  return [
    {
      title: 'FILE NAME ',
      key: 'name',
      width: '170px',
      formatRenderer: {
        templateHyperlinkFile: true
      },
      nzShowSort: false,
      nzShowFilter: false
    },
    {
      title: 'TYPE OF DOCUMENT',
      key: 'typeOfDocumentName',
      width: '150px',
      nzShowSort: false,
      isHidden: isAnnex,
      nvHidable: !isAnnex,
      nzShowFilter: false
    },
    {
      title: 'UPLOAD DATE',
      key: 'uploadDate',
      width: '120px',
      formatRenderer: {
        date: 'dd/MM/yyyy'
      },
      nzShowSort: false,
      nzShowFilter: false
    },
    {
      title: 'UPLOAD BY',
      key: 'uploadBy',
      width: '80px',
      nzShowSort: false,
      nzShowFilter: false
    },
    {
      title: 'ACTION',
      key: 'item',
      width: '120px',
      headerRenderClass: 'nv-text-center nv-justify-center',
      cellRenderClass: 'nv-text-center',
      nzShowSort: false,
      nzShowFilter: false,
      isHidden: !isEdit,
      nvHidable: isEdit,
      formatRenderer: {
        templateAction: true
      }
    },
    {
      title: 'ACTION',
      key: 'item',
      width: '120px',
      headerRenderClass: 'nv-text-center nv-justify-center',
      cellRenderClass: 'nv-text-center',
      nzShowSort: false,
      nzShowFilter: false,
      isHidden: isEdit,
      nvHidable: !isEdit,
      formatRenderer: {
        templateActionDownload: true
      }
    }
  ];
}
