import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ManageService } from '../service/manage.service';

@Component({
  selector: 'app-infor-tutor',
  templateUrl: './infor-tutor.component.html',
  styleUrls: ['./infor-tutor.component.css']
})
export class InforTutorComponent implements OnInit {

  selectedId: any;
  learners: any;
  errMessage: string=""
  constructor(private _service:ManageService,  private _activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.getLearner();
    this._activatedRouter.paramMap.subscribe(
      (param)=>{
        let id=param.get('id')
        if(id!=null){
          this.selectedId= id;
        }
      }
    )
  }
  getLearner(){
    this._service.getLearner().subscribe({
      next:data => this.learners=data,
      error : err=> this.errMessage=err
    })
   }
}
