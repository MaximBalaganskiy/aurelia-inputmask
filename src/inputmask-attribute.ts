import Inputmask from "inputmask";
import { autoinject, bindable, bindingMode, customAttribute } from "aurelia-framework";

@autoinject
@customAttribute("inputmask")
export class InputmaskCustomAttribute {
	constructor(private element: Element) { }

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
		}
	}

	@bindable({ defaultBindingMode: bindingMode.twoWay })
	incompleteValue: any;

	@bindable({ primaryProperty: true })
	mask: string;
	maskChanged() {
		if (this.input && this.mask) {
			this.instance = new Inputmask(this.mask, { showMaskOnHover: false, inputFormat: this.inputFormat, greedy: this.greedy });
			this.instance.mask(this.input);
		}
	}

	@bindable
	inputFormat: string;

	@bindable
	isValueMasked: boolean;

	@bindable
	greedy: boolean = true;

	input: HTMLInputElement;

	instance: Inputmask;

	attached() {
		if (this.element.tagName === "MD-INPUT") {
			this.input = this.element.querySelector("input");
		}
		else if (this.element.tagName === "INPUT") {
			this.input = this.element as HTMLInputElement;
		}
		else {
			return;
		}
		this.input.addEventListener("focusout", this.onInputChanged);
		this.input.addEventListener("change", this.onInputChanged);
		this.input.addEventListener("input", this.onInputChanged);
		this.instance = new Inputmask(this.mask, { showMaskOnHover: false, inputFormat: this.inputFormat, greedy: this.greedy });
		this.instance.mask(this.input);
		this.input.value = this.value;
		this.valueChanged();
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
		const value = this.input.inputmask.isComplete() ? (this.isValueMasked ? this.input.value : this.incompleteValue) : "";
		if (this.value !== value) {
			this.ignoreChange = true;
			this.value = value;
		}
	}

}
