import React, { useState, useEffect } from "react";
import ProjectDetails from "./ProjectDetails";

export default function Projects() {
	const [selected, setSelected] = useState("");
	const [dataApi, setDataApi] = useState({});

	useEffect(() => {
		let data = fetch(
			`https://api.coingecko.com/api/v3/coins/cardano?localization=false&tickers=true&market_data=true&community_data=false&developer_data=false&sparkline=true`
		)
			.then((results) => results.json())
			.then((data) => {
				setDataApi(data);
			});

		return data;
	}, [selected]);
	console.log(selected);
	console.log("API DATA", dataApi);

	return (
		<section className="mx-8 pt-6 text-left mb-10 md:h-screen lg:md-1">
			{/* Basic Setup of what I want to see on the screen. Will have to use Router to change the content of the page without reload */}
			<div>
				<div className="grid grid-cols-1 text-center mx-auto md:grid-cols-2 md:space-x-2">
					<div
						onClick={setSelected("noia-network")}
						className="border-2 border-gray-300 rounded-full p-3 hover:bg-blue-400 cursor-pointer mt-3 md:ml-2">
						<button type="button">Syntropy</button>
					</div>
					<div
						onClick={setSelected("cardano")}
						className="border-2 border-gray-300 rounded-full p-3 hover:bg-blue-400 cursor-pointer mt-3">
						<button type="button">Cardano</button>
					</div>
					<div
						onClick={setSelected("loki-network")}
						className="border-2 border-gray-300 rounded-full p-3 hover:bg-blue-400 cursor-pointer mt-3">
						<button type="button">Oxen</button>
					</div>
					<div
						onClick={setSelected("mysterium")}
						className="border-2 border-gray-300 rounded-full p-3 hover:bg-blue-400 cursor-pointer mt-3">
						<button type="button">Mysterium Network</button>
					</div>
				</div>
			</div>
			<div className="border-b-2 my-7" />
			{selected === "" ? (
				<p className="text-center">
					Select a project to see more details
				</p>
			) : (
				<ProjectDetails project={selected} data={dataApi} />
			)}
		</section>
	);
}
