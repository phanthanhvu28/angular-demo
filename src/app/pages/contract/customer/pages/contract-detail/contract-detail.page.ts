import { Component, Injector, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { NvMessageService } from '@common-components/base-modal-message/services/nv-message.service';
import { isNil } from 'ng-zorro-antd/core/util';
import { takeUntil } from 'rxjs';
import { AuthService } from 'src/app/guard/services/auth.service';

import { StatusEnumContract } from '../../../enums';
import { ApiContract } from '../../apis';
// import {
//   ModalAnnexListFullscreenComponent,
//   ModalCreateEditAnnexComponent,
//   ModalCreateEditContractComponent,
//   TableAnnexListComponent,
//   TableFileManagementComponent
// } from '../../components';
import ContractData from '../../models/contract-data.model';
import {
  DataFilterAnnex,
  DataFilterContract
} from '../../models/filter-upload.model';
import { ContractService, ContractUploadService } from '../../services';
import { AnnexService } from '../../services/annex.service';
import { AbsBaseContractComponent } from '../../../components';
import { ModalCreateEditContractComponent } from '../../components';

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
    private apiContract: ApiContract,
    private contractService: ContractService,
    private contractUploadService: ContractUploadService,
    private annexService: AnnexService,
    //private _authService: AuthService
  ) {
    super(injector, contractService);
    this.route.paramMap
      .pipe(takeUntil(this.destroy$))
      .subscribe((params: ParamMap) => {
        this.id = params.get('id');
        this.getData(this.id);
      });
   // this.currentUserLogin = this._authService.getCurrentUserParse();
    this.contractUploadService.filterSelection$
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
  @ViewChild('modalCreateContract')
  modalCreateContract: ModalCreateEditContractComponent;
  // @ViewChild('modalAnnexListFullscreen')
  // modalAnnexListFullscreen: ModalAnnexListFullscreenComponent;
  // @ViewChild('modalCreateEditAnnex')
  // modalCreateEditAnnex: ModalCreateEditAnnexComponent;
  // @ViewChild('tableAnnexList') tableAnnexList: TableAnnexListComponent;

  ngOnInit(): void {
    //this.contractUploadService.getFilterUploadContract();
    //this.annexService.getFillerUpload();
  }
  getData(id) {
    this.apiContract
      .getDetail(id)
      .pipe(takeUntil(this.destroy$))
      .subscribe((res) => {
        this.dataDetail = res.data;
        this.dataDetail.getFiles = res.data.getFiles.filter(
          (item) => !item.isDeleted
        );
      });
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
          //this.contractService.submit(this.id);
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
          //this.contractService.recall(this.id);
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
          //this.contractService.approval(this.id);
        }
      }
    );
  }
  funcReject(): void {
    this.isVisibleRejectContractModal = true;
  }
  onClickConfirmReject(declineReason: string): void {
    //this.contractService.reject(this.id, declineReason);
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
          //this.contractService.delete(this.dataDetail.code);
        }
      }
    );
  }

  refresh() {
    this.getData(this.id);
  }
  refreshAnnex() {
    //this.tableAnnexList.getTableData();
  }
  showCreateAnnex(): void {
    //this.modalCreateEditAnnex.show();
  }
  modalCreateEditContract(id) {
    //this.modalCreateContract.show(id);
  }
}
