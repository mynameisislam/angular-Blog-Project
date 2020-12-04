import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { SearchBlogsComponent } from './components/search-blogs/search-blogs.component';
import { BlogComponent } from './components/blog/blog.component';
import { NavComponent } from './components/nav/nav.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { EditBlogComponent } from './components/edit-blog/edit-blog.component';
import { ProfileComponent } from './components/profile/profile.component';
import { BlogCardComponent } from './components/blog-card/blog-card.component';
import { PaginationComponent } from './components/pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBlogsComponent,
    BlogComponent,
    AppComponent,
    MainComponent,
    NavComponent,
    SignInComponent,
    SignUpComponent,
    EditBlogComponent,
    ProfileComponent,
    BlogCardComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
