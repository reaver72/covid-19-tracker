import React, { useEffect, useState } from "react";
import Chart from "./components/Chart/Chart";
import { fetchTotal } from "./api";
import { fetchDailyUpdate } from "./api";
import { fetchAllCountries } from "./api";
import Sidebar from "./components/sidebar/Sidebar";
import TopCards from "./components/TopCards";
import { fetchAllCases } from "./api";
import LineChart from "./components/Chart/LineChart";

const App = () => {
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState({});
	const [dailyData, setDailyData] = useState({});
	const [countries, setCountries] = useState([]);
	const [globalCases, setGlobalCases] = useState({});

	const countryHandler = async (country) => {
		try {
			const fetchedTotal = await fetchTotal(country);
			if (fetchedTotal) {
				setData(fetchedTotal);
			} else {
				return;
			}
			const fetchedDailyUpdate = await fetchDailyUpdate(country);
			if (country === "Global") {
				return;
			}
			else {
				setDailyData(fetchedDailyUpdate);
			}
		} catch (e) {
			console.log(e);
		}
	};
	useEffect(async () => {
		const fetchedCountries = await fetchAllCountries();
		setCountries(fetchedCountries);
	}, []);
	useEffect(async () => {
		const fetchedTotal = await fetchTotal();
		setData(fetchedTotal);
	}, []);
	useEffect(async () => {
		const fetchedAllCases = await fetchAllCases();
		setGlobalCases(fetchedAllCases);
	}, []);
	useEffect(async () => {
		const fetchedDailyUpdate = await fetchDailyUpdate("Nepal");
		setDailyData(fetchedDailyUpdate);
		setLoading(false);
	}, [setDailyData]);

	if (loading) {
		return null;
	}
	return (
		<div className="bg-gray-900 min-h-screen">
			<div className="flex justify-center sm:mb-0 mb-5">
				<img
					className="sm:w-full mb-1  md:h-40 flex justify-center sm:placeholder:my-1 w-full h-20"
					src="https://www.willoughbyvet.com.au/wp-content/uploads/Covid-Banner-1024x259-1.jpg"
					alt="image"
				/>
			</div>
			<Sidebar data={data} />
			<TopCards
				barData={data}
				dailyData={dailyData}
				globalCases={globalCases}
				dailyData={dailyData}
				countryHandler={countryHandler}
				fetchedCountries={countries}
				data={data}
			/>
			<Chart barData={data} />
			<LineChart/>
		</div>
	);
};

export default App;
