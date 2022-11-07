import React from 'react'
import Navigation from './Navigation'
import Main from './Main'

const Layout = () => {
	return (
		<div className="flex w-full h-screen bg-neutral-900">
			<Navigation />
			<Main />
		</div>
	)
}

export default Layout;