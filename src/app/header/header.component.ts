import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public news:any= [];
  public limitedNews: any;
  public size = 30;
  public shownews:any;
  public url:string='';
  public displayNews:any;
  public urls: any=[];
  public finalNews: any=[];
  constructor(
   private httpClient : HttpClient
  ) { }
  ngOnInit(): void {
    
    this.getApis();
 }

  getApis(){
    this.httpClient.get('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty').
    subscribe(response =>{
      alert("||hi||");
      console.log("Api Called");
      this.news=response;
      this.limitedNews=this.news.slice(0, this.size)
      this.limitedNews.map((data: any)=>{
        this.shownews = data;
        this.url ='https://hacker-news.firebaseio.com/v0/item/' + this.shownews + '.json?print=pretty';
        this.urls.push(this.url)
        // console.log(this.url);
      },(err:HttpErrorResponse)=>{console.log(err)})
      }
    );
    this.urls.map((element:any) => {

      this.httpClient.get(element).subscribe(res=>{
        this.displayNews =  res;
        // console.log(this.displayNews);
        this.finalNews.push(this.displayNews)
      },(err:HttpErrorResponse)=>{console.log(err)})
      
      
    });
   
    
  
  }

  

}


