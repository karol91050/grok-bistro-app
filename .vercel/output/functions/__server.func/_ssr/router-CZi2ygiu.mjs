import { i as __toESM } from "../_runtime.mjs";
import { _ as createRootRoute, b as require_jsx_runtime, d as useRouterState, g as createFileRoute, h as lazyRouteComponent, l as Scripts, m as Outlet, p as createRouter, u as HeadContent, v as Link, y as useRouter, z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as Search, n as TriangleAlert, s as Menu, t as X } from "../_libs/lucide-react.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-CZi2ygiu.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: error.message || "An unexpected error occurred. Try reloading the page."
			})
		]
	});
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	if (typeof window === "undefined") return () => {};
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	const parentOrigin = resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		if (envelope.data.type === "hello") {
			if (!HelloSchema.safeParse(event.data).success) return;
			announce();
			return;
		}
		if (envelope.data.type === "navigate") {
			const parsed = NavigateSchema.safeParse(event.data);
			if (!parsed.success) return;
			navigate(parsed.data.path);
			queueMicrotask(reportLocation);
			return;
		}
		if (envelope.data.type === "history") {
			const parsed = HistorySchema.safeParse(event.data);
			if (!parsed.success) return;
			if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
			window.history.go(parsed.data.delta);
		}
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function formatPln(value) {
	return new Intl.NumberFormat("pl-PL", {
		style: "currency",
		currency: "PLN",
		maximumFractionDigits: 0
	}).format(value);
}
function Logo({ light = false, compact = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/",
		className: cn("group flex items-center gap-2.5 no-underline", light ? "text-paper" : "text-ink"),
		"aria-label": "Rytro Catering — strona główna",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 40 40",
			className: "size-9 shrink-0",
			"aria-hidden": "true",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M4 30 L14 12 L20 22 L26 10 L36 30 Z",
					fill: "none",
					stroke: "currentColor",
					strokeWidth: "1.6",
					strokeLinejoin: "round"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M20 16 v12 M17 22 h6",
					fill: "none",
					stroke: "currentColor",
					strokeWidth: "1.6",
					strokeLinecap: "round"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "20",
					cy: "14.5",
					r: "1.2",
					fill: "currentColor"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: cn("leading-none", compact && "sr-only"),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "block font-sans text-[10px] font-semibold uppercase tracking-[0.28em]",
				children: "Rytro"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-0.5 block font-sans text-[10px] font-semibold uppercase tracking-[0.28em]",
				children: "Catering"
			})]
		})]
	});
}
var CATEGORIES = [
	{
		id: "przystawki",
		label: "Przystawki"
	},
	{
		id: "zupy",
		label: "Zupy"
	},
	{
		id: "dania",
		label: "Dania główne"
	},
	{
		id: "desery",
		label: "Desery"
	},
	{
		id: "napoje",
		label: "Napoje"
	}
];
var MENU = [
	{
		id: "oscypek",
		name: "Oscypek z żurawiną",
		description: "Wędzony ser owczy z grilla, żurawina i miód spadziowy.",
		price: 28,
		category: "przystawki",
		image: "/images/dish-oscypek.jpg",
		featured: true,
		vegetarian: true
	},
	{
		id: "moskole",
		name: "Moskole z bundzem",
		description: "Pieczone placki ziemniaczane, bundz, masło czosnkowe.",
		price: 24,
		category: "przystawki",
		image: "/images/dish-oscypek.jpg",
		vegetarian: true
	},
	{
		id: "tatar",
		name: "Tatar z pstrąga",
		description: "Świeży pstrąg z Popradu, kapary, szczypior, żółtko.",
		price: 36,
		category: "przystawki",
		image: "/images/dish-pstrag.jpg"
	},
	{
		id: "kwasnica",
		name: "Kwaśnica na wędzonce",
		description: "Beskidzka kwaśnica z żeberkiem, ziemniakami i chlebem żytnim.",
		price: 22,
		category: "zupy",
		image: "/images/dish-kwasnica.jpg",
		featured: true
	},
	{
		id: "zurek",
		name: "Żurek staropolski",
		description: "Zakwas, biała kiełbasa, jajko, majeranek — w chlebie na życzenie.",
		price: 20,
		category: "zupy",
		image: "/images/dish-kwasnica.jpg"
	},
	{
		id: "borowiki",
		name: "Krem z borowików",
		description: "Leśne borowiki, śmietana, szczypior i grzanki z masłem.",
		price: 24,
		category: "zupy",
		image: "/images/dish-kwasnica.jpg",
		vegetarian: true
	},
	{
		id: "pierogi",
		name: "Pierogi ruskie ze skwarkami",
		description: "Ręczne pierogi z ruskim farszem, skwarki, cebulka, śmietana.",
		price: 32,
		category: "dania",
		image: "/images/dish-pierogi.jpg",
		featured: true,
		vegetarian: true
	},
	{
		id: "pstrag",
		name: "Pstrąg z Popradu",
		description: "Cały pstrąg z grilla, zioła z łąk, cytryna, pieczone warzywa.",
		price: 48,
		category: "dania",
		image: "/images/dish-pstrag.jpg",
		featured: true
	},
	{
		id: "placek",
		name: "Placek po zbójnicku",
		description: "Ogromny placek ziemniaczany, gulasz wołowy, śmietana, szczypior.",
		price: 42,
		category: "dania",
		image: "/images/dish-pierogi.jpg"
	},
	{
		id: "golonka",
		name: "Golonka pieczona",
		description: "Chrupiąca skórka, kapusta kiszona, musztarda i pieczywo.",
		price: 52,
		category: "dania",
		image: "/images/dish-kwasnica.jpg"
	},
	{
		id: "kaczka",
		name: "Kaczka z jabłkami",
		description: "Udko pieczone w jabłkach i żurawinie, kasza gryczana.",
		price: 56,
		category: "dania",
		image: "/images/dish-szarlotka.jpg"
	},
	{
		id: "szarlotka",
		name: "Szarlotka góralska",
		description: "Ciepła szarlotka z kruszonką, lody waniliowe, cynamon.",
		price: 18,
		category: "desery",
		image: "/images/dish-szarlotka.jpg",
		featured: true,
		vegetarian: true
	},
	{
		id: "sernik",
		name: "Sernik na zimno",
		description: "Sernik z twarogu z lokalnej mleczarni, sos malinowy.",
		price: 16,
		category: "desery",
		image: "/images/dish-szarlotka.jpg",
		vegetarian: true
	},
	{
		id: "grzaniec",
		name: "Grzaniec domowy",
		description: "Czerwone wino, miód, pomarańcza, cynamon i goździki.",
		price: 16,
		category: "napoje",
		image: "/images/dish-szarlotka.jpg"
	},
	{
		id: "kompot",
		name: "Kompot z suszu",
		description: "Suszone śliwki, jabłka i gruszki — jak u babci.",
		price: 10,
		category: "napoje",
		image: "/images/dish-oscypek.jpg",
		vegetarian: true
	},
	{
		id: "piwo",
		name: "Piwo rzemieślnicze",
		description: "Rotacja beczek z małych browarów Sądecczyzny, 0,5 l.",
		price: 14,
		category: "napoje",
		image: "/images/dish-kwasnica.jpg"
	},
	{
		id: "kawa",
		name: "Kawa z palarni",
		description: "Espresso lub przelew z ziaren palonych w Nowym Sączu.",
		price: 12,
		category: "napoje",
		image: "/images/dish-oscypek.jpg",
		vegetarian: true
	}
];
function getItem(id) {
	return MENU.find((item) => item.id === id);
}
function searchMenu(query) {
	const q = query.trim().toLowerCase();
	if (!q) return MENU;
	return MENU.filter((item) => item.name.toLowerCase().includes(q) || item.description.toLowerCase().includes(q));
}
var useCart = create()(persist((set, get) => ({
	lines: [],
	add: (id, qty = 1) => {
		const lines = [...get().lines];
		const existing = lines.find((line) => line.id === id);
		if (existing) existing.qty += qty;
		else lines.push({
			id,
			qty
		});
		set({ lines });
	},
	setQty: (id, qty) => {
		if (qty <= 0) {
			set({ lines: get().lines.filter((line) => line.id !== id) });
			return;
		}
		set({ lines: get().lines.map((line) => line.id === id ? {
			...line,
			qty
		} : line) });
	},
	remove: (id) => set({ lines: get().lines.filter((line) => line.id !== id) }),
	clear: () => set({ lines: [] })
}), {
	name: "rytro-cart",
	skipHydration: true
}));
function cartCount(lines) {
	return lines.reduce((sum, line) => sum + line.qty, 0);
}
function cartTotal(lines) {
	return lines.reduce((sum, line) => {
		const item = getItem(line.id);
		return sum + (item ? item.price * line.qty : 0);
	}, 0);
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 font-medium tracking-wide transition-colors duration-150 disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember", {
	variants: {
		variant: {
			ember: "bg-ember text-paper hover:bg-ember-dark active:scale-[0.98] shadow-[0_1px_0_rgb(0_0_0/0.12)]",
			timber: "bg-timber text-paper hover:bg-ink",
			ghost: "bg-transparent text-paper hover:bg-paper/10 border border-paper/40",
			outline: "bg-transparent text-ink border border-ink/15 hover:border-ink/40 hover:bg-mist",
			paper: "bg-paper text-ink hover:bg-cream shadow-[0_1px_0_rgb(0_0_0/0.06)]"
		},
		size: {
			sm: "h-10 px-4 text-xs uppercase tracking-[0.14em] rounded-[var(--radius-sm)]",
			md: "h-11 px-5 text-xs uppercase tracking-[0.16em] rounded-[var(--radius-md)]",
			lg: "h-12 px-7 text-sm uppercase tracking-[0.18em] rounded-[var(--radius-md)]",
			icon: "size-11 rounded-[var(--radius-md)]"
		}
	},
	defaultVariants: {
		variant: "ember",
		size: "md"
	}
});
var Button = (0, import_react.forwardRef)(({ className, variant, size, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
	ref,
	className: cn(buttonVariants({
		variant,
		size
	}), className),
	...props
}));
Button.displayName = "Button";
function SearchDialog({ open, onClose }) {
	const [query, setQuery] = (0, import_react.useState)("");
	const inputRef = (0, import_react.useRef)(null);
	const add = useCart((s) => s.add);
	const results = (0, import_react.useMemo)(() => searchMenu(query).slice(0, 8), [query]);
	(0, import_react.useEffect)(() => {
		if (open) {
			setQuery("");
			const t = window.setTimeout(() => inputRef.current?.focus(), 40);
			return () => window.clearTimeout(t);
		}
	}, [open]);
	(0, import_react.useEffect)(() => {
		if (!open) return;
		const onKey = (e) => {
			if (e.key === "Escape") onClose();
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [open, onClose]);
	if (!open) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-[80]",
		role: "dialog",
		"aria-modal": "true",
		"aria-label": "Szukaj w menu",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: "absolute inset-0 bg-ink/50",
			"aria-label": "Zamknij wyszukiwanie",
			onClick: onClose
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto mt-[12vh] w-[min(560px,calc(100%-2rem))] rounded-[var(--radius-xl)] bg-paper p-3 shadow-[var(--shadow-card)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 rounded-[var(--radius-lg)] bg-cream px-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
						className: "size-4 text-muted",
						"aria-hidden": "true"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						ref: inputRef,
						value: query,
						onChange: (e) => setQuery(e.target.value),
						placeholder: "Szukaj dań, np. pierogi, pstrąg…",
						className: "h-12 w-full bg-transparent text-sm text-ink placeholder:text-muted focus:outline-none"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: onClose,
						className: "grid size-10 place-items-center text-muted hover:text-ink",
						"aria-label": "Zamknij",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				className: "mt-2 max-h-[50vh] overflow-auto",
				children: [results.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 rounded-[var(--radius-md)] p-2 hover:bg-cream",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: item.image,
							alt: "",
							className: "size-14 rounded-[var(--radius-sm)] object-cover"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/menu",
							onClick: onClose,
							className: "min-w-0 flex-1 no-underline",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "truncate font-display text-lg text-ink",
								children: item.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm tabular-nums text-muted",
								children: formatPln(item.price)
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							onClick: () => {
								add(item.id);
								onClose();
							},
							children: "Dodaj"
						})
					]
				}) }, item.id)), results.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "px-3 py-8 text-center text-sm text-muted",
					children: [
						"Nic nie znaleziono dla „",
						query,
						"”."
					]
				})]
			})]
		})]
	});
}
function SearchTrigger({ onClick, light }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick,
		"aria-label": "Szukaj",
		className: light ? "grid size-11 place-items-center text-paper hover:text-paper/80" : "grid size-11 place-items-center text-ink hover:text-ember",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
			className: "size-4",
			strokeWidth: 1.75
		})
	});
}
var NAV = [
	{
		to: "/",
		label: "Start"
	},
	{
		to: "/menu",
		label: "Menu"
	},
	{
		to: "/rezerwacja",
		label: "Rezerwacja"
	},
	{
		to: "/o-nas",
		label: "O nas"
	},
	{
		to: "/kontakt",
		label: "Kontakt"
	}
];
function Header() {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const isHome = pathname === "/";
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	const [searchOpen, setSearchOpen] = (0, import_react.useState)(false);
	const count = cartCount(useCart((s) => s.lines));
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 24);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		setOpen(false);
	}, [pathname]);
	const light = isHome && !scrolled && !open;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: cn("fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,color] duration-200", light ? "bg-transparent text-paper" : "bg-cream/95 text-ink shadow-[0_1px_0_rgb(28_25_23/0.08)] backdrop-blur-md"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:h-[4.5rem] sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { light }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-1 lg:flex",
					"aria-label": "Główne",
					children: NAV.map((item) => {
						const active = item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.to,
							className: cn("px-3 py-2 text-[11px] font-medium uppercase tracking-[0.22em] no-underline transition-opacity", light ? "text-paper hover:opacity-80" : "text-ink hover:text-ember", active && (light ? "border-b border-paper" : "border-b border-ember")),
							children: item.label
						}, item.to);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/zamowienie",
							className: cn("hidden items-center gap-2 px-3 py-2 text-[11px] font-medium uppercase tracking-[0.18em] no-underline sm:flex", light ? "text-paper" : "text-ink hover:text-ember"),
							children: ["Moje zamówienie", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "tabular-nums",
								children: [
									"(",
									count,
									")"
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchTrigger, {
							light,
							onClick: () => setSearchOpen(true)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "grid size-11 place-items-center lg:hidden",
							"aria-label": open ? "Zamknij menu" : "Otwórz menu",
							"aria-expanded": open,
							onClick: () => setOpen((v) => !v),
							children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
						})
					]
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-ink/10 bg-cream px-4 py-4 text-ink lg:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "flex flex-col",
				"aria-label": "Mobilne",
				children: [NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: item.to,
					className: "flex min-h-11 items-center text-sm font-medium uppercase tracking-[0.18em] text-ink no-underline",
					children: item.label
				}, item.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/zamowienie",
					className: "flex min-h-11 items-center text-sm font-medium uppercase tracking-[0.18em] text-ink no-underline",
					children: [
						"Moje zamówienie (",
						count,
						")"
					]
				})]
			})
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchDialog, {
		open: searchOpen,
		onClose: () => setSearchOpen(false)
	})] });
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "bg-timber text-paper",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { light: true }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-md text-sm leading-relaxed text-paper/70",
						children: "Górskie smaki u stóp zamku w Rytrze. Catering na szlak, do schroniska i na stół — oraz bistro, w którym zostaje się na dłużej."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] font-semibold uppercase tracking-[0.2em] text-paper/50",
						children: "Odwiedź"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 text-sm leading-relaxed text-paper/80",
						children: [
							"ul. Zamkowa 12",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"33-343 Rytro",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Beskid Sądecki"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 text-sm text-paper/80",
						children: [
							"Wt–Nd 12:00–21:00",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Poniedziałek nieczynne"
						]
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] font-semibold uppercase tracking-[0.2em] text-paper/50",
					children: "Nawigacja"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-3 space-y-2 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/menu",
							className: "text-paper/80 no-underline hover:text-paper",
							children: "Menu"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/rezerwacja",
							className: "text-paper/80 no-underline hover:text-paper",
							children: "Rezerwacja stolika"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/o-nas",
							className: "text-paper/80 no-underline hover:text-paper",
							children: "O nas"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/kontakt",
							className: "text-paper/80 no-underline hover:text-paper",
							children: "Kontakt"
						}) })
					]
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "border-t border-paper/10 py-4 text-center text-xs tracking-wide text-paper/45",
			children: ["Rytro Catering · u stóp zamku · ", (/* @__PURE__ */ new Date()).getFullYear()]
		})]
	});
}
function CartHydrator() {
	(0, import_react.useEffect)(() => {
		useCart.persist.rehydrate();
	}, []);
	return null;
}
var styles_default = "/assets/styles-C_5xdiMo.css";
var APP_NAME = "Rytro Catering";
var Route$6 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: APP_NAME },
			{
				name: "description",
				content: "Górskie smaki na zamówienie. Catering i bistro u stóp zamku w Rytrze — Beskid Sądecki."
			},
			{
				name: "theme-color",
				content: "#3D2A1E"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500&family=Outfit:wght@300;400;500;600;700&display=swap"
			}
		]
	}),
	component: RootLayout,
	notFoundComponent: NotFound
});
function RootLayout() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "pl",
		className: "antialiased",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
			className: "min-h-svh bg-cream font-sans text-ink",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AuthProvider, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartHydrator, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
			]
		})]
	});
}
function NotFound() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto flex min-h-[70svh] max-w-lg flex-col items-center justify-center px-6 pt-24 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] uppercase tracking-[0.28em] text-muted",
				children: "404"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-display text-4xl text-ink",
				children: "Tej ścieżki nie ma na mapie"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm text-muted",
				children: "Strona nie istnieje. Wróć do chaty — menu i zamek czekają."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "/",
				className: "mt-8 inline-flex h-11 items-center rounded-[var(--radius-md)] bg-ember px-6 text-xs uppercase tracking-[0.16em] text-paper no-underline",
				children: "Do strony głównej"
			})
		]
	});
}
var $$splitComponentImporter$5 = () => import("./routes-CK_ajkIN.mjs");
var Route$5 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter$5, "component") });
var $$splitComponentImporter$4 = () => import("./kontakt-BcfgmsOI.mjs");
var Route$4 = createFileRoute("/kontakt")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
var $$splitComponentImporter$3 = () => import("./menu-C9MTR_QC.mjs");
var Route$3 = createFileRoute("/menu")({
	component: lazyRouteComponent($$splitComponentImporter$3, "component"),
	validateSearch: (search) => ({ q: typeof search.q === "string" ? search.q : void 0 })
});
var $$splitComponentImporter$2 = () => import("./o-nas-BUsvt6KN.mjs");
var Route$2 = createFileRoute("/o-nas")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
var $$splitComponentImporter$1 = () => import("./rezerwacja-BQFHDyxN.mjs");
var Route$1 = createFileRoute("/rezerwacja")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var $$splitComponentImporter = () => import("./zamowienie-BOzDCrgd.mjs");
var Route = createFileRoute("/zamowienie")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var rootRouteChildren = {
	IndexRoute: Route$5.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$6
	}),
	KontaktRoute: Route$4.update({
		id: "/kontakt",
		path: "/kontakt",
		getParentRoute: () => Route$6
	}),
	MenuRoute: Route$3.update({
		id: "/menu",
		path: "/menu",
		getParentRoute: () => Route$6
	}),
	ONasRoute: Route$2.update({
		id: "/o-nas",
		path: "/o-nas",
		getParentRoute: () => Route$6
	}),
	RezerwacjaRoute: Route$1.update({
		id: "/rezerwacja",
		path: "/rezerwacja",
		getParentRoute: () => Route$6
	}),
	ZamowienieRoute: Route.update({
		id: "/zamowienie",
		path: "/zamowienie",
		getParentRoute: () => Route$6
	})
};
var routeTree = Route$6._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { useCart as a, getItem as c, cartTotal as i, cn as l, Route$3 as n, CATEGORIES as o, Button as r, MENU as s, router_exports as t, formatPln as u };
