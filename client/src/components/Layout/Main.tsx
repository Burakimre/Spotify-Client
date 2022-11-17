import React from 'react'
import { Routes, Route, Navigate, useNavigate } from "react-router-dom"
import Favourites from '../Favourites'
import Playlist from '../Playlist'
import Playlists from '../Playlists'
import Profile from '../Profile'


const Main = () => {
	const navigate = useNavigate();

	return (
		<>
			<main className="flex flex-col flex-1 bg-black/[85%] overflow-hidden order-first sm:order-last">
				<div className="flex fixed m-6 sm:my-6 sm:mx-12 space-x-2">
					<button className="w-8 h-8 bg-white hover:bg-gray-300 rounded-lg text-black" onClick={() => navigate(-1)}>
						<i className="fa-solid fa-angle-left fa-lg"></i>
					</button>
					<button className="w-8 h-8 bg-white hover:bg-gray-300 rounded-lg text-black" onClick={() => navigate(1)}>
						<i className="fa-solid fa-angle-right fa-lg"></i>
					</button>
				</div>
				<div className="flex flex-col flex-1 m-6 sm:m-12 mt-16 sm:mt-20 overflow-hidden">
					<Routes>
						<Route path="/" element={ (<Navigate replace to="/playlists" />) }/>
						<Route path="/favourites" element={ <Favourites/> } />
						<Route path="/playlists" element={ <Playlists/> } />
						<Route path="/playlists/:playlistId" element={ <Playlist/> } />
						<Route path="/profile" element={ <Profile/> } />
					</Routes>
				</div>
			</main>
		</>
	)
}

export default Main;