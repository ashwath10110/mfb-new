import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { RoutingModule } from './routing.module';
import { SharedModule } from './shared/shared.module';
import { ItemsService } from './services/items.service';
import { CatService } from './services/cat.service';
import { UserService } from './services/user.service';
import { AppService } from './app.service';
import { AuthService } from './services/auth.service';
import { AuthGuardLogin } from './services/auth-guard-login.service';
import { AuthGuardAdmin } from './services/auth-guard-admin.service';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AccountComponent } from './account/account.component';
import { AdminComponent } from './admin/admin.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ItemsComponent } from './items/items.component';
import { AddItemsComponent } from './add-items/add-items.component';
import { CatsComponent } from './cats/cats.component';

import { TabsComponent } from './tabs/tabs.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

import { HomeComponent } from './home/home.component';
import { CarousalComponent } from './carousal/carousal.component';
import { CheckoutComponent } from './checkout/checkout.component';

import { ShowcaseComponent } from './items/showcase/showcase.component';
import { CartComponent } from './items/cart/cart.component';
import { ProductComponent } from './items/product/product.component';
import { ProductThumbnailComponent } from './items/product-thumbnail/product-thumbnail.component';
import { CartPreviewComponent } from './items/cart-preview/cart-preview.component';
import { PaymentCheckoutComponent } from './payment-checkout/payment-checkout.component';

import { DataService } from './items/data.service';
import { CartService } from './items/cart.service';

import {AccordionModule} from 'primeng/primeng';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    RegisterComponent,
    LoginComponent,
    LogoutComponent,
    AccountComponent,
    AdminComponent,
    NotFoundComponent,
    TabsComponent,
    NavbarComponent,
    FooterComponent,
    ShowcaseComponent,
    CartComponent,
    ProductComponent,
    ProductThumbnailComponent,
    CartPreviewComponent,
    CheckoutComponent,
    CarousalComponent,
    CatsComponent,
    HomeComponent,
    ItemsComponent,
    AddItemsComponent,
    PaymentCheckoutComponent

  ],
  imports: [
    RoutingModule,
    SharedModule,
    FormsModule,
    CommonModule,
    BrowserModule,
    AccordionModule,
    BrowserAnimationsModule
  ],
  providers: [
    AuthService,
    AuthGuardLogin,
    AuthGuardAdmin,
    UserService,
    AppService,
    DataService,
    CatService,
    CartService,
    ItemsService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})

export class AppModule { }
