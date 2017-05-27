"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var SearchItemComponent = (function () {
    function SearchItemComponent() {
    }
    SearchItemComponent.prototype.ngOnInit = function () {
    };
    return SearchItemComponent;
}());
__decorate([
    core_1.Input("item")
], SearchItemComponent.prototype, "item");
SearchItemComponent = __decorate([
    core_1.Component({
        selector: 'search-item',
        templateUrl: 'app/search/search-item.component.html'
    })
], SearchItemComponent);
exports.SearchItemComponent = SearchItemComponent;
