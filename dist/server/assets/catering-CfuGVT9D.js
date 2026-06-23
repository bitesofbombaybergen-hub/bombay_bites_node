import { t as Section } from "./section-DwqSH6d3.js";
import { Link } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region src/assets/catering.jpg
var catering_default = "/assets/catering-B3DgkHTV.jpg";
//#endregion
//#region src/routes/catering.tsx?tsr-split=component
function CateringPage() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs("header", {
		className: "relative h-[80vh] min-h-[620px] overflow-hidden",
		children: [
			/* @__PURE__ */ jsx("img", {
				src: catering_default,
				alt: "Bombay Bites catering",
				className: "absolute inset-0 h-full w-full object-cover brightness-[0.78]"
			}),
			/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-[color:var(--navy-deep)]/70 via-[color:var(--navy-deep)]/60 to-[color:var(--charcoal)]/95" }),
			/* @__PURE__ */ jsxs("div", {
				className: "relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-24 pt-40 lg:px-10",
				children: [
					/* @__PURE__ */ jsx("p", {
						className: "eyebrow !text-[color:var(--gold)]",
						children: "Catering"
					}),
					/* @__PURE__ */ jsxs("h1", {
						className: "mt-6 max-w-5xl font-display text-6xl leading-[1.02] text-[color:var(--ivory)] sm:text-7xl lg:text-[7.5rem]",
						children: ["Vi tar oss av smaken – ", /* @__PURE__ */ jsx("span", {
							className: "italic text-[color:var(--gold)]",
							children: "du tar deg av samværet"
						})]
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-10 max-w-2xl text-lg leading-[1.7] text-[color:var(--ivory)]/85",
						children: "Rause delingsfat, varme krydder og indisk gjestfrihet – levert dit du ønsker."
					})
				]
			})
		]
	}), /* @__PURE__ */ jsxs(Section, { children: [/* @__PURE__ */ jsxs("div", {
		className: "grid gap-16 lg:grid-cols-12 lg:items-start",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "lg:col-span-5",
			children: [
				/* @__PURE__ */ jsx("p", {
					className: "eyebrow",
					children: "Catering hos Bombay Bites"
				}),
				/* @__PURE__ */ jsxs("h2", {
					className: "mt-6 font-display text-5xl leading-[1.05] lg:text-6xl",
					children: ["Autentisk indisk ", /* @__PURE__ */ jsx("span", {
						className: "italic text-[color:var(--gold)]",
						children: "catering"
					})]
				}),
				/* @__PURE__ */ jsx("span", { className: "gold-divider mt-10" })
			]
		}), /* @__PURE__ */ jsxs("div", {
			className: "lg:col-span-7 space-y-7 text-lg leading-[1.8] text-foreground/80",
			children: [/* @__PURE__ */ jsx("p", { children: "Vi tilbyr autentisk indisk catering for enhver anledning – fra intime middager hjemme til store feiringer. Menyen settes sammen sammen med deg, med rom for vegetar, vegan og allergivennlige ønsker." }), /* @__PURE__ */ jsx("p", { children: "Alt tilberedes ferskt på vårt eget kjøkken og leveres pent anrettet på rause delingsfat, klare til å settes midt på bordet. Send oss en kort melding om anledning, antall gjester og dato – så svarer vi raskt og personlig." })]
		})]
	}), /* @__PURE__ */ jsx("div", {
		className: "mt-20 text-center",
		children: /* @__PURE__ */ jsx(Link, {
			to: "/kontakt",
			className: "btn-primary",
			children: "Kontakt Oss"
		})
	})] })] });
}
//#endregion
export { CateringPage as component };
