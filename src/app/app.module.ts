import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { StartComponent } from './shared/star.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './products/product.service';
import { ProductDetailComponent } from './products/product-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';
const routes: Routes = [
  {path: 'products', component: ProductListComponent },
  { path: 'welcome', component: WelcomeComponent },
    {path: 'products/:id', component: ProductDetailComponent},
    { path: '', component: WelcomeComponent },
  ];
 @NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    StartComponent,
    ProductDetailComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ ProductService],
  bootstrap: [AppComponent]

})
export class AppModule { }
