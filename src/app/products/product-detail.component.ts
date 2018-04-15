import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './product';

@Component({
  selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: IProduct;
  pageTitle: string = 'Product Detail';
  constructor(private servise: ProductService,
              private _router: ActivatedRoute,
              private _Router: Router,

             ) { }

  ngOnInit() {
    const id = +this._router.snapshot.paramMap.get('id');
    if ( id )
    {
      this.servise.getProductsByID(id).subscribe(
       product => this.product = product
             );
    }

  }
  onBack(): void {
    this._Router.navigate(['/products']);
  }
}
