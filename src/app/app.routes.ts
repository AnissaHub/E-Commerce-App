import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list-component/product-list-component';
import { CartComponent } from './cart-component/cart-component';
import { LoginComponent } from './login-component/login-component';
import { AuthGuard } from './guards/auth-guard';
import { AddProductComponent } from './add-product-component/add-product-component';

import { ProductDetailComponent } from './product-detail-component/product-detail-component';
import { OrderHistoryComponent } from './order-history-component/order-history-component';
import { PaiementComponent } from './paiement-component/paiement-component';

export const routes: Routes = [
  {
    path: '',
    component: ProductListComponent
  },
  {
    path: 'cart',
    component: CartComponent,
 
  },
  {
    path: 'login',
    component: LoginComponent
  },
   {
    path: 'add',
    component: AddProductComponent
  },

  {
  path: 'product/:id',
  component: ProductDetailComponent
},

 {
  path: 'order-history',
  component: OrderHistoryComponent,
   canActivate: [AuthGuard]
 },
 {
  path: 'payment',
  component: PaiementComponent,
   canActivate: [AuthGuard]
}
];