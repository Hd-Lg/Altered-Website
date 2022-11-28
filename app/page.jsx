import Image from "next/image";
import Card from "./Card";

import Altered_Blockchain from "../assets/Altered_Blockchain-min.svg";
import { clock, shield } from "../assets";

export default function Home() {
	return (
		<div>
			<Image src={Altered_Blockchain} alt="logo" />
			<section className="mt-4 space-y-10 text-center">
				<h1 className="font-bold tracking-wider text-4xl">Welcome!</h1>
				<p className="text-gray-500">
					We are <strong>Validators</strong>, we run
					<strong> Stake Pool</strong> and{" "}
					<strong>Masternodes </strong>
					for various blockchain projects in which we are convince of
					their potential to grow, develop and bring change.
				</p>
				<p className="text-gray-500">
					We know it&apos;s important to choose a reliable validator
					when stacking your cryptocurrencies. Become our partner to
					grow with us in this new world full of opportunities.
				</p>
			</section>
			<section className="mt-16 space-y-6 text-left">
				<h2 className="font-semibold text-left">
					Why Delegate With Us?
				</h2>
				<p className="text-gray-500">
					We aim to provide enterprise-class stability and performance
					for our servers by using an hybrid model between dedicated
					and virtual ones in multiple data centers around the world.
				</p>
				<p className="text-gray-500">
					Whenever the needs of the blockchain projects change, our
					setup will scale easily to exceed them providing us with a
					safety margin for our operations.
				</p>

				<div className="space-y-3">
					<Card image={clock} text="99.5% Uptime" />
					<Card image={shield} text="Monitoring 24/7" />
					<Card image={shield} text="Multi-Layered Security" />
					<Card image={clock} text="Server Redundancy" />
					<Card image={clock} text="DDOS Mitigation" />
					<Card image={clock} text="Hybrid Model" />
					<Card image={clock} text="Automatic Backups" />
				</div>

				<h3 className="font-medium">Worldwide Infrastructure</h3>
				<p className="text-gray-500">
					We run our servers in various geographical zone through
					various providers.
				</p>
			</section>
		</div>
	);
}
