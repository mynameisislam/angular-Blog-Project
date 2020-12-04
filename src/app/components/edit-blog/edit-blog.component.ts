import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Blog, { Blogs } from 'src/app/utils/blogs';

@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.css']
})
export class EditBlogComponent implements OnInit {

  constructor(private _activeRouter: ActivatedRoute) {}
  id_article: string;
  blog : Blog;
  ngOnInit() {
    this._activeRouter.params.subscribe((params) => {
      this.id_article = params._id;
      this.blog = Blogs.blogs.find((b)=> b._id == this.id_article);
    });
  }

}
