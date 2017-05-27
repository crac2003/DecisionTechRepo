"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var keys_pipe_1 = require("../pipes/keys.pipe");
var SearchService_1 = require("../services/SearchService");
var search_component_1 = require("./search.component");
var search_item_component_1 = require("./search-item.component");
var checkbox_view_component_1 = require("./filters/checkbox-view.component");
var dropdown_view_component_1 = require("./filters/dropdown-view.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, http_1.HttpModule, http_1.JsonpModule],
        declarations: [search_component_1.SearchComponent,
            search_item_component_1.SearchItemComponent,
            checkbox_view_component_1.CheckBoxFilterView,
            dropdown_view_component_1.DropDownFilterView,
            keys_pipe_1.KeysPipe],
        bootstrap: [search_component_1.SearchComponent],
        providers: [SearchService_1.SearchService]
    })
], AppModule);
exports.AppModule = AppModule;
