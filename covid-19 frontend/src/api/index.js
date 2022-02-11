import axios from "axios";

export const fetchDailyData = async () => {
	try {
		const { data } = await axios.get(
			`${"https://covid19.mathdro.id/api"}/daily`
		);
		const modifiedData = data.map((dailyData) => ({
			confirmed: dailyData.confirmed.total,
			deaths: dailyData.deaths.total,
			date: dailyData.reportDate,
		}));
		return modifiedData;
	} catch (e) {
		console.log(e);
	}
};

export const fetchTotal = async (country) => {
	try {
		var country_url = `http://localhost:5000/api/v1/stat/country?name=${country}`;
		var global_url = "http://localhost:5000/api/v1/stat/total";

		if (country) {
			var url = country_url;
			if (country === "Global") {
				url = global_url;
			}
		} else {
			url = global_url;
		}

		const {
			data: { body },
		} = await axios.get(url);
		const modifiedTotalData = body.map((totalData) => ({
			confirmed: totalData.confirmed,
			recovered: totalData.recovered,
			critical: totalData.critical,
			deaths: totalData.deaths,
			lastUpdate: totalData.lastUpdate,
		}));
		return modifiedTotalData[0];
	} catch (e) {
		console.log(e);
	}
};

export const fetchDailyUpdate = async (country) => {
	try {
		var url = `http://localhost:5000/api/v1/stat/daily?country=${country}`;

		const {
			data: {
				body: { response },
			},
		} = await axios.get(url);
		const modifiedDailyUpdate = response.map((singleDailyUpdate) => ({
			cases: singleDailyUpdate.cases,
			deaths: singleDailyUpdate.deaths,
		}));

		return modifiedDailyUpdate[0];
	} catch (e) {
		return;
	}
};

export const fetchAllCountries = async () => {
	const {
		data: {
			body: { response },
		},
	} = await axios.get("http://localhost:5000/api/v1/stat/country/all");
	const fetchedCountries = response.map((country) => country);
	return fetchedCountries;
};

export const fetchAllCases = async () => {
	const {
		data: {
			body: { response },
		},
	} = await axios.get(`http://localhost:5000/api/v1/stat/all`);
	var newCases = 0;
	var newActiveCases = 0;
	var newDeaths = 0;
	const fetchedCases = response.map((cases) => {
		let newCase = Number(cases.cases.new);
		let newActiveCase = Number(cases.cases.active);
		let newDeath = Number(cases.deaths.new);
		newCases += newCase;
		newActiveCases += newActiveCase;
		newDeaths += newDeath;
	});
	return { newCases, newActiveCases, newDeaths };
};
