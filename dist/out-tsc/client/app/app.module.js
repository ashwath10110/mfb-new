System.register(["@angular/core", "@angular/common", "@angular/platform-browser", "ng-recaptcha", "ng-recaptcha/forms", "@angular/forms", "./routing.module", "./shared/shared.module", "./services/items.service", "./services/cat.service", "./services/user.service", "./app.service", "./services/auth.service", "./services/auth-guard-login.service", "./services/auth-guard-admin.service", "./app.component", "./about/about.component", "./register/register.component", "./login/login.component", "./logout/logout.component", "./account/account.component", "./admin/admin.component", "./not-found/not-found.component", "./items/items.component", "./add-items/add-items.component", "./cats/cats.component", "./tabs/tabs.component", "./navbar/navbar.component", "./footer/footer.component", "./home/home.component", "./carousal/carousal.component", "./checkout/checkout.component", "./components/order-success/order-success.component", "./location/location.component", "./items/showcase/showcase.component", "./items/cart/cart.component", "./items/product/product.component", "./items/product-thumbnail/product-thumbnail.component", "./items/cart-preview/cart-preview.component", "./payment-checkout/payment-checkout.component", "./addresses/addresses.component", "./orders/orders.component", "./user-orders/user-orders.component", "./items/data.service", "./items/cart.service", "./services/tabs.service", "./services/address.service", "./services/user-orders.service", "./services/orders.service", "./services/local-storage/local-storage.service", "primeng/primeng", "@angular/platform-browser/animations"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, common_1, platform_browser_1, ng_recaptcha_1, forms_1, ng_recaptcha_2, forms_2, routing_module_1, shared_module_1, items_service_1, cat_service_1, user_service_1, app_service_1, auth_service_1, auth_guard_login_service_1, auth_guard_admin_service_1, app_component_1, about_component_1, register_component_1, login_component_1, logout_component_1, account_component_1, admin_component_1, not_found_component_1, items_component_1, add_items_component_1, cats_component_1, tabs_component_1, navbar_component_1, footer_component_1, home_component_1, carousal_component_1, checkout_component_1, order_success_component_1, location_component_1, showcase_component_1, cart_component_1, product_component_1, product_thumbnail_component_1, cart_preview_component_1, payment_checkout_component_1, addresses_component_1, orders_component_1, user_orders_component_1, data_service_1, cart_service_1, tabs_service_1, address_service_1, user_orders_service_1, orders_service_1, local_storage_service_1, primeng_1, animations_1, AppModule;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (ng_recaptcha_1_1) {
                ng_recaptcha_1 = ng_recaptcha_1_1;
                ng_recaptcha_2 = ng_recaptcha_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (forms_2_1) {
                forms_2 = forms_2_1;
            },
            function (routing_module_1_1) {
                routing_module_1 = routing_module_1_1;
            },
            function (shared_module_1_1) {
                shared_module_1 = shared_module_1_1;
            },
            function (items_service_1_1) {
                items_service_1 = items_service_1_1;
            },
            function (cat_service_1_1) {
                cat_service_1 = cat_service_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (app_service_1_1) {
                app_service_1 = app_service_1_1;
            },
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            },
            function (auth_guard_login_service_1_1) {
                auth_guard_login_service_1 = auth_guard_login_service_1_1;
            },
            function (auth_guard_admin_service_1_1) {
                auth_guard_admin_service_1 = auth_guard_admin_service_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (about_component_1_1) {
                about_component_1 = about_component_1_1;
            },
            function (register_component_1_1) {
                register_component_1 = register_component_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            },
            function (logout_component_1_1) {
                logout_component_1 = logout_component_1_1;
            },
            function (account_component_1_1) {
                account_component_1 = account_component_1_1;
            },
            function (admin_component_1_1) {
                admin_component_1 = admin_component_1_1;
            },
            function (not_found_component_1_1) {
                not_found_component_1 = not_found_component_1_1;
            },
            function (items_component_1_1) {
                items_component_1 = items_component_1_1;
            },
            function (add_items_component_1_1) {
                add_items_component_1 = add_items_component_1_1;
            },
            function (cats_component_1_1) {
                cats_component_1 = cats_component_1_1;
            },
            function (tabs_component_1_1) {
                tabs_component_1 = tabs_component_1_1;
            },
            function (navbar_component_1_1) {
                navbar_component_1 = navbar_component_1_1;
            },
            function (footer_component_1_1) {
                footer_component_1 = footer_component_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (carousal_component_1_1) {
                carousal_component_1 = carousal_component_1_1;
            },
            function (checkout_component_1_1) {
                checkout_component_1 = checkout_component_1_1;
            },
            function (order_success_component_1_1) {
                order_success_component_1 = order_success_component_1_1;
            },
            function (location_component_1_1) {
                location_component_1 = location_component_1_1;
            },
            function (showcase_component_1_1) {
                showcase_component_1 = showcase_component_1_1;
            },
            function (cart_component_1_1) {
                cart_component_1 = cart_component_1_1;
            },
            function (product_component_1_1) {
                product_component_1 = product_component_1_1;
            },
            function (product_thumbnail_component_1_1) {
                product_thumbnail_component_1 = product_thumbnail_component_1_1;
            },
            function (cart_preview_component_1_1) {
                cart_preview_component_1 = cart_preview_component_1_1;
            },
            function (payment_checkout_component_1_1) {
                payment_checkout_component_1 = payment_checkout_component_1_1;
            },
            function (addresses_component_1_1) {
                addresses_component_1 = addresses_component_1_1;
            },
            function (orders_component_1_1) {
                orders_component_1 = orders_component_1_1;
            },
            function (user_orders_component_1_1) {
                user_orders_component_1 = user_orders_component_1_1;
            },
            function (data_service_1_1) {
                data_service_1 = data_service_1_1;
            },
            function (cart_service_1_1) {
                cart_service_1 = cart_service_1_1;
            },
            function (tabs_service_1_1) {
                tabs_service_1 = tabs_service_1_1;
            },
            function (address_service_1_1) {
                address_service_1 = address_service_1_1;
            },
            function (user_orders_service_1_1) {
                user_orders_service_1 = user_orders_service_1_1;
            },
            function (orders_service_1_1) {
                orders_service_1 = orders_service_1_1;
            },
            function (local_storage_service_1_1) {
                local_storage_service_1 = local_storage_service_1_1;
            },
            function (primeng_1_1) {
                primeng_1 = primeng_1_1;
            },
            function (animations_1_1) {
                animations_1 = animations_1_1;
            }
        ],
        execute: function () {
            AppModule = /** @class */ (function () {
                function AppModule() {
                }
                AppModule = __decorate([
                    core_1.NgModule({
                        declarations: [
                            app_component_1.AppComponent,
                            about_component_1.AboutComponent,
                            register_component_1.RegisterComponent,
                            login_component_1.LoginComponent,
                            logout_component_1.LogoutComponent,
                            account_component_1.AccountComponent,
                            admin_component_1.AdminComponent,
                            not_found_component_1.NotFoundComponent,
                            tabs_component_1.TabsComponent,
                            navbar_component_1.NavbarComponent,
                            footer_component_1.FooterComponent,
                            showcase_component_1.ShowcaseComponent,
                            cart_component_1.CartComponent,
                            product_component_1.ProductComponent,
                            product_thumbnail_component_1.ProductThumbnailComponent,
                            cart_preview_component_1.CartPreviewComponent,
                            checkout_component_1.CheckoutComponent,
                            carousal_component_1.CarousalComponent,
                            cats_component_1.CatsComponent,
                            home_component_1.HomeComponent,
                            items_component_1.ItemsComponent,
                            add_items_component_1.AddItemsComponent,
                            payment_checkout_component_1.PaymentCheckoutComponent,
                            location_component_1.LocationComponent,
                            addresses_component_1.AddressesComponent,
                            orders_component_1.OrdersComponent,
                            payment_checkout_component_1.SafePipe,
                            user_orders_component_1.UserOrdersComponent,
                            order_success_component_1.OrderSuccessComponent
                        ],
                        imports: [
                            routing_module_1.RoutingModule,
                            shared_module_1.SharedModule,
                            forms_2.FormsModule,
                            common_1.CommonModule,
                            platform_browser_1.BrowserModule,
                            primeng_1.AccordionModule,
                            animations_1.BrowserAnimationsModule,
                            forms_1.RecaptchaFormsModule,
                            ng_recaptcha_1.RecaptchaModule.forRoot()
                        ],
                        providers: [
                            auth_service_1.AuthService,
                            auth_guard_login_service_1.AuthGuardLogin,
                            auth_guard_admin_service_1.AuthGuardAdmin,
                            user_service_1.UserService,
                            app_service_1.AppService,
                            data_service_1.DataService,
                            cat_service_1.CatService,
                            cart_service_1.CartService,
                            items_service_1.ItemsService,
                            tabs_service_1.TabsService,
                            address_service_1.AddressService,
                            local_storage_service_1.LocalStorageService,
                            orders_service_1.OrderService,
                            user_orders_service_1.UserOrdersService,
                            {
                                provide: ng_recaptcha_2.RECAPTCHA_SETTINGS,
                                useValue: { siteKey: '<6Lf5pzQUAAAAANCvQ8Z8vtOdhUCsaijP2xql6fbK>' },
                            },
                        ],
                        schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA],
                        bootstrap: [app_component_1.AppComponent]
                    })
                ], AppModule);
                return AppModule;
            }());
            exports_1("AppModule", AppModule);
        }
    };
});
//# sourceMappingURL=app.module.js.map