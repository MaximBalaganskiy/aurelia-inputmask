define(["require", "exports", "aurelia-framework", "./options-store", "./inputmask-attribute"], function (require, exports, aurelia_framework_1, options_store_1, inputmask_attribute_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(frameworkConfiguration, defaultOptions) {
        var optionsStore = frameworkConfiguration.container.get(options_store_1.OptionsStore);
        if (defaultOptions) {
            optionsStore.options = defaultOptions;
        }
        frameworkConfiguration.globalResources([
            aurelia_framework_1.PLATFORM.moduleName("./inputmask-attribute"),
        ]);
    }
    exports.configure = configure;
    exports.InputmaskCustomAttribute = inputmask_attribute_1.InputmaskCustomAttribute;
});
//# sourceMappingURL=index.js.map