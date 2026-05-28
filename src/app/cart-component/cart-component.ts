import { Component } from '@angular/core';
import { Product } from '../models/products';
import { CartService } from '../services/cart-service';
import { CommonModule } from '@angular/common';
import { OrderService } from '../services/order';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart-component.html',
  styleUrl: './cart-component.scss'
})
export class CartComponent {

  constructor(
    private cartService: CartService,
    private orderService:   OrderService

  ) {}

  // getter 
  get cart(): Product[] {
    return this.cartService.getCart();
  }

  get total(): number {
  return this.cartService.getTotal();
}

   increase(p: Product) {
    this.cartService.increase(p);
  }

  decrease(p: Product) {
    this.cartService.decrease(p);
  }

  remove(product: Product) {
  this.cartService.removeFromCart(product);
}

clearCart() {
  this.cartService.clearCart();
}

checkout() {

  const order = {

    products: this.cart,

    total: this.total,

    date: new Date().toISOString()

  };

  this.orderService.createOrder(order)
    .subscribe(() => {

      alert('Commande enregistrée');

     this.cartService.clearCart();

    });

}

}