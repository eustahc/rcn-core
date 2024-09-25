const axios = require("axios");

export class Hyperion {
	async ping() {
		const websites = ["https://realcognita.com", "https://atlas-precast.com"];
		const results = [];

		for (const site of websites) {
			try {
				const response = await axios.get(site);
				results.push({
					site,
					status: "up",
					statusCode: response.status,
				});
			} catch (error: any) {
				results.push({
					site,
					status: "down",
					error: error.message,
				});
			}
		}

		return {
			timestamp: new Date(),
			results,
		};
	}
}
