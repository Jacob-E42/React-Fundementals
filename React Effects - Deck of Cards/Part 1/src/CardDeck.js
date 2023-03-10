import React, { useState, useEffect, useRef, useCallback } from "react";
import Card from "./Card";
import axios from "axios";

const CardDeck = () => {
	const deckId = useRef();

	const [cardsRemaining, setCardsRemaining] = useState(52);
	const [currentCard, setCurrentCard] = useState(null);

	useEffect(() => {
		async function setUpCardDeck() {
			const { data } = await axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/");
			deckId.current = data.deck_id;
		}
		setUpCardDeck();
	}, []);

	// useEffect(() => {
	// 	if (cardsRemaining <= 0) {
	// 		displayCard = () => {

	// 		};
	// 	}
	// }, [cardsRemaining]);

	let displayCard = () => {
		if (cardsRemaining >= 1) {
			async function drawCard() {
				const response = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId.current}/draw`);
				const { cards } = response.data;
				setCardsRemaining(() => cardsRemaining - 1);
				setCurrentCard(() => {
					return <Card image={cards[0].image} />;
				});
			}
			drawCard();
		} else alert("Error: no cards remaining!");
	};

	return (
		<div>
			<button onClick={displayCard}>Gimme a Card!</button>
			<p>Number of Cards Remaining: {cardsRemaining}</p>
			<div>{currentCard}</div>
		</div>
	);
};

export default CardDeck;
