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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
const core_1 = require("@angular/core");
const filters_1 = require("./filters/filters");
const models_1 = require("./models/models");
const SearchService_1 = require("../services/SearchService");
let SearchComponent = class SearchComponent {
    constructor(searchService) {
        this.searchService = searchService;
    }
    ngOnInit() {
        this.checkBoxFilters = [
            new filters_1.TypeCheckBoxFilter("Brodband", "Broadband"),
            new filters_1.TypeCheckBoxFilter("TV", "TV"),
            new filters_1.TypeCheckBoxFilter("Mobile", "Mobile")
        ];
        this.dropDownFilter = [
            new filters_1.DropDownFilter("Speed", "speed", "Any", [
                { "label": "Any", "value": "" },
                { "label": "5MB", "value": "5120" },
                { "label": "17MB", "value": "17408" },
                { "label": "52MB", "value": "53248" }
            ])
        ];
        this.searchProducts();
    }
    searchProducts() {
        let request = new models_1.SearchRequest();
        for (let i = 0; i < this.checkBoxFilters.length; i++) {
            this.checkBoxFilters[i].applyFilter(request);
        }
        for (let i = 0; i < this.dropDownFilter.length; i++) {
            this.dropDownFilter[i].applyFilter(request);
        }
        this.searchService.search(request)
            .subscribe(x => this.result = x);
    }
};
SearchComponent = __decorate([
    core_1.Component({
        selector: 'search-component',
        templateUrl: 'app/search/search.component.html',
        providers: [SearchService_1.SearchService]
    }),
    __param(0, core_1.Inject(SearchService_1.SearchService)),
    __metadata("design:paramtypes", [SearchService_1.SearchService])
], SearchComponent);
exports.SearchComponent = SearchComponent;
