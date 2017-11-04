import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { AddressService } from '../../services/address.service';
import { AppService } from './../../app.service';
import { ToastComponent } from './../../shared/toast/toast.component';
import { CartService } from './../items/cart.service';
import { ItemsService } from './../../services/items.service';
import { AuthService } from './../../auth/auth.service';

import { UserService } from './../../services/user.service';

@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.scss']
})
export class AddressesComponent implements OnInit {

  address = {};
  addresses = [];
  isLoading = false;
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

  constructor(
    private addressService: AddressService,
    private cartService: CartService,
    public appService: AppService,
    public itemsService: ItemsService,
    private formBuilder: FormBuilder,
    private http: Http,
    public toast: ToastComponent,
    public router: Router,
    private userService: UserService,
    private auth: AuthService
  ) { }

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
      if (this.appService.currentUser.distanceFromShop.status == 1) {
        this.isAddressValidInDistance = true;
        // this.addUserHelper(address);
      }
      this.isLoading = false;
    }, () => {
      this.isLoading = false;
    });
  }

  getAddresses() {
    if (this.appService.currentUser.userData.status) {
      this.addresses = this.appService.currentUser.userData.data['addresses'];
    } else {
      this.isLoading = true;
      debugger;
      // this.userService.getUser(this.auth.currentUser).subscribe(
      //   data => {
      //     this.addresses = data['addresses'];
      //     this.appService.currentUser.userData = {
      //       status: true,
      //       data: data
      //     };
      //     this.isLoading = false;
      //   },
      //   error => console.log(error),
      //   () => {
      //     this.isLoading = false;
      //   }
      // );
    }
  }

  addAddress() {
    let address = {
      name: this.addAddressForm.value.name,
      value: {
        HNo: 'dhdhdhdhh',
        StreetNo: 'yyeueueueuueue',
        AreaName: 'Bowenpally',
        LandMark: 'assdsddjjdjdjdjdjjdjd'
      }
    };
    this.addUserHelper(address);
  }

  addUserHelper(address) {
    let User = this.appService.currentUser.userData.data;
    User['addresses'].push(address);
    this.isLoading = false;
    this.userService.editUser(User).subscribe(
      res => {
        const updatedUser = res.json();
        this.appService.currentUser.userData.data = updatedUser;
        this.appService.currentUser.userData.status = false;
        this.addAddressForm.reset();
        this.addresses = this.appService.currentUser.userData.data['addresses'];
        this.isLoading = true;
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
    let user = this.appService.currentUser.userDetails.addresses.data;
    for (var i = 0; i < user['addresses'].length; i++) {
      if (user['addresses'][i].name == address.name) {
        user['addresses'][i].value = address;
      }
    }
    this.userService.editUser(user).subscribe(
      res => {
        this.addresses = this.appService.currentUser.userDetails.addresses.data['addresses']
        const newAddresses = res.json();
        this.appService.currentUser.userDetails.addresses.status = true;
        this.appService.currentUser.userDetails.addresses.data = res;
        this.addresses = newAddresses.addresses;
        // this.addAddressForm.reset();

        this.isEditing = false;
        // this.address = res;
        this.toast.setMessage('Address Edited successfully.', 'success');
      },
      error => console.log(error)
    );
  }

  deleteAddress(address) {
    if (window.confirm('Are you sure you want to permanently delete this item?')) {
      
      debugger;
      // let user = this.auth.currentUser;
      // for (var i = 0; i < user.addresses.length; i++) {
      //   if (user.addresses[i].name == address.name) {
      //     user.addresses.splice(i, 1);
      //     break;
      //   }
      // }
      // this.userService.editUser(user).subscribe(
      //   res => {
      //     const pos = this.addresses.map(elem => elem._id).indexOf(address._id);
      //     this.isEditing = false;
      //     // this.addresses = res['']
      //     this.toast.setMessage('Address deleted successfully.', 'success');
      //   },
      //   error => console.log(error)
      // );
      // this.addressService.deleteAddress(address).subscribe(
      //   res => {
      //     const pos = this.addresses.map(elem => elem._id).indexOf(address._id);
      //     this.addresses.splice(pos, 1);
      //     this.toast.setMessage('Address deleted successfully.', 'success');
      //   },
      //   error => console.log(error)
      // );
    }
  }

  proceedToPay() {
    let prod = this.cartService.products;
    let newProd = [];

    for (var i = 0; i < prod.length; i++) {
      newProd.push({ '_id': prod[i]['product']['_id'] });
    }

    let cartProducts = {
      products: newProd
    };

    this.loadWholeScreen = true;

    // if (this.appService.currentUser.locationInfo.status) {
    //   this.addUserHelper({ name: this.appService.currentUser.locationInfo.value });
    // }

    this.addUserHelper({ name: 'sample' });

    this.itemsService.isCartValid(cartProducts).subscribe(
      res => {
        this.loadWholeScreen = false;
        if (res['status']) {
          if (res['data']['value']) {
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
