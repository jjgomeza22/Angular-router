import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  productId: string | null = null;
  product: Product = {
    category: {
      id: 0,
      name: ''
    },
    description: '',
    id: '',
    images: [''],
    price: 0,
    title: '',
    taxes: 20
  };

  constructor (
    private route: ActivatedRoute,
    private router: Router,
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.route.paramMap
    .pipe(
      switchMap(params => {
        this.productId = params.get('id');
        if (this.productId) {
          return this.productsService.getOne(this.productId);
        } else {
          return [];
        }
      })
    )
    .subscribe(data => this.product = data);
  }

  goToBack(id:any) {
      this.router.navigate(['/category', id]);
  }
}
