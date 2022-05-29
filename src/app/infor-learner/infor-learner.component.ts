import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ManageService } from '../service/manage.service';

@Component({
  selector: 'app-infor-learner',
  templateUrl: './infor-learner.component.html',
  styleUrls: ['./infor-learner.component.css']
})
export class InforLearnerComponent implements OnInit {

  selectedId: any;
  tutors: any;
  errMessage: string=""

  constructor(private _service:ManageService,  private _activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.getTutor();
    this._activatedRouter.paramMap.subscribe(
      (param)=>{
        let id=param.get('id')
        if(id!=null){
          this.selectedId= id;
        }
      }
    )
  }
  getTutor(){
    this._service.getTutors().subscribe({
      next:data => this.tutors=data,
      error : err=> this.errMessage=err
    })
   }
}
