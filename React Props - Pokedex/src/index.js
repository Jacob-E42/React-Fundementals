import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<App
		pokemon={[
			{ id: 4, name: "Charmander", type: "fire", base_experience: 62 },
			{ id: 7, name: "Squirtle", type: "water", base_experience: 63 },
			{ id: 11, name: "Metapod", type: "bug", base_experience: 72 },
			{ id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
			{ id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
			{ id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
			{ id: 94, name: "Gengar", type: "poison", base_experience: 225 },
			{ id: 133, name: "Eevee", type: "normal", base_experience: 65 }
		]}
	/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
