'use client';
import React, { useEffect, useState } from 'react';
import ProjectDetails from './ProjectDetails';

const Projects = () => {
	const [selected, setSelected] = useState('');
	const [dataApi, setDataApi] = useState({});

	useEffect(() => {
		function fetchApi() {
			let data = fetch(
				`https://api.coingecko.com/api/v3/coins/cardano?localization=false&tickers=true&market_data=true&community_data=false&developer_data=false&sparkline=true`
			).then((results) => results.json());
			setDataApi(data);
		}
		fetchApi();
		return () => {
			setDataApi;
		};
	}, [selected]);

	console.log('Project selected:', selected);
	console.log('Data API:', dataApi);

	return (
		<section className='mb-36'>
			<div>
				<div className='grid grid-cols-1 text-center mx-auto md:max-w-4xl md:grid-cols-2 md:space-x-2'>
					<div
						onClick={() => setSelected('noia-network')}
						className='border-2 border-gray-300 rounded-full p-3 hover:bg-blue-400 cursor-pointer mt-3 md:ml-2'>
						<button type='button'>Syntropy</button>
					</div>
					<div
						onClick={() => setSelected('cardano')}
						className='border-2 border-gray-300 rounded-full p-3 hover:bg-blue-400 cursor-pointer mt-3'>
						<button type='button'>Cardano</button>
					</div>
					<div
						onClick={() => setSelected('loki-network')}
						className='border-2 border-gray-300 rounded-full p-3 hover:bg-blue-400 cursor-pointer mt-3'>
						<button type='button'>Oxen</button>
					</div>
					<div
						onClick={() => setSelected('mysterium')}
						className='border-2 border-gray-300 rounded-full p-3 hover:bg-blue-400 cursor-pointer mt-3'>
						<button type='button'>Mysterium Network</button>
					</div>
				</div>
			</div>
			{selected === '' ? (
				<p className='text-center mt-7'>
					Select a project to see more details
				</p>
			) : (
				<ProjectDetails project={selected} data={dataApi} />
			)}
		</section>
	);
};

export default Projects;
