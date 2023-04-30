import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PostModel, ProfileModel } from '../models/profile-model';


const baseUrl = environment.baseUrl;

@Injectable({
  providedIn: 'root'
})

export class ServerhttpService {
  
  constructor(private http: HttpClient) {}

  // private subject = new BehaviorSubject<ProfileModel>(null);

  // countryUnitVietnam$: Observable<ProfileModel> = this.subject.asObservable();

  public getProfile() : Observable<ProfileModel> {
   return this.http
      .get<ProfileModel>(`${baseUrl}/profile`)
      .pipe(
        catchError((err) => {
          const message = 'Could not load Costings';
          console.log(message, err);
          return throwError(() => new Error(err));
        })        
      )
  }

  public getPosts() : Observable<any> {
    return this.http
       .get<any>(`${baseUrl}/posts`)
       .pipe(
         catchError((err) => {
           const message = 'Could not load post';
           console.log(message, err);
           return throwError(() => new Error(err));
         })        
       )
   }

   public addPosts(data:{}): Observable<any>{
    return this.http
       .post<any>(`${baseUrl}/posts`,data)
       .pipe(
         catchError((err) => {
           const message = 'Could not add post';
           console.log(message, err);
           return throwError(() => new Error(err));
         })        
       )
   }

}
