import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClassManageService } from '../service/class-manage.service';
import { TransactionService } from '../service/transaction.service';

@Component({
  selector: 'app-class-detail',
  templateUrl: './class-detail.component.html',
  styleUrls: ['./class-detail.component.css']
})
export class ClassDetailComponent implements OnInit {
  selectedId: any;
  selectedId1: any;
  classManages:any;
  transactions:any;
  errMessage: string=""
  constructor(private _service: ClassManageService, private _activatedRouter: ActivatedRoute, private _router: Router, private _service1:TransactionService) { }

  ngOnInit(): void {
    this.getClass();
    this._activatedRouter.paramMap.subscribe(
      (param)=>{
        let id=param.get('id')
        if(id!=null){
          this.selectedId= id;
        }
      }
    )

    this._activatedRouter.paramMap.subscribe(
      (param)=>{
        let id=param.get('UserID')
        if(id!=null){
          this.selectedId1= id;
        }
      }
    )


  }
  getClass(){
    this._service.getClass().subscribe({
      next: data => this.classManages=data,
      error: err=> this.errMessage=err
    })
  }
  getTransaction(){
    this._service1.getTransaction().subscribe({
      next: data => this.transactions=data,
      error: err=> this.errMessage=err
    })
  }
  goBack(): void {
    this._router.navigate(['/class-manager', { id: this.selectedId }])
  }

  onSelectLearner(data:any):void{
    this._router.navigate(['/class-manager/info-learner', data.id])
  }

   onSelectTutor(data:any):void{
    this._router.navigate(['/class-manager/info-tutor', data.id])
  }
  isSelect(data:any){
    return data.id===this.selectedId;
  }
  isSelect1(data:any){
    return data.id===this.selectedId1;
  }
}
