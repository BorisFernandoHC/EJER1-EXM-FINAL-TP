import React from "react";
import ProfileCard from "./components/ProfileCard";
import "./App.css";

function App() {
	return (
		<div className="background">
			<div className="bg-pattern-top"></div>
			<div className="bg-pattern-bottom"></div>

			<ProfileCard
				name="Yarriba Castro"
				age="Desing track"
				city="I chose design track because."
				followers=""
				likes=""
				photos=""
			></ProfileCard>
		</div>
	);
}

export default App;
