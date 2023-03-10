import React, { useState, useEffect, useRef } from "react";
import Card from "./Card";
import axios from "axios";

const CardDeck = () => {
	const deckId = useRef();
	const timerId = useRef();
	const [cardsRemaining, setCardsRemaining] = useState(52);
	const [currentCard, setCurrentCard] = useState(null);
	const [autoDraw, setAutoDraw] = useState(false);

	useEffect(() => {
		async function setUpCardDeck() {
			const { data } = await axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/");
			deckId.current = data.deck_id;
		}
		setUpCardDeck();
	}, []);

	useEffect(() => {
		async function drawCards() {
			try {
				if (cardsRemaining === 0) {
					setAutoDraw(false);
					throw new Error("No cards remaining!");
				}
				const response = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId.current}/draw`);
				const { cards } = response.data;
				setCardsRemaining(cardsRemaining => cardsRemaining - 1);
				setCurrentCard(() => {
					return <Card image={cards[0].image} />;
				});
			} catch (err) {
				alert(err);
			}
		}
		if (autoDraw && !timerId.current) {
			timerId.current = setInterval(async () => {
				await drawCards();
			}, 300);
		}
		return () => {
			clearInterval(timerId.current);
			timerId.current = null;
		};
	}, [autoDraw, cardsRemaining]);

	const toggleAutoDraw = () => {
		setAutoDraw(autoDraw => !autoDraw);
	};

	return (
		<div>
			<button onClick={toggleAutoDraw}>{autoDraw ? "Stop" : "Start"} Drawing!</button>
			<p>Number of Cards Remaining: {cardsRemaining}</p>
			<div>{currentCard}</div>
		</div>
	);
};

export default CardDeck;
