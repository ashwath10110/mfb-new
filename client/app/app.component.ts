import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

	constructor(
		public auth: AuthService,
	) {
		this.auth.handleAuthentication();

		if (window["Worker"]) {
			console.log('Service worker available');
		} else {
			console.log("Service worker NA");
		}
	}

	ngOnInit() {
	}

}
