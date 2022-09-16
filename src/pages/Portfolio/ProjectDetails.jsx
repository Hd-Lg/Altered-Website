import React, { useState, useEffect } from "react";
import axios from "axios";

const urlAPI =
	"https://api.coingecko.com/api/v3/coins/noia-network?localization=false&tickers=false&market_data=true&community_data=true";

export default function ProjectDetails({ project }) {
	const [dataApi, setDataApi] = useState([]);

	useEffect(() => {
		axios.get(urlAPI).then((response) => {
			setDataApi(response.data);
		});
	}, []);

	if (!dataApi) return null;
	console.log(dataApi.symbol);

	return (
		<div className="flex flex-col lg:flex-row">
			{/* Group 1 - Image & Price */}
			<div className="mx-auto mb-2 lg:w-1/2 lg:my-auto">
				{/* Image */}
				<div className="flex grid-cols-2 lg:justify-center">
					{/* Left side - Image */}
					<img className="my-auto" src={"#"} alt="logo" />
					{/* Right side - Text */}
					<div className="ml-2">
						<h3 className="font-extrabold text-xl">
							{dataApi.name}
						</h3>
						<p className="text-gray-400 text-xs text-center">
							<span className="uppercase">{dataApi.symbol}</span>{" "}
							/ USD
						</p>
					</div>
				</div>
				{/* Price */}
				<div className="mt-4 flex flex-col lg:flex-row lg:justify-center">
					<p className="font-black text-2xl">$</p>
					<p className="text-center">
						(%)
						{console.log(dataApi.price_change_percentage_24h)}
					</p>
				</div>
			</div>
			{/* Group 2 - Project Details */}
			<div>
				{/* Link with AB */}
				<div>
					<h3 className="text-lg font-bold mt-2">Why Syntropy?</h3>
					<p className="text-left text">
						Syntropy is transforming the public internet into a
						secure and user-centric internet through a unifying
						layer where encryption and optimized performance are
						built-in and automatically enabled for anything and
						everything connected to it.
					</p>
					<p className="text-left text">
						{" "}
						We were impressed by the team, the founders and their
						support (from well known people in the cryptoverse and
						telecom industry). The technology behind the DARP nodes
						is patented. They already have impressive partnership
						with an important ISP and also with a big customer.
					</p>
					<h3 className="text-lg font-bold mt-2">Our Role</h3>
					<p>We are validator for this project.</p>
				</div>
				{/* Line Separator */}
				<div className="border-b-2 my-2"></div>
				{/* Project Details */}
				<div>
					<div>
						<h3 className="text-lg font-bold mt-2">
							Syntropy Details
						</h3>
						<div className="flex justify-between">
							<p>Market Cap Rank</p>
							<p className="text-sm">
								#{dataApi.market_cap_rank}
							</p>
						</div>
						<div className="flex justify-between">
							<p>Market Cap</p>
							<p className="text-sm">$26,670,190</p>
						</div>
						<div className="flex justify-between">
							<p>24H Volume</p>
							<p className="text-sm">$113,582</p>
						</div>
						<div className="flex justify-between">
							<p>24H High/Low</p>
							<p className="text-sm">$0.057780/$0.053730</p>
						</div>
						<div className="flex justify-between">
							<p>Circulating Supply</p>
							<p className="text-sm">479,487,714 </p>
						</div>
						<div className="flex justify-between">
							<p>Total Supply</p>
							<p className="text-sm">1,000,000,000</p>
						</div>
					</div>
					<div className="border-b-2 my-2"></div>
					<div>
						<h3 className="text-lg font-bold mt-2">
							Syntropy Social
						</h3>
						<div className="flex justify-between">
							<p>Website</p>
							<p className="text-sm">
								<a
									className="hover:text-blue-400"
									href="https://www.syntropynet.com/"
									target="_blank"
									rel="noreferrer"
								>
									Syntropynet.com
								</a>
							</p>
						</div>
						<div className="flex justify-between">
							<p>Blog</p>
							<p className="text-sm">
								<a
									className="hover:text-blue-400"
									href="https://medium.com/syntropynet"
									target="_blank"
									rel="noreferrer"
								>
									Medium
								</a>
							</p>
						</div>
						<div className="flex justify-between">
							<p>Twitter</p>
							<p className="text-sm">
								<a
									className="hover:text-blue-400"
									href="https://twitter.com/Syntropynet"
									target="_blank"
									rel="noreferrer"
								>
									@Syntropynet
								</a>
							</p>
						</div>
						<div className="flex justify-between">
							<p>Telegram</p>
							<p className="text-sm">
								<a
									className="hover:text-blue-400"
									href="https://t.me/SyntropyNet"
									target="_blank"
									rel="noreferrer"
								>
									t.me/SyntopyNet
								</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
