import { f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as objectType, r as stringType, t as coerce } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/donate-C3YgCJM2.js
var $$splitComponentImporter = () => import("./donate-9m8j9I7k.mjs");
var search = objectType({
	amount: coerce.number().min(10).optional(),
	name: stringType().optional(),
	email: stringType().email().optional(),
	cause: stringType().optional()
});
var Route = createFileRoute("/donate")({
	validateSearch: search,
	head: () => ({
		meta: [
			{ title: "Donate — Sanjeevora" },
			{
				name: "description",
				content: "Make a secure donation to Sanjeevora — funds children's education, healthcare, environment and community work in India."
			},
			{
				property: "og:title",
				content: "Donate to Sanjeevora"
			},
			{
				property: "og:description",
				content: "Secure online donation page for Sanjeevora."
			},
			{
				property: "og:url",
				content: "/donate"
			}
		],
		links: [{
			rel: "canonical",
			href: "/donate"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
