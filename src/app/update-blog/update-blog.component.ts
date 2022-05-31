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
  name:any;
  selectedId: any;
  blogs: any;
  errMessage: string="";
  blog: Blog=new Blog();
 file:any=null;
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
  onChange(event:any){
    if(event.target.files.length>0){ // console.log("File info:", event.target.files[0])
      this.file=event.target.files[0];}
      else{
        this.file=null;
      }

  }
  submitData(form: NgForm){

let formBlog=new FormData();
formBlog.append('name',form.value.name);
formBlog.append('id',form.value.id);
formBlog.append('author',form.value.author);
formBlog.append('content',form.value.content);
formBlog.append('title1',form.value.title1);
formBlog.append('content1',form.value.content1);
formBlog.append('title2',form.value.title2);
formBlog.append('content2',form.value.content2);
formBlog.append('title3',form.value.title3);
formBlog.append('content3',form.value.content3);
formBlog.append('thumbPath',this.file);
// formBlog.append('thumbPath1',this.file);
// formBlog.append('thumbPath2',this.file);



      this._service.postBlog(formBlog).subscribe(res=>{
        let resData=JSON.parse(JSON.stringify(res));
        if(resData.message ==="Success"){
          this._toast.success("Insert successfully!","Insert")
          this.getBlogs();
        } else{
          alert("Fail!")
        }
      });
      this.onReset(form);
      this.getBlogs();
    }

      onReset(form?: NgForm){
      if(form)
      form.reset();
      this.blog=new Blog();
      }

  Search(){
    if(this.name == ""){
      this.ngOnInit();
    }
    else{
      this.blogs = this.blogs.filter((res: { name: string; }) =>{
        return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
      });
    }
  }

      }




