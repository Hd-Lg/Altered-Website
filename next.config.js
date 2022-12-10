/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ["assets.coingecko.com"],
	},
	experimental: {
		fontLoaders: [
			{ loader: "@next/font/google", options: { subsets: ["latin"] } },
		],
		appDir: true,
	},
};

module.exports = nextConfig;
