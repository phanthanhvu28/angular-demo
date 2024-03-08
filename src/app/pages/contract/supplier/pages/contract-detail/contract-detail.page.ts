import { Component, Injector, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { isNil } from 'ng-zorro-antd/core/util';
import { takeUntil } from 'rxjs';
import { AbsBaseContractComponent } from '../../../components';

import { StatusEnumContract } from '../../../enums';
import {
  ModalAnnexListFullscreenComponent,
  // ModalCreateEditAnnexComponent,
  // ModalCreateEditContractComponent,
  TableAnnexListComponent
} from '../../components';
import ContractData, { DataFilterContract } from '../../models/contract.model';
import { TableFileManagementComponent } from '../../../components/table-file-management/table-file-management.component';
import { AnnexService, ContractService } from '../../services';
import { DataFilterAnnex } from '../../models/annex.model';

@Component({
  selector: 'app-contract-detail',
  templateUrl: './contract-detail.page.html',
  styleUrls: ['./contract-detail.page.less'],
  providers: [ContractService]
})
export class ContractDetailPage extends AbsBaseContractComponent {
  protected currentUserLogin: any;

  constructor(
    injector: Injector,
    private route: ActivatedRoute,
    private router: Router,
    private contractService: ContractService,
    // private contractUploadService: ContractUploadService,
    private annexService: AnnexService,
  ) {
    super(injector, contractService);
    this.route.paramMap
      .pipe(takeUntil(this.destroy$))
      .subscribe((params: ParamMap) => {
        this.id = params.get('id');
        this.getData(this.id);
      });
    //this.currentUserLogin = this._authService.getCurrentUserParse();
    this.contractService.filterSelection$
      .pipe(takeUntil(this.destroy$))
      .subscribe((res) => {
        this.filterSelection = res?.data;
      });
    this.contractService.dataDetail$
      .pipe(takeUntil(this.destroy$))
      .subscribe((res) => {
        if (isNil(res)) {
          return;
        }
        this.dataDetail = res.data;
      });

    this.annexService.filterSelection$
      .pipe(takeUntil(this.destroy$))
      .subscribe((res) => {
        if (isNil(res)) {
          return;
        }
        this.fillerAnnex = res.data;
      });
  }
  status: string = 'New';
  id: string;
  fillerAnnex: DataFilterAnnex;
  filterSelection: DataFilterContract;
  isVisibleRejectContractModal: boolean = false;
  dataDetail: ContractData;
  statusEnum = StatusEnumContract;
  // @ViewChild('modalCreateContract')
  // modalCreateContract: ModalCreateEditContractComponent;
  @ViewChild('modalAnnexListFullscreen')
  modalAnnexListFullscreen: ModalAnnexListFullscreenComponent;
  // @ViewChild('modalCreateEditAnnex')
  // modalCreateEditAnnex: ModalCreateEditAnnexComponent;
  // @ViewChild('tableAnnexList') tableAnnexList: TableAnnexListComponent;
  @ViewChild('tableFileManagement')
  tableFileManagement: TableFileManagementComponent;
  ngOnInit(): void {
    //this.contractService.getFillerUpload();
    this.contractService.dataDetail$
      .pipe(takeUntil(this.destroy$))
      .subscribe((res) => {
        if (isNil(res)) {
          return;
        }
        this.dataDetail = res.data;
        this.dataDetail.getFiles = res.data.getFiles.filter(
          (item) => !item.isDeleted
        );
      });
  }
  getData(id) {
    this.contractService.getDetail(id);
  }
  goBack(): void {
    this.router.navigate(['../'], {
      relativeTo: this.route
    });
  }
  funcSubmit(): void {
    this.nvMessageService.showConfirmMessage(
      {
        title: 'Submit',
        content: `<div class="nv-body-14-regular nv-text-neutral-600">
                  Do you want to submit  contract <strong>‘${this.id}’?</strong>
                </div>`
      },
      {
        onClickConfirm: () => {
          this.contractService.submit(this.id);
        }
      }
    );
  }
  funcRecall(): void {
    this.nvMessageService.showConfirmMessage(
      {
        title: 'Recall',
        content: `<div class="nv-body-14-regular nv-text-neutral-600">
                  Do you want to recall  contract <strong>‘${this.id}’?</strong>
                </div>`
      },
      {
        onClickConfirm: () => {
          this.contractService.recall(this.id);
        }
      }
    );
  }
  funcApproval(): void {
    this.nvMessageService.showConfirmMessage(
      {
        title: 'Approval',
        content: `<div class="nv-body-14-regular nv-text-neutral-600">
                  Do you want to approval  contract <strong>‘${this.id}’?</strong>
                </div>`
      },
      {
        onClickConfirm: () => {
          this.contractService.approval(this.id);
        }
      }
    );
  }
  funcReject(): void {
    this.isVisibleRejectContractModal = true;
  }
  onClickConfirmReject(declineReason: string): void {
    this.contractService.reject(this.id, declineReason);
  }
  funcDelete(): void {
    this.nvMessageService.showConfirmMessage(
      {
        title: 'Delete',
        content: `<div class="nv-body-14-regular nv-text-neutral-600">
                  Do you want to delete  contract <strong>‘${this.id}’?</strong>
                </div>`
      },
      {
        onClickConfirm: () => {
          this.contractService.delete(this.dataDetail.code);
        }
      }
    );
  }

  refresh() {
    this.getData(this.id);
  }
  refreshAnnex() {
    setTimeout(() => {
      //this.tableAnnexList.getTableData();
    }, 1000);
  }
  showCreateAnnex(): void {
    this.annexService.getFillerUpload();
    //this.modalCreateEditAnnex.show();
  }
  showModalAnnexListFullscreen() {
    this.modalAnnexListFullscreen.showModal();
  }
}
