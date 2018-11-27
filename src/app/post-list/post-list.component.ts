import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  

 posts=[
  	{
  		title:'Mon Premier Post',
  		content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  		loveIts:0,
  		dontloveIts:0,
  		created_at : new Date()
  	},
  	{
  		title:'Mon Second Post',
  		content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  		loveIts:0,
  		dontloveIts:0,
  		created_at: new Date()
  	},
  	{
  		title:'Mon Troisième Post',
  		content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  		loveIts:0,
  		dontloveIts:0,
  		created_at: new Date()
  	}
  ];

  constructor() { }

  ngOnInit() {
  }

}
