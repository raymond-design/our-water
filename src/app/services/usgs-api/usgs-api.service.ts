import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
  getHucData(huc: string) {
      return this.http.get(`http://localhost:3000/api/usgs/huc?huc=${huc}`);
  }
}
