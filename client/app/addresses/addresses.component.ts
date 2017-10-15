import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { AddressService } from '../services/address.service';
import { AppService } from './../app.service';
import { ToastComponent } from '../shared/toast/toast.component';
import { CartService } from './../items/cart.service';
import { ItemsService } from './../services/items.service';

@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.scss']
})
export class AddressesComponent implements OnInit {

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
  loadWholeScreen = false;

  constructor(private addressService: AddressService,
    private cartService: CartService,
    public appService: AppService,
    public itemsService: ItemsService,
    private formBuilder: FormBuilder,
    private http: Http,
    public toast: ToastComponent,
    public router: Router) { }

  ngOnInit() {
    this.addAddressForm = this.formBuilder.group({
      name: this.name
    });
    this.getAddresses();
  }

  getLocationData() {
    this.isLoading = true;
    this.showLocationButton = false;
    this.appService.locationInit().subscribe((data) => {
      let address = JSON.parse(data["_body"]).results[0].formatted_address;
      this.addresses.push({ name: address });
      this.showLocationButton = false;
      this.appService.currentUser.locationInfo = {
        status: true,
        value: address
      };

      if (this.appService.currentUser.distanceFromShop.status) {
        this.isAddressValidInDistance = true;
      }

      this.isLoading = false;
    }, () => {
      this.isLoading = false;
    });
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

  proceedToPay() {
    let prod = this.cartService.products;
    let newProd = [];

    for (var i = 0; i < prod.length; i++) {
      newProd.push({ '_id': prod[i]['product']['_id']});
    }

    let cartProducts = {
      products: newProd
    };
    this.loadWholeScreen = true;
    this.itemsService.isCartValid(cartProducts).subscribe(
      res => {
        this.loadWholeScreen = false;
        if (res['status']) {
          if (res['data']['value']) {
            if (this.appService.currentUser.locationInfo.status) {
              this.addCurrentAddress({ name: this.appService.currentUser.locationInfo.value });
            }
            this.router.navigate(['/checkout']);
          }
          else {
            alert('Some items might not be available. Your cart has been refreshed.');
            this.toast.setMessage('Some items might not be available Your cart has been refreshed.', 'warning');
            this.cartService.refreshCart();
          }
        }
      },
      error => {
        this.loadWholeScreen = false;
        console.log(error);
      }
    );
  }

}
