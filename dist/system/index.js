System.register(["aurelia-framework", "./mask"], function (exports_1, context_1) {
    "use strict";
    var aurelia_framework_1;
    var __moduleName = context_1 && context_1.id;
    function configure(frameworkConfiguration) {
        frameworkConfiguration.globalResources([
            aurelia_framework_1.PLATFORM.moduleName("./mask"),
        ]);
    }
    exports_1("configure", configure);
    return {
        setters: [
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (mask_1_1) {
                exports_1({
                    "MaskCustomAttribute": mask_1_1["MaskCustomAttribute"]
                });
            }
        ],
        execute: function () {
        }
    };
});
//# sourceMappingURL=index.js.map