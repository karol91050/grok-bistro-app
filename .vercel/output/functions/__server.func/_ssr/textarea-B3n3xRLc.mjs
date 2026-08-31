import { i as __toESM } from "../_runtime.mjs";
import { b as require_jsx_runtime, z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { l as cn } from "./router-CZi2ygiu.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/textarea-B3n3xRLc.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Input = (0, import_react.forwardRef)(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
	ref,
	className: cn("h-11 w-full rounded-[var(--radius-md)] bg-paper px-3.5 text-sm text-ink", "shadow-[0_0_0_1px_rgb(28_25_23/0.12)] placeholder:text-muted", "transition-[box-shadow] duration-150", "focus-visible:outline-none focus-visible:shadow-[0_0_0_2px_var(--color-ember)]", className),
	...props
}));
Input.displayName = "Input";
function Label({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: cn("mb-1.5 block text-xs font-medium uppercase tracking-[0.14em] text-muted", className),
		...props
	});
}
var Textarea = (0, import_react.forwardRef)(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
	ref,
	className: cn("min-h-28 w-full rounded-[var(--radius-md)] bg-paper px-3.5 py-3 text-sm text-ink", "shadow-[0_0_0_1px_rgb(28_25_23/0.12)] placeholder:text-muted", "transition-[box-shadow] duration-150", "focus-visible:outline-none focus-visible:shadow-[0_0_0_2px_var(--color-ember)]", className),
	...props
}));
Textarea.displayName = "Textarea";
//#endregion
export { Label as n, Textarea as r, Input as t };
