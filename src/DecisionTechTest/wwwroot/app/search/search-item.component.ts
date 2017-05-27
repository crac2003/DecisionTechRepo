import { Component, OnInit, Inject, Input } from '@angular/core'; 
import { Deal } from "./models/models"; 


@Component({
    selector: 'search-item',
    templateUrl: 'app/search/search-item.component.html'
})
export class SearchItemComponent implements OnInit {

    @Input("item") item: Deal;
    
    ngOnInit(): void { 
    }  
}