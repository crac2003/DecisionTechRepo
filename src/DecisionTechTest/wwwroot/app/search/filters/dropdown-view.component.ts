import { Component, Input, EventEmitter, Output } from "@angular/core";

import { DropDownFilter, DropDownOptions } from "./filters"

@
Component({
    selector: 'drop-down-filter',
    template: '{{filter.label}} <select (change)="onChange($event.target.value)"><option *ngFor="let i of filter.options" [value]="i.value">{{i.label}}</option></select>'
})
export class DropDownFilterView {
    @Input("filter") filter: DropDownFilter;
    @Output() filterChanged: EventEmitter<any> = new EventEmitter();
    public selectedOption: DropDownOptions;

    onChange(value: string) {
        console.log('selected value ' + value);
        this.filter.selectedValue = value;
        this.filterChanged.emit();
    }
}