import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  BASE_URL = "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty";
  constructor( private http: HttpClient ) { }

  getNews(): Observable<any> {
return this.http.get(this.BASE_URL);
  }
}
