"use strict";
class FilterBase {
}
exports.FilterBase = FilterBase;
class TypeCheckBoxFilter extends FilterBase {
    constructor(label, key) {
        super();
        this.label = label;
        this.key = key;
        this.isEnabled = false;
    }
    applyFilter(request) {
        if (this.isEnabled) {
            request.types.push(this.key);
        }
    }
}
exports.TypeCheckBoxFilter = TypeCheckBoxFilter;
class DropDownOptions {
}
exports.DropDownOptions = DropDownOptions;
class DropDownFilter extends FilterBase {
    constructor(label, key, defaultValue, options) {
        super();
        this.label = label;
        this.key = key;
        this.defaultValue = defaultValue;
        this.options = options;
    }
    applyFilter(request) {
        if (!this.selectedValue) {
            request[this.key] = '';
            return;
        }
        request[this.key] = this.selectedValue;
    }
}
exports.DropDownFilter = DropDownFilter;
