import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServerApi } from './utils/environment';

@Injectable({
  providedIn: 'root'
})
export class PublicServicesService {

  constructor(
    private http: HttpClient
  ) { }

  public getArticle(id_article) : Observable<any>{
    return this.http
        .get(`${ServerApi.PublicRoute}/public/article/${id_article}`);
  }

  public getAllArticles(articleName, categoryName) : Observable<any>{
    let searchQuery = "";
    if(articleName)searchQuery+= `?title=${articleName}`;
    if(categoryName){
      if(articleName)searchQuery+= "&& ";else searchQuery += "?"
      searchQuery+= `category=${categoryName}`;
    }
    return this.http.get(`${ServerApi.PublicRoute}/public/articles${searchQuery}`);
  }

  public getAllCategories() : Observable<any>{
    return this.http.get(`${ServerApi.PublicRoute}/public/categories`);
  }
}
