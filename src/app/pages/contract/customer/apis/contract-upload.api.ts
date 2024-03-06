import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {
  DataFilterContract,
  FilterUpload
} from '../models/filter-upload.model';
import { Observable } from 'rxjs';
import { ResultDataAction } from '../../models';

const baseUrl = `${environment.config.API_URL.CONTRACT_CUSTOMER.BASE_URL}/api/v1`;
const endPoint = 'contract';

@Injectable({
  providedIn: 'root'
})
export class ApiUploadContract {
  constructor(private http: HttpClient) {}
  public getFillerUpload(): Observable<FilterUpload<DataFilterContract>> {
    return this.http.post<FilterUpload<DataFilterContract>>(
      `${baseUrl}/${endPoint}/filter/upload`,
      {}
    );
  }
  public uploadFileContract(file: File, tempId): Observable<ResultDataAction> {
    const body = new FormData();
    body.append('Files', file);
    body.append('TempId', tempId);
    return this.http.post<any>(`${baseUrl}/${endPoint}/upload`, body);
  }

  public getDataSelectCustomer(idCustomer): Observable<any> {
    return this.http.get<any>(
      `${baseUrl}/trialContract/${idCustomer}/customer`
    );
  }
}
