import Image from 'next/image';
import Card from './Card';

import {
	circle_stack,
	clock,
	cloud_server,
	lock,
	magnifying_glass,
	server,
	shield,
} from '../assets';
import Altered_Blockchain from '../assets/Altered_Blockchain-min.svg';
import Welcome from './Welcome';

export default function Home() {
	return (
		<div>
			<Image src={Altered_Blockchain} alt='logo' className='mx-auto' />
			<section className='mt-4 space-y-10 text-center'>
				<div className='h-14'>
					<h1 className='font-semibold tracking-wider text-3xl '>
						<Welcome />
					</h1>
				</div>
				<p className='text-gray-500'>
					We are <strong>Validators</strong>, we run
					<strong> Stake Pool</strong> and{' '}
					<strong>Masternodes </strong>
					for various blockchain projects in which we are convince of
					their potential to grow, develop and bring change.
				</p>
				<p className='text-gray-500'>
					We know it&apos;s important to choose a reliable validator
					when stacking your cryptocurrencies. Become our partner to
					grow with us in this new world full of opportunities.
				</p>
			</section>
			<section className='mt-16 space-y-6 text-center'>
				<h2 className='font-semibold text-center'>
					Why Delegate With Us?
				</h2>
				<p className='text-gray-500'>
					We aim to provide enterprise-class stability and performance
					for our servers by using an hybrid model between dedicated
					and virtual ones in multiple data centers around the world.
				</p>
				<p className='text-gray-500'>
					Whenever the needs of the blockchain projects change, our
					setup will scale easily to exceed them providing us with a
					margin of operations.
				</p>

				<div className='space-y-3 md:grid md:grid-cols-2 md:max-w-4xl md:space-x-4 mx-auto'>
					<div />
					<div />
					<Card image={clock} text='99.5% Uptime' />
					<Card image={magnifying_glass} text='Monitoring 24/7' />
					<Card image={shield} text='Multi-Layered Security' />
					<Card image={server} text='Server Redundancy' />
					<Card image={lock} text='DDOS Mitigation' />
					<Card image={cloud_server} text='Hybrid Model' />
					<Card image={circle_stack} text='Automatic Backups' />
				</div>

				<h3 className='font-medium'>Worldwide Infrastructure</h3>
				<p className='text-gray-500'>
					We run our servers in various geographical zone through
					various providers.
				</p>
			</section>
		</div>
	);
}
