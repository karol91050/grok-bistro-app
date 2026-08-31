import { i as __toESM } from "../_runtime.mjs";
import { b as require_jsx_runtime, z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as Button } from "./router-CZi2ygiu.mjs";
import { t as PageHero } from "./PageHero-Bdf8Xthr.mjs";
import { n as Label, r as Textarea, t as Input } from "./textarea-B3n3xRLc.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/kontakt-BcfgmsOI.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ContactPage() {
	const [sent, setSent] = (0, import_react.useState)(false);
	function onSubmit(e) {
		e.preventDefault();
		setSent(true);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Napisz lub wpadnij",
		title: "Kontakt",
		lede: "Catering, rezerwacje i pytania o menu — odpowiadamy tego samego dnia, oprócz poniedziałków."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-3xl text-ink",
				children: "Chata"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 text-sm leading-relaxed text-muted",
				children: [
					"ul. Zamkowa 12",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					"33-343 Rytro",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					"powiat nowosądecki"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-6 text-sm text-ink",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "block text-[11px] uppercase tracking-[0.16em] text-muted",
					children: "Telefon"
				}), "+48 18 444 12 12"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4 text-sm text-ink",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "block text-[11px] uppercase tracking-[0.16em] text-muted",
					children: "E-mail"
				}), "hallo@rytrocatering.pl"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4 text-sm text-ink",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block text-[11px] uppercase tracking-[0.16em] text-muted",
						children: "Godziny"
					}),
					"Wtorek–niedziela 12:00–21:00",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					"Poniedziałek — kuchnia odpoczywa"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/images/rytro-zamek.jpg",
				alt: "Dolina Rytra i zamek",
				className: "mt-8 aspect-[16/9] w-full rounded-[var(--radius-xl)] object-cover shadow-[var(--shadow-card)]",
				style: { objectPosition: "center 55%" }
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "rounded-[var(--radius-xl)] bg-paper p-6 shadow-[var(--shadow-card)] sm:p-8",
			children: sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex min-h-72 flex-col justify-center text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] uppercase tracking-[0.2em] text-ember",
						children: "Wysłane"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-3xl text-ink",
						children: "Dziękujemy"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-muted",
						children: "Wiadomość doszła. Oddzwonimy albo odpiszemy najpóźniej następnego dnia roboczego."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						className: "mx-auto mt-8",
						variant: "outline",
						onClick: () => setSent(false),
						children: "Napisz kolejną"
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit,
				className: "grid gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl text-ink",
						children: "Napisz do nas"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "cname",
						children: "Imię"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "cname",
						name: "name",
						required: true,
						autoComplete: "name"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "cemail",
						children: "E-mail"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "cemail",
						name: "email",
						type: "email",
						required: true,
						autoComplete: "email"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "ctopic",
						children: "Temat"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "ctopic",
						name: "topic",
						placeholder: "Catering, stolik, menu…"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "cmsg",
						children: "Wiadomość"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
						id: "cmsg",
						name: "message",
						required: true,
						rows: 6
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						size: "lg",
						className: "mt-2 w-full",
						children: "Wyślij"
					})
				]
			})
		})]
	})] });
}
//#endregion
export { ContactPage as component };
