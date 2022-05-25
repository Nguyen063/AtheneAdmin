import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Blog } from '../model/blog';
import { BlogService } from '../service/blog.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update-blog',
  templateUrl: './update-blog.component.html',
  styleUrls: ['./update-blog.component.css']
})
export class UpdateBlogComponent implements OnInit {

  selectedId: any;
  blogs: any;
  errMessage: string="";
  blog: Blog=new Blog();

    constructor(private _service: BlogService, private _toast:ToastrService , private _router: Router) { }
  
    ngOnInit(): void {
     this.getBlogs();

    }
    getBlogs(){
      this._service.getBlogs().subscribe({
        next: data => this.blogs=data,
        error: err=> this.errMessage=err
      })
    }
  onSelect(data:any):void{
    this._router.navigate(['/update-blog', data.id])
  }
  isSelect(data:any){
    return data.id===this.selectedId;
  }
 
  submitData(form: NgForm){
  
    if(this.blog._id==""){
      this._service.postBlog(this.blog).subscribe(res=>{
        let resData=JSON.parse(JSON.stringify(res));
        if(resData.message ==="Success"){
          this._toast.success("Insert successfully!","Insert")
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
          this._toast.info("Update successfully!","Update")
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
  delete(id:any, form:NgForm){
    if(confirm("Are you sure you want to delete this product?")== true){
    this._service.deleteBlog(id).subscribe(res=>{
      let resData=JSON.parse(JSON.stringify(res));
      if(resData.message==="Success"){
  this._toast.warning("Delete successfully!","Delete",{
    timeOut: 5000,
    progressBar:false
  })
  this.onReset(form);
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
