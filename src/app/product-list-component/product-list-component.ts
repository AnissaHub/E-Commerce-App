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
 itemsPerPage = 4;
  currentPage = 1;

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
//    UPDATE
//   selectedProduct!: Product;
//   onEditProduct(product: Product) {
//   this.selectedProduct = { ...product };
// }





  // ajouter au panier
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

    return this.filteredProducts.slice(
      start,
      start + this.itemsPerPage
    );
  }
  
  // TOTAL PAGES

  get totalPages(): number {

    return Math.ceil(this.filteredProducts.length / this.itemsPerPage);
  }

  
  // CHANGE PAGE
 
  goToPage(page: number) {
    this.currentPage = page;
  }

  
  // RESET PAGE (SEARCH / FILTER)
  
  resetPage() {
    this.currentPage = 1;
  }
}