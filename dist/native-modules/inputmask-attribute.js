import * as tslib_1 from "tslib";
import Inputmask from "inputmask";
import { autoinject, bindable, bindingMode, customAttribute } from "aurelia-framework";
import { OptionsStore } from "./options-store";
var InputmaskCustomAttribute = /** @class */ (function () {
    function InputmaskCustomAttribute(element, optionsStore) {
        var _this = this;
        this.element = element;
        this.optionsStore = optionsStore;
        this.value = undefined;
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
            this.input.value = this.value;
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
        this.input.value = this.value;
        this.valueChanged();
    };
    InputmaskCustomAttribute.prototype.createInstance = function () {
        var options = this.options ? tslib_1.__assign({}, this.optionsStore.options, this.options) : this.optionsStore.options;
        this.instance = new Inputmask(this.mask, options);
    };
    InputmaskCustomAttribute.prototype.detached = function () {
        this.input.removeEventListener("focusout", this.onInputChanged);
        this.input.removeEventListener("change", this.onInputChanged);
        this.input.removeEventListener("input", this.onInputChanged);
        this.input.inputmask.remove();
    };
    tslib_1.__decorate([
        bindable({ defaultBindingMode: bindingMode.twoWay }),
        tslib_1.__metadata("design:type", Object)
    ], InputmaskCustomAttribute.prototype, "value", void 0);
    tslib_1.__decorate([
        bindable({ defaultBindingMode: bindingMode.twoWay }),
        tslib_1.__metadata("design:type", Object)
    ], InputmaskCustomAttribute.prototype, "incompleteValue", void 0);
    tslib_1.__decorate([
        bindable({ primaryProperty: true }),
        tslib_1.__metadata("design:type", String)
    ], InputmaskCustomAttribute.prototype, "mask", void 0);
    tslib_1.__decorate([
        bindable,
        tslib_1.__metadata("design:type", Boolean)
    ], InputmaskCustomAttribute.prototype, "isValueMasked", void 0);
    tslib_1.__decorate([
        bindable,
        tslib_1.__metadata("design:type", Object)
    ], InputmaskCustomAttribute.prototype, "options", void 0);
    InputmaskCustomAttribute = tslib_1.__decorate([
        autoinject,
        customAttribute("inputmask"),
        tslib_1.__metadata("design:paramtypes", [Element, OptionsStore])
    ], InputmaskCustomAttribute);
    return InputmaskCustomAttribute;
}());
export { InputmaskCustomAttribute };
//# sourceMappingURL=inputmask-attribute.js.map