import axios from "axios";

export const baseUrl =
	"https://api.coingecko.com/api/v3/coins/noia-network?localization=false&tickers=false&market_data=true&community_data=true";

export async function fetchApi(url) {
	const { data } = await axios.get(url);
	return data;
}
