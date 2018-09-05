import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { AuthGuard } from './auth.guard';
import { UserService } from './user.service';
import { UserinfoService } from './userinfo.service';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { PipsafePipe } from './pipsafe.pipe';
import { EmbedVideo } from 'ngx-embed-video';


let routes: Routes = [
    {  path: "category", component: CategoryComponent },
    {  path: "product", canActivate: [ AuthGuard ], component: ProductComponent },
    {  path: "aboutus", component: AboutusComponent },
    {  path: "contactus", component: ContactusComponent },
    {  path: "login", component: LoginComponent },
    {  path: "register", component: RegisterComponent },
    {  path: "home", component: HomeComponent },
    {  path: "", component: HomeComponent },
    { 
        path: "myaccount",        
        component: MyaccountComponent,
        canActivate: [ AuthGuard ],
        children: [
          {
            path: 'profile',
            component: ProfileComponent
          },
          {
            path: 'changepassword',
            component: ChangepasswordComponent
          }
        ]
     },
     {
      path: '**',
      component: PageNotFoundComponentComponent
    }
   // {  path: "profile", canActivate: [ AuthGuard ], component: ProfileComponent },
   // {  path: "changepassword", canActivate: [ AuthGuard ], component: ChangepasswordComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AboutusComponent,
    ContactusComponent,
    CategoryComponent,
    ProductComponent,
    HomeComponent,
    ProfileComponent,
    ChangepasswordComponent,
    MyaccountComponent,
    PageNotFoundComponentComponent,
    PipsafePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    EmbedVideo,
    RouterModule.forRoot(routes)
    
  ],
  providers: [UserService,UserinfoService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
