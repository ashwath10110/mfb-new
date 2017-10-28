System.register(["@angular/core", "@angular/http", "rxjs/add/observable/throw", "rxjs/add/operator/catch", "rxjs/add/operator/map", "@angular/platform-browser"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, http_1, core_2, platform_browser_1, SafePipe, PaymentCheckoutComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {
            },
            function (_2) {
            },
            function (_3) {
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            }
        ],
        execute: function () {
            SafePipe = /** @class */ (function () {
                function SafePipe(sanitizer) {
                    this.sanitizer = sanitizer;
                }
                SafePipe.prototype.transform = function (url) {
                    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
                };
                SafePipe = __decorate([
                    core_2.Pipe({ name: 'safe' }),
                    __metadata("design:paramtypes", [platform_browser_1.DomSanitizer])
                ], SafePipe);
                return SafePipe;
            }());
            exports_1("SafePipe", SafePipe);
            PaymentCheckoutComponent = /** @class */ (function () {
                function PaymentCheckoutComponent(http) {
                    this.http = http;
                    this.message = 'Everyone come and see how good I look!';
                    this.mkey = 'gtKFFx';
                    this.productInfo = 'Verification order';
                    this.txnid = this.makeid();
                    this.amount = 234.99;
                    this.id = '2222222';
                    this.email = 'test@test.com';
                    this.phone = 9999999999;
                    this.lastName = 'test';
                    this.firstName = 'fname';
                    this.surl = "http://localhost:4200/api/PaymentStatus";
                    this.hash = '';
                    this.isLoading = false;
                    this.pageTest = "<div class=\"jumbotron text-center\">\n    <h1>Payumoney Payment Gateway</h1>\n    <h3> Rs {{amount}}</h3>\n    <form id=\"paymentForm\" action='https://test.payu.in/_payment' method='post'>\n        <input type=\"hidden\" name=\"key\" value=\"{{mkey}}\" />\n        <input type=\"hidden\" name=\"txnid\" value=\"{{txnid}}\" />\n        <input type=\"hidden\" name=\"amount\" value=\"{{amount}}\" />\n        <input type=\"hidden\" name=\"productinfo\" value=\"{{productInfo}}\" />\n        <input type=\"hidden\" name=\"firstname\" value=\"{{firstName}}\" />\n        <input type=\"hidden\" name=\"udf1\" value={{id}} />\n        <input type=\"hidden\" name=\"email\" value=\"{{email}}\" />\n        <input type=\"hidden\" name=\"phone\" value=\"{{phone}}\" />\n        <input type=\"hidden\" name=\"lastname\" value=\"{{lastName}}\" />\n        <input type=\"hidden\" name=\"surl\" value=\"{{surl}}\" />\n        <input type=\"hidden\" name=\"furl\" value=\"{{surl}}\" />\n        <input type=\"hidden\" name=\"hash\" id=\"hash\" value=\"{{hash}}\">\n        <div class=\"pay-now-button-outer\">\n            <button class=\"btn btn-primary fontBold\" (click)=\"presubmit()\" type=\"button\">PAY NOW</button>\n        </div>\n    </form>\n</div>";
                    this.headers = new http_1.Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
                    this.options = new http_1.RequestOptions({ headers: this.headers });
                }
                PaymentCheckoutComponent.prototype.ngOnInit = function () {
                };
                PaymentCheckoutComponent.prototype.makeid = function () {
                    var text = "";
                    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
                    for (var i = 0; i < 5; i++)
                        text += possible.charAt(Math.floor(Math.random() * possible.length));
                    return text;
                };
                PaymentCheckoutComponent.prototype.makeHash = function () {
                    var data = { preHashString: this.mkey + '|' + this.txnid + '|' + this.amount + '|' + this.productInfo + '|' + this.firstName + '|' + this.email + '|' + this.id + '||||||||||' };
                    var url = '/api/createHash';
                    return this.http.post(url, data, this.options);
                };
                PaymentCheckoutComponent.prototype.presubmit = function () {
                    var _this = this;
                    this.makeHash().subscribe(function (data) {
                        console.log("Success");
                        if (data.status == 200) {
                            document.getElementById('hash')["value"] = JSON.parse(data["_body"])['hash'];
                            $('#paymentForm').submit();
                        }
                    }, function (error) { return console.log(error); }, function () { return _this.isLoading = false; });
                };
                PaymentCheckoutComponent = __decorate([
                    core_1.Component({
                        selector: 'app-payment-checkout',
                        templateUrl: './payment-checkout.component.html',
                        styleUrls: ['./payment-checkout.component.css']
                    }),
                    __metadata("design:paramtypes", [http_1.Http])
                ], PaymentCheckoutComponent);
                return PaymentCheckoutComponent;
            }());
            exports_1("PaymentCheckoutComponent", PaymentCheckoutComponent);
        }
    };
});
//# sourceMappingURL=payment-checkout.component.js.map