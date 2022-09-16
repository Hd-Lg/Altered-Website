import React from "react";
import Logo from "../../assets/Altered_Blockchain-min.svg";

export default function HeroBanner() {
	return (
		<section className="h-screen mx-8 pt-14 text-center">
			<div className="mt-10 mb-32 w-auto h-5 md:mb-48 lg:mb-80">
				<img src={Logo} alt="logo" />
			</div>
			<h1 className="my-5 font-bold tracking-wider text-5xl md:text-7xl">
				Welcome
			</h1>
			<p className="text-gray-500 md:mt-24 md:text-xl">
				We are <strong>Validators</strong>, we run
				<strong> Stake Pool</strong> and <strong>Masternodes </strong>
				for various blockchain projects in which we are convince of
				their potential to grow, develop and bring change.
			</p>
			<p className="text-gray-500 md:mt-10 md:text-xl">
				We know it's important to choose a reliable validator when
				stacking your cryptocurrencies. Become our partner to grow with
				us in this new world full of opportunities.
			</p>
		</section>
	);
}
