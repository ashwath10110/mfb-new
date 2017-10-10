import { Injectable } from '@angular/core';
// import { AppService } from './../app/app.service';

@Injectable()
export class LocalStorageService {

	nameForLocalStorage = '';

	// constructor(
	// 	public _appService: AppService
	// ) {
	// 	this.nameForLocalStorage = this._appService.currentUser.tokenForLocalStorage;
	// }

	// setCartValue(cartState) {
	// 	localStorage.setItem(this.nameForLocalStorage, JSON.stringify(cartState));
	// }

	// getCartValue() {
	// 	if (localStorage.getItem(this.nameForLocalStorage) != null) {
	// 		return JSON.parse(localStorage.getItem(this.nameForLocalStorage));
	// 	}
	// 	else {
	// 		return null;
	// 	}
	// }
}
