import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { ToastComponent } from '../shared/toast/toast.component';

import { Product } from './shared/product.model';
import { DataService } from './data.service';
import { CartService } from './cart.service';
import { AfterViewInit, ViewChild } from '@angular/core';
import { ItemsService } from './../services/items.service';
import { TabsComponent } from './../tabs/tabs.component';

import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.scss']
})
export class ItemsComponent implements OnInit {

  products: Product[]

  isLoading = true;
  isEditing = false;

  leafyGreenVegetable = {};
  leafyGreenVegetables = [];

  originalData: any = [];

  id: number;
  typeOfVegetables:any;
  private sub: any;

  constructor(private dataService: DataService, private cartService: CartService,
    private exoticVegetablesService: ItemsService,
    private route: ActivatedRoute){  }

  getLeafyGreenVegetables() {
    this.exoticVegetablesService.getLeafyGreenVegetables().subscribe(
      data => {
        this.products = data;
      },
      error => console.log(error),
      () => this.isLoading = false
    );
  }

  ngOnInit(){

    this.sub = this.route.params.subscribe(params => {
      this.typeOfVegetables = params['id'];
        this.getLeafyGreenVegetables();
    });
  }
}

