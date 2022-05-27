import { Component, OnInit } from '@angular/core';
import { FeedbackService } from '../service/feedback.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {


  feedbacks:any;
  errMessage:string="";


  constructor(private _service:FeedbackService) { }

  ngOnInit(): void {
    this.getFeedback();
  }
  getFeedback(){
    this._service.getFeedback().subscribe({
      next: data => this.feedbacks=data,
      error: err=> this.errMessage=err
    })
  }

}
