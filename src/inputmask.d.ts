declare class Inputmask {
    constructor(alias: any, options: any);
    unmaskedvalue(): string;
    isComplete(): boolean;
    mask(elems: any): any;
    remove(): any;
}

declare module "inputmask"{
    export default Inputmask;
}

// tslint:disable-next-line:interface-name
interface HTMLInputElement {
    inputmask: Inputmask;
}
