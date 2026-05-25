import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../models/products';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
   imports: [RouterModule],
  templateUrl: './product-component.html',
  styleUrl: './product-component.scss'
})
export class ProductComponent {

  @Input() product!: Product;

  //  nom de l'événement
  @Output() addToCart = new EventEmitter<Product>();

  constructor(
    private router: Router
  ) {}

  // fonction cart
  add() {
    this.addToCart.emit(this.product);
    
  }

  @Output() delete = new EventEmitter<number>();

deleteProduct() {
  this.delete.emit(this.product.id);
}

// @Output() put = new EventEmitter<Product>();
// updateProduct(){
//   this.put.emit(this.product.id);


 // détail
  goToDetail(id: number) {

    this.router.navigate(['/product', id]);

  }
}
   
