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
let DropDownFilterView = class DropDownFilterView {
    constructor() {
        this.filterChanged = new core_1.EventEmitter();
    }
    onChange(value) {
        console.log('selected value ' + value);
        this.filter.selectedValue = value;
        this.filterChanged.emit();
    }
};
__decorate([
    core_1.Input("filter"),
    __metadata("design:type", filters_1.DropDownFilter)
], DropDownFilterView.prototype, "filter", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], DropDownFilterView.prototype, "filterChanged", void 0);
DropDownFilterView = __decorate([
    core_1.Component({
        selector: 'drop-down-filter',
        template: '{{filter.label}} <select (change)="onChange($event.target.value)"><option *ngFor="let i of filter.options" [value]="i.value">{{i.label}}</option></select>'
    })
], DropDownFilterView);
exports.DropDownFilterView = DropDownFilterView;
