declare class Inputmask {
  constructor(alias: unknown, options: unknown);
  unmaskedvalue(): string;
  isComplete(): boolean;
  mask(elems: unknown): unknown;
  remove(): unknown;
}

declare module 'inputmask' {
  export default Inputmask;
}

interface HTMLInputElement {
  inputmask: Inputmask;
}
