import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Class } from '../model/class';

const baseUrl="http://localhost:3000"

@Injectable({
  providedIn: 'root'
})

export class ClassManageService {

  constructor(private _http:HttpClient) { }

  getClass(): Observable<Class[]>{
    return this._http.get<Class[]>(`${baseUrl}/classManage`).pipe(
      retry(3),
      catchError(this.handleError)
    )

  }

  handleError(error:HttpErrorResponse){
    return throwError(()=>{new Error(error.message)})
  }

  delete(id:any){
    return this._http.delete(`${baseUrl}/class-manager/${id}`);
     
  }
}
