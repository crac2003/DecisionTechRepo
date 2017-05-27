"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var CheckBoxFilterView = (function () {
    function CheckBoxFilterView() {
        this.filterChanged = new core_1.EventEmitter();
    }
    CheckBoxFilterView.prototype.onChange = function () {
        this.filter.isEnabled = !this.filter.isEnabled;
        this.filterChanged.emit();
    };
    return CheckBoxFilterView;
}());
__decorate([
    core_1.Input("filter")
], CheckBoxFilterView.prototype, "filter");
__decorate([
    core_1.Output()
], CheckBoxFilterView.prototype, "filterChanged");
CheckBoxFilterView = __decorate([
    core_1.Component({
        selector: 'check-box-filter',
        template: '<label><input type="checkbox" (change)="onChange()" />{{filter.label}}</label>'
    })
], CheckBoxFilterView);
exports.CheckBoxFilterView = CheckBoxFilterView;
