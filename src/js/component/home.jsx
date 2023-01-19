import React from "react";
import Navbar from "./Navbar";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Jumbotron from "./Jumbotron";
import Card from "./Card";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Navbar/>
			<Jumbotron/>
			<div className="dogcards">
			<Card/>
			<Card/>
			<Card/>
			<Card/>
			</div>
		</div>
		
	);
};

export default Home;
