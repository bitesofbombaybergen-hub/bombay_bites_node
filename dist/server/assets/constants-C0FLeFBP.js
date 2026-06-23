//#region src/lib/constants.ts
var FOODORA_URL = "https://www.foodora.no";
var RESTAURANT = {
	name: "Bombay Bites",
	tagline: "Indisk Restaurant og Bar — Smaken av India",
	phone: "+47 55 00 00 00",
	email: "hei@bombaybites.no",
	address: "Bergen Sentrum, 5003 Bergen",
	hours: [
		{
			d: "Mandag – Torsdag",
			t: "15:00 – 22:00"
		},
		{
			d: "Fredag – Lørdag",
			t: "13:00 – 23:00"
		},
		{
			d: "Søndag",
			t: "14:00 – 21:00"
		}
	]
};
//#endregion
export { RESTAURANT as n, FOODORA_URL as t };
