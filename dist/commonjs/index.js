"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
function configure(frameworkConfiguration) {
    frameworkConfiguration.globalResources([
        aurelia_framework_1.PLATFORM.moduleName("./inputmask-attribute"),
    ]);
}
exports.configure = configure;
var inputmask_attribute_1 = require("./inputmask-attribute");
exports.InputmaskCustomAttribute = inputmask_attribute_1.InputmaskCustomAttribute;
//# sourceMappingURL=index.js.map