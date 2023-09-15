import React from 'react'

function Cats(props) {
	return (
		<div className="contacts">
			<div className="contact-card">
				<img src={props.img} />
				<h3>{props.name}</h3>
				<div className="info-group">
					<img src="./images/phone-icon.png" />
					<p>{props.phone}</p>
				</div>
				<div className="info-group">
					<img src="./images/mail-icon.png" />
					<p>{props.mail}</p>
				</div>
			</div>
		</div>
	)
}

export default Cats
