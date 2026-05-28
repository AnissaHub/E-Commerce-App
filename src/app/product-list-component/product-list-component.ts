import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../models/products';
import { ProductComponent } from '../product-component/product-component';
import { CartService } from '../services/cart-service';

@Component({
  selector: 'app-product-list-component',
  standalone: true,
  imports: [ProductComponent, FormsModule], // permet d'utiliser ngModel
  templateUrl: './product-list-component.html',
  styleUrl: './product-list-component.scss',
})
export class ProductListComponent {

  // liste des produits
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
      'Laptop',
      10,
      30,
      'https://...',
      1,
      'Tech'
    )
  ];

  // service panier
  constructor(private cartService: CartService) {}

  // texte de recherche tapé par l'utilisateur
  searchText: string = '';

  // catégorie sélectionnée par défaut
  selectedCategory: string = 'Tous';

  // liste des catégories
  categories: string[] = ['Tous', 'Jouets', 'Tech', 'Maison'];

  // ajout d’un produit au panier
  onAddToCart(product: Product) {
    this.cartService.addToCart(product);
    console.log('Panier:', this.cartService.getCart());
  }

  // filtre les produits par catégorie et recherche
  get filteredProducts() {
    return this.produits.filter(
      p =>
        // filtre par catégorie
        (this.selectedCategory === 'Tous' ||
          p.category === this.selectedCategory) &&

        // filtre par texte saisi
        p.nom.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
}