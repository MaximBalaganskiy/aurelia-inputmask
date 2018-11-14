import { PLATFORM } from "aurelia-framework";
export function configure(frameworkConfiguration) {
    frameworkConfiguration.globalResources([
        PLATFORM.moduleName("./inputmask-attribute"),
    ]);
}
export { InputmaskCustomAttribute } from "./inputmask-attribute";
//# sourceMappingURL=index.js.map