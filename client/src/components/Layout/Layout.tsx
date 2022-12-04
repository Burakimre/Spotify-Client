import React, { useState } from 'react'
import Navigation from './Navigation'
import Main from './Main'
import { LoadingContext } from '../../contexts/LoadingContext'

const Layout = () => {
	const [loading, setLoading] = useState(true);

	return (
		<div className="flex flex-col lg:flex-row w-screen h-screen bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500">
			<LoadingContext.Provider value={{ loading, setLoading }}>
				<Navigation />
				<Main />
			</LoadingContext.Provider>
		</div>
	)
}

export default Layout;