define(["require", "exports", "aurelia-framework", "./mask"], function (require, exports, aurelia_framework_1, mask_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(frameworkConfiguration) {
        frameworkConfiguration.globalResources([
            aurelia_framework_1.PLATFORM.moduleName("./mask"),
        ]);
    }
    exports.configure = configure;
    exports.MaskCustomAttribute = mask_1.MaskCustomAttribute;
});
//# sourceMappingURL=index.js.map