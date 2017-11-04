import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { AddressService } from '../../services/address.service';
import { AppService } from './../../app.service';
import { ToastComponent } from './../../shared/toast/toast.component';
import { OrderService } from './../../services/orders.service';

@Component({
	selector: 'app-orders',
	templateUrl: './orders.component.html',
	styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

	address = {};
	addresses = [];
	isLoading = true;
	isEditing = false;
	geolocationPosition: any;

	addAddressForm: FormGroup;
	name = new FormControl('', Validators.required);
	locationDataFromCords: any;
	showLocationDataFlag = false;
	locationData = '';
	addressSelected = '';
	locationDataObj: any;
	locationLoading = false;
	showLocationButton = true;
	isAddressValidInDistance = false;
	customerDetails: any;
	items: any;
	cartTotal: any;
	deliveryDetails: any;

	constructor(
		private addressService: AddressService,
		private orderService: OrderService,
		public appService: AppService,
		private formBuilder: FormBuilder,
		private http: Http,
		public toast: ToastComponent,
		public router: Router
	) { }

	ngOnInit() {
		this.addAddressForm = this.formBuilder.group({
			name: this.name,
			customerDetails: this.customerDetails,
			items: this.items,
			cartTotal: this.cartTotal,
			deliveryDetails: this.deliveryDetails
		});
		this.getAddresses();
	}

	getAddresses() {
		this.addressService.getAddresses().subscribe(
			data => {
				this.addresses = data;
			},
			error => console.log(error),
			() => this.isLoading = false
		);
	}

	addAddress() {
		this.addressService.addAddress(this.addAddressForm.value).subscribe(
			res => {
				const newAddress = res.json();
				this.addresses.push(newAddress);
				this.addAddressForm.reset();
				this.toast.setMessage('Address added successfully.', 'success');
			},
			error => console.log(error)
		);
	}

	addCurrentAddress(address) {
		this.addressService.addAddress(address).subscribe(
			res => {
				const newAddress = res.json();
				this.addresses.push(newAddress);
				this.addAddressForm.reset();
				this.toast.setMessage('Address added successfully.', 'success');
			},
			error => console.log(error)
		);
	}

	enableEditing(address) {
		this.isEditing = true;
		this.address = address;
	}

	cancelEditing() {
		this.isEditing = false;
		this.address = {};
		this.toast.setMessage('Address editing cancelled.', 'warning');
	}

	editAddress(address) {
		this.addressService.editAddress(address).subscribe(
			res => {
				this.isEditing = false;
				this.address = address;
				this.toast.setMessage('Address edited successfully.', 'success');
			},
			error => console.log(error)
		);
	}

	deleteAddress(address) {
		if (window.confirm('Are you sure you want to permanently delete this item?')) {
			this.addressService.deleteAddress(address).subscribe(
				res => {
					const pos = this.addresses.map(elem => elem._id).indexOf(address._id);
					this.addresses.splice(pos, 1);
					this.toast.setMessage('Address deleted successfully.', 'success');
				},
				error => console.log(error)
			);
		}
	}
}
