System.register(["@angular/core", "@angular/http", "@angular/forms", "../services/items.service", "../shared/toast/toast.component"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, http_1, forms_1, items_service_1, toast_component_1, AddItemsComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (items_service_1_1) {
                items_service_1 = items_service_1_1;
            },
            function (toast_component_1_1) {
                toast_component_1 = toast_component_1_1;
            }
        ],
        execute: function () {
            AddItemsComponent = /** @class */ (function () {
                function AddItemsComponent(exoticVegetablesService, formBuilder, http, toast) {
                    this.exoticVegetablesService = exoticVegetablesService;
                    this.formBuilder = formBuilder;
                    this.http = http;
                    this.toast = toast;
                    this.leafyGreenVegetable = {};
                    this.leafyGreenVegetables = [];
                    this.isLoading = true;
                    this.isEditing = false;
                    this.itemTypes = ['exotic-vegetables', 'leafy-green-vegetables', 'fresh-vegetables', 'fresh-fruits'];
                    this.name = new forms_1.FormControl('', forms_1.Validators.required);
                    this.type = new forms_1.FormControl('', forms_1.Validators.required);
                    this.countPerKg = new forms_1.FormControl('', forms_1.Validators.required);
                    this.averageWeightPerPiece = new forms_1.FormControl('', forms_1.Validators.required);
                    this.weight = new forms_1.FormControl('', forms_1.Validators.required);
                    this.nameForHindi = new forms_1.FormControl('', forms_1.Validators.required);
                    this.nameForTelugu = new forms_1.FormControl('', forms_1.Validators.required);
                    this.price = new forms_1.FormControl('', forms_1.Validators.required);
                    this.available = new forms_1.FormControl('', forms_1.Validators.required);
                    this.description = new forms_1.FormControl('', forms_1.Validators.required);
                    this.imageHolder = [];
                }
                AddItemsComponent.prototype.imageChange = function (input, i) {
                    var _this = this;
                    var files = (input.target.files[0]);
                    this.imageHolder[i] = window.URL.createObjectURL(input.target.files[0]);
                    var reader = new FileReader();
                    reader.addEventListener("load", function (event) {
                        _this.imageHolder[i] = event.target.result;
                    }, false);
                    reader.readAsDataURL(input.target.files[0]);
                };
                AddItemsComponent.prototype.ngOnInit = function () {
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
                };
                AddItemsComponent.prototype.getLeafyGreenVegetables = function () {
                    var _this = this;
                    this.exoticVegetablesService.getLeafyGreenVegetables().subscribe(function (data) { return _this.leafyGreenVegetables = data; }, function (error) { return console.log(error); }, function () { return _this.isLoading = false; });
                };
                AddItemsComponent.prototype.addLeafyGreenVegetable = function () {
                    var _this = this;
                    var cat = this.addCatForm.value;
                    cat.available = cat.available == 'true' ? true : false;
                    cat.imageForShowCase = this.imageHolder[1];
                    cat.imageForCart = this.imageHolder[2];
                    this.exoticVegetablesService.addLeafyGreenVegetable(cat).subscribe(function (res) {
                        var newCat = res.json();
                        _this.leafyGreenVegetables.push(newCat);
                        _this.addCatForm.reset();
                        _this.toast.setMessage('item added successfully.', 'success');
                    }, function (error) { return console.log(error); });
                };
                AddItemsComponent.prototype.enableEditing = function (leafyGreenVegetable) {
                    this.isEditing = true;
                    this.leafyGreenVegetable = leafyGreenVegetable;
                };
                AddItemsComponent.prototype.cancelEditing = function () {
                    this.isEditing = false;
                    this.leafyGreenVegetable = {};
                    this.toast.setMessage('item editing cancelled.', 'warning');
                    this.getLeafyGreenVegetables();
                };
                AddItemsComponent.prototype.editLeafyGreenVegetable = function (cat) {
                    var _this = this;
                    cat.available = cat.available == 'true' ? true : false;
                    cat.imageForShowCase = this.imageHolder[1];
                    cat.imageForCart = this.imageHolder[2];
                    this.exoticVegetablesService.editLeafyGreenVegetable(cat).subscribe(function (res) {
                        _this.isEditing = false;
                        _this.leafyGreenVegetable = cat;
                        _this.toast.setMessage('item edited successfully.', 'success');
                    }, function (error) { return console.log(error); });
                };
                AddItemsComponent.prototype.deleteLeafyGreenVegetable = function (leafyGreenVegetable) {
                    var _this = this;
                    if (window.confirm('Are you sure you want to permanently delete this item?')) {
                        this.exoticVegetablesService.deleteLeafyGreenVegetable(leafyGreenVegetable).subscribe(function (res) {
                            var pos = _this.leafyGreenVegetables.map(function (elem) { return elem._id; }).indexOf(leafyGreenVegetable._id);
                            _this.leafyGreenVegetables.splice(pos, 1);
                            _this.toast.setMessage('item deleted successfully.', 'success');
                        }, function (error) { return console.log(error); });
                    }
                };
                __decorate([
                    core_1.ViewChildren("fileInput"),
                    __metadata("design:type", Object)
                ], AddItemsComponent.prototype, "fileInput", void 0);
                AddItemsComponent = __decorate([
                    core_1.Component({
                        selector: 'app-add-items',
                        templateUrl: './add-items.component.html',
                        styleUrls: ['./add-items.scss']
                    }),
                    __metadata("design:paramtypes", [items_service_1.ItemsService,
                        forms_1.FormBuilder,
                        http_1.Http,
                        toast_component_1.ToastComponent])
                ], AddItemsComponent);
                return AddItemsComponent;
            }());
            exports_1("AddItemsComponent", AddItemsComponent);
        }
    };
});
//# sourceMappingURL=add-items.component.js.map