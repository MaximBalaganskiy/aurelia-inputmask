"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var inputmask_1 = require("inputmask");
var aurelia_framework_1 = require("aurelia-framework");
var options_store_1 = require("./options-store");
var InputmaskCustomAttribute = /** @class */ (function () {
    function InputmaskCustomAttribute(element, optionsStore) {
        var _this = this;
        this.element = element;
        this.optionsStore = optionsStore;
        this.value = "";
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
            var value = _this.input.inputmask.isComplete() ? (_this.isValueMasked ? _this.input.value : _this.incompleteValue) : undefined;
            if (_this.value !== value) {
                _this.ignoreChange = true;
                _this.value = value;
            }
        };
    }
    InputmaskCustomAttribute.prototype.valueChanged = function () {
        if (!this.input) {
            return;
        }
        if (this.ignoreChange) {
            this.ignoreChange = false;
            return;
        }
        if (this.input.value !== this.value) {
            this.input.value = this.value || "";
            this.input.dispatchEvent(new CustomEvent("change"));
        }
        this.element.dispatchEvent(new CustomEvent("inputmask-change", { bubbles: true }));
    };
    InputmaskCustomAttribute.prototype.maskChanged = function () {
        if (this.input && this.mask) {
            this.createInstance();
            this.instance.mask(this.input);
        }
    };
    InputmaskCustomAttribute.prototype.attached = function () {
        if (this.element.tagName === "INPUT") {
            this.input = this.element;
        }
        else {
            this.input = this.element.querySelector("input");
            if (!this.input) {
                return;
            }
        }
        this.input.addEventListener("focusout", this.onInputChanged);
        this.input.addEventListener("change", this.onInputChanged);
        this.input.addEventListener("input", this.onInputChanged);
        this.createInstance();
        this.instance.mask(this.input);
        this.input.value = this.value || "";
        this.valueChanged();
    };
    InputmaskCustomAttribute.prototype.createInstance = function () {
        var options = tslib_1.__assign({}, this.optionsStore.options, this.options);
        this.instance = new inputmask_1.default(this.mask, options);
    };
    InputmaskCustomAttribute.prototype.detached = function () {
        this.input.removeEventListener("focusout", this.onInputChanged);
        this.input.removeEventListener("change", this.onInputChanged);
        this.input.removeEventListener("input", this.onInputChanged);
        this.input.inputmask.remove();
    };
    tslib_1.__decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        tslib_1.__metadata("design:type", Object)
    ], InputmaskCustomAttribute.prototype, "value", void 0);
    tslib_1.__decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        tslib_1.__metadata("design:type", Object)
    ], InputmaskCustomAttribute.prototype, "incompleteValue", void 0);
    tslib_1.__decorate([
        aurelia_framework_1.bindable({ primaryProperty: true }),
        tslib_1.__metadata("design:type", String)
    ], InputmaskCustomAttribute.prototype, "mask", void 0);
    tslib_1.__decorate([
        aurelia_framework_1.bindable,
        tslib_1.__metadata("design:type", Boolean)
    ], InputmaskCustomAttribute.prototype, "isValueMasked", void 0);
    tslib_1.__decorate([
        aurelia_framework_1.bindable,
        tslib_1.__metadata("design:type", Object)
    ], InputmaskCustomAttribute.prototype, "options", void 0);
    InputmaskCustomAttribute = tslib_1.__decorate([
        aurelia_framework_1.autoinject,
        aurelia_framework_1.customAttribute("inputmask"),
        tslib_1.__metadata("design:paramtypes", [Element, options_store_1.OptionsStore])
    ], InputmaskCustomAttribute);
    return InputmaskCustomAttribute;
}());
exports.InputmaskCustomAttribute = InputmaskCustomAttribute;
//# sourceMappingURL=inputmask-attribute.js.map