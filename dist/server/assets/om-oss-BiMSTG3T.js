import { t as Section } from "./section-DwqSH6d3.js";
import { t as interior_warm_default } from "./interior-warm-C7APq-_I.js";
import { n as signature_drink_default, t as plating_detail_default } from "./plating-detail-AmMaT-6T.js";
import { Link } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/om-oss.tsx?tsr-split=component
function OmOssPage() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx("header", {
			className: "bg-[color:var(--navy)] text-[color:var(--ivory)] pt-40 pb-24 lg:pt-48 lg:pb-32",
			children: /* @__PURE__ */ jsxs("div", {
				className: "mx-auto max-w-7xl px-6 lg:px-10",
				children: [/* @__PURE__ */ jsx("p", {
					className: "eyebrow !text-[color:var(--gold)]",
					children: "Om Oss"
				}), /* @__PURE__ */ jsxs("h1", {
					className: "mt-6 max-w-4xl font-display text-6xl leading-[1.05] sm:text-7xl lg:text-[7rem]",
					children: [
						"Fra hjertet av ",
						/* @__PURE__ */ jsx("span", {
							className: "italic text-[color:var(--gold)]",
							children: "Mumbai"
						}),
						" til bordet i Norge"
					]
				})]
			})
		}),
		/* @__PURE__ */ jsx(Section, { children: /* @__PURE__ */ jsxs("div", {
			className: "grid gap-16 lg:grid-cols-12 lg:items-start",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "lg:col-span-5",
				children: [
					/* @__PURE__ */ jsx("p", {
						className: "eyebrow",
						children: "Vår filosofi"
					}),
					/* @__PURE__ */ jsx("span", { className: "gold-divider mt-6" }),
					/* @__PURE__ */ jsx("p", {
						className: "mt-8 text-base leading-relaxed text-muted-foreground",
						children: "Vi tror på ekte indisk gjestfrihet – der maten er minnerik og bordet er fylt av latter og samvær."
					})
				]
			}), /* @__PURE__ */ jsxs("div", {
				className: "lg:col-span-7 space-y-7 text-lg leading-relaxed text-foreground/85",
				children: [
					/* @__PURE__ */ jsx("p", { children: "Bombay Bites ble skapt med et enkelt mål – å bringe smakene, varmen og atmosfæren fra Mumbai til Norge." }),
					/* @__PURE__ */ jsx("p", { children: "Inspirert av Indias rike matkultur og Mumbais levende energi kombinerer vi autentiske indiske klassikere, Mumbai-favoritter og moderne smaker, tilberedt med nøye utvalgte råvarer og kjærlighet til god mat." }),
					/* @__PURE__ */ jsx("p", { children: "Hos Bombay Bites handler det om mer enn bare mat. Det handler om å samles med familie og venner, dele gode opplevelser og nyte ekte indisk gjestfrihet." }),
					/* @__PURE__ */ jsx("p", {
						className: "font-display text-2xl italic text-[color:var(--navy)]",
						children: "Fra hjertet av Mumbai til bordet i Norge."
					})
				]
			})]
		}) }),
		/* @__PURE__ */ jsx("section", {
			className: "bg-[color:var(--sand)]",
			children: /* @__PURE__ */ jsxs("div", {
				className: "mx-auto grid max-w-7xl gap-6 px-6 py-24 sm:grid-cols-3 lg:px-10 lg:py-32",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "aspect-[3/4] overflow-hidden",
						children: /* @__PURE__ */ jsx("img", {
							src: signature_drink_default,
							alt: "",
							className: "h-full w-full object-cover",
							loading: "lazy"
						})
					}),
					/* @__PURE__ */ jsx("div", {
						className: "aspect-[3/4] overflow-hidden sm:mt-12",
						children: /* @__PURE__ */ jsx("img", {
							src: plating_detail_default,
							alt: "",
							className: "h-full w-full object-cover",
							loading: "lazy"
						})
					}),
					/* @__PURE__ */ jsx("div", {
						className: "aspect-[3/4] overflow-hidden",
						children: /* @__PURE__ */ jsx("img", {
							src: interior_warm_default,
							alt: "",
							className: "h-full w-full object-cover",
							loading: "lazy"
						})
					})
				]
			})
		}),
		/* @__PURE__ */ jsxs(Section, {
			align: "center",
			className: "text-center",
			children: [
				/* @__PURE__ */ jsxs("h2", {
					className: "font-display text-5xl leading-[1.05] lg:text-6xl",
					children: ["Kom og ", /* @__PURE__ */ jsx("span", {
						className: "italic text-[color:var(--gold)]",
						children: "besøk oss"
					})]
				}),
				/* @__PURE__ */ jsx("span", { className: "gold-divider mx-auto mt-8" }),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-12 flex justify-center gap-4 flex-wrap",
					children: [/* @__PURE__ */ jsx(Link, {
						to: "/kontakt",
						className: "btn-primary",
						children: "Kontakt & Besøk"
					}), /* @__PURE__ */ jsx(Link, {
						to: "/meny",
						className: "btn-dark",
						children: "Se Menyen"
					})]
				})
			]
		})
	] });
}
//#endregion
export { OmOssPage as component };
