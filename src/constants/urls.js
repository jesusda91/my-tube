export const urlGetVideos = page => {
	console.log("urlGetVideos",page);
	if (page <= 1) return "https://run.mocky.io/v3/7fdcfaf5-10cc-410c-b965-b7d92f635b40"
	if (page <= 2) return "https://run.mocky.io/v3/735ee3fb-24ef-4dab-847b-71aab3ec29db"
	if (page <= 3) return "https://run.mocky.io/v3/cfeb55de-a4b1-4b09-9f4d-89de806b137a"
}

export const urlGetVideoDetail = title => {
	if (title === "Mother Carey's Chickens") return "https://run.mocky.io/v3/709bd343-bc56-483e-82d6-8901332efc4c"
	if (title === "Last Summer") return "https://run.mocky.io/v3/ddb39298-46c6-4d4f-8f7a-6855bdf4c69d"
	if (title === "Robin and the 7 Hoods") return "https://run.mocky.io/v3/ab3f64a0-1c1d-4f2c-b74f-1f0643d501cc"
	return "https://run.mocky.io/v3/709bd343-bc56-483e-82d6-8901332efc4c"
}
