import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() myPost : any[] = [];
  
  @Input() posttitle: string;
  @Input() postcontent: string;
  @Input() postlove: number;
  @Input() postcreated: Date;
  
  AddLoveIt(){
  	return this.postlove + 1;
  }

  SubtractLoveIt(){
  	return this.postlove - 1;
  }


  constructor() { }

  ngOnInit() {
  }

    
}
