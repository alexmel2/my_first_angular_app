import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import { IProduct } from './product';

@Injectable()
export class ProductService {
    private _productUrl = './api/products/products.json';
    getProducts(): Observable<IProduct[]> {
        return this._http.get<IProduct[]>(this._productUrl)
        .do(data => console.log('All: ' + JSON.stringify(data)));
          }

          getProductsByID(id: number): Observable<IProduct>
          // tslint:disable-next-line:one-line
          {
          return this.getProducts().map((products: IProduct[]) => products.find(p => p.productId === id));
          }
    constructor(private _http: HttpClient) {}
}
