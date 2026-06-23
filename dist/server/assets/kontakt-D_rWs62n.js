import { n as RESTAURANT, t as FOODORA_URL } from "./constants-C0FLeFBP.js";
import { t as Section } from "./section-DwqSH6d3.js";
import { t as interior_warm_default } from "./interior-warm-C7APq-_I.js";
import { Link } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
//#region src/routes/kontakt.tsx?tsr-split=component
function KontaktPage() {
	const mapsQuery = encodeURIComponent(RESTAURANT.address);
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs("header", {
		className: "relative h-[60vh] min-h-[480px] overflow-hidden",
		children: [
			/* @__PURE__ */ jsx("img", {
				src: interior_warm_default,
				alt: "Bombay Bites interiør",
				className: "absolute inset-0 h-full w-full object-cover brightness-[0.78]"
			}),
			/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-[color:var(--navy-deep)]/75 via-[color:var(--navy-deep)]/65 to-[color:var(--charcoal)]/95" }),
			/* @__PURE__ */ jsxs("div", {
				className: "relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-20 pt-40 lg:px-10",
				children: [/* @__PURE__ */ jsx("p", {
					className: "eyebrow !text-[color:var(--gold)]",
					children: "Kontakt & Besøk"
				}), /* @__PURE__ */ jsxs("h1", {
					className: "mt-6 max-w-5xl font-display text-6xl leading-[1.02] text-[color:var(--ivory)] sm:text-7xl lg:text-[6.5rem]",
					children: ["Kom innom – ", /* @__PURE__ */ jsx("span", {
						className: "italic text-[color:var(--gold)]",
						children: "vi venter på deg"
					})]
				})]
			})
		]
	}), /* @__PURE__ */ jsx(Section, { children: /* @__PURE__ */ jsxs("div", {
		className: "grid gap-16 lg:grid-cols-12 lg:items-start",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "lg:col-span-5 space-y-12",
			children: [
				/* @__PURE__ */ jsxs("div", { children: [
					/* @__PURE__ */ jsx("p", {
						className: "eyebrow",
						children: "Velkommen"
					}),
					/* @__PURE__ */ jsx("span", { className: "gold-divider mt-6" }),
					/* @__PURE__ */ jsx("p", {
						className: "mt-8 text-lg leading-[1.8] text-foreground/80",
						children: "Stikk innom for en lunsj, en lang middag eller et glass i baren – du er alltid velkommen hos oss."
					})
				] }),
				/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
					className: "eyebrow",
					children: "Besøksadresse"
				}), /* @__PURE__ */ jsxs("div", {
					className: "mt-6 space-y-5 text-base text-foreground/85",
					children: [
						/* @__PURE__ */ jsxs("p", {
							className: "flex items-start gap-4",
							children: [
								/* @__PURE__ */ jsx(MapPin, {
									size: 18,
									className: "mt-1 text-[color:var(--gold)] shrink-0"
								}),
								" ",
								RESTAURANT.address
							]
						}),
						/* @__PURE__ */ jsxs("p", {
							className: "flex items-start gap-4",
							children: [
								/* @__PURE__ */ jsx(Phone, {
									size: 18,
									className: "mt-1 text-[color:var(--gold)] shrink-0"
								}),
								" ",
								/* @__PURE__ */ jsx("a", {
									href: `tel:${RESTAURANT.phone.replace(/\s/g, "")}`,
									className: "hover:text-[color:var(--navy)]",
									children: RESTAURANT.phone
								})
							]
						}),
						/* @__PURE__ */ jsxs("p", {
							className: "flex items-start gap-4",
							children: [
								/* @__PURE__ */ jsx(Mail, {
									size: 18,
									className: "mt-1 text-[color:var(--gold)] shrink-0"
								}),
								" ",
								/* @__PURE__ */ jsx("a", {
									href: `mailto:${RESTAURANT.email}`,
									className: "hover:text-[color:var(--navy)]",
									children: RESTAURANT.email
								})
							]
						})
					]
				})] }),
				/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
					className: "eyebrow",
					children: "Åpningstider"
				}), /* @__PURE__ */ jsx("ul", {
					className: "mt-6 space-y-3 text-base text-foreground/85",
					children: RESTAURANT.hours.map((h) => /* @__PURE__ */ jsxs("li", {
						className: "grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-6 border-b border-border pb-3",
						children: [/* @__PURE__ */ jsxs("span", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ jsx(Clock, {
								size: 16,
								className: "text-[color:var(--gold)]"
							}), h.d]
						}), /* @__PURE__ */ jsx("span", {
							className: "font-display text-lg text-[color:var(--navy)]",
							children: h.t
						})]
					}, h.d))
				})] }),
				/* @__PURE__ */ jsxs("div", {
					className: "flex flex-wrap gap-4",
					children: [/* @__PURE__ */ jsx("a", {
						href: FOODORA_URL,
						target: "_blank",
						rel: "noreferrer",
						className: "btn-primary",
						children: "Bestill Online"
					}), /* @__PURE__ */ jsx(Link, {
						to: "/meny",
						className: "btn-ghost !text-foreground !border-foreground/30",
						children: "Se Menyen"
					})]
				})
			]
		}), /* @__PURE__ */ jsx("div", {
			className: "lg:col-span-7",
			children: /* @__PURE__ */ jsx("div", {
				className: "aspect-[4/3] w-full overflow-hidden bg-[color:var(--sand)] border border-border",
				children: /* @__PURE__ */ jsx("iframe", {
					title: "Kart",
					src: `https://www.google.com/maps?q=${mapsQuery}&output=embed`,
					className: "h-full w-full",
					loading: "lazy",
					referrerPolicy: "no-referrer-when-downgrade"
				})
			})
		})]
	}) })] });
}
//#endregion
export { KontaktPage as component };
