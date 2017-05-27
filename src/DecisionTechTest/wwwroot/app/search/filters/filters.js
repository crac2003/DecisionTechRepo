"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var FilterBase = (function () {
    function FilterBase() {
    }
    return FilterBase;
}());
exports.FilterBase = FilterBase;
var TypeCheckBoxFilter = (function (_super) {
    __extends(TypeCheckBoxFilter, _super);
    function TypeCheckBoxFilter(label, key) {
        var _this = _super.call(this) || this;
        _this.label = label;
        _this.key = key;
        _this.isEnabled = false;
        return _this;
    }
    TypeCheckBoxFilter.prototype.applyFilter = function (request) {
        if (this.isEnabled) {
            request.types.push(this.key);
        }
    };
    return TypeCheckBoxFilter;
}(FilterBase));
exports.TypeCheckBoxFilter = TypeCheckBoxFilter;
var DropDownOptions = (function () {
    function DropDownOptions() {
    }
    return DropDownOptions;
}());
exports.DropDownOptions = DropDownOptions;
var DropDownFilter = (function (_super) {
    __extends(DropDownFilter, _super);
    function DropDownFilter(label, key, defaultValue, options) {
        var _this = _super.call(this) || this;
        _this.label = label;
        _this.key = key;
        _this.defaultValue = defaultValue;
        _this.options = options;
        return _this;
    }
    DropDownFilter.prototype.applyFilter = function (request) {
        if (!this.selectedValue) {
            request[this.key] = '';
            return;
        }
        request[this.key] = this.selectedValue;
    };
    return DropDownFilter;
}(FilterBase));
exports.DropDownFilter = DropDownFilter;
