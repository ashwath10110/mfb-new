import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { RecaptchaModule } from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';

import { RECAPTCHA_SETTINGS, RecaptchaSettings } from 'ng-recaptcha';

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
import { OrderSuccessComponent } from './components/order-success/order-success.component';

import { LocationComponent } from './location/location.component';

import { ShowcaseComponent } from './items/showcase/showcase.component';
import { CartComponent } from './items/cart/cart.component';
import { ProductComponent } from './items/product/product.component';
import { ProductThumbnailComponent } from './items/product-thumbnail/product-thumbnail.component';
import { CartPreviewComponent } from './items/cart-preview/cart-preview.component';
import { PaymentCheckoutComponent, SafePipe } from './payment-checkout/payment-checkout.component';
import { AddressesComponent } from './addresses/addresses.component';
import { OrdersComponent } from './orders/orders.component';
import { UserOrdersComponent } from './user-orders/user-orders.component';

import { SidenavComponent } from './sidenav/sidenav.component';
import { FilterPipe } from './shared/my-filter.pipe';
import { RightSideNavComponent } from './right-side-nav/right-side-nav.component';

import { DataService } from './items/data.service';
import { CartService } from './items/cart.service';
import { TabsService } from './services/tabs.service';
import { AddressService } from './services/address.service';
import { UserOrdersService } from './services/user-orders.service';
import { OrderService } from './services/orders.service';
import { LocalStorageService } from './services/local-storage/local-storage.service';

import { AccordionModule } from 'primeng/primeng';
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
        PaymentCheckoutComponent,
        LocationComponent,
        AddressesComponent,
        OrdersComponent,
        SafePipe,
        UserOrdersComponent,
        OrderSuccessComponent,
        SidenavComponent,
        RightSideNavComponent,
        FilterPipe
    ],
    imports: [
        RoutingModule,
        SharedModule,
        FormsModule,
        CommonModule,
        BrowserModule,
        AccordionModule,
        BrowserAnimationsModule,
        RecaptchaFormsModule,
        RecaptchaModule.forRoot()
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
        ItemsService,
        TabsService,
        AddressService,
        LocalStorageService,
        OrderService,
        UserOrdersService,
        {
            provide: RECAPTCHA_SETTINGS,
            useValue: { siteKey: '<6Lf5pzQUAAAAANCvQ8Z8vtOdhUCsaijP2xql6fbK>' } as RecaptchaSettings,
        },
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    bootstrap: [AppComponent]
})

export class AppModule { }
