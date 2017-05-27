import { Component, Input, EventEmitter, Output } from "@angular/core";

import { TypeCheckBoxFilter } from "./filters"

@
Component({
    selector: 'check-box-filter',
    template: '<label><input type="checkbox" (change)="onChange()" />{{filter.label}}</label>'
})
export class CheckBoxFilterView {
    @Input("filter") filter: TypeCheckBoxFilter;
    @Output() filterChanged: EventEmitter<any> = new EventEmitter();

    onChange() {
        this.filter.isEnabled = !this.filter.isEnabled;
        this.filterChanged.emit();
    }
}