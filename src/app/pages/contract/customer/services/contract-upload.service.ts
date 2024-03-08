import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, of, takeUntil } from 'rxjs';
import { ContractResponse, ResultDataAction } from '../../models';
import { AbsBaseContractService } from '../../services';
import ContractData from '../models/contract-data.model';
import {
  DataFilterContract,
  FilterUpload
} from '../models/filter-upload.model';
import { isNil } from 'ng-zorro-antd/core/util';
import { VcNotificationService } from '@shared/services';
import { Router } from '@angular/router';
import { ERROR_MESSAGE } from '../../const';
import { ApiUploadContract } from '../apis';

@Injectable({
  providedIn: 'root'
})
export class ContractUploadService extends AbsBaseContractService {
  private subjectFilterSelection = new BehaviorSubject<
    FilterUpload<DataFilterContract>
  >(null);
  private subjectCreateCustomer = new BehaviorSubject<any>(null);
  private subjectDataCustomerSelect = new BehaviorSubject<
    ContractResponse<ContractData>
  >(null);

  filterSelection$: Observable<FilterUpload<DataFilterContract>> =
    this.subjectFilterSelection.asObservable();
  createCustomer$: Observable<ResultDataAction> = this.subjectCreateCustomer;

  dataCustomerSelect$: Observable<ContractResponse<ContractData>> =
    this.subjectDataCustomerSelect;

  constructor(
    private api: ApiUploadContract,
    private vcNotificationService: VcNotificationService,
    private router: Router
  ) {
    super();
  }
  setFilterSelection(value: FilterUpload<DataFilterContract>): void {
    this.subjectFilterSelection.next(value);
  }
  setCreateCustomer(value): void {
    this.subjectCreateCustomer.next(value);
  }
  setDataCustomerSelect(value): void {
    this.subjectDataCustomerSelect.next(value);
  }
  getFilterUploadContract(): void {
    this.api
      .getFillerUpload()
      .pipe(takeUntil(this.destroy$))
      .subscribe((res) => {
        this.setFilterSelection(res);
      });
  }

  getDataCustomer(id) {
    this.api
      .getDataSelectCustomer(id)
      .pipe(takeUntil(this.destroy$))
      .subscribe((res) => {
        this.setDataCustomerSelect(res);
      });
  }
  uploadFile(file: any, tempId: string): Observable<ResultDataAction> {
    return this.api.uploadFileContract(file, tempId);
  }
}
