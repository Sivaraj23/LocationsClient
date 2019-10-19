import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FindnearbylocationService {

  
  constructor(private http: HttpClient) { }


  fetchLocations(id,total):Observable <any>{
    if(total==null)
    total=0;
    return this.http.get("http://localhost:3000/locations/"+id+"?limit="+total);
  }
}
