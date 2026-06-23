import { jsx, jsxs } from "react/jsx-runtime";
//#region src/components/section.tsx
function Section({ eyebrow, title, intro, children, align = "left", className = "" }) {
	return /* @__PURE__ */ jsxs("section", {
		className: `mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32 ${className}`,
		children: [(eyebrow || title || intro) && /* @__PURE__ */ jsxs("div", {
			className: `max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`,
			children: [
				eyebrow && /* @__PURE__ */ jsx("p", {
					className: "eyebrow",
					children: eyebrow
				}),
				title && /* @__PURE__ */ jsx("h2", {
					className: "mt-5 font-display text-4xl leading-[1.1] text-foreground sm:text-5xl lg:text-6xl",
					children: title
				}),
				(eyebrow || title) && /* @__PURE__ */ jsx("span", { className: `gold-divider mt-8 ${align === "center" ? "mx-auto" : ""}` }),
				intro && /* @__PURE__ */ jsx("p", {
					className: "mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground",
					children: intro
				})
			]
		}), children]
	});
}
//#endregion
export { Section as t };
