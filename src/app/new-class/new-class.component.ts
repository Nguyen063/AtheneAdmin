import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ManageService } from '../service/manage.service';

@Component({
  selector: 'app-new-class',
  templateUrl: './new-class.component.html',
  styleUrls: ['./new-class.component.css']
})
export class NewClassComponent implements OnInit {

  constructor(private _service: ManageService, private _router: Router) { }

  selectedId: any;
learners: any;
tutors:any;
errMessage: string="";
confirm:boolean=true;
  close:boolean=true;
  confirm1:boolean=true;

  ngOnInit(): void {
    this.getLearner();
    this.getTutor();
  }
  getLearner(){
    this._service.getLearner().subscribe({
      next:data => this.learners=data,
      error : err=> this.errMessage=err
    })
   }
   getTutor(){
    this._service.getTutors().subscribe({
      next:data => this.tutors=data,
      error : err=> this.errMessage=err
    })
   }
   onSelectLearner(data:any):void{
    this._router.navigate(['/new-class/forLearner', data.id])
  }

   onSelectTutor(data:any):void{
    this._router.navigate(['/new-class/forTutor', data.id])
  }
  isSelect(data:any){
    return data.id===this.selectedId;
  }
  openConfirm(){
    this.confirm=!this.confirm;
  }
  clickYes(){
    alert("Bạn đã gửi yêu cầu thành công");
    this.confirm=!this.confirm;
 
  }

  openConfirm1(){
    this.confirm1=!this.confirm1;
  }
}
