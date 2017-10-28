import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { Http, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) { }
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

declare var $;

@Component({
  selector: 'app-payment-checkout',
  templateUrl: './payment-checkout.component.html',
  styleUrls: ['./payment-checkout.component.css']
})
export class PaymentCheckoutComponent implements OnInit {

	message = 'Everyone come and see how good I look!';
  mkey = 'gtKFFx';
  productInfo = 'Verification order';
  txnid = this.makeid();
  amount = 234.99;
  id = '2222222';
  email = 'test@test.com';
  phone = 9999999999;
  lastName = 'test';
  firstName = 'fname';
  surl = "http://localhost:4200/api/PaymentStatus";
  hash = '';
  isLoading = false;

  pageTest = `<div class="jumbotron text-center">
    <h1>Payumoney Payment Gateway</h1>
    <h3> Rs {{amount}}</h3>
    <form id="paymentForm" action='https://test.payu.in/_payment' method='post'>
        <input type="hidden" name="key" value="{{mkey}}" />
        <input type="hidden" name="txnid" value="{{txnid}}" />
        <input type="hidden" name="amount" value="{{amount}}" />
        <input type="hidden" name="productinfo" value="{{productInfo}}" />
        <input type="hidden" name="firstname" value="{{firstName}}" />
        <input type="hidden" name="udf1" value={{id}} />
        <input type="hidden" name="email" value="{{email}}" />
        <input type="hidden" name="phone" value="{{phone}}" />
        <input type="hidden" name="lastname" value="{{lastName}}" />
        <input type="hidden" name="surl" value="{{surl}}" />
        <input type="hidden" name="furl" value="{{surl}}" />
        <input type="hidden" name="hash" id="hash" value="{{hash}}">
        <div class="pay-now-button-outer">
            <button class="btn btn-primary fontBold" (click)="presubmit()" type="button">PAY NOW</button>
        </div>
    </form>
</div>`;

  constructor(private http: Http) { }

  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  private options = new RequestOptions({ headers: this.headers });

  ngOnInit() {
  }

	makeid() {
		var text = "";
		var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

		for (var i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

		return text;
	}

  makeHash(): Observable<any> {
    var data = { preHashString: this.mkey + '|' + this.txnid + '|' + this.amount + '|' + this.productInfo + '|' + this.firstName + '|' + this.email + '|' + this.id + '||||||||||' };
    var url = '/api/createHash';
    return this.http.post(url, data, this.options);
  }

  presubmit() {
    this.makeHash().subscribe(
      data => {
        console.log("Success");
        if (data.status == 200) {
          document.getElementById('hash')["value"] = JSON.parse(data["_body"])['hash'];
          debugger;
          $('#paymentForm').submit();
        }
      },
      error => console.log(error),
      () => this.isLoading = false
    );
  }

}