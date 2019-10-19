import { API_URL } from './../../shared/url';
import { Injectable } from '@angular/core';

import { HttpClient, HttpEventType } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private http: HttpClient) { }

  postFile(formData): Observable<any> {
    return this.http.post(API_URL.csvUpload, formData, {
      reportProgress: true,
      observe: 'events'
    })
  }


}
