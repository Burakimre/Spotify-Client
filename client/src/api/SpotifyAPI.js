import axios from "axios";

const EXPIRES_IN = 3600 * 1000; // 1 hour in milliseconds

const getLocalAccessToken = () => window.localStorage.getItem('spotify_access_token');
const setLocalAccessToken = (token) => {
	setTokenTimestamp();
	window.localStorage.setItem('spotify_access_token', token);
};

const getTokenTimestamp = () => window.localStorage.getItem('spotify_token_timestamp');
const setTokenTimestamp = () => window.localStorage.setItem('spotify_token_timestamp', Date.now());

const getLocalRefreshToken = () => window.localStorage.getItem('spotify_refresh_token');
const setLocalRefreshToken = (token) => window.localStorage.setItem('spotify_refresh_token', token);

const refreshAccessToken = async () => {
	try {
		const resp = await axios.get(`${process.env.REACT_APP_REFRESH_TOKEN_URI}?refresh_token=${getLocalRefreshToken()}`);

		setLocalAccessToken(resp.data.access_token);
		window.location.reload();
	} catch (e) {
		console.log(e);
	}
}

export const getAccessToken = () => {
	const searchParams = new URLSearchParams(window.location.hash.replace('#','?'));
	const access_token = searchParams.get('access_token');
	const refresh_token = searchParams.get('refresh_token');
	const error = searchParams.get('error');

	if (error) { refreshAccessToken(); }
	if ((Date.now() - getTokenTimestamp()) > EXPIRES_IN ) { refreshAccessToken(); }

	if (!getLocalAccessToken() && access_token) {
		setLocalAccessToken(access_token);
		setLocalRefreshToken(refresh_token);
	}

	return getLocalAccessToken();
}

export const deleteTokens = () => {
	window.localStorage.removeItem('spotify_access_token');
	window.localStorage.removeItem('spotify_token_timestamp');
	window.localStorage.removeItem('spotify_refresh_token');
	window.location.reload();
}

export const access_token = getAccessToken();

export * from './SpotifyRoutes';