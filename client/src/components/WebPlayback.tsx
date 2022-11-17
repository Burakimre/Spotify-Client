import { useState, useEffect } from "react";
import { getAccessToken } from "../api/SpotifyAPI";

export const WebPlayback = () => {
	const [player, setPlayer] = useState<Spotify.Player | null>(null);

	useEffect(() => {
		const script = document.createElement("script");
		script.src = "https://sdk.scdn.co/spotify-player.js";
		script.async = true;

		document.body.appendChild(script);

		window.onSpotifyWebPlaybackSDKReady = () => {
			const player = new Spotify.Player({
				name: 'Spotify Web Playback Player',
				getOAuthToken: cb => { cb(getAccessToken()); },
				volume: 0.5
			});

			setPlayer(player);

			player.addListener("ready", ({ device_id }) => {
				console.log("Ready with Device ID", device_id);
			});

			player.addListener("not_ready", ({ device_id }) => {
				console.log("Device ID has gone offline", device_id);
			});

			player.addListener('initialization_error', ({ message }) => {
                console.error(message);
            });

            player.addListener('authentication_error', ({ message }) => {
                console.error(message);
            });

            player.addListener('account_error', ({ message }) => {
                console.error(message);
            });

            // document.getElementById('togglePlay').onclick = function() {
            //   player.togglePlay();
            // };

			player.connect();
		}
	}, [])

	return (
		<>
		</>
	)
}