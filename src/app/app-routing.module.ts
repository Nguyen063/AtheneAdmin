import { XdNotificationsComponent } from './xd-notifications/xd-notifications.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { UpdateBlogComponent } from './update-blog/update-blog.component';
import { SystermNotificationsComponent } from './systerm-notifications/systerm-notifications.component';
import { NewClassComponent } from './new-class/new-class.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { HomeComponent } from './home/home.component';
import { ClassManagermentComponent } from './class-managerment/class-managerment.component';
import { RouterModule, Routes } from '@angular/router';
import { UpdateWebsiteComponent } from './update-website/update-website.component';
import { NgModule } from '@angular/core';
const routes: Routes = [
  {
    path:'class-manager', component : ClassManagermentComponent
  },
  {
    path:'home', component:HomeComponent
  },
  {
    path:'new-account', component: NewAccountComponent
  },
  {
    path:'new-class', component:NewClassComponent
  },
  {
    path:'systerm-notifications', component: SystermNotificationsComponent
  },
  {
    path:'update-blog', component: UpdateBlogComponent
  },
  {
    path:'update-website', component: UpdateWebsiteComponent
  },
  {
    path:'user-manager', component: UserManagementComponent
  },
  {
    path:'feedback', component:FeedbackComponent
  },
  {
    path:'xd-notifications', component:XdNotificationsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
//Them component
export class AppRoutingModule { }
export const Routingcomonents={ClassManagermentComponent, HomeComponent,
   NewAccountComponent, NewClassComponent,SystermNotificationsComponent,
    UpdateBlogComponent,UpdateWebsiteComponent, UserManagementComponent,
  FeedbackComponent, XdNotificationsComponent}
