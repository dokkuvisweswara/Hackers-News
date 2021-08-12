import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { NewsService } from './news.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HackersNews';
  news: any=[];
  constructor( private newsServices: NewsService, private apiservice: ApiService){

  }
  ngOnInit(): void{
    // this.newsServices.getNews().subscribe(response =>{
    //   this.news=response;
    //   console.log(response);
      
    // });
    console.log('HI');
    this.news=fetch('https://jsonplaceholder.typicode.com/users').then(response=>{
     return response;
    })
    
    
    // this.apiservice.getUsers().subscribe(data=>{
    //   console.log(data);
      
    // })
  }
  
  
}
