import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Product } from '../models/products';
import { ProductService } from '../services/product';

@Component({
  standalone: true,
  selector: 'app-add-product-component',
  imports: [CommonModule, FormsModule],
  templateUrl: './add-product-component.html',
  styleUrl: './add-product-component.scss',
})
export class AddProductComponent {

  // 1️⃣ objet unique propre
  newProduct: Product = {
    id: 0,
    nom: '',
    prix: 0,
    stock: 0,
    image: '',
    quantity: 1,
    category: ''
  };

  constructor(private productService: ProductService) {}

  // 2️⃣ submit
  addProduct() {
    this.productService.addProduct(this.newProduct)
      .subscribe({
        next: (product) => {
          console.log('Produit ajouté', product);

          // reset propre
          this.resetForm();
        },
        error: (err) => {
          console.error('Erreur ajout produit', err);
        }
      });
  }

  // 3️⃣ reset propre
  private resetForm() {
    this.newProduct = {
      id: 0,
      nom: '',
      prix: 0,
      stock: 0,
      image: '',
      quantity: 1,
      category: ''
    };
  }
}