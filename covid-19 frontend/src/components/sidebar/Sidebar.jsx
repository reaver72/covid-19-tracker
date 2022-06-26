import React from "react";
import Card from "../Cards/Card";

const Sidebar = ({ data }) => {
	return (
		<div className="md:w-80 lg:h-full h-1/2 shadow-lg absolute grid gap-1 lg:mx-3 mx-0 my-2 w-full">
			<Card
				className="bg-blue-600 h-2 mt-3"
				text={"Total number of infected cases"}
				title={"Total Infected Cases"}
			/>
			<Card
				className="bg-green-500 h-2 mt-3"
				text={"Total number of recovered cases "}
				title={"Recovered Cases"}
				cases={""}
			/>
			<Card
				className="bg-orange-600 h-2 mt-3"
				text={"Number of critical cases "}
				title={"Critical Cases"}
				cases={""}
			/>
			<Card
				className="bg-red-600 h-2 mt-3"
				text={"Total number of deaths"}
				title={"Total Deaths"}
				cases={""}
			/>
		</div>
	);
};

export default Sidebar;
