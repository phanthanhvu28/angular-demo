import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild
} from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { isNil } from 'ng-zorro-antd/core/util';
import { Observable, distinctUntilChanged, takeUntil } from 'rxjs';
import { AbsBaseModalNewComponent } from 'src/app/abstracts/components/base-data-list/base-modal-new.component';
import ContractData, { FilesContract } from 'src/app/pages/contract/customer/models/contract-data.model';
import { DataFilterContract } from 'src/app/pages/contract/customer/models/filter-upload.model';
import { ContractService } from 'src/app/pages/contract/customer/services';



// import { AbsBaseModalNewComponent } from 'src/app/abstracts/components/base-data-list/base-modal-new.component';
// import { Utils } from 'src/app/utils/utils';
 import { NvValidators } from 'src/app/utils/validators';

// import { DropdownValue, DropdownValueCustomer } from '../../../models';
// import { FilesContract } from '../../models';
// import ContractData from '../../models/contract-data.model';
// import { DataFilterContract } from '../../models/filter-upload.model';
// import { ContractService, ContractUploadService } from '../../services';
// import { ModalUploadFileComponent } from '../../../components/modal-upload-file/modal-upload-file.component';
// import { TableFileManagementComponent } from '../../../components/table-file-management/table-file-management.component';
import { ContractCurrencyExchangeEnum, ContractDataEnum } from 'src/app/pages/contract/enums/contract-data.enum';
import { MessageEnumContract } from 'src/app/pages/contract/enums/contract-message.enum';
import { DropdownValueCustomer, DropdownValue } from 'src/app/pages/contract/models';
import { Utils } from 'src/app/utils/utils';
import { VcNotificationService } from '@shared/services';
import { NvMessageService } from '@common-components/base-modal-message/services/nv-message.service';

@Component({
  selector: 'app-modal-create-edit-contract',
  templateUrl: './modal-create-edit-contract.component.html',
  styleUrls: ['./modal-create-edit-contract.component.less'],
  providers: [ContractService]
})
export class ModalCreateEditContractComponent extends AbsBaseModalNewComponent {
  //@ViewChild('modalUploadFile') modalUploadFile: ModalUploadFileComponent;
  //@ViewChild('tableFileManagement')  tableFileManagement: TableFileManagementComponent;
  @Input() filter: DataFilterContract;
  @Input() id: string = null;
  @Input() dataDetail: ContractData;
  @Output() handelSubmit: EventEmitter<boolean> = new EventEmitter<boolean>();
  createContractForm: FormGroup;
  creditForm: FormGroup;
  get billingCycleFormArray(): FormArray {
    return this.creditForm.get('billingCycle') as FormArray;
  }
  get getCountFile(): number {
    return this.listFile.filter((file) => file.status != 1).length;
  }
  sizeModal: number | string = 820;
  isFullScreen: boolean = false;
  listFile: Array<FilesContract> = [];
  changeForm: boolean = false;
  now = new Date();
  loading$: Observable<boolean>;
  constructor(
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef,  
    private contractService: ContractService,
    // private contractUploadService: ContractUploadService,
     private vcNotificationService: VcNotificationService,
     private nvMessageService: NvMessageService
  ) {
    super();
    this.loading$ = this.contractService.loading$;
    this.watch();
  }

