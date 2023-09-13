import React from 'react'

function Card() {
	return (
		<div className="card">
			<img src="./images/katie-zaferes.png" alt="Picture of american athlete Katie Zaferes" className="card--image" />

			<div className="card--stats">
				<img src="./images/star.png" className="card--star" />
				<span>5.0</span>
				<span className="gray">(6) •</span>
				<span className="gray">USA</span>
			</div>
			<p>Life lessons with Katie Zaferes</p>
			<p>
				<span className="bold">From $136 / person </span>
			</p>
		</div>
	)
}

export default Card
