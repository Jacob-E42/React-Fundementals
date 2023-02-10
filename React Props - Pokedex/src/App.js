import React from "react";
import "./App.css";
import Pokedex from "./Pokedex";

function App(props) {
	return (
		<div className="App">
			<Pokedex pokemon={props.pokemon} />
		</div>
	);
}

export default App;
