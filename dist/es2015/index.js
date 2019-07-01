import { PLATFORM } from "aurelia-framework";
import { OptionsStore } from "./options-store";
export function configure(frameworkConfiguration, defaultOptions) {
    let optionsStore = frameworkConfiguration.container.get(OptionsStore);
    if (defaultOptions) {
        optionsStore.options = defaultOptions;
    }
    frameworkConfiguration.globalResources([
        PLATFORM.moduleName("./inputmask-attribute"),
    ]);
}
export { InputmaskCustomAttribute } from "./inputmask-attribute";
//# sourceMappingURL=index.js.map