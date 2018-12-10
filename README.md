# aurelia-inputmask
Aurelia plugin for [Inputmask](https://github.com/RobinHerbots/Inputmask)

## Installation

```
npm inputmask aurelia-inputmask tslib --save
```

## Configuration

```typescript
// main.ts
export function configure(aurelia: Aurelia) {
    aurelia.use.plugin(PLATFORM.moduleName("aurelia-inputmask"), { showMaskOnHover: false /* any default options */ });
    // the rest of your configuration...
}
```

## Usage

```html
<input inputmask="999-999-999" value.bind="rawValue" />
<input inputmask="mask: 999-999-999; value.bind: inputmaskValue; options.bind: { greedy: false }; is-value-masked: true" value.bind="rawValue" />
<input inputmask="mask: datetime; options.bind: { inputFormat: 'dd/mm/yyyy' }; value.bind: inputmaskValue" value.bind="rawValue" />
```

You can either use `options` attribute or `data-inputmask-<option>` html attributes to configure the mask on an element.

## Contribution

If you feel that something is missing please submit an issue or better yet a PR.
