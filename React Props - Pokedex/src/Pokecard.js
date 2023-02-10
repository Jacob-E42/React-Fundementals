import React from "react";
import "./Pokecard.css";
const Pokecard = ({ pokemon: { id, name, type, base_experience } }) => {
	return (
		<div className="Pokecard">
			<header className="Pokecard-header">{name}</header>
			<img className="Pokecard-image" alt="" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} />
			<p className="Pokecard-info">
				Type: {type}
				<br />
				EXP: {base_experience}
			</p>
		</div>
	);
};

export default Pokecard;
