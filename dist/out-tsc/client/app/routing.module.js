System.register(["@angular/core", "@angular/router", "./about/about.component", "./register/register.component", "./login/login.component", "./logout/logout.component", "./account/account.component", "./admin/admin.component", "./not-found/not-found.component", "./checkout/checkout.component", "./home/home.component", "./cats/cats.component", "./items/items.component", "./addresses/addresses.component", "./orders/orders.component", "./user-orders/user-orders.component", "./payment-checkout/payment-checkout.component", "./components/order-success/order-success.component", "./services/auth-guard-login.service", "./services/auth-guard-admin.service"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, router_1, about_component_1, register_component_1, login_component_1, logout_component_1, account_component_1, admin_component_1, not_found_component_1, checkout_component_1, home_component_1, cats_component_1, items_component_1, addresses_component_1, orders_component_1, user_orders_component_1, payment_checkout_component_1, order_success_component_1, auth_guard_login_service_1, auth_guard_admin_service_1, routes, RoutingModule;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
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
            function (checkout_component_1_1) {
                checkout_component_1 = checkout_component_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (cats_component_1_1) {
                cats_component_1 = cats_component_1_1;
            },
            function (items_component_1_1) {
                items_component_1 = items_component_1_1;
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
            function (payment_checkout_component_1_1) {
                payment_checkout_component_1 = payment_checkout_component_1_1;
            },
            function (order_success_component_1_1) {
                order_success_component_1 = order_success_component_1_1;
            },
            function (auth_guard_login_service_1_1) {
                auth_guard_login_service_1 = auth_guard_login_service_1_1;
            },
            function (auth_guard_admin_service_1_1) {
                auth_guard_admin_service_1 = auth_guard_admin_service_1_1;
            }
        ],
        execute: function () {
            routes = [
                { path: '', component: home_component_1.HomeComponent },
                { path: 'checkout-payu', component: payment_checkout_component_1.PaymentCheckoutComponent },
                { path: 'checkout', component: checkout_component_1.CheckoutComponent },
                { path: 'about', component: about_component_1.AboutComponent },
                { path: 'items', component: items_component_1.ItemsComponent },
                { path: 'order-success', component: order_success_component_1.OrderSuccessComponent },
                { path: 'orders', component: orders_component_1.OrdersComponent, canActivate: [auth_guard_admin_service_1.AuthGuardAdmin] },
                { path: 'user-orders', component: user_orders_component_1.UserOrdersComponent, canActivate: [auth_guard_login_service_1.AuthGuardLogin] },
                { path: 'items/:id', component: items_component_1.ItemsComponent },
                { path: 'cats', component: cats_component_1.CatsComponent },
                { path: 'register', component: register_component_1.RegisterComponent },
                { path: 'login', component: login_component_1.LoginComponent },
                { path: 'logout', component: logout_component_1.LogoutComponent },
                { path: 'addresses', component: addresses_component_1.AddressesComponent },
                { path: 'account', component: account_component_1.AccountComponent, canActivate: [auth_guard_login_service_1.AuthGuardLogin] },
                { path: 'admin', component: admin_component_1.AdminComponent, canActivate: [auth_guard_admin_service_1.AuthGuardAdmin] },
                { path: 'notfound', component: not_found_component_1.NotFoundComponent },
                { path: '**', redirectTo: '/notfound' }
            ];
            RoutingModule = /** @class */ (function () {
                function RoutingModule() {
                }
                RoutingModule = __decorate([
                    core_1.NgModule({
                        imports: [router_1.RouterModule.forRoot(routes)],
                        exports: [router_1.RouterModule]
                    })
                ], RoutingModule);
                return RoutingModule;
            }());
            exports_1("RoutingModule", RoutingModule);
        }
    };
});
//# sourceMappingURL=routing.module.js.map