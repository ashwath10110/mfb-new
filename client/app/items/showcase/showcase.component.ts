import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../shared/product.model'
import { CartService } from '../cart.service';
import { AppService } from './../../app.service';

import { FilterPipe } from './../../shared/my-filter.pipe';

@Component({
	selector: 'showcase',
	templateUrl: './showcase.component.html',
	styleUrls: ['./showcase.component.scss']
})
export class ShowcaseComponent implements OnInit {

	@Input() products: Product[];
	@Input() itemType: String;
	filter = {
		name:''
	};

	constructor(private cartService: CartService,
		private appService: AppService) {	}

	ngOnInit() {
	}
}
