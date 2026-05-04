import { Component } from '@angular/core';
import { Product } from '../models/products';
import { ProductComponent } from '../product-component/product-component';
import { CartService } from '../services/cart-service';
import { FormsModule } from '@angular/forms';
import { PaginationComponent } from '../pagination-component/pagination-component';

@Component({
  selector: 'app-product-list-component',
  standalone: true,
  imports: [ProductComponent, FormsModule, PaginationComponent],
  templateUrl: './product-list-component.html',
  styleUrl: './product-list-component.scss',
})
export class ProductListComponent {

  produits: Product[] = [
    new Product(1, 'Peluche', 35, 10, 'https://...', 1, 'jouet'),
    new Product(2, 'Voiture', 49, 38, 'https://...', 1, 'jouet'),
    new Product(3, 'Laptop', 10, 30, 'https://...', 1, 'tech'),
    new Product(4, 'Tablette', 200, 15, 'https://...', 1, 'tech'),
    new Product(5, 'Clavier', 50, 12, 'https://...', 1, 'tech'),
    new Product(6, 'Souris', 30, 20, 'https://...', 1, 'tech')
  ];

  selectedCategory: string = 'Tous';
  categories: string[] = ['Tous', 'jouet', 'tech'];

  searchText: string = '';

  // PAGINATION
  currentPage: number = 1;
  itemsPerPage: number = 3;

  constructor(private cartService: CartService) {}

  onAddToCart(product: Product) {
    this.cartService.addToCart(product);
  }

  get filteredProducts(): Product[] {
    return this.produits.filter((p: Product) => {
      const matchCategory =
        this.selectedCategory === 'Tous' ||
        p.category === this.selectedCategory;

      const matchSearch =
        p.nom.toLowerCase().includes(this.searchText.toLowerCase());

      return matchCategory && matchSearch;
    });
  }

  // PRODUITS PAGINÉS
  get paginatedProducts(): Product[] {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;

    return this.filteredProducts.slice(start, end);
  }

  // PAGE SUIVANTE
  nextPage() {
    if (this.currentPage * this.itemsPerPage < this.filteredProducts.length) {
      this.currentPage++;
    }
  }

  // PAGE PRÉCÉDENTE
  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  // RESET PAGINATION
  resetPage() {
    this.currentPage = 1;
  }
}