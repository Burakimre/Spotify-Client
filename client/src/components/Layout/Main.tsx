import React from 'react'
import { Routes, Route } from "react-router-dom"
import Browse from '../Browse'
import Login from '../Login'

const Main = () => {
	return (
		<>
			<main className="w-full bg-neutral-900">
				<Routes>
					<Route path="/browse" element={ <Browse/> } />
					<Route path="/login" element={ <Login/> } />
				</Routes>
			</main>
		</>
	)
}

export default Main;