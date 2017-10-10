import { Component, OnInit } from '@angular/core';
import {  Response } from '@angular/http';
import { Http, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

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
    surl = "http://localhost:3000/api/PaymentStatus";
    hash = '';
    isLoading = false;

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