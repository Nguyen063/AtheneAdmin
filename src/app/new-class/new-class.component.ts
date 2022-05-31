import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ManageService } from '../service/manage.service';

@Component({
  selector: 'app-new-class',
  templateUrl: './new-class.component.html',
  styleUrls: ['./new-class.component.css']
})
export class NewClassComponent implements OnInit {

  constructor(private _service: ManageService, private _router: Router, private _toast:ToastrService, private _activatedRouter: ActivatedRoute) { }

  selectedId: any;
learners: any;
tutors:any;
errMessage: string="";
detail:boolean=true;



  ngOnInit(): void {
    this.getLearner();
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
  



   viewDetail(){
    this.detail=!this.detail;
  }
  clickYes(){
    alert("Bạn đã gửi yêu cầu thành công");
    this.detail=!this.detail;
 
  }
  onSelect(data:any):void{
    this._router.navigate(['/new-class', data.id])
  }
  isSelect(data:any){
    return data.id===this.selectedId;
  }
  delete(id:any){
    if(confirm("Are you sure you want to delete this product?")== true){
    this._service.delete(id).subscribe(res=>{
      let resData=JSON.parse(JSON.stringify(res));
      if(resData.message==="Success"){
  this._toast.warning("Delete successfully!","Delete",{
    timeOut: 5000,
    progressBar:false
  });
  this.getLearner();
  this.getTutor();
  } else{
  alert("Fail!")
  }
  }
  )
  
  }
  }

}
