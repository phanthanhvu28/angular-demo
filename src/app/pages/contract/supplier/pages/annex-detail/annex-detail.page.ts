import { Component, Injector, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { isNil } from 'ng-zorro-antd/core/util';
import { takeUntil } from 'rxjs';
import { AuthService } from 'src/app/guard/services/auth.service';
import { AbsBaseContractComponent } from '../../../components';
import { ICON_SCOPE_OF_WORK } from '../../../const';
import { StatusEnumContract } from '../../../enums';
import { CommonService } from '../../../services/base-common.service';
//import { ModalCreateEditAnnexComponent } from '../../components';
import AnnexData, { DataFilterAnnex } from '../../models/annex.model';
import { AnnexService } from '../../services';
import { ApiAnnex } from '../../api';
import { CostingService } from '../../services/costing.service';

@Component({
  selector: 'app-annex-detail',
  templateUrl: './annex-detail.page.html',
  styleUrls: ['./annex-detail.page.less'],
  providers: [AnnexService]
})
export class AnnexDetailPage extends AbsBaseContractComponent {
  protected currentUserLogin: any;
  SCOPE_OF_WORK_NAME = {
    DT: 'Domestic Transportation',
    FM: 'Freight Management',
    CC: 'Custom Clearance',
    WH: 'Warehouse'
  };
  costingDataReload: any;

  constructor(
    injector: Injector,
    private route: ActivatedRoute,
    private router: Router,
    private apiAnnex: ApiAnnex,
    private annexService: AnnexService,
    private commonService: CommonService,
    private _authService: AuthService,
  ) {
    super(injector, annexService);
    this.route.paramMap
      .pipe(takeUntil(this.destroy$))
      .subscribe((params: ParamMap) => {
        this.id = params.get('id');
        this.getData(this.id);
      });
    this.currentUserLogin = this._authService.getCurrentUserParse();

    this.annexService.filterSelection$
      .pipe(takeUntil(this.destroy$))
      .subscribe((res) => {
        if (isNil(res)) {
          return;
        }

        this.filterSelection = res.data;
      });
    this.watch();
  }
  status: string = 'New';
  id: string;
  ICON_SCOPE = ICON_SCOPE_OF_WORK;
  filterSelection: DataFilterAnnex;
  isVisibleRejectContractModal: boolean = false;

  dataDetail: AnnexData;
  statusEnum = StatusEnumContract;
  // @ViewChild('modalCreateAnnex')
  // modalCreateAnnex: ModalCreateEditAnnexComponent;

  ngOnInit(): void {
    //this.annexService.getFillerUpload();
  }
  getData(id) {
    this.annexService.getDetail(id);
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
                  Do you want to submit annex <strong>‘${this.id}’?</strong>
                </div>`
      },
      {
        onClickConfirm: () => {
          this.annexService.submit(this.id);
        }
      }
    );
  }
  funcRecall(): void {
    this.nvMessageService.showConfirmMessage(
      {
        title: 'Recall',
        content: `<div class="nv-body-14-regular nv-text-neutral-600">
                  Do you want to recall annex <strong>‘${this.id}’?</strong>
                </div>`
      },
      {
        onClickConfirm: () => {
          this.apiAnnex;
          this.annexService.recall(this.id);
        }
      }
    );
  }
  funcApproval(): void {
    this.nvMessageService.showConfirmMessage(
      {
        title: 'Approval',
        content: `<div class="nv-body-14-regular nv-text-neutral-600">
                  Do you want to approval annex <strong>‘${this.id}’?</strong>
                </div>`
      },
      {
        onClickConfirm: () => {
          this.annexService.approval(this.id);
        }
      }
    );
  }
  funcReject(): void {
    this.isVisibleRejectContractModal = true;
  }
  onClickConfirmReject(declineReason: string): void {
    this.annexService.reject(this.id, declineReason);
  }
  funcDelete(): void {
    this.nvMessageService.showConfirmMessage(
      {
        title: 'Delete',
        content: `<div class="nv-body-14-regular nv-text-neutral-600">
                  Do you want to delete annex <strong>‘${this.id}’?</strong>
                </div>`
      },
      {
        onClickConfirm: () => {
          this.annexService.delete(this.dataDetail.code);
        }
      }
    );
  }

  watch(): void {
    this.annexService.dataDetail$
      .pipe(takeUntil(this.destroy$))
      .subscribe((res) => {
        if (isNil(res)) {
          return;
        }

        this.dataDetail = res.data;
      });
  }
  refresh() {
    this.getData(this.id);
  }
  openFile(url: string) {
    this.commonService.viewFile(url);
  }
  modalCreateEditAnnex(id) {
    //this.modalCreateAnnex.show(id);
  }
  onDataDetailChange(newData: AnnexData): void {}
}
