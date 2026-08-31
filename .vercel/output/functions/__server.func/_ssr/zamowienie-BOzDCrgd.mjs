import { i as __toESM } from "../_runtime.mjs";
import { b as require_jsx_runtime, v as Link, z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Plus, o as Minus, r as Trash2 } from "../_libs/lucide-react.mjs";
import { a as useCart, c as getItem, i as cartTotal, r as Button, u as formatPln } from "./router-CZi2ygiu.mjs";
import { t as PageHero } from "./PageHero-Bdf8Xthr.mjs";
import { n as Label, r as Textarea, t as Input } from "./textarea-B3n3xRLc.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/zamowienie-BOzDCrgd.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function OrderPage() {
	const lines = useCart((s) => s.lines);
	const setQty = useCart((s) => s.setQty);
	const remove = useCart((s) => s.remove);
	const clear = useCart((s) => s.clear);
	const total = cartTotal(lines);
	const [placed, setPlaced] = (0, import_react.useState)(false);
	function onSubmit(e) {
		e.preventDefault();
		if (lines.length === 0) return;
		setPlaced(true);
		clear();
	}
	if (placed) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Zamówienie",
		title: "Przyjęte",
		lede: "Kuchnia już wie. Odbierz w umówionej godzinie — albo usiądź, jeśli jesz u nas."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-lg px-4 py-16 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm text-muted",
			children: "Potwierdzenie wyślemy SMS-em. Do zobaczenia pod zamkiem."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/menu",
			className: "mt-8 inline-block no-underline",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, { children: "Zamów jeszcze" })
		})]
	})] });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Na wynos i na stół",
		title: "Moje zamówienie",
		lede: "Sprawdź koszyk, wybierz godzinę odbioru i zostaw telefon. Płatność przy odbiorze."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.1fr_0.9fr]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: lines.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-[var(--radius-xl)] bg-paper p-10 text-center shadow-[var(--shadow-card)]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-2xl text-ink",
					children: "Koszyk jest pusty"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted",
					children: "Dodaj dania z menu, potem wróć tutaj."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/menu",
					className: "mt-6 inline-block no-underline",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, { children: "Przejdź do menu" })
				})
			]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "space-y-3",
			children: lines.map((line) => {
				const item = getItem(line.id);
				if (!item) return null;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex gap-4 rounded-[var(--radius-lg)] bg-paper p-3 shadow-[var(--shadow-card)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: item.image,
						alt: "",
						className: "size-20 rounded-[var(--radius-md)] object-cover sm:size-24"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-xl leading-tight text-ink",
									children: item.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "tabular-nums text-sm font-medium text-ember",
									children: formatPln(item.price * line.qty)
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 text-xs tabular-nums text-muted",
								children: [formatPln(item.price), " / szt."]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-3 flex items-center gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: "grid size-10 place-items-center rounded-[var(--radius-sm)] bg-cream text-ink",
										"aria-label": "Mniej",
										onClick: () => setQty(line.id, line.qty - 1),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "size-4" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "w-8 text-center text-sm tabular-nums",
										children: line.qty
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: "grid size-10 place-items-center rounded-[var(--radius-sm)] bg-cream text-ink",
										"aria-label": "Więcej",
										onClick: () => setQty(line.id, line.qty + 1),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: "ml-auto grid size-10 place-items-center text-muted hover:text-ember",
										"aria-label": `Usuń ${item.name}`,
										onClick: () => remove(line.id),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-4" })
									})
								]
							})
						]
					})]
				}, line.id);
			})
		}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "h-fit rounded-[var(--radius-xl)] bg-paper p-6 shadow-[var(--shadow-card)] sm:p-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl text-ink",
					children: "Odbiór"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-1 text-sm text-muted",
					children: [
						"Razem:",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium tabular-nums text-ink",
							children: formatPln(total)
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit,
					className: "mt-6 grid gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "oname",
							children: "Imię"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "oname",
							name: "name",
							required: true,
							autoComplete: "name",
							disabled: lines.length === 0
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "ophone",
							children: "Telefon"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "ophone",
							name: "phone",
							type: "tel",
							required: true,
							autoComplete: "tel",
							disabled: lines.length === 0
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "opickup",
							children: "Godzina odbioru"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "opickup",
							name: "pickup",
							type: "time",
							required: true,
							defaultValue: "13:00",
							disabled: lines.length === 0
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "onotes",
							children: "Uwagi dla kuchni"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
							id: "onotes",
							name: "notes",
							disabled: lines.length === 0
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							size: "lg",
							className: "w-full",
							disabled: lines.length === 0,
							children: "Złóż zamówienie"
						})
					]
				})
			]
		})]
	})] });
}
//#endregion
export { OrderPage as component };
