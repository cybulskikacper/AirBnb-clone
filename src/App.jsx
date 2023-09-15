import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Hero from './components/Hero'
import Nav from './components/Nav'
import Card from './components/Card'
import Cats from './components/Contact'
import './App.css'

{
	/* <Hero />, potem dodac hero do App */
}

function App() {
	return (
		<>
			<Nav />

			<Cats
				img="./images/mr-whiskerson.png"
				name="Mr. Whiskerson"
				phone="(212) 555-1234"
				mail="mr.whiskaz@catnap.meow"
			/>
			<Cats img="./images/fluffykins.png" name="Fluffykins" phone="(212) 555-2345" mail="fluff@me.com" />

			<Cats img="./images/felix.png" name="Felix" phone="(212) 555-4567" mail="thecat@hotmail.com" />

			<Cats img="./images/pumpkin.png" name="Pumpkin" phone="(0800) CAT KING" mail="pumpkin@scrimba.com" />

			<Card />
		</>
	)
}

export default App
