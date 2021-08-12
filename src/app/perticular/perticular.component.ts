import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-perticular',
  templateUrl: './perticular.component.html',
  styleUrls: ['./perticular.component.css']
})
export class PerticularComponent implements OnInit {
  public itemId: any;
  public itemurl: any;
  itemobj:any={};
  kids: any=[];
  kidsurl:any;
  kidsurls: any=[];
  finalkidsarray: any=[];
  finalres: any=[];
  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
     this.itemId = this.route.snapshot.paramMap.get('id');
    this.itemurl =`https://hacker-news.firebaseio.com/v0/item/${this.itemId}.json?print=pretty`;
    this.http.get(this.itemurl).subscribe(keys=>{
      this.itemobj=keys;
      this.kids = this.itemobj.kids.slice(0,20);
      this.kids.map((res:any)=>{
        this.kidsurl=`https://hacker-news.firebaseio.com/v0/item/${res}.json?print=pretty`;
        this.kidsurls.push(this.kidsurl);   
    });
    this.kidsurls.map((elements:any, index:any, array:[])=>{
      this.http.get(elements).subscribe((res:any)=>{
        this.finalkidsarray.push(res);
        var hours = Math.floor(res.time / 60);  
  var minutes = res.time % 60;
  console.log(hours + ":" + minutes);
      })
    })
    });
    
    
  }

}
