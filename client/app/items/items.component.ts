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
  leafyGreenVegetable = {};
  leafyGreenVegetables = [];

  isLoading = true;
  isEditing = false;

  originalData: any = [];
  id: number;
  typeOfVegetables: any;

  private sub: any;

  constructor(private dataService: DataService,
    private cartService: CartService,
    private itemsService: ItemsService,
    private route: ActivatedRoute,
    private appService: AppService) {
  }

  ngOnInit() {
    this.initCart();
  }

  getItems(type) {
    if (this.itemsService.state['isInitialised']) {
      this.products = this.itemsService.state['data'][type]['items'];
      this.isLoading = false;
    } else {
      this.isLoading = true;
      this.itemsService.getItems().subscribe(
        data => {
          this.processItems(data, this.itemsService.state);
          this.products = this.itemsService.state['data'][type]['items'];
          this.isLoading = false;
          this.itemsService.state['isInitialised'] = true;
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
      state.data[type]['items'].push(currentItem);
    }
  }

  getLeafyGreenVegetables() {
    this.itemsService.getLeafyGreenVegetables().subscribe(
      data => {
        this.products = data;
      },
      error => console.log(error),
      () => this.isLoading = false
    );
  }

  initCart() {
    this.sub = this.route.params.subscribe(params => {
      this.typeOfVegetables = params['id'];
      if (this.typeOfVegetables) {
        this.getItems(this.typeOfVegetables);
      }
    });
  }

}