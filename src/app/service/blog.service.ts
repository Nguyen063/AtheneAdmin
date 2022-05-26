import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Blog } from '../model/blog';

const baseUrl="http://localhost:3000"

@Injectable({
  providedIn: 'root'
})
export class BlogService {


  constructor(private _http: HttpClient) { }

  getBlogs(): Observable<Blog[]>{
    return this._http.get<Blog[]>(`${baseUrl}/update-blog`).pipe(
      retry(3),
      catchError(this.handleError)
    )
  }


  postBlog(data: any){
return this._http.post(`${baseUrl}/update-blog`,data)
  }

  updateBlog(id:any, data:any){
    return this._http.patch(`${baseUrl}/${id}`,data)
  }
  deleteBlog(id:any){
    return this._http.delete(`${baseUrl}/update-blog/${id}`);
     
  }
  handleError(error: HttpErrorResponse){
    return throwError(()=>{new Error(error.message)})
  };
  
}
