import { Component } from '@angular/core';
import { Product } from '../models/products';
import { ProductComponent } from '../product-component/product-component';
import { CartService } from '../services/cart-service';

@Component({
  selector: 'app-product-list-component',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './product-list-component.html',
  styleUrl: './product-list-component.scss',
})
export class ProductListComponent {

  produits: Product[] = [
    new Product(1, 'Peluche', 35, 10, 'https://...'),
    new Product(2, 'Voiture', 49, 38,'https://...')
  ];
   //  injection du service panier
  constructor(private cartService: CartService) {}

  // ajout au panier
  onAddToCart(product: Product) {
    this.cartService.addToCart(product);
    console.log('Panier:', this.cartService.getCart());
  }
}