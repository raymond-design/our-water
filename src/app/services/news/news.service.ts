import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  //show 1 page for now
  //no arguments for now
  //remember time period must be within the last 30 days with a free api key
  getNews(): Observable<object[]> {
    return this.http.get<object[]>(`http://localhost:3000/api/news/news?query=water&sources=bbc-news&domains=bbc.co.uk&fromDate=${new Date(new Date().getTime() - 24*60*60*1000).toISOString().substr(0,10)}&toDate=${new Date().toISOString().substr(0,10)}&language=en&sortBy=relevancy&pageNum=1`);
}
}
