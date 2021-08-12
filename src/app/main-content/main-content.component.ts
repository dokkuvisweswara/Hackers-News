import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent {
  public news:any= [];
  public limitedNews: any;
  public size = 30;
  public shownews:any;
  public url:string='';
  public displayNews:any;
  public urls: any=[];
  public finalNews: any=[];
  minutes: number=0;
  hours: number=0;
  conert_time:number=0;

  constructor( private newsService: NewsService, private httpClient:HttpClient) { }

  ngOnInit(): void {
    this.newsService.getNews().subscribe(response =>{
      console.log("2");
      this.news=response;this.limitedNews=this.news.slice(0, this.size)
      this.limitedNews.map((data: any)=>{
        this.shownews = data;
        this.url ='https://hacker-news.firebaseio.com/v0/item/' + this.shownews + '.json?print=pretty';
        this.urls.push(this.url)
      },(err:HttpErrorResponse)=>{console.log(err)});
      this.urls.map((element:any) => {
        this.httpClient.get(element).subscribe((res:any)=>{
          this.displayNews =  res;
          this.finalNews.push(this.displayNews);
          this.conert_time=this.finalNews.time;
          // this.finalNews.map((element:any)=>{
          //   this.conert_time=element.time;
          //   console.log(this.conert_time); 
          //   this.hours = Math.floor((this.conert_time) / 60);
          //   this.minutes = this.conert_time % 60;
          // })   
        },(err:HttpErrorResponse)=>{console.log(err)});
        
      });
    });
   
  }

}
