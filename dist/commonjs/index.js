"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
function configure(frameworkConfiguration) {
    frameworkConfiguration.globalResources([
        aurelia_framework_1.PLATFORM.moduleName("./mask"),
    ]);
}
exports.configure = configure;
var mask_1 = require("./mask");
exports.MaskCustomAttribute = mask_1.MaskCustomAttribute;
//# sourceMappingURL=index.js.map