  initShow(args) {
    this.id = args;
    this.listFile = [];
    this.changeForm = false;

    this.initForm();
    if (args) {
      this.initFormUpload();
    }
    this.creditForm;
  }
  initFormUpload() {
    this.createContractForm.patchValue({
      customer: {
        label: this.dataDetail.customerFullName,
        value: this.dataDetail.customerCode
      },
      customerCode: this.dataDetail.customerCode,
      customerFullName: this.dataDetail.customerFullName,
      salesMan: {
        label: this.dataDetail.salesManFullName,
        value: this.dataDetail.salesManUserName
      },
      salesManFullName: this.dataDetail.salesManFullName,
      salesManUserName: this.dataDetail.salesManUserName,

      contractNumber: this.dataDetail.contractNumber,
      trialContract: this.dataDetail.trialContract,
      validRange: [this.dataDetail.validFrom, this.dataDetail.validTo],
      exchangeRatesType: this.dataDetail.exchangeRatesType,
      exchangeRates: {
        fromCurrency: ContractDataEnum.VND,
        toCurrency: ContractDataEnum.USD,
        currentRate: this.dataDetail.exchangeRates?.currentRate
      }
    });
    this.creditForm.patchValue({
      isCredit: this.dataDetail.isCredit,
      creditLimited:
        this.dataDetail.creditLimited === 0
          ? null
          : this.dataDetail.creditLimited,
      creditCurrency: {
        label: ContractDataEnum.VND,
        value: ContractDataEnum.VND
      },
      unitTerm: {
        label: ContractDataEnum.Day,
        value: ContractDataEnum.Day
      },
      creditTerm:
        this.dataDetail.creditTerm === 0 ? null : this.dataDetail.creditTerm
    });

    if (this.creditForm.get('isCredit').value) {
      if (this.dataDetail.billingCycle) {
        this.billingCycleFormArray.clear();
        this.dataDetail.billingCycle.forEach((element) => {
          this.billingCycleFormArray.push(
            this.fb.group({
              start: ['', NvValidators.requiredNumber],
              end: ['', NvValidators.requiredNumber]
            })
          );
        });
      }

      this.billingCycleFormArray.patchValue(
        this.conventDataBilling(this.dataDetail.billingCycle)
      );
    }

    this.listFile = [...this.dataDetail.getFiles];
  }
  initForm(): void {
    this.createContractForm = this.fb.group({
      customer: ['', NvValidators.required],
      customerCode: [''],
      customerFullName: [''],
      customerShortName: [''],
      salesManFullName: [''],
      salesManUserName: [''],
      salesMan: ['', NvValidators.required],
      contractNumber: ['', NvValidators.required],
      validFrom: [''],
      validTo: [''],
      validRange: [[], NvValidators.required],

      trialContract: [''],
      exchangeRatesType: [ContractCurrencyExchangeEnum.Fix],
      exchangeRates: this.fb.group({
        fromCurrency: [ContractDataEnum.VND],
        toCurrency: ContractDataEnum.USD,
        currentRate: [null, NvValidators.requiredNumber]
      })
    });
    this.creditForm = this.fb.group({
      creditLimited: ['', NvValidators.requiredNumber],
      creditCurrency: [
        {
          label: ContractDataEnum.VND,
          value: ContractDataEnum.VND
        }
      ],
      creditTerm: ['', NvValidators.requiredNumber],
      unitTerm: [
        {
          label: ContractDataEnum.Day,
          value: ContractDataEnum.Day
        }
      ],
      billingCycle: new FormArray([
        this.fb.group({
          start: ['', NvValidators.requiredNumber],
          end: ['', NvValidators.requiredNumber]
        })
      ]),
      isCredit: [true]
    });

    this.creditForm.controls.isCredit.valueChanges
      .pipe(distinctUntilChanged())
      .subscribe((newState: boolean) => {
        if (newState) {
          return;
        }
        this.resetErrorFormCredit();
        this.cdr.detectChanges();
      });

    this.createContractForm
      .get('exchangeRatesType')
      .valueChanges.pipe(distinctUntilChanged())
      .subscribe((value: string) => {
        if (value === ContractCurrencyExchangeEnum.Fix) {
          this.createContractForm.get('exchangeRates').enable();
          return;
        }
        this.createContractForm.get('exchangeRates').disable();
      });
  }
  onVisibleModalChange(e): void {}
  onSave(): void {
    const isCredit = this.creditForm.get('isCredit').value;

    if (isCredit) {
      
      Utils.deepEventForm(this.creditForm, 'markAsDirty');
      Utils.deepEventForm(this.creditForm, 'updateValueAndValidity');
    }
    Utils.deepEventForm(this.createContractForm, 'markAsDirty');
    Utils.deepEventForm(this.createContractForm, 'updateValueAndValidity');

    if (
      this.createContractForm.invalid ||
      (this.creditForm.invalid && isCredit)
    ) {
      return;
    }
    if (this.getCountFile == 0) {
      this.vcNotificationService.error(
        'Error',
        MessageEnumContract.NOT_FOUND_FILE
      );
      return;
    }
    this.getFormValue();

    const payload = {
      ...this.createContractForm.value,

      ...{
        ...this.creditForm.value,
        creditCurrency: isCredit
          ? this.getOptionValue(this.creditForm.get('creditCurrency').value)
          : null,
        unitTerm: isCredit
          ? this.getOptionValue(this.creditForm.get('unitTerm').value)
          : null,
        creditLimited: this.creditForm.get('creditLimited').value
          ? this.creditForm.get('creditLimited').value
          : 0,
        creditTerm: this.creditForm.get('creditTerm').value
          ? this.creditForm.get('creditTerm').value
          : 0,
        billingCycle: this.mapDataBilling(
          this.creditForm.get('billingCycle').value
        )
      },

      files: this.id
        ? this.listFile
        : this.listFile.filter((file) => file.status === 0)
    };

    // if (this.id) {
    //   this.contractService.upload(
    //     {
    //       ...payload,
    //       code: this.id
    //     },
    //     this.close.bind(this)
    //   );
    // } else {
    //   this.contractService.create(payload);
    // }
  }
  getFormValue() {
    const validRange = this.createContractForm.get('validRange');
    this.createContractForm.removeControl('customer');
    this.createContractForm.removeControl('salesMan');
    this.createContractForm.get('validFrom').setValue(validRange.value.at(0));
    this.createContractForm.get('validTo').setValue(validRange.value.at(1));
  }
  resetErrorFormCredit() {
    this.creditForm.get('creditLimited').setErrors(undefined);
    this.creditForm.get('creditLimited').markAsPristine();
    this.creditForm.get('creditTerm').setErrors(undefined);
    this.creditForm.get('creditTerm').markAsPristine();
  }
  selectCustomer(value: DropdownValueCustomer) {
    //this.contractUploadService.getDataCustomer(value.value.customerCode);
    this.createContractForm
      .get('customerCode')
      .setValue(value.value.customerCode);
    this.createContractForm.get('customerFullName').setValue(value.label);
    this.createContractForm
      .get('customerShortName')
      .setValue(value.value.customerShortName);
  }
  selectSaleMan(value: DropdownValue) {
    this.createContractForm.get('salesManUserName').setValue(value.value);
    this.createContractForm.get('salesManFullName').setValue(value.label);
  }

