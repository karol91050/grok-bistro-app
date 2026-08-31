import { i as __toESM } from "../_runtime.mjs";
import { b as require_jsx_runtime, z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as Check } from "../_libs/lucide-react.mjs";
import { a as useCart, l as cn, r as Button, u as formatPln } from "./router-CZi2ygiu.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/DishCard-DgnftiQh.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function DishCard({ item }) {
	const add = useCart((s) => s.add);
	const [justAdded, setJustAdded] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "flex flex-col overflow-hidden rounded-[var(--radius-xl)] bg-paper shadow-[var(--shadow-card)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: item.image,
				alt: item.name,
				className: "aspect-[4/3] w-full object-cover"
			}), item.vegetarian && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute left-3 top-3 rounded-full bg-paper/95 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-timber",
				children: "Wegetariańskie"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 flex-col p-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-2xl font-semibold leading-tight text-ink",
						children: item.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "shrink-0 font-sans text-sm font-medium tabular-nums text-ember",
						children: formatPln(item.price)
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 flex-1 text-sm leading-relaxed text-muted",
					children: item.description
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					className: cn("mt-4 w-full", justAdded && "bg-timber hover:bg-timber"),
					onClick: () => {
						add(item.id);
						setJustAdded(true);
						window.setTimeout(() => setJustAdded(false), 1200);
					},
					children: justAdded ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4" }), " Dodano"] }) : "Dodaj do zamówienia"
				})
			]
		})]
	});
}
//#endregion
export { DishCard as t };
