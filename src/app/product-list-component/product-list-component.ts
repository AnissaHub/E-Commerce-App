import { Component } from '@angular/core';
import { Product } from '../models/products';

@Component({
  selector: 'app-product-list',
  standalone: true,
  templateUrl: './product-list-component.html',
  styleUrl: './product-list-component.scss'
})
export class ProductListComponent {

  produits: Product[] = [
    new Product(1, 'Peluche', 35),
    new Product(2, 'Voiture', 49),
    new Product(3, 'Lego', 25)
  ];

}