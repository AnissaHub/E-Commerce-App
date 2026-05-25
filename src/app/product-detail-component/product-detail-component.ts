import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../models/products';
import { ProductService } from '../services/product';
import { CartService } from '../services/cart-service';

@Component({
  selector: 'app-product-detail-component',
  standalone: true,
  imports: [],
  templateUrl: './product-detail-component.html',
  styleUrl: './product-detail-component.scss',
})
export class ProductDetailComponent implements OnInit {

  product!: Product;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit() {

    const id = Number(
      this.route.snapshot.paramMap.get('id')
    );

    this.productService.getProductById(id)
      .subscribe(data => {

        this.product = data;

      });

  }

  // ajouter au panier
  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }

  // supprimer produit
 deleteProduct(id: number) {

  this.productService.deleteProduct(id)
    .subscribe(() => {

      this.router.navigate(['/']);

    });

}

}