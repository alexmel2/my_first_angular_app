import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { StartComponent } from './shared/star.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './products/product.service';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    StartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,     
    HttpClientModule 
  ],
  providers: [ ProductService],
  bootstrap: [AppComponent]

})
export class AppModule { }
