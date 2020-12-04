import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Author, { Authors } from 'src/app/utils/authors';
import Blog, { Blogs } from 'src/app/utils/blogs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private _activeRouter: ActivatedRoute) {}
  id_author: string;
  author : Author;
  blogs : Array<Blog>;
  ngOnInit() {
    this._activeRouter.params.subscribe((params) => {
      this.id_author = params._id;
      this.author = Authors.authors.find((a)=> a._id == this.id_author);
      this.blogs = Blogs.blogs.filter((b)=>b.author.email == this.author.email);
    });
  }

}
