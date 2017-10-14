import { Injectable } from '@angular/core';
import { AppService } from './../../app.service';

@Injectable()
export class LocalStorageService {

	nameForLocalStorage = '';

	constructor(
		public _appService: AppService
	) {
		this.nameForLocalStorage = this._appService.currentUser.tokenForLocalStorage;
	}

	setCartValue(state) {
		localStorage.setItem(this.nameForLocalStorage, JSON.stringify(state));
	}

	getCartValue() {
		if (localStorage.getItem(this.nameForLocalStorage) != null) {
			return JSON.parse(localStorage.getItem(this.nameForLocalStorage));
		}
		else {
			return null;
		}
	}
}
