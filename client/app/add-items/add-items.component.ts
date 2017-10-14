import { Component, OnInit, ViewChildren, ElementRef } from '@angular/core';
import { Http } from '@angular/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { ItemsService } from '../services/items.service';
import { ToastComponent } from '../shared/toast/toast.component';

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.scss']
})
export class AddItemsComponent implements OnInit {

  leafyGreenVegetable = {};
  leafyGreenVegetables = [];
  isLoading = true;
  isEditing = false;

  addCatForm: FormGroup;
  image1: any;
  image2: any;
  itemTypes = ['exotic-vegetables', 'leafy-green-vegetables', 'fresh-vegetables', 'fresh-fruits'];

  name = new FormControl('', Validators.required);
  type = new FormControl('', Validators.required);
  countPerKg = new FormControl('', Validators.required);
  averageWeightPerPiece = new FormControl('', Validators.required);
  weight = new FormControl('', Validators.required);
  nameForHindi = new FormControl('', Validators.required);
  nameForTelugu = new FormControl('', Validators.required);
  price = new FormControl('', Validators.required);
  available = new FormControl('', Validators.required);
  description = new FormControl('', Validators.required);
  imageHolder = [];

  @ViewChildren("fileInput") fileInput;

  constructor(private exoticVegetablesService: ItemsService,
    private formBuilder: FormBuilder,
    private http: Http,
    public toast: ToastComponent) {
  }

  imageChange(input, i) {
    var files = (input.target.files[0]);
    this.imageHolder[i] = window.URL.createObjectURL(input.target.files[0]);
    var reader = new FileReader();
    reader.addEventListener("load", (event: any) => {
      this.imageHolder[i] = event.target.result;
    }, false);
    reader.readAsDataURL(input.target.files[0]);
  }

  ngOnInit() {

    this.getLeafyGreenVegetables();

    this.addCatForm = this.formBuilder.group({
      name: this.name,
      type: this.type,
      countPerKg: this.countPerKg,
      averageWeightPerPiece: this.averageWeightPerPiece,
      weight: this.weight,
      nameForTelugu: this.nameForTelugu,
      nameForHindi: this.nameForHindi,
      price: this.price,
      available: this.available,
      description: this.description,
    });
  }

  getLeafyGreenVegetables() {
    this.exoticVegetablesService.getLeafyGreenVegetables().subscribe(
      data => this.leafyGreenVegetables = data,
      error => console.log(error),
      () => this.isLoading = false
    );
  }

  addLeafyGreenVegetable() {

    let cat = this.addCatForm.value;
    cat.available = cat.available == 'true' ? true : false;
    cat.imageForShowCase = this.imageHolder[1];
    cat.imageForCart = this.imageHolder[2];

    this.exoticVegetablesService.addLeafyGreenVegetable(cat).subscribe(
      res => {
        const newCat = res.json();
        this.leafyGreenVegetables.push(newCat);
        this.addCatForm.reset();
        this.toast.setMessage('item added successfully.', 'success');
      },
      error => console.log(error)
    );
  }

  enableEditing(leafyGreenVegetable) {
    this.isEditing = true;
    this.leafyGreenVegetable = leafyGreenVegetable;
  }

  cancelEditing() {
    this.isEditing = false;
    this.leafyGreenVegetable = {};
    this.toast.setMessage('item editing cancelled.', 'warning');
    this.getLeafyGreenVegetables();
  }

  editLeafyGreenVegetable(cat) {

    cat.available = cat.available == 'true' ? true : false;
    cat.imageForShowCase = this.imageHolder[1];
    cat.imageForCart = this.imageHolder[2];

    this.exoticVegetablesService.editLeafyGreenVegetable(cat).subscribe(
      res => {
        this.isEditing = false;
        this.leafyGreenVegetable = cat;
        this.toast.setMessage('item edited successfully.', 'success');
      },
      error => console.log(error)
    );
  }

  deleteLeafyGreenVegetable(leafyGreenVegetable) {
    if (window.confirm('Are you sure you want to permanently delete this item?')) {
      this.exoticVegetablesService.deleteLeafyGreenVegetable(leafyGreenVegetable).subscribe(
        res => {
          const pos = this.leafyGreenVegetables.map(elem => elem._id).indexOf(leafyGreenVegetable._id);
          this.leafyGreenVegetables.splice(pos, 1);
          this.toast.setMessage('item deleted successfully.', 'success');
        },
        error => console.log(error)
      );
    }
  }

}