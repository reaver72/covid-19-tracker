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

export const barChartData = async (country) => {
	try {
		const {
			data: { body },
		} = await axios.get(
			`https://co-vid-19-tracker-app.herokuapp.com/api/v1/data/country/${country}`
		);

		const totalInfected = body.body["Total Cases_text"].replaceAll(",", "");
		const totalDeaths = body.body["Total Deaths_text"].replaceAll(",", "");
		const totalRecovered = body.body["Total Recovered_text"].replaceAll(
			",",
			""
		);
		return { totalInfected, totalDeaths, totalRecovered };
	} catch (err) {
		console.log(err);
	}
};

export const fetchDailyUpdate = async (country) => {
	try {
		var url = `https://co-vid-19-tracker-app.herokuapp.com/api/v1/stat/daily?country=${country}`;

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
	} = await axios.get(
		"https://co-vid-19-tracker-app.herokuapp.com/api/v1/stat/country/all"
	);
	const fetchedCountries = response.map((country) => country);

	return fetchedCountries;
};

export const fetchAllCases = async () => {
	const {
		data: {
			body: { response },
		},
	} = await axios.get(
		`https://co-vid-19-tracker-app.herokuapp.com/api/v1/stat/all`
	);
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
	const date = response[0].day;
	return { newCases, newActiveCases, newDeaths, date };
};
