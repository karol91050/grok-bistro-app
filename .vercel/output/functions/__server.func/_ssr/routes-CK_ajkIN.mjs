import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as Button, s as MENU } from "./router-CZi2ygiu.mjs";
import { t as DishCard } from "./DishCard-DgnftiQh.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CK_ajkIN.js
var import_jsx_runtime = require_jsx_runtime();
var CARDS = [
	{
		title: "Dania sygnaturowe",
		image: "/images/dish-pierogi.jpg",
		alt: "Pierogi ruskie ze skwarkami",
		to: "/menu",
		body: null
	},
	{
		title: "Zjedz u nas",
		image: "/images/dine-interior.jpg",
		alt: "Sala bistro z widokiem na góry",
		to: "/rezerwacja",
		body: "Bistro pod zamkiem — zarezerwuj stolik na rustykalną kolację z widokiem na ruiny."
	},
	{
		title: "Przytulny klimat",
		image: "/images/cozy-nook.jpg",
		alt: "Zakątek chaty z lampą i lasem za oknem",
		to: "/o-nas",
		body: "Jedz w naturze. Ciepłe zakątki zaprojektowane do odpoczynku po szlaku."
	}
];
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden bg-frame",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 bg-cover bg-center",
				style: { backgroundImage: "url(/images/wood.jpg)" },
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative min-h-[100svh]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute inset-[10px] overflow-hidden sm:inset-[18px] lg:inset-[24px]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/images/rytro-zamek.jpg",
							alt: "Zamek w Rytrze o zachodzie słońca — widok z okna chaty",
							className: "absolute inset-0 h-full w-full object-cover",
							style: { objectPosition: "center 62%" }
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute inset-0 bg-gradient-to-b from-ink/45 via-ink/10 to-ink/20",
							"aria-hidden": "true"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "pointer-events-none absolute inset-x-0 bottom-0 h-[28%] sm:h-[34%]",
							"aria-hidden": "true",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/images/table.jpg",
								alt: "",
								className: "h-full w-full object-cover object-top",
								style: {
									maskImage: "linear-gradient(to bottom, transparent 0%, black 28%, black 100%)",
									WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 28%, black 100%)"
								}
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "pointer-events-none absolute inset-0 shadow-[inset_0_0_90px_rgb(20_12_8/0.5)]",
							"aria-hidden": "true"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative z-10 mx-auto flex min-h-[100svh] max-w-5xl flex-col items-center justify-center px-4 pb-8 pt-24 text-center sm:pb-56 sm:pt-28",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "font-display text-[clamp(2.35rem,6.6vw,5.25rem)] font-semibold leading-[0.95] tracking-[-0.02em] text-paper",
							children: [
								"Górskie smaki,",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"na zamówienie."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-xl text-sm leading-relaxed text-paper/90 sm:text-base",
							children: "Bez kolejek. Autentyczne beskidzkie dania gotowe na Twoją przygodę — u stóp zamku w Rytrze."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/menu",
							className: "mt-8 no-underline",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "lg",
								children: "Zamów teraz"
							})
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative z-20 px-4 pb-8 sm:-mt-52 sm:px-8 lg:px-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto grid max-w-6xl gap-3 sm:grid-cols-3 sm:gap-4",
					children: CARDS.map((card) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: card.to,
						className: "group block overflow-hidden rounded-[var(--radius-xl)] bg-paper p-2.5 no-underline shadow-[var(--shadow-card)] transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[var(--shadow-card-hover)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "px-1 pb-2 text-center font-display text-lg font-semibold tracking-wide text-ink sm:text-xl",
							children: card.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative overflow-hidden rounded-[calc(var(--radius-xl)-10px)]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: card.image,
								alt: card.alt,
								className: "aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] sm:aspect-[16/11]"
							}), card.body && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent p-3 pt-10",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-left text-[12px] leading-snug text-paper sm:text-[13px]",
									children: card.body
								})
							})]
						})]
					}, card.title))
				})
			})
		]
	});
}
function Home() {
	const featured = MENU.filter((item) => item.featured);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-cream",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-2xl text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] font-semibold uppercase tracking-[0.28em] text-ember",
								children: "U stóp zamku"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 font-display text-4xl font-semibold text-ink sm:text-5xl",
								children: "Kuchnia beskidzka, podana na czas"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-base leading-relaxed text-muted",
								children: "Zamawiasz rano — odbierasz przed szlakiem albo jesz u nas, z widokiem na ruiny zamku w Rytrze. Te same przepisy, ten sam ogień."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
						children: featured.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DishCard, { item }, item.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 text-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/menu",
							className: "no-underline",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "outline",
								children: "Pełne menu"
							})
						})
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-timber",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-6xl items-center gap-0 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/rytro-zamek.jpg",
					alt: "Zamek w Rytrze wśród wzgórz Beskidu Sądeckiego",
					className: "h-full min-h-[280px] w-full object-cover md:min-h-[420px]",
					style: { objectPosition: "center 60%" }
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "px-6 py-12 sm:px-12",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] font-semibold uppercase tracking-[0.28em] text-ember",
							children: "Miejsce"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-display text-4xl font-semibold text-paper",
							children: "Nad Popradem, pod warownią"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm leading-relaxed text-paper/75 sm:text-base",
							children: "Rytro leży w Beskidzie Sądeckim, tam gdzie dolina otwiera się na zamek. Gotujemy z tego, co dają las, rzeka i szałasy: pstrąg, oscypek, kwaśnica, pierogi. Catering na wesele w stodole, lunch na rajd, kolację przy kominku."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/o-nas",
							className: "mt-8 inline-block no-underline",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								children: "Nasza historia"
							})
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-cream",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-2xl text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] font-semibold uppercase tracking-[0.28em] text-ember",
						children: "Jak to działa"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-4xl font-semibold text-ink",
						children: "Zamów. Odbierz. Idź w góry."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-12 grid gap-6 sm:grid-cols-3",
					children: [
						{
							n: "01",
							t: "Wybierz dania",
							d: "Z menu góralskiego — na wynos, na stół albo na event."
						},
						{
							n: "02",
							t: "Wskaż godzinę",
							d: "Odbiór w chacie albo dowóz w dolinie Popradu."
						},
						{
							n: "03",
							t: "Jedz bez kolejki",
							d: "Paczki gotowe na szlak. Albo stolik z widokiem na zamek."
						}
					].map((step) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-[var(--radius-xl)] bg-paper p-6 shadow-[var(--shadow-card)]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-3xl text-ember",
								children: step.n
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-3 font-display text-2xl text-ink",
								children: step.t
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted",
								children: step.d
							})
						]
					}, step.n))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/dine-interior.jpg",
					alt: "",
					className: "absolute inset-0 h-full w-full object-cover"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-ink/55" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto max-w-3xl px-4 py-20 text-center sm:py-24",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-4xl font-semibold text-paper sm:text-5xl",
							children: "Stolik przy oknie, albo paczka na szlak"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm text-paper/80",
							children: "Rezerwacje na wieczór i zamówienia na rano przyjmujemy tego samego dnia."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap items-center justify-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/rezerwacja",
								className: "no-underline",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, { children: "Zarezerwuj stolik" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/menu",
								className: "no-underline",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "ghost",
									children: "Zamów na wynos"
								})
							})]
						})
					]
				})
			]
		})
	] });
}
//#endregion
export { Home as component };
