import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart-service';
import { OrderService } from '../services/order';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-paiement-component',
  imports: [ FormsModule],
  templateUrl: './paiement-component.html',
  styleUrl: './paiement-component.scss',
})
export class PaiementComponent {
   total = 0;

  constructor(
    private cartService: CartService,
    private orderService: OrderService,
    private router: Router
  ) {
    this.total = this.cartService.getTotal();
  }

  pay() {

    const order = {
      products: this.cartService.getCart(),
      total: this.total,
      date: new Date().toISOString()
    };

    this.orderService.createOrder(order)
      .subscribe(() => {

        alert('Paiement réussi !');

        this.cartService.clearCart();

        this.router.navigate(['/order-history']);

      });

  }
}
