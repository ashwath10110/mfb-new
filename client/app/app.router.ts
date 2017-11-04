import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//components
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { AccountComponent } from './components/account/account.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { HomeComponent } from './components/home/home.component';
import { ItemsComponent } from './components/items/items.component';
import { AddressesComponent } from './components/addresses/addresses.component';
import { OrdersComponent } from './components/orders/orders.component';
import { UserOrdersComponent } from './components/user-orders/user-orders.component';

import { PaymentCheckoutComponent } from './components/payment-checkout/payment-checkout.component';
import { OrderSuccessComponent } from './components/order-success/order-success.component';

import { AdminComponent } from './components/admin/admin.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CallbackComponent } from './components/callback/callback.component';
import { AuthGuardService as AuthGuard } from './auth/auth-guard.service';
import { ScopeGuardService as ScopeGuard } from './auth/scope-guard.service';

const routes: Routes = [
  { path: '', component: ItemsComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'admin', component: AdminComponent, canActivate: [ScopeGuard], data: { expectedScopes: ['write:messages'] } },
  { path: 'callback', component: CallbackComponent },
  { path: 'checkout-payu', component: PaymentCheckoutComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'about', component: AboutComponent },
  { path: 'items', component: ItemsComponent },
  { path: 'order-success', component: OrderSuccessComponent },
  { path: 'orders', component: OrdersComponent, canActivate: [ScopeGuard], data: { expectedScopes: ['write:messages'] } },
  { path: 'user-orders', component: UserOrdersComponent, canActivate: [AuthGuard] },
  { path: 'items/:id', component: ItemsComponent },
  { path: 'addresses', component: AddressesComponent },
  { path: 'account', component: AccountComponent, canActivate: [AuthGuard] },
  { path: 'notfound', component: NotFoundComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class RoutingModule { }
