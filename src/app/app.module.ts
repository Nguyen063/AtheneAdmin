import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { ClassManagermentComponent } from './class-managerment/class-managerment.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { NewClassComponent } from './new-class/new-class.component';
import { UpdateWebsiteComponent } from './update-website/update-website.component';
import { UpdateBlogComponent } from './update-blog/update-blog.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { InforTutorComponent } from './infor-tutor/infor-tutor.component';
import { InforLearnerComponent } from './infor-learner/infor-learner.component';
import { ClassDetailComponent } from './class-detail/class-detail.component';
import { TransationManagermentComponent } from './transation-managerment/transation-managerment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserManagementComponent,
    ClassManagermentComponent,
    SignInComponent,
    NewAccountComponent,
    NewClassComponent,
    UpdateWebsiteComponent,
    UpdateBlogComponent,
    FeedbackComponent,
    InforTutorComponent,
    InforLearnerComponent,
    ClassDetailComponent,
    TransationManagermentComponent,
    BlogDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      progressBar: true,
      progressAnimation:"increasing",
      preventDuplicates: true

    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
