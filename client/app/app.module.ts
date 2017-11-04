//Modules

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

//Auth0 - related

import { AuthService } from './auth/auth.service';
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { AuthGuardService } from './auth/auth-guard.service';
import { ScopeGuardService } from './auth/scope-guard.service';
import { HttpModule, Http, RequestOptions } from '@angular/http';


//Components

import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { AdminComponent } from './components/admin/admin.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ItemsComponent } from './components/items/items.component';
import { AddItemsComponent } from './components/add-items/add-items.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { CarousalComponent } from './components/carousal/carousal.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { OrderSuccessComponent } from './components/order-success/order-success.component';
import { LocationComponent } from './components/location/location.component';
import { ShowcaseComponent } from './components/items/showcase/showcase.component';
import { CartComponent } from './components/items/cart/cart.component';
import { ProductComponent } from './components/items/product/product.component';
import { ProductThumbnailComponent } from './components/items/product-thumbnail/product-thumbnail.component';
import { CartPreviewComponent } from './components/items/cart-preview/cart-preview.component';
import { PaymentCheckoutComponent, SafePipe } from './components/payment-checkout/payment-checkout.component';
import { AddressesComponent } from './components/addresses/addresses.component';
import { OrdersComponent } from './components/orders/orders.component';
import { UserOrdersComponent } from './components/user-orders/user-orders.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { RightSideNavComponent } from './components/right-side-nav/right-side-nav.component';


//Services

import { AppService } from './app.service';
import { ItemsService } from './services/items.service';
import { DataService } from './components/items/data.service';
import { CartService } from './components/items/cart.service';
import { TabsService } from './services/tabs.service';
import { AddressService } from './services/address.service';
import { UserOrdersService } from './services/user-orders.service';
import { OrderService } from './services/orders.service';
import { LocalStorageService } from './services/local-storage.service';


//Config


//Routes
import { RoutingModule } from './app.router';


//Common for app
import { CallbackComponent } from './components/callback/callback.component';
import { SharedModule } from './shared/shared.module';
import { FilterPipe } from './shared/my-filter.pipe';



//------------------------------End------------------------------

//To Cleanup
import { UserService } from './services/user.service';
import { RecaptchaModule } from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';
// import { RegisterComponent } from './register/register.component';
// import { LoginComponent } from './login/login.component';
// import { LogoutComponent } from './logout/logout.component';
import { AccountComponent } from './components/account/account.component';
import { RECAPTCHA_SETTINGS, RecaptchaSettings } from 'ng-recaptcha';
// import { CatsComponent } from './cats/cats.component';
import { AccordionModule } from 'primeng/primeng';


export function authHttpServiceFactory(http: Http, options: RequestOptions) {
    return new AuthHttp(new AuthConfig({
        tokenGetter: (() => localStorage.getItem('access_token')),
        globalHeaders: [{ 'Content-Type': 'application/json' }],
    }), http, options);
}


@NgModule({
    declarations: [
        AppComponent,
        AboutComponent,
        // RegisterComponent,
        // LoginComponent,
        // LogoutComponent,
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
        // CatsComponent,
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
        FilterPipe,
        ProfileComponent,
        AdminComponent,
        CallbackComponent
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
        AuthGuardService,
        ScopeGuardService,
        {
            provide: AuthHttp,
            useFactory: authHttpServiceFactory,
            deps: [Http, RequestOptions]
        },
        UserService,
        AppService,
        DataService,
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
        AuthService,
        AuthGuardService,
        ScopeGuardService,
        {
            provide: AuthHttp,
            useFactory: authHttpServiceFactory,
            deps: [Http, RequestOptions]
        }
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    bootstrap: [AppComponent]
})

export class AppModule { }
