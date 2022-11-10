import React from 'react'
import { Routes, Route } from "react-router-dom"
import Browse from '../Browse'
import Playlist from '../Playlist'

const Main = () => {
	return (
		<>
			<main className="w-full bg-black/70">
				<Routes>
					<Route path="/" element={ <Browse/> } />
					<Route path="/browse" element={ <Browse/> } />
					<Route path="/favourites" element={ <Playlist/> } />
				</Routes>
			</main>
		</>
	)
}

export default Main;