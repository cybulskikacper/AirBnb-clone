import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Hero from './components/Hero'
import Nav from './components/Nav'
import Card from './components/Card'
import Cats from './components/Contact'
import Data from './components/Data'
import './App.css'

{
	/* <Hero />, potem dodac hero do App */
}

/*
Challenge:

- import the array of data from data.js
- map over the array to create <Card /> components
- display the array of card components under the navbar
  (in place of the current <Card /> component)

Note: We haven't styled the group of components yet, so they'll
still be block elements, stacked vertically. We'll add styling later.
*/

function App() {
	const dataElements = Data.map(item => {
		return (
			<Card
				img={item.coverImg}
				rating={item.stats}
				reviewCount={item.stats}
				location={item.location}
				title={item.title}
				price={item.price}
			/>
		)
	})

	return (
		<>
			<Nav />

			<Card
				img="./images/katie-zaferes.png"
				rating={5.0}
				reviewCount="6"
				country="USA"
				title="Life lessons with Katie Zaferes"
				price={136}
			/>
		</>
	)
}

export default App
