import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CartService } from '../services/cart-service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class NavbarComponent {
  constructor(private cartService: CartService) {}
  get totalItems(): number {
  return this.cartService.getCart().reduce((sum, product) => sum + product.quantity, 0);
}
}