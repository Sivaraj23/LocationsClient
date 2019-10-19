import { API_URL } from './../../shared/url';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FindnearbylocationService {


  constructor(private http: HttpClient) { }


  fetchLocations(id, total): Observable<any> {
    if (total == null)
      total = 0;
    return this.http.get(API_URL.locations + id + "?limit=" + total);
  }
}
