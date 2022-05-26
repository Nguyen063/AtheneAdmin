import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from '../model/blog';
import { BlogService } from '../service/blog.service';
import {ToastrService} from 'ngx-toastr'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {
selectedId: any;
 
blogs: any;
errMessage: string="";
blog: Blog=new Blog();
file:any=null;
constructor(private _service: BlogService, private _activatedRouter: ActivatedRoute, private _router: Router, private _toast:ToastrService) { }

ngOnInit(): void {
  this.getBlogs();
  this._activatedRouter.paramMap.subscribe(
    (param)=>{
      let id=param.get('id')
      if(id!=null){
        this.selectedId= id;
      }
    }
  )


}
getBlogs(){
  this._service.getBlogs().subscribe({
    next: data => this.blogs=data,
    error: err=> this.errMessage=err
  })
}
goBack(): void {
  this._router.navigate(['/update-blog', { id: this.selectedId }])
}

onChange(event:any){
  if(event.target.files.length>0){ // console.log("File info:", event.target.files[0])
    this.file=event.target.files[0];}
    else{
      this.file=null;
    }
 
}

submitData(form: NgForm){
  // console.log("Form data: ", form.value);
  // console.log("Model: ", this.product);

  if(this.blog._id==""){
    this._service.postBlog(this.blog).subscribe(res=>{
      // console.log("Res: ", res);
      let resData=JSON.parse(JSON.stringify(res));
      if(resData.message ==="Success"){
        this._toast.success("Insert successfully!","Insert")
        // alert("Success!")
        this.getBlogs();
      } else{
        alert("Fail!")
      }
    })
  
  }
  else{
    this._service.updateBlog(this.blog._id, this.blog).subscribe(res => {
      let resData=JSON.parse(JSON.stringify(res));
      if(resData.message ==="Success"){
        // alert("Updated Success!");
        this._toast.info("Update successfully!","Update")
        this.onReset();
        this.getBlogs();
      } else{
        alert("Fail!")
      }
    })
  }
  
}

edit(data: Blog){
  this.blog=data;
}
  


delete(id:any,form:NgForm){
  if(confirm("Are you sure you want to delete this product?")== true){
  this._service.deleteBlog(id).subscribe(res=>{
    let resData=JSON.parse(JSON.stringify(res));
    if(resData.message==="Success"){
this._toast.warning("Delete successfully!","Delete",{
  timeOut: 5000,
  progressBar:false
});this.onReset(form);
this.getBlogs();
} else{
alert("Fail!")
}
}
)

}
}


onReset(form?: NgForm){
if(form)
form.reset();
this.blog=new Blog();
}
}
