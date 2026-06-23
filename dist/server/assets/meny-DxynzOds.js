import { t as FOODORA_URL } from "./constants-C0FLeFBP.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/meny.tsx?tsr-split=component
var sections = [
	{
		eyebrow: "Mumbais gater",
		title: "Street Food & Chaat",
		items: [
			{
				name: "Vada Pav",
				desc: "Sprø potetbolle, grønn chutney, sesambolle.",
				price: "95"
			},
			{
				name: "Bombay Sandwich",
				desc: "Klassisk grillet sandwich med koriander-chutney.",
				price: "115"
			},
			{
				name: "Sev Puri",
				desc: "Sprø puri-toppet med poteter, chutney og sev.",
				price: "125"
			},
			{
				name: "Chinese Bhel",
				desc: "Indo-kinesisk gateklassiker, sprø og krydret.",
				price: "135"
			}
		]
	},
	{
		eyebrow: "Fra åpen ild",
		title: "Tandoor & Grill",
		items: [
			{
				name: "Malai Tikka",
				desc: "Mør kylling i kremet yoghurt- og ostemarinade.",
				price: "185"
			},
			{
				name: "Chicken Tikka",
				desc: "Krydret yoghurt-marinert kylling fra tandoor.",
				price: "175"
			},
			{
				name: "Grilled Prawns",
				desc: "Tigerreker med karwari-krydder.",
				price: "245"
			},
			{
				name: "Salmon Tikka",
				desc: "Norsk laks, ajwain og sennepsmarinade.",
				price: "235"
			},
			{
				name: "Lamb Chop Glaze",
				desc: "Mørbradede lammekoteletter, gull-glaze.",
				price: "295"
			}
		]
	},
	{
		eyebrow: "Signaturkarri",
		title: "Signature Curries",
		items: [
			{
				name: "Butter Chicken",
				desc: "Silkemyk tomat- og smørsaus.",
				price: "215"
			},
			{
				name: "Rogan Josh",
				desc: "Lammegryte fra Kashmir med varme krydder.",
				price: "245"
			},
			{
				name: "Prawn Chettinad",
				desc: "Sør-indisk reke-karri med kokos og pepper.",
				price: "265"
			},
			{
				name: "Navratan Korma",
				desc: "Ni grønnsaker i kremet cashew-saus.",
				price: "195"
			},
			{
				name: "Methi Chaman",
				desc: "Paneer i bukkehornkløver- og spinatsaus.",
				price: "205"
			},
			{
				name: "Dal Makhani",
				desc: "Sorte linser, simret over natten.",
				price: "175"
			}
		]
	},
	{
		eyebrow: "Dampet i kobber",
		title: "Biryani",
		items: [{
			name: "Dum Biryani",
			desc: "Aromatisk basmati, safran og krydder, forseglet og dampet.",
			price: "235"
		}]
	},
	{
		eyebrow: "Tilbehør",
		title: "Accompaniments",
		items: [{
			name: "Burani Raita",
			desc: "Yoghurt, hvitløk og spisskum.",
			price: "55"
		}]
	},
	{
		eyebrow: "Søtt finale",
		title: "Desserter",
		items: [{
			name: "Malpua Rabadi",
			desc: "Sirupsdyppet pannekake med safran-rabri.",
			price: "115"
		}, {
			name: "Kulfi",
			desc: "Hjemmelaget indisk iskrem med kardemomme og pistasj.",
			price: "95"
		}]
	},
	{
		eyebrow: "Drikke",
		title: "Drinks",
		items: [
			{
				name: "Cutting Chai",
				desc: "Mumbais ikoniske melkesterke krydder-te.",
				price: "55"
			},
			{
				name: "Bombay Sunrise",
				desc: "Husets signaturmocktail – mango, lime, tamarind.",
				price: "115"
			},
			{
				name: "Signature Mocktails",
				desc: "Spør servitør om dagens kreasjon.",
				price: "115"
			}
		]
	}
];
function MenyPage() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("header", {
		className: "bg-[color:var(--navy)] text-[color:var(--ivory)] pt-40 pb-24 lg:pt-48 lg:pb-32",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl px-6 lg:px-10",
			children: [
				/* @__PURE__ */ jsx("p", {
					className: "eyebrow !text-[color:var(--gold)]",
					children: "Vår Meny"
				}),
				/* @__PURE__ */ jsxs("h1", {
					className: "mt-6 font-display text-6xl leading-[1.05] sm:text-7xl lg:text-[7rem]",
					children: ["En reise gjennom ", /* @__PURE__ */ jsx("span", {
						className: "italic text-[color:var(--gold)]",
						children: "Mumbai"
					})]
				}),
				/* @__PURE__ */ jsx("span", { className: "gold-divider mt-10" }),
				/* @__PURE__ */ jsx("p", {
					className: "mt-8 max-w-2xl text-base leading-relaxed text-[color:var(--ivory)]/75",
					children: "Alt fra Mumbais yrende gater til kjøkkenets sakte simrede klassikere. Råvarer i sesong, krydder ristet for hånd, og oppskrifter videreført gjennom generasjoner."
				})
			]
		})
	}), /* @__PURE__ */ jsxs("div", {
		className: "mx-auto max-w-5xl px-6 py-24 lg:py-32 lg:px-10",
		children: [sections.map((sec, i) => /* @__PURE__ */ jsxs("section", {
			className: i > 0 ? "mt-24" : "",
			children: [
				/* @__PURE__ */ jsx("p", {
					className: "eyebrow",
					children: sec.eyebrow
				}),
				/* @__PURE__ */ jsx("h2", {
					className: "mt-4 font-display text-4xl sm:text-5xl",
					children: sec.title
				}),
				/* @__PURE__ */ jsx("span", { className: "gold-divider mt-6" }),
				/* @__PURE__ */ jsx("ul", {
					className: "mt-12 divide-y divide-border",
					children: sec.items.map((it) => /* @__PURE__ */ jsxs("li", {
						className: "grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-6 py-6",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ jsx("h3", {
								className: "font-display text-2xl text-foreground",
								children: it.name
							}), it.desc && /* @__PURE__ */ jsx("p", {
								className: "mt-2 text-sm leading-relaxed text-muted-foreground",
								children: it.desc
							})]
						}), /* @__PURE__ */ jsxs("div", {
							className: "shrink-0 font-display text-xl text-[color:var(--navy)]",
							children: ["kr ", it.price]
						})]
					}, it.name))
				})
			]
		}, sec.title)), /* @__PURE__ */ jsxs("div", {
			className: "mt-24 flex flex-col items-center text-center",
			children: [
				/* @__PURE__ */ jsx("p", {
					className: "eyebrow",
					children: "Bestill Online"
				}),
				/* @__PURE__ */ jsx("h2", {
					className: "mt-4 font-display text-4xl sm:text-5xl",
					children: "Få favorittene dine hjem"
				}),
				/* @__PURE__ */ jsx("span", { className: "gold-divider mt-6 mx-auto" }),
				/* @__PURE__ */ jsx("a", {
					href: FOODORA_URL,
					target: "_blank",
					rel: "noreferrer",
					className: "btn-primary mt-10",
					children: "Bestill på Foodora"
				})
			]
		})]
	})] });
}
//#endregion
export { MenyPage as component };
