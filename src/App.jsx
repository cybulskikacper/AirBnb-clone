import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Hero from './components/Hero'
import Nav from './components/Nav'
import Card from './components/Card'
import Cats from './components/Contact'
import Data from './components/Data'
import './App.css'

function App() {
	const cards = Data.map(item => {
		return <Card key={item.id} item={item} />
	})

	return (
		<>
			<Nav />
			<Hero />
			<section className="cards-list">{cards}</section>
		</>
	)
}

export default App
