import { Component, OnInit } from '@angular/core';
import { NewsService } from './news.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HackersNews';
  news: any=[];
  constructor( private newsServices: NewsService){

  }
  ngOnInit(): void{
    this.newsServices.getNews().subscribe(response =>{
      this.news=response;
      
    });
    
  }
  
  
}
