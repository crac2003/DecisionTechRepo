import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Http, HttpModule, JsonpModule } from '@angular/http';

import { KeysPipe } from '../pipes/keys.pipe'
 
import { SearchService } from '../services/SearchService';

import { SearchComponent } from './search.component';
import { SearchItemComponent } from './search-item.component';

import { CheckBoxFilterView } from './filters/checkbox-view.component';
import { DropDownFilterView } from './filters/dropdown-view.component';

@NgModule({
    imports: [BrowserModule, HttpModule, JsonpModule],
    declarations: [SearchComponent,
        SearchItemComponent,
        CheckBoxFilterView,
        DropDownFilterView,

        KeysPipe],
    bootstrap: [SearchComponent],
    providers: [SearchService]
})
export class AppModule { }