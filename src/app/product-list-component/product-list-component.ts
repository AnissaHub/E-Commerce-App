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
  new Product(
    1,
    'Peluche',
    35,
    10,
    'https://...',
    1,
    'Jouets'
  ),

  new Product(
    2,
    'Voiture',
    49,
    38,
    'https://...',
    1,
    'Jouets'
  ),

  new Product(
    3,
    'laptop',
    10,
    30,
    'https://...',
    1,
    'Tech'
  )
];
   //  injection du service panier
  constructor(private cartService: CartService) {}

  // ajout au panier
  onAddToCart(product: Product) {
    this.cartService.addToCart(product);
    console.log('Panier:', this.cartService.getCart());
  }
  selectedCategory: string = 'Tous';

categories: string[] = ['Tous', 'Jouets', 'Tech', 'Maison'];

get filteredProducts() {
  if (this.selectedCategory === 'Tous') {
    return this.produits;
  }

  return this.produits.filter(
    p => p.category === this.selectedCategory
  );
}
}