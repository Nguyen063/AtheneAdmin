import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Transaction } from '../model/transaction';

const baseUrl="http://localhost:3000"

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private _http: HttpClient) { }
  getTransaction(): Observable<Transaction[]>{
    return this._http.get<Transaction[]>(`${baseUrl}/transaction`).pipe(
      retry(3),
      catchError(this.handleError)
    )

  }

  handleError(error:HttpErrorResponse){
    return throwError(()=>{new Error(error.message)})
  }
  
}
