import Inputmask from "inputmask";
export declare class MaskCustomAttribute {
    private element;
    constructor(element: Element);
    value: any;
    ignoreChange: boolean;
    valueChanged(): void;
    incompleteValue: any;
    mask: string;
    maskChanged(): void;
    inputFormat: string;
    isValueMasked: boolean;
    greedy: boolean;
    input: HTMLInputElement;
    instance: Inputmask;
    attached(): void;
    detached(): void;
    suppressOnInput: boolean;
    onInputChanged: (e: Event) => void;
}
