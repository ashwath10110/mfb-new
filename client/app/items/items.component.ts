import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { ToastComponent } from '../shared/toast/toast.component';

import { Product } from './shared/product.model';
import { DataService } from './data.service';
import { CartService } from './cart.service';
import { AfterViewInit, ViewChild } from '@angular/core';
import { ItemsService } from './../services/items.service';
import { AppService } from './../app.service';
import { TabsComponent } from './../tabs/tabs.component';

import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.scss']
})
export class ItemsComponent implements OnInit {

  products = []

  isLoading = true;
  isEditing = false;

  leafyGreenVegetable = {};
  leafyGreenVegetables = [];

  originalData: any = [];

  id: number;
  typeOfVegetables: any;
  private sub: any;

  constructor(private dataService: DataService,
    private cartService: CartService,
    private exoticVegetablesService: ItemsService,
    private route: ActivatedRoute,
    private appService: AppService) {
  }

  getItems(type) {
    debugger;
    if (this.exoticVegetablesService.state['isInitialised']) {
      this.products = this.exoticVegetablesService.state['data'][type]['items'];
      this.isLoading = false;
    } else {
      this.isLoading = true;
      this.exoticVegetablesService.getItems().subscribe(
        data => {
          this.processItems(data, this.exoticVegetablesService.state);
          this.products = this.exoticVegetablesService.state['data'][type]['items'];
          this.isLoading = false;
          this.exoticVegetablesService.state['isInitialised'] = true;
        },
        error => console.log(error),
        () => this.isLoading = false
      );
    }
  }

  processItems(items, state) {
    for (var i = 0; i < items.length; i++) {
      var currentItem = items[i];
      var type = currentItem['type'];
      debugger;
      state.data[type]['items'].push(currentItem);
    }
  }

  getLeafyGreenVegetables() {
    this.exoticVegetablesService.getLeafyGreenVegetables().subscribe(
      data => {
        this.products = data;
      },
      error => console.log(error),
      () => this.isLoading = false
    );
  }

  // getItems(type) {
  //   this.products = [];
  //   this.isLoading = true;

  //   this.products = this.exoticVegetablesService.getItems_(type);
  // }

  ngOnInit() {
    console.log(this.appService);

    this.sub = this.route.params.subscribe(params => {
      this.typeOfVegetables = params['id'];
      console.log(this.typeOfVegetables);

      if (this.typeOfVegetables) {
        this.getItems(this.typeOfVegetables);
      }
    });
  }
}