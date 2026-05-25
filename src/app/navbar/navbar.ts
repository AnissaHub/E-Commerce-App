import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CartService } from '../services/cart-service';
import { AuthService } from '../services/auth-service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class NavbarComponent {
  constructor(private cartService: CartService,
              private router: Router,
              private authService: AuthService
  ) {}
  get totalItems(): number {
  return this.cartService
    .getCart()
    .reduce((sum, product) => sum + product.quantity, 0);
}

  isLoggedIn(): boolean {

    return this.authService.isLoggedIn();

  }

  logout() {

    this.authService.logout();

    this.router.navigate(['/login']);

  }

  goToOrders() {
    this.router.navigate(['/order-history']);
  }
}