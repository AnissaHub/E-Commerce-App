import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../models/products';

@Component({
  selector: 'app-product',
  standalone: true,
  templateUrl: './product-component.html',
  styleUrl: './product-component.scss'
})
export class ProductComponent {

  @Input() product!: Product;

  //  nom de l'événement
  @Output() addToCart = new EventEmitter<Product>();

  // fonction 
  add() {
    this.addToCart.emit(this.product);
    
  }

}