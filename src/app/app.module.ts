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
import { SystermNotificationsComponent } from './systerm-notifications/systerm-notifications.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { XdNotificationsComponent } from './xd-notifications/xd-notifications.component';

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
    SystermNotificationsComponent,
    FeedbackComponent,
    XdNotificationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
