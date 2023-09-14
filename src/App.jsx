import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Hero from './components/Hero'
import Nav from './components/Nav'
import Card from './components/Card'
import './App.css'

{
	/* <Hero />, potem dodac hero do App */
}

function App() {
	return (
		<>
			<Nav />
			<Card />
		</>
	)
}

export default App
