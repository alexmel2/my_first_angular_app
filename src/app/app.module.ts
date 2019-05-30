import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component'; // 
import { UserService } from './shared/user.service';

const routes: Routes = [
  {path: 'Users', component:UserListComponent },
  { path: 'welcome', component: WelcomeComponent },
    {path: 'user/:id', component: UserDetailComponent},
    { path: '', component: WelcomeComponent },
  ];
 @NgModule({
  declarations: [
    AppComponent,
    
    WelcomeComponent,
    UserListComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ UserService],
  bootstrap: [AppComponent]

})
export class AppModule { }
