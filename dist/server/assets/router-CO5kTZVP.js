import { n as RESTAURANT, t as FOODORA_URL } from "./constants-C0FLeFBP.js";
import { t as bombay_bites_logo_default } from "./bombay-bites-logo-BsUH7VSc.js";
import { useEffect, useState } from "react";
import { HeadContent, Link, Outlet, Scripts, createFileRoute, createRootRouteWithContext, createRouter, lazyRouteComponent, useRouter, useRouterState } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Menu, ShoppingBag, X } from "lucide-react";
//#region src/styles.css?url
var styles_default = "/assets/styles-B2bXzgGG.css";
//#endregion
//#region src/lib/lovable-error-reporting.ts
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
//#endregion
//#region src/components/site-header.tsx
var logo$1 = { url: bombay_bites_logo_default };
var nav = [
	{
		to: "/meny",
		label: "Meny"
	},
	{
		to: "/catering",
		label: "Catering"
	},
	{
		to: "/om-oss",
		label: "Om Oss"
	},
	{
		to: "/kontakt",
		label: "Kontakt & Besøk"
	}
];
function SiteHeader() {
	const [open, setOpen] = useState(false);
	useEffect(() => {
		setOpen(false);
	}, [useRouterState({ select: (s) => s.location.pathname })]);
	return /* @__PURE__ */ jsxs("header", {
		className: "fixed inset-x-0 top-0 z-50 bg-[color:var(--navy-deep)]/90 backdrop-blur-md border-b border-[color:var(--gold)]/20 shadow-soft",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10",
			children: [
				/* @__PURE__ */ jsx(Link, {
					to: "/",
					className: "flex items-center gap-3 group",
					"aria-label": "Bombay Bites",
					children: /* @__PURE__ */ jsx("img", {
						src: logo$1.url,
						alt: "Bombay Bites",
						className: "h-11 w-auto",
						width: 120,
						height: 120
					})
				}),
				/* @__PURE__ */ jsx("nav", {
					className: "hidden lg:flex items-center gap-10",
					children: nav.map((item) => /* @__PURE__ */ jsx(Link, {
						to: item.to,
						className: "text-[11px] uppercase tracking-[0.22em] text-[color:var(--ivory)]/85 transition hover:text-[color:var(--gold)]",
						activeProps: { className: "text-[color:var(--gold)]" },
						activeOptions: { exact: false },
						children: item.label
					}, item.to))
				}),
				/* @__PURE__ */ jsx("div", {
					className: "hidden lg:block",
					children: /* @__PURE__ */ jsx("a", {
						href: FOODORA_URL,
						target: "_blank",
						rel: "noreferrer",
						className: "inline-flex items-center justify-center px-6 py-3 text-[11px] uppercase tracking-[0.22em] bg-[color:var(--gold)] text-[color:var(--charcoal)] border border-[color:var(--gold)] transition hover:bg-[color:var(--ivory)] hover:border-[color:var(--ivory)]",
						children: "Bestill Online"
					})
				}),
				/* @__PURE__ */ jsx("button", {
					onClick: () => setOpen((o) => !o),
					className: "lg:hidden text-[color:var(--ivory)]",
					"aria-label": "Meny",
					children: open ? /* @__PURE__ */ jsx(X, { size: 24 }) : /* @__PURE__ */ jsx(Menu, { size: 24 })
				})
			]
		}), open && /* @__PURE__ */ jsx("div", {
			className: "lg:hidden border-t border-[color:var(--gold)]/20 bg-[color:var(--navy-deep)]/95 backdrop-blur-md",
			children: /* @__PURE__ */ jsxs("div", {
				className: "flex flex-col px-6 py-6 gap-5",
				children: [nav.map((item) => /* @__PURE__ */ jsx(Link, {
					to: item.to,
					className: "text-sm uppercase tracking-[0.22em] text-[color:var(--ivory)]",
					activeProps: { className: "text-[color:var(--gold)]" },
					activeOptions: { exact: false },
					children: item.label
				}, item.to)), /* @__PURE__ */ jsx("a", {
					href: "https://www.foodora.no",
					target: "_blank",
					rel: "noreferrer",
					className: "inline-flex items-center justify-center px-6 py-3 mt-2 text-[11px] uppercase tracking-[0.22em] bg-[color:var(--gold)] text-[color:var(--charcoal)] border border-[color:var(--gold)]",
					children: "Bestill Online"
				})]
			})
		})]
	});
}
//#endregion
//#region src/components/site-footer.tsx
var logo = { url: bombay_bites_logo_default };
function SiteFooter() {
	return /* @__PURE__ */ jsx("footer", {
		className: "bg-[color:var(--navy)] text-[color:var(--ivory)] pt-24 pb-12 mt-32",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl px-6 lg:px-10",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "grid gap-14 md:grid-cols-4",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "md:col-span-2",
						children: [
							/* @__PURE__ */ jsx("img", {
								src: logo.url,
								alt: "Bombay Bites",
								className: "h-28 w-auto -ml-2",
								width: 160,
								height: 160
							}),
							/* @__PURE__ */ jsx("span", { className: "gold-divider mt-6" }),
							/* @__PURE__ */ jsx("p", {
								className: "mt-6 max-w-md text-sm leading-relaxed text-[color:var(--ivory)]/70",
								children: "Fra hjertet av Mumbai til bordet i Norge. Autentiske smaker, varm gjestfrihet og en atmosfære inspirert av Indias mest levende by."
							})
						]
					}),
					/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
						className: "eyebrow !text-[color:var(--gold)]",
						children: "Besøk"
					}), /* @__PURE__ */ jsxs("ul", {
						className: "mt-5 space-y-2 text-sm text-[color:var(--ivory)]/80",
						children: [
							/* @__PURE__ */ jsx("li", { children: RESTAURANT.address }),
							/* @__PURE__ */ jsx("li", { children: RESTAURANT.phone }),
							/* @__PURE__ */ jsx("li", { children: RESTAURANT.email })
						]
					})] }),
					/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
						className: "eyebrow !text-[color:var(--gold)]",
						children: "Navigasjon"
					}), /* @__PURE__ */ jsxs("ul", {
						className: "mt-5 space-y-2 text-sm",
						children: [
							/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
								to: "/meny",
								className: "hover:text-[color:var(--gold)]",
								children: "Meny"
							}) }),
							/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
								to: "/catering",
								className: "hover:text-[color:var(--gold)]",
								children: "Catering"
							}) }),
							/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
								to: "/om-oss",
								className: "hover:text-[color:var(--gold)]",
								children: "Om Oss"
							}) }),
							/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
								to: "/kontakt",
								className: "hover:text-[color:var(--gold)]",
								children: "Kontakt & Besøk"
							}) }),
							/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
								href: FOODORA_URL,
								target: "_blank",
								rel: "noreferrer",
								className: "hover:text-[color:var(--gold)]",
								children: "Bestill Online"
							}) })
						]
					})] })
				]
			}), /* @__PURE__ */ jsxs("div", {
				className: "mt-20 flex flex-col gap-2 border-t border-[color:var(--ivory)]/15 pt-8 text-xs uppercase tracking-[0.22em] text-[color:var(--ivory)]/50 sm:flex-row sm:items-center sm:justify-between",
				children: [/* @__PURE__ */ jsxs("span", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Bombay Bites"
				] }), /* @__PURE__ */ jsx("span", { children: "Laget med kjærlighet til Mumbai" })]
			})]
		})
	});
}
//#endregion
//#region src/components/foodora-sticky.tsx
function FoodoraSticky() {
	return /* @__PURE__ */ jsxs("a", {
		href: FOODORA_URL,
		target: "_blank",
		rel: "noreferrer",
		className: "fixed bottom-6 right-6 z-40 inline-flex items-center gap-3 rounded-full bg-[color:var(--navy)] px-6 py-4 text-[color:var(--ivory)] shadow-[var(--shadow-soft)] transition hover:bg-[color:var(--gold)] hover:text-[color:var(--charcoal)] lg:bottom-8 lg:right-8",
		"aria-label": "Bestill på Foodora",
		children: [/* @__PURE__ */ jsx(ShoppingBag, { size: 18 }), /* @__PURE__ */ jsx("span", {
			className: "text-[11px] uppercase tracking-[0.22em] font-medium",
			children: "Bestill på Foodora"
		})]
	});
}
//#endregion
//#region src/routes/__root.tsx
function NotFoundComponent() {
	return /* @__PURE__ */ jsx("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ jsx("p", {
					className: "eyebrow",
					children: "404"
				}),
				/* @__PURE__ */ jsx("h1", {
					className: "mt-4 text-5xl text-foreground",
					children: "Siden finnes ikke"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-4 text-sm text-muted-foreground",
					children: "Vi finner ikke siden du leter etter."
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-8",
					children: /* @__PURE__ */ jsx(Link, {
						to: "/",
						className: "btn-dark",
						children: "Tilbake til forsiden"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	useEffect(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ jsx("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ jsx("h1", {
					className: "text-3xl text-foreground",
					children: "Noe gikk galt"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Vennligst prøv igjen eller gå tilbake til forsiden."
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-6 flex flex-wrap justify-center gap-3",
					children: [/* @__PURE__ */ jsx("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "btn-primary",
						children: "Prøv igjen"
					}), /* @__PURE__ */ jsx("a", {
						href: "/",
						className: "btn-dark",
						children: "Forsiden"
					})]
				})
			]
		})
	});
}
var Route$6 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Bombay Bites — Smaken av Mumbai i Norge" },
			{
				name: "description",
				content: "Autentisk indisk kjøkken inspirert av Mumbais gater, smaker og varme. Spis hos oss, bestill på Foodora eller book catering."
			},
			{
				property: "og:title",
				content: "Bombay Bites — Smaken av Mumbai i Norge"
			},
			{
				property: "og:description",
				content: "Autentisk indisk kjøkken inspirert av Mumbais gater og varme gjestfrihet."
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
		links: [
			{
				rel: "stylesheet",
				href: styles_default
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
				href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Inter:wght@300;400;500;600&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ jsxs("html", {
		lang: "nb",
		children: [/* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }), /* @__PURE__ */ jsxs("body", { children: [children, /* @__PURE__ */ jsx(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$6.useRouteContext();
	return /* @__PURE__ */ jsxs(QueryClientProvider, {
		client: queryClient,
		children: [
			/* @__PURE__ */ jsx(SiteHeader, {}),
			/* @__PURE__ */ jsx("main", {
				className: "min-h-screen",
				children: /* @__PURE__ */ jsx(Outlet, {})
			}),
			/* @__PURE__ */ jsx(SiteFooter, {}),
			/* @__PURE__ */ jsx(FoodoraSticky, {})
		]
	});
}
//#endregion
//#region src/routes/sitemap[.]xml.ts
var BASE_URL = "";
var Route$5 = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: async () => {
	const xml = [
		"<?xml version=\"1.0\" encoding=\"UTF-8\"?>",
		"<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">",
		...[
			{
				path: "/",
				changefreq: "weekly",
				priority: "1.0"
			},
			{
				path: "/meny",
				changefreq: "weekly",
				priority: "0.9"
			},
			{
				path: "/catering",
				changefreq: "monthly",
				priority: "0.8"
			},
			{
				path: "/om-oss",
				changefreq: "monthly",
				priority: "0.6"
			},
			{
				path: "/kontakt",
				changefreq: "monthly",
				priority: "0.7"
			}
		].map((e) => [
			"  <url>",
			`    <loc>${BASE_URL}${e.path}</loc>`,
			e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
			e.priority ? `    <priority>${e.priority}</priority>` : null,
			"  </url>"
		].filter(Boolean).join("\n")),
		"</urlset>"
	].join("\n");
	return new Response(xml, { headers: {
		"Content-Type": "application/xml",
		"Cache-Control": "public, max-age=3600"
	} });
} } } });
//#endregion
//#region src/routes/om-oss.tsx
var $$splitComponentImporter$4 = () => import("./om-oss-BiMSTG3T.js");
var Route$4 = createFileRoute("/om-oss")({
	head: () => ({ meta: [
		{ title: "Om Oss — Bombay Bites" },
		{
			name: "description",
			content: "Bombay Bites ble skapt for å bringe smakene, varmen og atmosfæren fra Mumbai til Norge. Les historien vår."
		},
		{
			property: "og:title",
			content: "Om Oss — Bombay Bites"
		},
		{
			property: "og:description",
			content: "Fra hjertet av Mumbai til bordet i Norge."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
//#endregion
//#region src/routes/meny.tsx
var $$splitComponentImporter$3 = () => import("./meny-DxynzOds.js");
var Route$3 = createFileRoute("/meny")({
	head: () => ({ meta: [
		{ title: "Meny — Bombay Bites" },
		{
			name: "description",
			content: "Vår meny: Mumbai-gatekjøkken, tandoor-spesialiteter, signaturkarri, biryani, desserter og drikke."
		},
		{
			property: "og:title",
			content: "Meny — Bombay Bites"
		},
		{
			property: "og:description",
			content: "Utforsk våre signaturretter inspirert av Mumbai."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
//#endregion
//#region src/routes/kontakt.tsx
var $$splitComponentImporter$2 = () => import("./kontakt-D_rWs62n.js");
var Route$2 = createFileRoute("/kontakt")({
	head: () => ({ meta: [
		{ title: "Kontakt & Besøk — Bombay Bites" },
		{
			name: "description",
			content: "Besøk Bombay Bites i Bergen. Adresse, åpningstider, telefon og e-post – velkommen inn."
		},
		{
			property: "og:title",
			content: "Kontakt & Besøk — Bombay Bites"
		},
		{
			property: "og:description",
			content: "Kom og opplev Mumbai – midt i Bergen."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
//#endregion
//#region src/routes/catering.tsx
var $$splitComponentImporter$1 = () => import("./catering-CfuGVT9D.js");
var Route$1 = createFileRoute("/catering")({
	head: () => ({ meta: [
		{ title: "Catering — Bombay Bites" },
		{
			name: "description",
			content: "Premium indisk catering i Bergen. Autentiske smaker, fleksible menyer og ferskt tilberedt mat – levert pent anrettet til ditt arrangement."
		},
		{
			property: "og:title",
			content: "Catering — Bombay Bites"
		},
		{
			property: "og:description",
			content: "Vi tar oss av smaken – du tar deg av samværet."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
//#endregion
//#region src/routes/index.tsx
var $$splitComponentImporter = () => import("./routes-Ye-_el3Z.js");
var Route = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Bombay Bites — Smaken og sjelen av Mumbai i Bergen" },
		{
			name: "description",
			content: "Premium indisk restaurant og bar i Bergen. Autentiske Mumbai-smaker, tandoor, signaturcurryer og varm gjestfrihet. Bestill online."
		},
		{
			property: "og:title",
			content: "Bombay Bites — Indisk restaurant og bar i Bergen"
		},
		{
			property: "og:description",
			content: "Opplev smakene og sjelen til Mumbai – midt i Bergen."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
//#region src/routeTree.gen.ts
var SitemapDotxmlRoute = Route$5.update({
	id: "/sitemap.xml",
	path: "/sitemap.xml",
	getParentRoute: () => Route$6
});
var OmOssRoute = Route$4.update({
	id: "/om-oss",
	path: "/om-oss",
	getParentRoute: () => Route$6
});
var MenyRoute = Route$3.update({
	id: "/meny",
	path: "/meny",
	getParentRoute: () => Route$6
});
var KontaktRoute = Route$2.update({
	id: "/kontakt",
	path: "/kontakt",
	getParentRoute: () => Route$6
});
var CateringRoute = Route$1.update({
	id: "/catering",
	path: "/catering",
	getParentRoute: () => Route$6
});
var rootRouteChildren = {
	IndexRoute: Route.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$6
	}),
	CateringRoute,
	KontaktRoute,
	MenyRoute,
	OmOssRoute,
	SitemapDotxmlRoute
};
var routeTree = Route$6._addFileChildren(rootRouteChildren)._addFileTypes();
//#endregion
//#region src/router.tsx
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
