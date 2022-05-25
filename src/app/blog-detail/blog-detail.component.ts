import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from '../model/blog';
import { BlogService } from '../service/blog.service';
import {ToastrService} from 'ngx-toastr'

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



edit(data: Blog){
  this._service.updateBlog(this.blog._id, this.blog).subscribe(res => {
    let resData=JSON.parse(JSON.stringify(res));
    if(resData.message ==="Success"){
      this._toast.info("Update successfully!","Update")
      this.getBlogs();
      this.blog=data;
    } else{
      alert("Fail!")
    }
  })
  }
  
  


delete(id:any){
  if(confirm("Are you sure you want to delete this product?")== true){
  this._service.deleteBlog(id).subscribe(res=>{
    let resData=JSON.parse(JSON.stringify(res));
    if(resData.message==="Success"){
this._toast.warning("Delete successfully!","Delete",{
  timeOut: 5000,
  progressBar:false
})
 this.getBlogs();
      } else{
        alert("Fail!")
      }
    }
  )
  
  }
}
}
