import { Component, OnInit } from '@angular/core';
import { ManageService } from '../service/manage.service';

@Component({
  selector: 'app-infor-learner',
  templateUrl: './infor-learner.component.html',
  styleUrls: ['./infor-learner.component.css']
})
export class InforLearnerComponent implements OnInit {

  tutors: any;
  errMessage: string=""
  constructor(private _service:ManageService) { }

  ngOnInit(): void {
    this.getTutor();
  }
  getTutor(){
    this._service.getTutors().subscribe({
      next:data => this.tutors=data,
      error : err=> this.errMessage=err
    })
   }
}
