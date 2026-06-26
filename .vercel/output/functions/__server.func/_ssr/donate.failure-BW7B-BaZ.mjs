import { f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as objectType, r as stringType, t as coerce } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/donate.failure-BW7B-BaZ.js
var $$splitComponentImporter = () => import("./donate.failure-EIrBoHaA.mjs");
var Route = createFileRoute("/donate/failure")({
	validateSearch: objectType({
		id: stringType().optional(),
		amount: coerce.number().optional(),
		name: stringType().optional(),
		ref: stringType().optional()
	}),
	head: () => ({ meta: [{ title: "Payment failed — Sanjeevora" }, {
		name: "robots",
		content: "noindex"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
