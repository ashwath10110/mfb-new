System.register(["@angular/core", "@angular/forms", "../services/cat.service", "../shared/toast/toast.component"], function (exports_1, context_1) {
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
    var core_1, forms_1, cat_service_1, toast_component_1, CatsComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (cat_service_1_1) {
                cat_service_1 = cat_service_1_1;
            },
            function (toast_component_1_1) {
                toast_component_1 = toast_component_1_1;
            }
        ],
        execute: function () {
            CatsComponent = /** @class */ (function () {
                function CatsComponent(catService, formBuilder, toast) {
                    this.catService = catService;
                    this.formBuilder = formBuilder;
                    this.toast = toast;
                    this.cat = {};
                    this.cats = [];
                    this.isLoading = true;
                    this.isEditing = false;
                    this.name = new forms_1.FormControl('', forms_1.Validators.required);
                    this.age = new forms_1.FormControl('', forms_1.Validators.required);
                    this.weight = new forms_1.FormControl('', forms_1.Validators.required);
                }
                CatsComponent.prototype.ngOnInit = function () {
                    this.getCats();
                    this.addCatForm = this.formBuilder.group({
                        name: this.name,
                        age: this.age,
                        weight: this.weight
                    });
                };
                CatsComponent.prototype.getCats = function () {
                    var _this = this;
                    this.catService.getCats().subscribe(function (data) { return _this.cats = data; }, function (error) { return console.log(error); }, function () { return _this.isLoading = false; });
                };
                CatsComponent.prototype.addCat = function () {
                    var _this = this;
                    this.catService.addCat(this.addCatForm.value).subscribe(function (res) {
                        var newCat = res.json();
                        _this.cats.push(newCat);
                        _this.addCatForm.reset();
                        _this.toast.setMessage('item added successfully.', 'success');
                    }, function (error) { return console.log(error); });
                };
                CatsComponent.prototype.enableEditing = function (cat) {
                    this.isEditing = true;
                    this.cat = cat;
                };
                CatsComponent.prototype.cancelEditing = function () {
                    this.isEditing = false;
                    this.cat = {};
                    this.toast.setMessage('item editing cancelled.', 'warning');
                    // reload the cats to reset the editing
                    this.getCats();
                };
                CatsComponent.prototype.editCat = function (cat) {
                    var _this = this;
                    this.catService.editCat(cat).subscribe(function (res) {
                        _this.isEditing = false;
                        _this.cat = cat;
                        _this.toast.setMessage('item edited successfully.', 'success');
                    }, function (error) { return console.log(error); });
                };
                CatsComponent.prototype.deleteCat = function (cat) {
                    var _this = this;
                    if (window.confirm('Are you sure you want to permanently delete this item?')) {
                        this.catService.deleteCat(cat).subscribe(function (res) {
                            var pos = _this.cats.map(function (elem) { return elem._id; }).indexOf(cat._id);
                            _this.cats.splice(pos, 1);
                            _this.toast.setMessage('item deleted successfully.', 'success');
                        }, function (error) { return console.log(error); });
                    }
                };
                CatsComponent = __decorate([
                    core_1.Component({
                        selector: 'app-cats',
                        templateUrl: './cats.component.html',
                        styleUrls: ['./cats.component.scss']
                    }),
                    __metadata("design:paramtypes", [cat_service_1.CatService,
                        forms_1.FormBuilder,
                        toast_component_1.ToastComponent])
                ], CatsComponent);
                return CatsComponent;
            }());
            exports_1("CatsComponent", CatsComponent);
        }
    };
});
//# sourceMappingURL=cats.component.js.map