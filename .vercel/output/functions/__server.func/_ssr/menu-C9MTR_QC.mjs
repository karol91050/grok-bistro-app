import { i as __toESM } from "../_runtime.mjs";
import { b as require_jsx_runtime, z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { l as cn, n as Route$3, o as CATEGORIES, s as MENU } from "./router-CZi2ygiu.mjs";
import { t as PageHero } from "./PageHero-Bdf8Xthr.mjs";
import { t as DishCard } from "./DishCard-DgnftiQh.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/menu-C9MTR_QC.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function MenuPage() {
	const { q } = Route$3.useSearch();
	const [cat, setCat] = (0, import_react.useState)("all");
	const [query, setQuery] = (0, import_react.useState)(q ?? "");
	const items = (0, import_react.useMemo)(() => {
		const needle = query.trim().toLowerCase();
		return MENU.filter((item) => {
			if (cat !== "all" && item.category !== cat) return false;
			if (!needle) return true;
			return item.name.toLowerCase().includes(needle) || item.description.toLowerCase().includes(needle);
		});
	}, [cat, query]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Karta dań",
		title: "Menu",
		lede: "Beskidzka kuchnia na wynos i do bistro. Wszystko, co chcesz zjeść przed szlakiem albo po powrocie pod zamek."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 py-10 sm:px-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterChip, {
						active: cat === "all",
						onClick: () => setCat("all"),
						children: "Wszystko"
					}), CATEGORIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterChip, {
						active: cat === c.id,
						onClick: () => setCat(c.id),
						children: c.label
					}, c.id))]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					className: "sr-only",
					htmlFor: "menu-search",
					children: "Filtruj menu"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					id: "menu-search",
					value: query,
					onChange: (e) => setQuery(e.target.value),
					placeholder: "Szukaj dań…",
					className: "h-11 w-full rounded-[var(--radius-md)] bg-paper px-3.5 text-sm shadow-[0_0_0_1px_rgb(28_25_23/0.12)] placeholder:text-muted focus-visible:outline-none focus-visible:shadow-[0_0_0_2px_var(--color-ember)] sm:max-w-xs"
				})
			]
		}), items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "py-20 text-center text-sm text-muted",
			children: "Brak dań dla tych filtrów."
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
			children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DishCard, { item }, item.id))
		})]
	})] });
}
function FilterChip({ active, onClick, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick,
		className: cn("h-10 rounded-full px-4 text-xs font-medium uppercase tracking-[0.14em] transition-colors", active ? "bg-timber text-paper" : "bg-paper text-ink hover:bg-mist"),
		children
	});
}
//#endregion
export { MenuPage as component };
