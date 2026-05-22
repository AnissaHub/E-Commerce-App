import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list-component/product-list-component';
import { CartComponent } from './cart-component/cart-component';
import { LoginComponent } from './login-component/login-component';
import { AuthGuard } from './guards/auth-guard';
import { AddProductComponent } from './add-product-component/add-product-component';

export const routes: Routes = [
  {
    path: '',
    component: ProductListComponent
  },
  {
    path: 'cart',
    component: CartComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
   {
    path: 'add',
    component: AddProductComponent
  }
];