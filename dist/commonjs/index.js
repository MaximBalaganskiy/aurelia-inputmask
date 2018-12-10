"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var options_store_1 = require("./options-store");
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
var inputmask_attribute_1 = require("./inputmask-attribute");
exports.InputmaskCustomAttribute = inputmask_attribute_1.InputmaskCustomAttribute;
//# sourceMappingURL=index.js.map