import { Component, OnInit } from '@angular/core';
import { ManageService } from '../service/manage.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {

  constructor(private _service: ManageService) { }
learners: any;
tutors:any;
errMessage: string=""
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
}
