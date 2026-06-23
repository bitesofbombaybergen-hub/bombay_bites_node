import { t as FOODORA_URL } from "./constants-C0FLeFBP.js";
import { t as bombay_bites_logo_default } from "./bombay-bites-logo-BsUH7VSc.js";
import { t as Section } from "./section-DwqSH6d3.js";
import { t as interior_warm_default } from "./interior-warm-C7APq-_I.js";
import { n as signature_drink_default, t as plating_detail_default } from "./plating-detail-AmMaT-6T.js";
import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region src/assets/hero-mumbai.jpg
var hero_mumbai_default = "/assets/hero-mumbai-CHKklnqo.jpg";
//#endregion
//#region src/assets/mumbai-gateway.jpg
var mumbai_gateway_default = "/assets/mumbai-gateway-D0MwlyKH.jpg";
//#endregion
//#region src/assets/mumbai-skyline.jpg
var mumbai_skyline_default = "/assets/mumbai-skyline-FUAHzdR_.jpg";
//#endregion
//#region src/assets/dish-butter-chicken.jpg
var dish_butter_chicken_default = "/assets/dish-butter-chicken-BGren5Mf.jpg";
//#endregion
//#region src/assets/dish-malai-tikka.jpg
var dish_malai_tikka_default = "/assets/dish-malai-tikka-CuEyHJZk.jpg";
//#endregion
//#region src/assets/dish-biryani.jpg
var dish_biryani_default = "/assets/dish-biryani-Cpu6I78C.jpg";
//#endregion
//#region src/assets/bombay-heritage.jpg
var bombay_heritage_default = "/assets/bombay-heritage-B9NTljd_.jpg";
//#endregion
//#region src/routes/index.tsx?tsr-split=component
var logo = { url: bombay_bites_logo_default };
var heroSlides = [
	{
		src: hero_mumbai_default,
		alt: "Marine Drive ved skumring – Mumbai"
	},
	{
		src: mumbai_skyline_default,
		alt: "Mumbai skyline om kvelden"
	},
	{
		src: dish_malai_tikka_default,
		alt: "Premium tandoor-rett"
	},
	{
		src: signature_drink_default,
		alt: "Signaturdrink ved baren"
	}
];
var galleryImages = [
	{
		src: dish_malai_tikka_default,
		alt: "Tandoor-rett med varm krydderglød",
		span: "lg:row-span-2 aspect-[4/5]"
	},
	{
		src: signature_drink_default,
		alt: "Signaturdrink ved baren",
		span: "aspect-[4/5]"
	},
	{
		src: interior_warm_default,
		alt: "Varm restaurantatmosfære",
		span: "aspect-[4/3]"
	},
	{
		src: plating_detail_default,
		alt: "Elegant anretning og detaljer",
		span: "aspect-[4/3]"
	},
	{
		src: dish_butter_chicken_default,
		alt: "Signaturcurry servert ved bordet",
		span: "aspect-[4/5]"
	},
	{
		src: dish_biryani_default,
		alt: "Dum biryani – delt over bordet",
		span: "lg:row-span-2 aspect-[4/5]"
	}
];
var mumbaiHighlights = [
	"Gateway of India",
	"Vintage Bombay-arkitektur",
	"Indisk gjestfrihet",
	"Familiemiddager",
	"Restaurant & Bar",
	"Tandoor & signaturcurryer"
];
function HeroCarousel() {
	const [i, setI] = useState(0);
	useEffect(() => {
		const t = setInterval(() => setI((v) => (v + 1) % heroSlides.length), 4500);
		return () => clearInterval(t);
	}, []);
	return /* @__PURE__ */ jsx(Fragment, { children: heroSlides.map((s, idx) => /* @__PURE__ */ jsx("img", {
		src: s.src,
		alt: s.alt,
		className: `absolute inset-0 h-full w-full object-cover brightness-[0.78] transition-opacity duration-[1600ms] ease-in-out ${idx === i ? "opacity-100" : "opacity-0"}`,
		loading: idx === 0 ? "eager" : "lazy"
	}, s.src)) });
}
function Home() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsxs("section", {
			className: "relative h-[100svh] min-h-[680px] w-full overflow-hidden",
			children: [
				/* @__PURE__ */ jsx(HeroCarousel, {}),
				/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-[color:var(--navy-deep)]/85 via-[color:var(--navy-deep)]/70 to-[color:var(--charcoal)]/95" }),
				/* @__PURE__ */ jsxs("div", {
					className: "relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center lg:px-10",
					children: [
						/* @__PURE__ */ jsx("img", {
							src: logo.url,
							alt: "Bombay Bites",
							className: "h-20 w-auto sm:h-24 lg:h-[6.5rem]"
						}),
						/* @__PURE__ */ jsx("span", { className: "gold-divider mt-14" }),
						/* @__PURE__ */ jsxs("h1", {
							className: "mt-12 max-w-5xl font-display text-5xl leading-[1.02] text-[color:var(--ivory)] sm:text-7xl lg:text-[7.5rem]",
							children: ["Opplev smakene og ", /* @__PURE__ */ jsx("span", {
								className: "italic text-[color:var(--gold)]",
								children: "sjelen til Mumbai"
							})]
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-10 max-w-2xl text-lg font-light leading-relaxed text-[color:var(--ivory)]/90 sm:text-xl",
							children: "Indisk restaurant og bar i hjertet av Bergen – varme smaker, ekte gjestfrihet."
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-14 flex flex-wrap justify-center gap-5",
							children: [/* @__PURE__ */ jsx("a", {
								href: FOODORA_URL,
								target: "_blank",
								rel: "noreferrer",
								className: "btn-primary !bg-[color:var(--gold)] !text-[color:var(--charcoal)] !border-[color:var(--gold)] hover:!bg-[color:var(--ivory)] hover:!border-[color:var(--ivory)]",
								children: "Bestill Online"
							}), /* @__PURE__ */ jsx(Link, {
								to: "/meny",
								className: "btn-ghost",
								children: "Se Menyen"
							})]
						})
					]
				})
			]
		}),
		/* @__PURE__ */ jsx(Section, {
			eyebrow: "Atmosfære",
			title: /* @__PURE__ */ jsxs(Fragment, { children: ["Smaksbilder fra ", /* @__PURE__ */ jsx("span", {
				className: "italic text-[color:var(--gold)]",
				children: "kjøkkenet"
			})] }),
			children: /* @__PURE__ */ jsx("div", {
				className: "mt-16 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6",
				children: galleryImages.map((g, idx) => /* @__PURE__ */ jsx("div", {
					className: `relative overflow-hidden group ${g.span}`,
					children: /* @__PURE__ */ jsx("img", {
						src: g.src,
						alt: g.alt,
						loading: "lazy",
						className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
					})
				}, idx))
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "relative bg-[color:var(--navy-deep)] text-[color:var(--ivory)] overflow-hidden",
			children: /* @__PURE__ */ jsx("div", {
				className: "mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32",
				children: /* @__PURE__ */ jsxs("div", {
					className: "grid gap-16 lg:grid-cols-12 lg:items-center lg:gap-20",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "lg:col-span-6",
						children: [
							/* @__PURE__ */ jsx("p", {
								className: "eyebrow !text-[color:var(--gold)]",
								children: "Opplev Mumbai hos Bombay Bites"
							}),
							/* @__PURE__ */ jsxs("h2", {
								className: "mt-6 font-display text-5xl leading-[1.04] lg:text-6xl",
								children: ["Byens sjel, ", /* @__PURE__ */ jsx("span", {
									className: "italic text-[color:var(--gold)]",
									children: "på tallerkenen"
								})]
							}),
							/* @__PURE__ */ jsx("span", { className: "gold-divider mt-8" }),
							/* @__PURE__ */ jsx("p", {
								className: "mt-8 text-lg leading-[1.8] text-[color:var(--ivory)]/85",
								children: "Inspirert av Gateway of India, vintage Bombay og den varme indiske gjestfriheten – vi bringer Mumbai til Bergen gjennom mat, atmosfære og samvær."
							}),
							/* @__PURE__ */ jsx("ul", {
								className: "mt-10 grid gap-3 text-base text-[color:var(--ivory)]/85 sm:grid-cols-2",
								children: mumbaiHighlights.map((t) => /* @__PURE__ */ jsxs("li", {
									className: "flex items-start gap-3 border-t border-[color:var(--gold)]/30 pt-4",
									children: [/* @__PURE__ */ jsx("span", { className: "mt-3 h-px w-5 shrink-0 bg-[color:var(--gold)]" }), /* @__PURE__ */ jsx("span", { children: t })]
								}, t))
							})
						]
					}), /* @__PURE__ */ jsxs("div", {
						className: "lg:col-span-6 grid grid-cols-2 gap-4",
						children: [/* @__PURE__ */ jsx("div", {
							className: "relative aspect-[3/4] overflow-hidden",
							children: /* @__PURE__ */ jsx("img", {
								src: mumbai_gateway_default,
								alt: "Gateway of India",
								loading: "lazy",
								className: "h-full w-full object-cover"
							})
						}), /* @__PURE__ */ jsx("div", {
							className: "relative aspect-[3/4] overflow-hidden mt-10",
							children: /* @__PURE__ */ jsx("img", {
								src: bombay_heritage_default,
								alt: "Art Deco Bombay-arkitektur ved gylden time",
								loading: "lazy",
								className: "h-full w-full object-cover"
							})
						})]
					})]
				})
			})
		})
	] });
}
//#endregion
export { Home as component };
