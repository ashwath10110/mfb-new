import { Injectable } from '@angular/core';

@Injectable()
export class AppService {

	public selectedTab = 'Home';
	
	public currentUser = {
		name: 'Ashwath',
		tokenId: '123',
		tokenForLocalStorage: 'mfb-storage'
	};

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

	constructor() { 

		

	}

}
