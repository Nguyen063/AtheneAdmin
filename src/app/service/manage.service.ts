import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Learner, Tutor } from '../model/user';



const baseUrl="http://localhost:3000"
@Injectable({
  providedIn: 'root'
})
export class ManageService {

  constructor(private _http:HttpClient) { }

  getLearner(): Observable<Learner[]>{
    return this._http.get<Learner[]>(`${baseUrl}/learners`).pipe(
      retry(3),
      catchError(this.handleError)
    )

  }
  getTutors(): Observable<Tutor[]>{
    return this._http.get<Tutor[]>(`${baseUrl}/tutors`).pipe(
      retry(3),
      catchError(this.handleError)
    )

  }
  handleError(error:HttpErrorResponse){
    return throwError(()=>{new Error(error.message)})
  }
  delete(id:any){
    return this._http.delete(`${baseUrl}/new-class/${id}`);
     
  }
}


