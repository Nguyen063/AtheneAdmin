import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../service/transaction.service';

@Component({
  selector: 'app-transation-managerment',
  templateUrl: './transation-managerment.component.html',
  styleUrls: ['./transation-managerment.component.css']
})
export class TransationManagermentComponent implements OnInit {
  transactions:any;
  errMessage:string="";
  constructor(private _service: TransactionService) { }

  ngOnInit(): void {
    this.getTransaction();
  }
  getTransaction(){
    this._service.getTransaction().subscribe({
      next: data => this.transactions=data,
      error: err=> this.errMessage=err
    })
  }
}
