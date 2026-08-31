import { i as __toESM } from "../_runtime.mjs";
import { b as require_jsx_runtime, z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as Button } from "./router-CZi2ygiu.mjs";
import { t as PageHero } from "./PageHero-Bdf8Xthr.mjs";
import { n as Label, r as Textarea, t as Input } from "./textarea-B3n3xRLc.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/rezerwacja-BQFHDyxN.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ReservePage() {
	const [sent, setSent] = (0, import_react.useState)(false);
	function onSubmit(e) {
		e.preventDefault();
		setSent(true);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Bistro pod zamkiem",
		title: "Rezerwacja stolika",
		lede: "Rustykalna sala z oknami na ruiny. Kolacje, obiady po szlaku, małe przyjęcia do 40 osób."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: "/images/dine-interior.jpg",
			alt: "Wnętrze bistro Rytro Catering",
			className: "aspect-[4/3] w-full rounded-[var(--radius-xl)] object-cover shadow-[var(--shadow-card)]"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
			className: "mt-8 grid gap-4 text-sm sm:grid-cols-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
					className: "text-[11px] uppercase tracking-[0.16em] text-muted",
					children: "Godziny"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
					className: "mt-1 text-ink",
					children: "Wt–Nd 12:00–21:00"
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
					className: "text-[11px] uppercase tracking-[0.16em] text-muted",
					children: "Stoliki"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
					className: "mt-1 text-ink",
					children: "2–10 osób · sala do 40"
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
					className: "text-[11px] uppercase tracking-[0.16em] text-muted",
					children: "Adres"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
					className: "mt-1 text-ink",
					children: "ul. Zamkowa 12, Rytro"
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
					className: "text-[11px] uppercase tracking-[0.16em] text-muted",
					children: "Telefon"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
					className: "mt-1 text-ink",
					children: "+48 18 444 12 12"
				})] })
			]
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "rounded-[var(--radius-xl)] bg-paper p-6 shadow-[var(--shadow-card)] sm:p-8",
			children: sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex min-h-72 flex-col justify-center text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] uppercase tracking-[0.2em] text-ember",
						children: "Potwierdzenie"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-3xl text-ink",
						children: "Stolik zarezerwowany"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm leading-relaxed text-muted",
						children: "Dziękujemy. Oddzwonimy, jeśli będziemy potrzebować doprecyzowania. Do zobaczenia pod zamkiem."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						className: "mx-auto mt-8",
						variant: "outline",
						onClick: () => setSent(false),
						children: "Nowa rezerwacja"
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit,
				className: "grid gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl text-ink",
						children: "Zarezerwuj"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "name",
						children: "Imię i nazwisko"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "name",
						name: "name",
						required: true,
						autoComplete: "name"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-4 sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "phone",
							children: "Telefon"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "phone",
							name: "phone",
							type: "tel",
							required: true,
							autoComplete: "tel"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "email",
							children: "E-mail"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "email",
							name: "email",
							type: "email",
							required: true,
							autoComplete: "email"
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-4 sm:grid-cols-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "date",
								children: "Dzień"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "date",
								name: "date",
								type: "date",
								required: true
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "time",
								children: "Godzina"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "time",
								name: "time",
								type: "time",
								required: true,
								defaultValue: "18:00"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "guests",
								children: "Goście"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "guests",
								name: "guests",
								type: "number",
								min: 1,
								max: 40,
								required: true,
								defaultValue: 2
							})] })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "notes",
						children: "Uwagi"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
						id: "notes",
						name: "notes",
						placeholder: "Alergie, okazja, stolik przy oknie…"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						className: "mt-2 w-full",
						size: "lg",
						children: "Potwierdź rezerwację"
					})
				]
			})
		})]
	})] });
}
//#endregion
export { ReservePage as component };
