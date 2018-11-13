import { PLATFORM } from "aurelia-framework";
export function configure(frameworkConfiguration) {
    frameworkConfiguration.globalResources([
        PLATFORM.moduleName("./mask"),
    ]);
}
export { MaskCustomAttribute } from "./mask";
//# sourceMappingURL=index.js.map