  getOptionValue(controlValue: DropdownValue): string {
    if (!controlValue || !controlValue?.value) {
      return '';
    }

    return controlValue.value;
  }
  addNewBillingNew() {
    const billingCycle = this.creditForm.get('billingCycle') as FormArray;
    if (!billingCycle) {
      return;
    }
    if (billingCycle.length === 4) {
      return;
    }
    billingCycle.push(
      this.fb.group({
       // start: ['', NvValidators.requiredNumber],
       // end: ['', NvValidators.requiredNumber]
      })
    );
  }
  removeBilling(index) {
    const billingCycle = this.creditForm.get('billingCycle') as FormArray;
    if (index === 0) {
      return;
    }

    billingCycle.removeAt(index);
  }
  mapDataBilling(
    array: Array<{
      start: number;
      end: number;
    }>
  ) {
    return array.map(
      (date) => `${date.start ? date.start : 0} - ${date.end ? date.end : 0}`
    );
  }
  conventDataBilling(array: Array<string>) {
    if (!array) {
      return [];
    }

    const days = array.map((i: string) => i.split('-').map((t) => t.trim()));
    const result = days.map((item) => {
      return {
        start: item[0],
        end: item[1]
      };
    });

    return result;
  }

  private watch(): void {
    // this.contractUploadService.dataCustomerSelect$
    //   .pipe(takeUntil(this.destroy$))
    //   .subscribe((res) => {
    //     if (!res || !res.data) {
    //       if (this.creditForm) {
    //         this.createContractForm?.get('trialContract').setValue('');

    //         this.billingCycleFormArray.clear();
    //         this.billingCycleFormArray.push(
    //           this.fb.group({
    //             start: ['', NvValidators.requiredNumber],
    //             end: ['', NvValidators.requiredNumber]
    //           })
    //         );
    //       }
    //       this.creditForm?.patchValue({
    //         creditCurrency: {
    //           label: ContractDataEnum.VND,
    //           value: ContractDataEnum.VND
    //         },
    //         creditLimited: null,
    //         creditTerm: null,
    //         unitTerm: {
    //           label: ContractDataEnum.Day,
    //           value: ContractDataEnum.Day
    //         }
    //       });

    //       return;
    //     }
    //     if (res && res.data) {
    //       if (res.data.billingCycle) {
    //         this.billingCycleFormArray.clear();
    //         res.data.billingCycle?.forEach((element) => {
    //           this.billingCycleFormArray.push(
    //             this.fb.group({
    //               start: ['', NvValidators.requiredNumber],
    //               end: ['', NvValidators.requiredNumber]
    //             })
    //           );
    //         });
    //       }

    //       this.createContractForm.patchValue({
    //         trialContract: res.data.code
    //       });
    //       this;
    //       this.creditForm.patchValue({
    //         billingCycle: this.conventDataBilling(res.data.billingCycle),
    //         creditCurrency: {
    //           label: res.data.creditCurrency || ContractDataEnum.VND,
    //           value: res.data.creditCurrency || ContractDataEnum.VND
    //         },
    //         creditLimited: res.data.creditLimited,
    //         creditTerm: res.data.creditTerm,
    //         unitTerm: {
    //           label: res.data.unitTerm || ContractDataEnum.Day,
    //           value: res.data.unitTerm || ContractDataEnum.Day
    //         }
    //       });
          
    //     }
    //   });
   
    this.contractService.createCustomer$
      .pipe(takeUntil(this.destroy$))
      .subscribe((res) => {
        if (isNil(res)) {
          return;
        }
        if (res.isError) {
          return;
        }

        this.close();
        this.handelSubmit.emit(true);
      });
  }
  fullscreenToggle(): void {
    this.isFullScreen = !this.isFullScreen;
    this.isFullScreen ? (this.sizeModal = '100vw') : (this.sizeModal = 820);
  }
  addFileOnTable($event: FilesContract): void {
    const newData: Array<FilesContract> = this.listFile.concat($event);
    this.listFile = newData;
    this.changeForm = true;
  }
  resetDataFile($event): void {
    this.changeForm = true;
    this.listFile = $event;
  }
  checkValidFromWithNow(fromDate: Date) {
    return new Date(fromDate).getTime() > new Date().getTime() ? true : false;
  }
  closeCheckChange() {
    const form1 = this.createContractForm.dirty;
    const form2 = this.creditForm.dirty;
    if (this.changeForm || form1 || form2) {
      this.nvMessageService.showConfirmMessage(
        {
          title: 'Leave page?',
          content: MessageEnumContract.CONTENT_LEAVE_PAGE
        },
        {
          onClickConfirm: () => {
            this.close();
          }
        }
      );
      return;
    }
    this.close();
  }
}
