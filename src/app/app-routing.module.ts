import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'products', loadChildren: () => import('./features/product/product.module').then(m => m.ProductModule) },
  { path: 'cart', loadChildren: () => import('./features/cart/cart.module').then(m => m.CartModule) },
  { path: 'orders', loadChildren: () => import('./features/order/order.module').then(m => m.OrderModule) },
  { path: 'payment', loadChildren: () => import('./features/payment/payment.module').then(m => m.PaymentModule) },
  { path: 'user', loadChildren: () => import('./features/user/user.module').then(m => m.UserModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
