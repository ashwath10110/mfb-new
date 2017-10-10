import { Component, OnInit } from '@angular/core';
import { AppService } from './../app.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
	selector: 'app-tabs',
	templateUrl: './tabs.component.html',
	styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

	constructor(
		public router: Router,
		public appService: AppService
	) { 
		this.appService.selectedTab = 'exotic-vegetables'
		this.router.navigate(['items' , 'exotic-vegetables']);
	}

	ngOnInit() {
	}

	openTab(event,option) {
		console.log(option);
		this.appService.selectedTab = option;
		this.router.navigate(['items',option]);
	}

}
