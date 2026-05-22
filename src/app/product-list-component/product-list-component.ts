import { Component, OnInit } from '@angular/core';
import { Product } from '../models/products';
import { ProductComponent } from '../product-component/product-component';
import { CartService } from '../services/cart-service';
import { ProductService } from '../services/product';
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

  produits: Product[] = [] ;
  loading = true;                     // chargement en cours
  selectedCategory: string = 'Tous';
  categories: string[] = ['Tous', 'Homme', 'Femme', 'enfant'];

  searchText: string = '';

  // PAGINATION
  currentPage: number = 1;
  itemsPerPage: number = 3;

  constructor(
  private cartService: CartService,
  private productService: ProductService
) {}
 ngOnInit() {
    this.productService.getProducts().subscribe(data => {
      this.produits = data;
      this.loading = false;
    });
  }

  // DELETE 
  onDeleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe(() => {
      this.produits = this.produits.filter(p => p.id !== id);
    });
  }

 onAddToCart(product: Product) {
    this.cartService.addToCart(product);
  }
  // Filtrer
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