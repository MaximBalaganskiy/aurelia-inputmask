import Inputmask from "inputmask";
import { OptionsStore } from "./options-store";
export declare class InputmaskCustomAttribute {
    private element;
    private optionsStore;
    constructor(element: Element, optionsStore: OptionsStore);
    value: any;
    ignoreChange: boolean;
    valueChanged(): void;
    incompleteValue: any;
    mask: string;
    maskChanged(): void;
    isValueMasked: boolean;
    input: HTMLInputElement;
    instance: Inputmask;
    options: any;
    attached(): void;
    createInstance(): void;
    detached(): void;
    suppressOnInput: boolean;
    onInputChanged: (e: Event) => void;
}
