import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/PageHero-Bdf8Xthr.js
var import_jsx_runtime = require_jsx_runtime();
function PageHero({ eyebrow, title, lede }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden bg-timber pt-24 sm:pt-28",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/images/rytro-zamek.jpg",
				alt: "",
				className: "absolute inset-0 h-full w-full object-cover opacity-40",
				style: { objectPosition: "center 40%" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-timber/70 to-timber/85" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-3xl px-4 py-16 text-center sm:py-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] font-semibold uppercase tracking-[0.28em] text-paper/80",
						children: eyebrow
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 font-display text-[clamp(2.2rem,5vw,3.6rem)] font-semibold text-paper",
						children: title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-4 max-w-xl text-sm leading-relaxed text-paper/80 sm:text-base",
						children: lede
					})
				]
			})
		]
	});
}
//#endregion
export { PageHero as t };
