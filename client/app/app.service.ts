import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { ToastComponent } from './../app/shared/toast/toast.component';

@Injectable()
export class AppService {

  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  private options = new RequestOptions({ headers: this.headers });

  public selectedTab = 'Home';

  x_ = "https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyAkL6AxoO5S7ACBqvO-A2eMstnbx8pU9oE";

  public currentUser = {
    name: 'Ashwath',
    tokenId: '00110101100',
    tokenForLocalStorage: 'mfb-storage',
    locationData: {
      status: false,
      value: {}
    },
    locationInfo: {
      status: false,
      value: {}
    },
    distanceFromShop: {
      status: false,
      value: {}
    },
    isLocationValid: {
      status: false,
      value: {}
    }
  };

  public shopDetails = {
    name: '',
    locationChords: {
      latitude: 17.4551658,
      longitude: 78.4983102
    },
    locationInfo: {
      value: "Shop is in Secunderabad"
    },
    validDistanceAllowedInKm: 10
  }

  googleApiKey = 'AIzaSyAkL6AxoO5S7ACBqvO-A2eMstnbx8pU9oE';

  state = {
    'isInitialised': false,
    'data': {
      'exotic-vegetables': {
        'items': [],
        'isInitialised': false
      },
      'leafy-green-vegetables': {
        'items': [],
        'isInitialised': false
      },
      'fresh-fruits': {
        'items': [],
        'isInitialised': false
      },
      'fresh-vegetables': {
        'items': [],
        'isInitialised': false
      }
    }
  };

  constructor(private http: Http,
    public toast: ToastComponent) {
    this.locationInit();
    console.log(this.currentUser);
  }

  getPosition(options) {
    return new Promise(function(resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
  }

  locationInit() {
    
    return new Promise(resolve => {

      if (!this.currentUser.locationData.status) {
        resolve(this.currentUser.locationInfo.value);
      }

      this.getPosition({})
        .then((position) => {

          this.currentUser.locationData = {
            status: true,
            value: position
          };

          this.currentUser.isLocationValid = {
            status: true,
            value: this.isDistanceValid(this.shopDetails.locationChords, position['coords'], this.shopDetails.validDistanceAllowedInKm * 1000)
          };

          this.getLocationFromCords(position['coords'].latitude, position['coords'].longitude).subscribe(
            res => {
              console.log(res);
              this.currentUser.locationInfo = {
                status: true,
                value: res.results[0].formatted_address
              };
              resolve(this.currentUser.locationInfo.value);
            },
            error => {
              switch (error.code) {
                case 1:
                  console.log('Permission Denied');
                  break;
                case 2:
                  console.log('Position Unavailable');
                  break;
                case 3:
                  console.log('Timeout');
                  break;
              }
              this.toast.setMessage('Unable to get Location', 'error');
            }
          );
        })
        .catch((err) => {
          console.error(err.message);
        });
      
    });
  }

  isDistanceValid(shop, customer, radiusValid) {
    var rad = function(x) {
      return x * Math.PI / 180;
    };
    var R = 6378137; // Earth’s mean radius in meter
    var dLat = rad(customer.latitude - shop.latitude);
    var dLong = rad(customer.longitude - shop.longitude);
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(rad(shop.latitude)) * Math.cos(rad(customer.latitude)) *
      Math.sin(dLong / 2) * Math.sin(dLong / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var distance = R * c;
    this.currentUser.distanceFromShop.value = distance;
    return (distance <= radiusValid); // returns the distance in meter
  };

  getLocationFromCords(lat, lon): Observable<any> {
    let apiKey = this.googleApiKey;
    let getLocationFromCordsUrl = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + lat + ',' + lon + '&key=' + apiKey;
    return this.http.get(getLocationFromCordsUrl).map(res => res.json());
  }

}
