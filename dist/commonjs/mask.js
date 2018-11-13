"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var inputmask_1 = require("inputmask");
var aurelia_framework_1 = require("aurelia-framework");
var MaskCustomAttribute = /** @class */ (function () {
    function MaskCustomAttribute(element) {
        var _this = this;
        this.element = element;
        this.value = undefined;
        this.greedy = true;
        this.onInputChanged = function (e) {
            if (_this.suppressOnInput) {
                return;
            }
            if (e.type === "input") {
                _this.suppressOnInput = true;
                _this.input.dispatchEvent(new CustomEvent("input", { bubbles: true }));
                _this.suppressOnInput = false;
            }
            _this.incompleteValue = _this.input.inputmask.unmaskedvalue();
            var value = _this.input.inputmask.isComplete() ? (_this.isValueMasked ? _this.input.value : _this.incompleteValue) : "";
            if (_this.value !== value) {
                _this.ignoreChange = true;
                _this.value = value;
            }
        };
    }
    MaskCustomAttribute.prototype.valueChanged = function () {
        if (!this.input) {
            return;
        }
        if (this.ignoreChange) {
            this.ignoreChange = false;
            return;
        }
        if (this.input.value !== this.value) {
            this.input.value = this.value;
        }
        var label = this.input.nextElementSibling;
        if (label.nodeName === "LABEL") {
            label.classList.add(this.value ? "active" : "inactive");
        }
    };
    MaskCustomAttribute.prototype.maskChanged = function () {
        if (this.input && this.mask) {
            this.instance = new inputmask_1.default(this.mask, { showMaskOnHover: false, inputFormat: this.inputFormat, greedy: this.greedy });
            this.instance.mask(this.input);
        }
    };
    MaskCustomAttribute.prototype.attached = function () {
        if (this.element.tagName === "MD-INPUT") {
            this.input = this.element.querySelector("input");
        }
        else if (this.element.tagName === "INPUT") {
            this.input = this.element;
        }
        else {
            return;
        }
        this.input.addEventListener("focusout", this.onInputChanged);
        this.input.addEventListener("change", this.onInputChanged);
        this.input.addEventListener("input", this.onInputChanged);
        this.instance = new inputmask_1.default(this.mask, { showMaskOnHover: false, inputFormat: this.inputFormat, greedy: this.greedy });
        this.instance.mask(this.input);
        this.input.value = this.value;
        this.valueChanged();
    };
    MaskCustomAttribute.prototype.detached = function () {
        this.input.removeEventListener("focusout", this.onInputChanged);
        this.input.removeEventListener("change", this.onInputChanged);
        this.input.removeEventListener("input", this.onInputChanged);
        this.input.inputmask.remove();
    };
    tslib_1.__decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        tslib_1.__metadata("design:type", Object)
    ], MaskCustomAttribute.prototype, "value", void 0);
    tslib_1.__decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        tslib_1.__metadata("design:type", Object)
    ], MaskCustomAttribute.prototype, "incompleteValue", void 0);
    tslib_1.__decorate([
        aurelia_framework_1.bindable,
        tslib_1.__metadata("design:type", String)
    ], MaskCustomAttribute.prototype, "mask", void 0);
    tslib_1.__decorate([
        aurelia_framework_1.bindable,
        tslib_1.__metadata("design:type", String)
    ], MaskCustomAttribute.prototype, "inputFormat", void 0);
    tslib_1.__decorate([
        aurelia_framework_1.bindable,
        tslib_1.__metadata("design:type", Boolean)
    ], MaskCustomAttribute.prototype, "isValueMasked", void 0);
    tslib_1.__decorate([
        aurelia_framework_1.bindable,
        tslib_1.__metadata("design:type", Boolean)
    ], MaskCustomAttribute.prototype, "greedy", void 0);
    MaskCustomAttribute = tslib_1.__decorate([
        aurelia_framework_1.autoinject,
        tslib_1.__metadata("design:paramtypes", [Element])
    ], MaskCustomAttribute);
    return MaskCustomAttribute;
}());
exports.MaskCustomAttribute = MaskCustomAttribute;
//# sourceMappingURL=mask.js.map