import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { templateJitUrl } from "@angular/compiler";
import { debug } from "util";
import { ProductService } from "./product.service";

@Component({
  selector: 'pm-products',
  templateUrl: 'Product-List.Component.html',

})
export class ProductListComponent implements OnInit {
   pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = true;
  productList: IProduct[];
  products: IProduct[];
  filterProductList: IProduct[];
  _listFilter: string;
   x: IProduct;
  ngOnInit(): void {
    this.http.getProducts().subscribe(
      (products) => {
                        this.productList = products;
                        this.filterProductList = this.productList;
                    }

    );
    }
get listFilter(): string
{
    return this._listFilter;
}
  taggelImage(): void {
    this.showImage = !this.showImage;
  }
  constructor(private http: ProductService) {
  }

set listFilter(value:string)
{
debugger; 
const x = 2;

  this._listFilter = value;
  this.filterProductList = this.listFilter ? this.productList.filter
  ((product: IProduct) => product.productName.toLocaleLowerCase().indexOf(this.listFilter.toLocaleLowerCase()) !== -1 ) : this.productList;

}
  onRatingClicked(message: string): void {
    this.pageTitle = 'Product list: ' + message;

  }
};
