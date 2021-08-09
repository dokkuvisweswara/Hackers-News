import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-datashow',
  templateUrl: './datashow.component.html',
  styleUrls: ['./datashow.component.css']
})
export class DatashowComponent implements OnInit {
  @Input() news:any=[];
  @Input() i:any=0;
  constructor() { }

  ngOnInit(): void {
  }

}
