import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news/news.service';
@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {

  articles: object[] = [];
  
  constructor(private news: NewsService) { }

  ngOnInit(): void {
    this.news.getNews().subscribe(
      (listData) => { this.articles=listData; },
      (error) => { 
        this.articles=[
          {
            error: "news could not be retrieved"
          }
        ]; 
        console.log(error); 
      });
    }
  }


