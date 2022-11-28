import Image from "next/image";
import React from "react";

const ProjectDetails = ({ project, data }) => {
	return (
		<div className="flex flex-col lg:flex-row">
			{/* Group 1 - Image & Price */}
			<div className="mx-auto mb-2 lg:w-1/2 lg:my-auto">
				{/* Image */}
				<div className="flex grid-cols-2 lg:justify-center">
					{/* Left side - Image */}
					<Image
						className="my-auto"
						src={data.image.small}
						alt="logo"
						width={35}
						height={35}
					/>
					{/* Right side - Text */}
					<div className="ml-2">
						<h3 className="font-extrabold text-xl">{data.name}</h3>
						<p className="text-gray-400 text-xs text-center">
							<span className="uppercase">{data.symbol}</span> /
							USD
						</p>
					</div>
				</div>
				{/* Price */}
				<div className="mt-4 flex flex-col lg:flex-row lg:justify-center">
					<p className="font-black text-2xl">
						$ {data.market_data.current_price.usd}
					</p>
					<p className="text-center">
						{Math.floor(
							data.market_data.price_change_percentage_24h
						)}
						%/24H
					</p>
				</div>
			</div>
			{/* Group 2 - Project Details */}
			<div>
				{/* Link with AB */}
				{/* <div>
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
				</div> */}
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
							<p className="text-sm">#{data.market_cap_rank}</p>
						</div>
						<div className="flex justify-between">
							<p>Market Cap</p>
							<p className="text-sm">
								{data.market_data.market_cap.usd}
							</p>
						</div>
						<div className="flex justify-between">
							<p>24H Volume</p>
							<p className="text-sm">$113,582</p>
						</div>
						<div className="flex justify-between">
							<p>24H High/Low</p>
							<p className="text-sm">$0.057780/$0.053730</p>
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
									href={data.links.homepage[0]}
									target="_blank"
									rel="noreferrer">
									{data.links.homepage[0]}
								</a>
							</p>
						</div>
						<div className="flex justify-between">
							<p>Blog</p>
							<p className="text-sm">
								<a
									className="hover:text-blue-400"
									href={data.links.announcement_url[0]}
									target="_blank"
									rel="noreferrer">
									Medium
								</a>
							</p>
						</div>
						<div className="flex justify-between">
							<p>Twitter</p>
							<p className="text-sm">
								<a
									className="hover:text-blue-400"
									href={`https://twitter.com/${data.links.twitter_screen_name}`}
									target="_blank"
									rel="noreferrer">
									@{data.links.twitter_screen_name}
								</a>
							</p>
						</div>
						<div className="flex justify-between">
							<p>Telegram</p>
							<p className="text-sm">
								<a
									className="hover:text-blue-400"
									href={`https://t.me/${data.links.telegram_channel_identifier}`}
									target="_blank"
									rel="noreferrer">
									t.me/
									{data.links.telegram_channel_identifier}
								</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectDetails;
