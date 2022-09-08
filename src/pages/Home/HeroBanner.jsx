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
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Voluptate, sit? Explicabo autem consequuntur quidem deleniti
				aperiam voluptatem minus temporibus at? Et praesentium
				accusantium beatae repellat aliquid. Dolore harum maiores quasi.
			</p>
		</section>
	);
}
