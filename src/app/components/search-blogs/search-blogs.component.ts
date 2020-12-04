import { Component, OnInit } from "@angular/core";
import Blog from "src/app/utils/blogs";
import { PublicServicesService } from "src/app/public-services.service";
import Category from "src/app/utils/categories";
import { Location } from "@angular/common";
import { ActivatedRoute, Router } from "@angular/router";
@Component({
  selector: "app-search-blogs",
  templateUrl: "./search-blogs.component.html",
  styleUrls: ["./search-blogs.component.css"],
})
export class SearchBlogsComponent implements OnInit {
  errorCategory: any;
  errorBlog: any;

  constructor(
    private _activeRouter: ActivatedRoute,
    private publicService: PublicServicesService,
    private location: Location,
    private _router: Router
  ) {}
  id_article: string;
  blogs: Blog;
  categories: Category;
  title;
  categoryName;
  pages;
  pageNumber;
  ngOnInit() {
    this._activeRouter.queryParams.subscribe((qParams) => {
      this.title = qParams.title;
      this.categoryName = qParams.category;
      this.pageNumber = qParams.page;
      this.publicService.getAllArticles(this.title, this.categoryName).subscribe(
        (res: any) => {
          this.blogs = res.data.articles;
          this.pages = res.data.pages;
        },
        (error) => {
          this.errorBlog = error;
        }
      );
      this.publicService.getAllCategories().subscribe(
        (res: any) => {
          this.categories = res.data.categories;
        },
        (error) => {
          this.errorCategory = error;
        }
      );
    });
  }
  changeCategory(name) {
    if(!name)return this._router.navigateByUrl(``);
    this._router.navigateByUrl(`search_blogs/?category=${name}`);
  }
}
