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
const core_1 = require("@angular/core");
const filters_1 = require("./filters");
let CheckBoxFilterView = class CheckBoxFilterView {
    constructor() {
        this.filterChanged = new core_1.EventEmitter();
    }
    onChange() {
        this.filter.isEnabled = !this.filter.isEnabled;
        this.filterChanged.emit();
    }
};
__decorate([
    core_1.Input("filter"),
    __metadata("design:type", filters_1.TypeCheckBoxFilter)
], CheckBoxFilterView.prototype, "filter", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], CheckBoxFilterView.prototype, "filterChanged", void 0);
CheckBoxFilterView = __decorate([
    core_1.Component({
        selector: 'check-box-filter',
        template: '<label><input type="checkbox" (change)="onChange()" />{{filter.label}}</label>'
    })
], CheckBoxFilterView);
exports.CheckBoxFilterView = CheckBoxFilterView;
