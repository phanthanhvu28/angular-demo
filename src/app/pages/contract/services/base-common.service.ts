import { Inject, Injectable, InjectionToken } from '@angular/core';
import { isNil } from 'ng-zorro-antd/core/util';
import { takeUntil } from 'rxjs';
import { ApiCommon } from '../apis';
import { AbsBaseContractService } from './base-contract.service';
import { TYPE_CONTRACT } from '../components';


@Injectable({
  providedIn: 'root'
})
export class CommonService extends AbsBaseContractService {
  constructor(
    private api: ApiCommon,
    @Inject(TYPE_CONTRACT) private typeContract: string
  ) {
    super();
  }

  viewFile(file: string): void {
    const apiCustom =
      this.typeContract === 'customer'
        ? this.api.viewFileCustomer(file)
        : this.api.viewFileSupplier(file);
    this.api
      .viewFileCustomer(file)
      .pipe(takeUntil(this.destroy$))
      .subscribe((res) => {
        if (isNil(res)) {
          return;
        }
        window.open(res.data);
      });
  }
  downFile(file: string, name: string): void {
    this.api
      .viewFileCustomer(file)
      .pipe(takeUntil(this.destroy$))
      .subscribe((res) => {
        if (isNil(res)) {
          return;
        }

        const link = document.createElement('a');
        link.href = res.data;
        link.download = name;
        link.target = '_blank';
        link.style.display = 'none';
        // link.crossorigin = 'anonymous';
        document.body.appendChild(link);
        link.click();
        // document.body.removeChild(link);
      });
  }

  toDataURL(url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.onload = function () {
      const reader = new FileReader();
      reader.onloadend = function () {
        callback(reader.result);
      };
      reader.readAsDataURL(xhr.response);
    };
    xhr.open('GET', url);
    xhr.responseType = 'blob';
    xhr.send();
  }
}
