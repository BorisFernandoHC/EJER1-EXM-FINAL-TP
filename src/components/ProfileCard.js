import React from "react";
import "./ProfileCard.css";
import avatar from "../images/image-rita.png";

function ProfileCard(props) {
	return (
		<div className="card-container">
			<header>
				<img src={avatar} alt={props.name} />
			</header>
			<h1 className="bold-text">
				{props.name} <span className="normal-text">{props.age}</span>
			</h1>
			<h2 className="normal-text">{props.city}</h2>
			<div className="social-container">
				<div className="followers">
					<h1 className="bold-text">{props.followers}</h1>
					<h2 className="smaller-text">Yaretas 24</h2>
				</div>
				<div className="likes">
					<h1 className="bold-text">{props.likes}</h1>
					<h2 className="smaller-text">taretas 24</h2>
				</div>
			
			</div>
		</div>
	);s
}

export default ProfileCard;