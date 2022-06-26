import React, { useState } from "react";

const CountryOption = ({
	countryHandler,
	fetchedCountries,
	optionValue,
	countryValue,
}) => {
	const changeHandle = (e) => {
		countryHandler(e.target.value);
		optionValue(e.target.value);
		countryValue(e.target.value);
	};
	return (
		<div className="flex flex-col lg:-mt-0 lg:ml-0 ml-16">
			<h2 className="xl:ml-96 mt-3 pl-2">Select Country</h2>
			<select
				className="xl:ml-96 mt-2 select select-bordered select-sm w-full max-w-xs"
				onChange={changeHandle}
			>
				<option value={localStorage.getItem("country") || "Nepal"}>
					{localStorage.getItem("country") || "Nepal"}
				</option>

				{fetchedCountries.map((country, index) => {
					return (
						<option key={index} value={country}>
							{country}
						</option>
					);
				})}
			</select>
		</div>
	);
};

export default CountryOption;
