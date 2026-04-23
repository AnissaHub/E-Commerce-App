import { Component } from '@angular/core';
import { Product } from '../models/products';
import { ProductComponent } from '../product-component/product-component';

@Component({
  selector: 'app-product-list-component',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './product-list-component.html',
  styleUrl: './product-list-component.scss',
})
export class ProductListComponent {

  produits: Product[] = [
    new Product(1, 'Peluche', 35, 'https://...'),
    new Product(2, 'Voiture', 49, 'https://...')
  ];
}