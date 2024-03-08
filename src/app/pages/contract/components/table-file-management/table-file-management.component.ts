import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { take, timer } from 'rxjs';
import { AbsBaseDataListComponent } from 'src/app/abstracts/components/base-data-list/base-data-list.component';
import { Utils } from 'src/app/utils/utils';
import { CommonService } from '../../services/base-common.service';
import { TableFileManagementService } from '../../customer/services/table-file-management.service';

@Component({
  selector: 'app-table-file-management',
  templateUrl: './table-file-management.component.html',
  styleUrls: ['./table-file-management.component.less'],
  providers: [TableFileManagementService]
})
export class TableFileManagementComponent extends AbsBaseDataListComponent<any> {
  @Output() onChangeTableFile: EventEmitter<any> = new EventEmitter<any>(null);
  lengthTemp: number = 0;
  @Input() isEdit: boolean = false;
  @Input() isAnnex: boolean = false;
  @Input() set data(value: Array<any>) {
    this.lengthTemp = value.length;
    this._data = value;

    if (value?.length >= 0 && this.currentTabService) {
      const resultFilterIsDelete = value.filter((item) => item.status != 1);

      this.currentTabService.setDataItems(resultFilterIsDelete);
    }
  }
  private _data: Array<any>;

  get tableData() {
    return this._data;
  }

  constructor(
    el: ElementRef,
    private tableFileManagementService: TableFileManagementService,
    private commonService: CommonService
  ) {
    super(el);
  }

  getDataListService() {
    this.currentTabService = this.tableFileManagementService;
    this.currentTabService.setColEdit(this.isEdit, this.isAnnex);
    this.currentTabService.setDataItems(this.tableData);
  }
  openFile(url: string): void {
    this.commonService.viewFile(url);
  }
  removeFile(item: any): void {
    const newData = structuredClone(this.tableData);
    const index = newData.findIndex((i) => i.objectKey == item.objectKey);
    if (index != -1) {
      newData[index].status = 1;
      this.data = newData;
    }

    this.onChangeTableFile.emit(newData);
  }
  download(item: any): void {
    this.commonService.downFile(item['objectKey'], item['name']);
  }
}
