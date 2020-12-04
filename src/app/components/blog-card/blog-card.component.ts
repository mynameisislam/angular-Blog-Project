import { Component, Input, OnInit } from '@angular/core';
import Blog from 'src/app/utils/blogs';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.css']
})
export class BlogCardComponent implements OnInit {

  constructor() { }

  @Input() blog : Blog;
  ngOnInit() {
  }

}
