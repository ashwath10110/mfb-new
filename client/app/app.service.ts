import { Injectable } from '@angular/core';

@Injectable()
export class AppService {

	public selectedTab = 'Home';
	
	public currentUser = {
		name: 'Ashwath',
		tokenId: '123',
		tokenForLocalStorage: 'mfb-storage'
	};

	constructor() { }

}
