import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as SiteShell } from "./SiteShell-DoF9xTGn.mjs";
import { t as Reveal } from "./Reveal-C40uCyOa.mjs";
import { n as _1__4__default, t as _1__2__default } from "./1 (4)-VAuL0-XB.mjs";
import { n as _1__5__default, t as _1__3__default } from "./1 (5)-CSnBIVMz.mjs";
import { t as _1__1__default } from "./1 (1)-Ow2lLvvi.mjs";
import { n as _1__7__default, r as _1__8__default, t as _1__6__default } from "./1 (8)-BmUJ2rCK.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/gallery-CRgR6sFC.js
var import_jsx_runtime = require_jsx_runtime();
var GALLERY_IMAGES = [
	{
		src: _1__1__default,
		alt: "Impact 1",
		className: "md:col-span-2 md:row-span-2"
	},
	{
		src: _1__2__default,
		alt: "Impact 2",
		className: "md:col-span-1 md:row-span-1"
	},
	{
		src: _1__5__default,
		alt: "Impact 5",
		className: "md:col-span-1 md:row-span-1"
	},
	{
		src: _1__3__default,
		alt: "Impact 3",
		className: "md:col-span-2 md:row-span-1"
	},
	{
		src: _1__4__default,
		alt: "Impact 4",
		className: "md:col-span-1 md:row-span-2"
	},
	{
		src: _1__6__default,
		alt: "Impact 6",
		className: "md:col-span-1 md:row-span-1"
	},
	{
		src: _1__7__default,
		alt: "Impact 7",
		className: "md:col-span-2 md:row-span-1"
	},
	{
		src: _1__8__default,
		alt: "Impact 8",
		className: "md:col-span-2 md:row-span-1"
	}
];
var SplitComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: "gradient-soft py-16",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-semibold uppercase tracking-[0.2em] text-primary",
				children: "Our Gallery"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-display text-4xl font-extrabold sm:text-5xl lg:text-6xl",
				children: "Moments of Impact"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 mx-auto max-w-2xl text-lg text-foreground/70",
				children: "A visual journey through the lives we touch, the smiles we share, and the futures we help build."
			})
		]
	})
}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
	className: "py-20",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-2 gap-3 md:grid-cols-4 md:auto-rows-[250px] md:gap-4",
			children: GALLERY_IMAGES.map((img, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: i * .05,
				className: `h-full ${img.className || ""}`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "group relative h-full w-full overflow-hidden rounded-2xl bg-muted shadow-sm transition-all hover:shadow-xl hover:shadow-primary/20",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 z-10 bg-black/0 transition-colors duration-500 group-hover:bg-black/20" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: img.src,
						alt: img.alt,
						loading: "lazy",
						className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
					})]
				})
			}, i))
		})
	})
})] });
//#endregion
export { SplitComponent as component };
