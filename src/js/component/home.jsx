import React from "react";
import Navbar from "./Navbar";
//include images into your bundle
import Jumbotron from "./Jumbotron";
import Card from "./Card"; 
import Footer from "./Footer"

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Navbar/>
			<div className="jumbo"><Jumbotron/></div>
			<div className="dogcards">
			<Card/>
			<Card/>
			<Card/>
			<Card/>
			</div>
			<div className="bottom"><Footer/></div>
		</div>
		
	);
};

export default Home;
