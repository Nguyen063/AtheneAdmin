import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Feedback } from '../model/feedback';


const baseUrl="http://localhost:3000"
@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private _http:HttpClient) { }

  getFeedback(): Observable<Feedback[]>{
    return this._http.get<Feedback[]>(`${baseUrl}/feedback`).pipe(
      retry(3),
      catchError(this.handleError)
    )

  }

  handleError(error:HttpErrorResponse){
    return throwError(()=>{new Error(error.message)})
  }
  
}




