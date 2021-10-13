import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsgsApiService {

  constructor(private http: HttpClient) { }
  
  /**
   * 
   * @param huc has to be string to avoid leading 0s from being truncated!
   * remember to set right port for api
   */
  getHucData(huc: string): Observable<object[]> {
      return this.http.get<object[]>(`api/usgs/huc?huc=${huc}`);
  }
}
