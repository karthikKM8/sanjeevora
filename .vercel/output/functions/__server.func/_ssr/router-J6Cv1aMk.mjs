import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { c as HeadContent, d as Outlet, f as lazyRouteComponent, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter, y as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as Heart, N as ChartColumn, P as Calendar, _ as Mail, i as Users, m as MessageSquare, w as HandHeart, x as IndianRupee } from "../_libs/lucide-react.mjs";
import { n as logo_default, t as SiteShell } from "./SiteShell-DoF9xTGn.mjs";
import { t as Counter } from "./Counter-BfARf_rC.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { t as Route$11 } from "./donate-C3YgCJM2.mjs";
import { t as Route$12 } from "./donate.failure-BW7B-BaZ.mjs";
import { t as Route$13 } from "./donate.success-CXvgDZ4R.mjs";
import { t as Route$14 } from "./donate.thank-you-DYtoQxjZ.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-J6Cv1aMk.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-EYso93TN.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$10 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Sanjeevora — Together We Can Create Lasting Change" },
			{
				name: "description",
				content: "Sanjeevora is a non-profit empowering communities through education, healthcare, environmental sustainability, and rural development. Donate today."
			},
			{
				name: "author",
				content: "Sanjeevora"
			},
			{
				property: "og:title",
				content: "Sanjeevora — Together We Can Create Lasting Change"
			},
			{
				property: "og:description",
				content: "Support education, healthcare, sustainability, and community development."
			},
			{
				property: "og:site_name",
				content: "Sanjeevora"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "stylesheet",
			href: styles_default
		}, {
			rel: "icon",
			href: logo_default,
			type: "image/png"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "NGO",
				name: "Sanjeevora",
				url: "/",
				description: "Non-profit empowering communities through education, healthcare, sustainability and community development."
			})
		}]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$10.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
			richColors: true,
			position: "top-center"
		})]
	});
}
var $$splitComponentImporter$7 = () => import("./volunteer-C-Qo-WwE.mjs");
var Route$9 = createFileRoute("/volunteer")({
	head: () => ({
		meta: [
			{ title: "Volunteer with Sanjeevora" },
			{
				name: "description",
				content: "Give your time. Change a life. Join 1,800+ volunteers across India."
			},
			{
				property: "og:title",
				content: "Volunteer with Sanjeevora"
			},
			{
				property: "og:description",
				content: "Sign up to volunteer in education, healthcare, environment and more."
			},
			{
				property: "og:url",
				content: "/volunteer"
			}
		],
		links: [{
			rel: "canonical",
			href: "/volunteer"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var BASE_URL = "";
var entries = [
	{
		path: "/",
		changefreq: "weekly",
		priority: "1.0"
	},
	{
		path: "/about",
		changefreq: "monthly",
		priority: "0.8"
	},
	{
		path: "/mission",
		changefreq: "monthly",
		priority: "0.9"
	},
	{
		path: "/programs",
		changefreq: "monthly",
		priority: "0.9"
	},
	{
		path: "/gallery",
		changefreq: "monthly",
		priority: "0.8"
	},
	{
		path: "/events",
		changefreq: "weekly",
		priority: "0.7"
	},
	{
		path: "/volunteer",
		changefreq: "monthly",
		priority: "0.8"
	},
	{
		path: "/contact",
		changefreq: "monthly",
		priority: "0.6"
	},
	{
		path: "/donate",
		changefreq: "monthly",
		priority: "0.9"
	}
];
var Route$8 = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: async () => {
	const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries.map((e) => `  <url>\n    <loc>${BASE_URL}${e.path}</loc>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`).join("\n")}\n</urlset>`;
	return new Response(xml, { headers: {
		"Content-Type": "application/xml",
		"Cache-Control": "public, max-age=3600"
	} });
} } } });
var $$splitComponentImporter$6 = () => import("./programs-ev3xHGA_.mjs");
var Route$7 = createFileRoute("/programs")({
	head: () => ({
		meta: [
			{ title: "Our Programs — Jeevora Foundation" },
			{
				name: "description",
				content: "Creating Sustainable Change Through Four Core Programs."
			},
			{
				property: "og:title",
				content: "Our Programs — Jeevora Foundation"
			},
			{
				property: "og:description",
				content: "Creating Sustainable Change Through Four Core Programs."
			},
			{
				property: "og:url",
				content: "/programs"
			}
		],
		links: [{
			rel: "canonical",
			href: "/programs"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./mission-B7jIhqOi.mjs");
var Route$6 = createFileRoute("/mission")({
	head: () => ({
		meta: [
			{ title: "Our Mission & Vision — Jeevora Foundation" },
			{
				name: "description",
				content: "Empowering underprivileged children and young adults to build independent, confident, and meaningful lives."
			},
			{
				property: "og:title",
				content: "Our Mission & Vision — Jeevora Foundation"
			},
			{
				property: "og:description",
				content: "Empowering underprivileged children and young adults to build independent, confident, and meaningful lives."
			},
			{
				property: "og:url",
				content: "/mission"
			}
		],
		links: [{
			rel: "canonical",
			href: "/mission"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./gallery-CRgR6sFC.mjs");
var Route$5 = createFileRoute("/gallery")({
	head: () => ({
		meta: [
			{ title: "Gallery — Jeevora Foundation" },
			{
				name: "description",
				content: "Explore the moments of joy, learning, and transformation captured across our programs."
			},
			{
				property: "og:title",
				content: "Gallery — Jeevora Foundation"
			},
			{
				property: "og:description",
				content: "Explore the moments of joy, learning, and transformation captured across our programs."
			},
			{
				property: "og:url",
				content: "/gallery"
			}
		],
		links: [{
			rel: "canonical",
			href: "/gallery"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./events-BgcOFk3Y.mjs");
var Route$4 = createFileRoute("/events")({
	head: () => ({
		meta: [
			{ title: "Events — Sanjeevora" },
			{
				name: "description",
				content: "Upcoming Sanjeevora events, drives, and community programs you can join."
			},
			{
				property: "og:title",
				content: "Events — Sanjeevora"
			},
			{
				property: "og:description",
				content: "Upcoming events you can be part of."
			},
			{
				property: "og:url",
				content: "/events"
			}
		],
		links: [{
			rel: "canonical",
			href: "/events"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./contact-Bz3PICPt.mjs");
var Route$3 = createFileRoute("/contact")({
	head: () => ({
		meta: [
			{ title: "Contact — Sanjeevora" },
			{
				name: "description",
				content: "Get in touch with the Sanjeevora team — partnerships, press, donations."
			},
			{
				property: "og:title",
				content: "Contact — Sanjeevora"
			},
			{
				property: "og:description",
				content: "Reach out — we respond within one business day."
			},
			{
				property: "og:url",
				content: "/contact"
			}
		],
		links: [{
			rel: "canonical",
			href: "/contact"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var Route$2 = createFileRoute("/admin")({
	head: () => ({ meta: [{ title: "Admin Dashboard — Sanjeevora" }, {
		name: "robots",
		content: "noindex"
	}] }),
	component: AdminPage
});
var STATS = [
	{
		label: "Total Donations",
		value: 248e5,
		prefix: "₹",
		icon: IndianRupee
	},
	{
		label: "Donors",
		value: 12480,
		icon: Heart
	},
	{
		label: "Active Volunteers",
		value: 1842,
		icon: HandHeart
	},
	{
		label: "Newsletter Subs",
		value: 8920,
		icon: Mail
	}
];
var RECENT_DONATIONS = [
	{
		name: "Aarav M.",
		amount: 5e3,
		cause: "Education",
		date: "2026-06-18"
	},
	{
		name: "Ishita B.",
		amount: 1200,
		cause: "Healthcare",
		date: "2026-06-18"
	},
	{
		name: "Karan S.",
		amount: 3e3,
		cause: "Environment",
		date: "2026-06-17"
	},
	{
		name: "Meera P.",
		amount: 800,
		cause: "Child Welfare",
		date: "2026-06-17"
	},
	{
		name: "Rohit V.",
		amount: 1e4,
		cause: "Where most needed",
		date: "2026-06-16"
	}
];
function AdminPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "gradient-soft py-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-semibold uppercase tracking-[0.2em] text-primary",
					children: "Admin"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-2 font-display text-3xl font-extrabold sm:text-4xl",
					children: "Dashboard"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-foreground/70",
					children: "Mock view — connect this to the backend tables to power real admin features."
				})
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
				children: STATS.map((s) => {
					const Icon = s.icon;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border bg-card p-5 shadow-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
								children: s.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4 text-primary" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 font-display text-2xl font-extrabold",
							children: ["prefix" in s ? s.prefix : "", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, { to: s.value })]
						})]
					}, s.label);
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 grid gap-6 lg:grid-cols-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-border bg-card p-6 lg:col-span-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-4 flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-lg font-bold",
							children: "Recent donations"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartColumn, { className: "h-4 w-4 text-muted-foreground" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-x-auto",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
							className: "w-full text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "border-b border-border text-left text-xs uppercase tracking-wider text-muted-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "py-2",
										children: "Donor"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Cause" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Date" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "text-right",
										children: "Amount"
									})
								]
							}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: RECENT_DONATIONS.map((d, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "border-b border-border/60",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "py-3",
										children: d.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "text-muted-foreground",
										children: d.cause
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "text-muted-foreground",
										children: d.date
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
										className: "text-right font-semibold text-primary",
										children: ["₹", d.amount.toLocaleString("en-IN")]
									})
								]
							}, i)) })]
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ManageCard, {
							icon: Heart,
							title: "Manage Donations",
							desc: "View, refund, export records."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ManageCard, {
							icon: HandHeart,
							title: "Manage Volunteers",
							desc: "Approve and assign roles."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ManageCard, {
							icon: MessageSquare,
							title: "Manage Causes",
							desc: "Edit cause pages and targets."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ManageCard, {
							icon: Calendar,
							title: "Manage Events",
							desc: "Publish & track attendance."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ManageCard, {
							icon: Users,
							title: "Beneficiaries",
							desc: "Add stories & track impact."
						})
					]
				})]
			})]
		})
	})] });
}
function ManageCard({ icon: Icon, title, desc }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "rounded-2xl border border-border bg-card p-5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-start gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "inline-flex h-9 w-9 items-center justify-center rounded-xl bg-secondary text-primary",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-semibold",
				children: title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-muted-foreground",
				children: desc
			})] })]
		})
	});
}
var $$splitComponentImporter$1 = () => import("./about-BnkkjT2C.mjs");
var Route$1 = createFileRoute("/about")({
	head: () => ({
		meta: [
			{ title: "About — Sanjeevora" },
			{
				name: "description",
				content: "Sanjeevora's mission, vision, and the impact of our community-led work across India."
			},
			{
				property: "og:title",
				content: "About Sanjeevora"
			},
			{
				property: "og:description",
				content: "Compassion translated into action — our mission, vision, and impact."
			},
			{
				property: "og:url",
				content: "/about"
			}
		],
		links: [{
			rel: "canonical",
			href: "/about"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./routes-BkJS8lOy.mjs");
var Route = createFileRoute("/")({
	head: () => ({
		meta: [
			{ title: "Sanjeevora — Together We Can Create Lasting Change" },
			{
				name: "description",
				content: "Support education, healthcare, environmental sustainability, and community development through Sanjeevora. Donate today."
			},
			{
				property: "og:title",
				content: "Sanjeevora — Together We Can Create Lasting Change"
			},
			{
				property: "og:description",
				content: "Support education, healthcare, environmental sustainability, and community development through Sanjeevora."
			}
		],
		links: [{
			rel: "canonical",
			href: "/"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var VolunteerRoute = Route$9.update({
	id: "/volunteer",
	path: "/volunteer",
	getParentRoute: () => Route$10
});
var SitemapDotxmlRoute = Route$8.update({
	id: "/sitemap.xml",
	path: "/sitemap.xml",
	getParentRoute: () => Route$10
});
var ProgramsRoute = Route$7.update({
	id: "/programs",
	path: "/programs",
	getParentRoute: () => Route$10
});
var MissionRoute = Route$6.update({
	id: "/mission",
	path: "/mission",
	getParentRoute: () => Route$10
});
var GalleryRoute = Route$5.update({
	id: "/gallery",
	path: "/gallery",
	getParentRoute: () => Route$10
});
var EventsRoute = Route$4.update({
	id: "/events",
	path: "/events",
	getParentRoute: () => Route$10
});
var DonateRoute = Route$11.update({
	id: "/donate",
	path: "/donate",
	getParentRoute: () => Route$10
});
var ContactRoute = Route$3.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$10
});
var AdminRoute = Route$2.update({
	id: "/admin",
	path: "/admin",
	getParentRoute: () => Route$10
});
var AboutRoute = Route$1.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$10
});
var IndexRoute = Route.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$10
});
var DonateThankYouRoute = Route$14.update({
	id: "/thank-you",
	path: "/thank-you",
	getParentRoute: () => DonateRoute
});
var DonateSuccessRoute = Route$13.update({
	id: "/success",
	path: "/success",
	getParentRoute: () => DonateRoute
});
var DonateRouteChildren = {
	DonateFailureRoute: Route$12.update({
		id: "/failure",
		path: "/failure",
		getParentRoute: () => DonateRoute
	}),
	DonateSuccessRoute,
	DonateThankYouRoute
};
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	AdminRoute,
	ContactRoute,
	DonateRoute: DonateRoute._addFileChildren(DonateRouteChildren),
	EventsRoute,
	GalleryRoute,
	MissionRoute,
	ProgramsRoute,
	SitemapDotxmlRoute,
	VolunteerRoute
};
var routeTree = Route$10._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
