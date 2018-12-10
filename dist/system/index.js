System.register(["aurelia-framework", "./options-store", "./inputmask-attribute"], function (exports_1, context_1) {
    "use strict";
    var aurelia_framework_1, options_store_1;
    var __moduleName = context_1 && context_1.id;
    function configure(frameworkConfiguration, defaultOptions) {
        var optionsStore = frameworkConfiguration.container.get(options_store_1.OptionsStore);
        if (defaultOptions) {
            optionsStore.options = defaultOptions;
        }
        frameworkConfiguration.globalResources([
            aurelia_framework_1.PLATFORM.moduleName("./inputmask-attribute"),
        ]);
    }
    exports_1("configure", configure);
    return {
        setters: [
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (options_store_1_1) {
                options_store_1 = options_store_1_1;
            },
            function (inputmask_attribute_1_1) {
                exports_1({
                    "InputmaskCustomAttribute": inputmask_attribute_1_1["InputmaskCustomAttribute"]
                });
            }
        ],
        execute: function () {
        }
    };
});
//# sourceMappingURL=index.js.map