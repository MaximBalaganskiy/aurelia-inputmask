import Inputmask from "inputmask";
import { autoinject, bindable, bindingMode, customAttribute } from "aurelia-framework";
import { OptionsStore } from "./options-store";

@autoinject
@customAttribute("inputmask")
export class InputmaskCustomAttribute {
	constructor(private element: Element, private optionsStore: OptionsStore) { }

	@bindable({ defaultBindingMode: bindingMode.twoWay })
	value: any = undefined;
	ignoreChange: boolean;
	valueChanged() {
		if (!this.input) {
			return;
		}
		if (this.ignoreChange) {
			this.ignoreChange = false;
			return;
		}
		if (this.input.value !== this.value) {
			this.input.value = this.value;
			this.input.dispatchEvent(new Event("change"));
		}
		this.element.dispatchEvent(new CustomEvent("inputmask-change", { bubbles: true }));
	}

	@bindable({ defaultBindingMode: bindingMode.twoWay })
	incompleteValue: any;

	@bindable({ primaryProperty: true })
	mask: string;
	maskChanged() {
		if (this.input && this.mask) {
			this.createInstance();
			this.instance.mask(this.input);
		}
	}

	@bindable
	isValueMasked: boolean;

	input: HTMLInputElement;

	instance: Inputmask;

	@bindable
	options: any;

	attached() {
		if (this.element.tagName === "INPUT") {
			this.input = this.element as HTMLInputElement;
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
	}

	createInstance() {
		let options = this.options ? { ...this.optionsStore.options, ...this.options } : this.optionsStore.options;
		this.instance = new Inputmask(this.mask, options);
	}

	detached() {
		this.input.removeEventListener("focusout", this.onInputChanged);
		this.input.removeEventListener("change", this.onInputChanged);
		this.input.removeEventListener("input", this.onInputChanged);
		this.input.inputmask.remove();
	}

	suppressOnInput: boolean;
	onInputChanged = (e: Event) => {
		if (this.suppressOnInput) {
			return;
		}
		if (e.type === "input") {
			this.suppressOnInput = true;
			this.input.dispatchEvent(new CustomEvent("input", { bubbles: true }));
			this.suppressOnInput = false;
		}
		this.incompleteValue = this.input.inputmask.unmaskedvalue();
		const value = this.input.inputmask.isComplete() ? (this.isValueMasked ? this.input.value : this.incompleteValue) : undefined;
		if (this.value !== value) {
			this.ignoreChange = true;
			this.value = value;
		}
	}

}
