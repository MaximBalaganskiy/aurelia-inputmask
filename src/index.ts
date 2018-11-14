import { FrameworkConfiguration, PLATFORM } from "aurelia-framework";

export function configure(frameworkConfiguration: FrameworkConfiguration) {
	frameworkConfiguration.globalResources([
		PLATFORM.moduleName("./inputmask-attribute"),
	]);
}

export { InputmaskCustomAttribute } from "./inputmask-attribute";
