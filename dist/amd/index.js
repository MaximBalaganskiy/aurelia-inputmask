define(["require", "exports", "aurelia-framework", "./inputmask-attribute"], function (require, exports, aurelia_framework_1, inputmask_attribute_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(frameworkConfiguration) {
        frameworkConfiguration.globalResources([
            aurelia_framework_1.PLATFORM.moduleName("./inputmask-attribute"),
        ]);
    }
    exports.configure = configure;
    exports.InputmaskCustomAttribute = inputmask_attribute_1.InputmaskCustomAttribute;
});
//# sourceMappingURL=index.js.map