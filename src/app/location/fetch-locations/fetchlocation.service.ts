import { API_URL } from './../../shared/url';
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchlocationService {

  constructor(private http: HttpClient) { }


  fetchLocations(): Observable<any> {
    return this.http.get(API_URL.locations);
  }

}
