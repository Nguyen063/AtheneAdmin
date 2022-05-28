import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ClassManageService } from '../service/class-manage.service';

@Component({
  selector: 'app-class-managerment',
  templateUrl: './class-managerment.component.html',
  styleUrls: ['./class-managerment.component.css']
})
export class ClassManagermentComponent implements OnInit {

  selectedId: any;
classManages:any;
errMessage: string=""
  constructor(private _service: ClassManageService , private _router: Router, private _toast:ToastrService) { }

  ngOnInit(): void {
    this.getClass();
  }
  getClass(){
    this._service.getClass().subscribe({
      next: data => this.classManages=data,
      error: err=> this.errMessage=err
    })
  }
  onSelect(data:any):void{
    this._router.navigate(['/class-manager', data.id])
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
  this.getClass();
  // this._router.navigateByUrl('/update-blog');
  } else{
  alert("Fail!")
  }
  }
  )
  
  }
  }
}
