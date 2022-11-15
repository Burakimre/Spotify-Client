import React from 'react'
import { Routes, Route } from "react-router-dom"
import Browse from '../Browse'
import Favourites from '../Favourites'
import Playlist from '../Playlist'
import Playlists from '../Playlists'

const Main = () => {
	return (
		<>
			<main className="flex flex-1 bg-black/[85%] overflow-hidden order-first sm:order-last">
				<Routes>
					<Route path="/" element={ <Browse/> } />
					<Route path="/browse" element={ <Browse/> } />
					<Route path="/favourites" element={ <Favourites/> } />
					<Route path="/playlists" element={ <Playlists/> } />
					<Route path="/playlists/:playlistId" element={ <Playlist/> } />
				</Routes>
			</main>
		</>
	)
}

export default Main;