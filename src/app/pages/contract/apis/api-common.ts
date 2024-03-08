import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResultDataAction } from '../models';

const baseUrlCustomer = `${environment.config.API_URL.CONTRACT_CUSTOMER.BASE_URL}/api/v1`;
const baseUrlSupplier = `${environment.config.API_URL.CONTRACT_SUPPLIER.BASE_URL}/api/v1`;
@Injectable({
  providedIn: 'root'
})
export class ApiCommon {
  constructor(private http: HttpClient) {}
  public viewFileCustomer(url: string): Observable<{
    data: string;
  }> {
    return this.http.post<{ data: string }>(
      `${baseUrlCustomer}/common/s3/view-file`,
      {
        objectKey: url
      }
    );
  }
  public viewFileSupplier(url: string): Observable<{
    data: string;
  }> {
    return this.http.post<{ data: string }>(
      `${baseUrlSupplier}/common/s3/view-file`,
      {
        objectKey: url
      }
    );
  }
  public uploadFileSupplier(file: File, tempId): Observable<ResultDataAction> {
    const body = new FormData();
    body.append('Files', file);
    body.append('TempId', tempId);
    return this.http.post<any>(`${baseUrlSupplier}/common/upload`, body);
  }
  public uploadFileCustomer(file: File, tempId): Observable<ResultDataAction> {
    const body = new FormData();
    body.append('Files', file);
    body.append('TempId', tempId);
    return this.http.post<any>(`${baseUrlCustomer}/contract/upload`, body);
  }
}
