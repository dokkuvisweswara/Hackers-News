import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-datashow',
  templateUrl: './datashow.component.html',
  styleUrls: ['./datashow.component.css']
})
export class DatashowComponent implements OnInit {
  @Input() news:any=[];
  @Input() i:any=0;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
//   navigateToParticulare() {
//     this.router.navigateByUrl(`/component/${this.news.id}`);
//  }
}
