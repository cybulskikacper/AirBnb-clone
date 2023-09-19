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

// const nums = [1, 2, 3, 4, 5]

// const number1 = nums.map(x => x ** 2)

// console.log(number1)

// const names = ['alice', 'bob', 'charlie', 'danielle']

// const firstLetter = names.map(name => {
// 	return name[0].toUpperCase() + name.slice(1)
// })

// console.log(firstLetter)

// const pokemon = ['Bulbosaur', 'Charmander', 'Squirtle']

// const pokemonWithPTags = pokemon.map(name => {
// 	return `<p>${name}</p>`
// })

// console.log(pokemonWithPTags)

export default App
