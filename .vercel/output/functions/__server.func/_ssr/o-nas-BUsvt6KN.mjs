import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as Button } from "./router-CZi2ygiu.mjs";
import { t as PageHero } from "./PageHero-Bdf8Xthr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/o-nas-BUsvt6KN.js
var import_jsx_runtime = require_jsx_runtime();
function AboutPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Karczma i catering",
			title: "O nas",
			lede: "Gotujemy u stóp XIV-wiecznego zamku w Rytrze. Dla tych, co schodzą ze szlaku — i dla tych, co niosą ucztę w góry."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] font-semibold uppercase tracking-[0.28em] text-ember",
					children: "Historia"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-4xl font-semibold text-ink",
					children: "Chata pod warownią"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm leading-relaxed text-muted sm:text-base",
					children: "Zamek w Rytrze strzeże doliny Popradu od średniowiecza. Pod jego murem stoi nasza chata: kuchnia na otwartym ogniu, stół z desek jodłowych i okna, przez które widać basztę o zachodzie."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm leading-relaxed text-muted sm:text-base",
					children: "Rytro Catering powstało z prostego gestu — paczki na szlak, żeby nie stać w kolejce po powrocie. Dziś woźimy gulasz na wesela w stodołach, obiady na rajdy PTTK i kolacje dla tych, co rezerwują stolik z widokiem."
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/images/cozy-nook.jpg",
				alt: "Zakątek chaty z lampą i widokiem na las",
				className: "aspect-[4/3] w-full rounded-[var(--radius-xl)] object-cover shadow-[var(--shadow-card)]"
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-mist",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto grid max-w-6xl gap-8 px-4 py-14 sm:px-6 md:grid-cols-3",
				children: [
					{
						t: "Kuchnia z doliny",
						d: "Pstrąg z Popradu, oscypek z szałasu, kapusta z beczki. Sezon dyktuje kartę."
					},
					{
						t: "Catering w teren",
						d: "Od dwóch torebek na Wielką Przehybę po stół weselny dla stu gości."
					},
					{
						t: "Bistro przy kominku",
						d: "Drewniane ławy, lampy naftowe i cisza, której szuka się po górach."
					}
				].map((block) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-[var(--radius-xl)] bg-paper p-6 shadow-[var(--shadow-card)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-2xl text-ink",
						children: block.t
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-relaxed text-muted",
						children: block.d
					})]
				}, block.t))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/images/rytro-zamek.jpg",
				alt: "Ruiny zamku w Rytrze o zachodzie słońca",
				className: "aspect-[16/10] w-full rounded-[var(--radius-xl)] object-cover shadow-[var(--shadow-card)]",
				style: { objectPosition: "center 70%" }
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] font-semibold uppercase tracking-[0.28em] text-ember",
					children: "Zamek"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-4xl font-semibold text-ink",
					children: "Widok, który zostaje"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm leading-relaxed text-muted sm:text-base",
					children: "Baszta, mur i flaga nad doliną — to ten sam krajobraz, który widać z naszego okna. Po obiedzie warto wejść na zamek: kwadrans stromym podejściem, a Poprad leży pod nogami."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/rezerwacja",
					className: "mt-8 inline-block no-underline",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, { children: "Zarezerwuj stolik przy oknie" })
				})
			] })]
		})
	] });
}
//#endregion
export { AboutPage as component };
