import { Component, OnInit, Inject } from '@angular/core';

import { FilterBase, DropDownFilter, TypeCheckBoxFilter } from "./filters/filters";
import { SearchRequest, Deal } from "./models/models";

import { SearchService } from '../services/SearchService';


@Component({
    selector: 'search-component', 
    templateUrl: 'app/search/search.component.html',
    providers:[SearchService]
})
export class SearchComponent implements OnInit{

    public checkBoxFilters: TypeCheckBoxFilter[];
    public dropDownFilter: DropDownFilter[];
    public menuVisible = false;
    public result : Deal[];

    constructor( @Inject(SearchService) private searchService: SearchService) { }

    ngOnInit(): void { 
        this.checkBoxFilters = [
            new TypeCheckBoxFilter("Brodband", "Broadband"),
            new TypeCheckBoxFilter("TV", "TV"),
            new TypeCheckBoxFilter("Mobile", "Mobile")
        ];

        this.dropDownFilter = [
            new DropDownFilter("Speed", "speed", "Any", [
                { "label": "Any", "value": "" },
                { "label": "5MB", "value": "5120" },
                { "label": "17MB", "value": "17408" },
                { "label": "52MB", "value": "53248" } 
            ])
        ];

        this.searchProducts();
    }

    toggleMenu(e) {
        e.stopPropagation();
        e.preventDefault();
        this.menuVisible = !this.menuVisible;
    }

    searchProducts() {
        let request = new SearchRequest();
        for (let i = 0; i < this.checkBoxFilters.length; i++) {
            this.checkBoxFilters[i].applyFilter(request);
        }

        for (let i = 0; i < this.dropDownFilter.length; i++) {
            this.dropDownFilter[i].applyFilter(request);
        }

        this.searchService.search(request)
            .subscribe(x => this.result = x);
    }
}