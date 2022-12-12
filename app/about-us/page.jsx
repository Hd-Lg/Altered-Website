import React from "react";

const page = () => {
	return (
		<section className='mx-auto text-center space-y-5'>
			<div className='space-y-5'>
				<h2 className='font-semibold '>Who We Are?</h2>
				<p className='text-gray-500'>
					We are passionate about cryptocurrencies and blockchains. We want to
					have an active role, contribute and support projects we like.
				</p>
				<h2 className='font-semibold '>What Are Our Vision?</h2>
				<p className='text-gray-500'>
					We want to grow our business and be known as a trusted and reliable
					partner in the cryptoverse.
					<br />
					Everyday we learn and improve our skills and knowledge in system
					admin, network security, etc. to be able to provide the best service.
				</p>
			</div>
			<div>
				<h2 className='font-semibold '>Contact Us</h2>
				<p className='text-center'>contact@altered-blockchain.com</p>
			</div>
		</section>
	);
};

export default page;
