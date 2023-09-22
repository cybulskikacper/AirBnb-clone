import React from 'react'

function Card(props) {
	let badgeText
	if (props.openSpots === 0) {
		badgeText = 'SOLD OUT'
	} else if (props.location === 'Online') {
		badgeText = 'ONLINE'
	}
		return (
			<div className="card">
				{badgeText === 0 &&  <div className="card--badge">{badgeText}</div>}
				<img src={props.img} alt="Picture of american athlete Katie Zaferes" className="card--image" />

				<div className="card--stats">
					<img src="./images/star.png" className="card--star" />
					<span>{props.rating}</span>
					<span className="gray">({props.reviewCount}) • </span>
					<span className="gray">{props.country}</span>
				</div>
				<p className="card--title">{props.title}</p>
				<p className="card--price">
					<span className="bold">From ${props.price}</span> / person
				</p>
			</div>
		)
}

export default Card
