import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import Blog from "src/app/utils/blogs";
import { PublicServicesService } from 'src/app/public-services.service';


@Component({
  selector: "app-blog",
  templateUrl: "./blog.component.html",
  styleUrls: ["./blog.component.css"],
})
export class BlogComponent implements OnInit {
  constructor(
    private _activeRouter: ActivatedRoute,
    private ps : PublicServicesService
  ) {}
  id_article: string;
  blog: Blog;
  error;
  ngOnInit() {
    this._activeRouter.params.subscribe((params) => {
      this.id_article = params._id;
      this.ps.getArticle(this.id_article).subscribe((res : any)=>{
        console.log(res.data.article);
        this.blog = res.data.article;
        console.log(this.blog.coverUrl);
      },
      (error)=>{
        console.log(error);
        this.error = {
          status: 404,
          message: "not found"
        };
      }
      )
      
      
      
    });
  }
}
