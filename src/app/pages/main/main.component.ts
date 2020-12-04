import { Component, OnInit } from '@angular/core';
import { BlogComponent } from 'src/app/components/blog/blog.component';
import { EditBlogComponent } from 'src/app/components/edit-blog/edit-blog.component';
import { ProfileComponent } from 'src/app/components/profile/profile.component';
import { SearchBlogsComponent } from 'src/app/components/search-blogs/search-blogs.component';
import { SignInComponent } from 'src/app/components/sign-in/sign-in.component';
import { SignUpComponent } from 'src/app/components/sign-up/sign-up.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  public static route = {
    path: "",
    component: MainComponent,
    children:[
      {
        path: "blog/:_id",
        component: BlogComponent
      },
      {
        path: "search_blogs",
        component: SearchBlogsComponent
      },
      {
        path: "sign-in",
        component: SignInComponent
      },
      {
        path: "sign-up",
        component: SignUpComponent
      },
      {
        path: "edit-blog/:_id",
        component: EditBlogComponent
      },
      {
        path: "profile/:_id",
        component: ProfileComponent
      },
      {
        path: "**",
        redirectTo: "search_blogs"
      }
    ]
  }

  ngOnInit() {
  }

}
