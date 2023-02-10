import React from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";
const Pokedex = (props) => {
	return (
		<div className="Pokedex">
			<h3 className="Pokedex-header">Pokedex</h3>
			{props.pokemon.map((p) => (
				<Pokecard pokemon={p} />
			))}
		</div>
	);
};
export default Pokedex;
