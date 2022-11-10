import React from 'react'
import Navigation from './Navigation'
import Main from './Main'

const Layout = () => {
	return (
		<div className="flex flex-col sm:flex-row w-screen h-screen bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500">
			<Navigation />
			<Main />
		</div>
	)
}

export default Layout;