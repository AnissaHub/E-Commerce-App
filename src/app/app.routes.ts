import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list-component/product-list-component';
import { CartComponent } from './cart-component/cart-component';
import { LoginComponent } from './login-component/login-component';

export const routes: Routes = [
  {
    path: '',
    component: ProductListComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];