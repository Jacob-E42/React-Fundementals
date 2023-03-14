import { useState } from "react";
import uuid from "uuid";
import axios from "axios";

const useFlip = () => {
	const [isFacingUp, setIsFacingUp] = useState(true);
	const flip = () => {
		setIsFacingUp(isFacingUp => !isFacingUp);
	};
	return [isFacingUp, flip];
};

const useAxios = (baseUrl, param = "") => {
	const [cards, setCards] = useState([]);
	const addResponse = async (evt, param = null) => {
		const url = param ? `${baseUrl}${param}/` : `${baseUrl}`;
		const response = await axios.get(url);
		setCards(cards => [...cards, { ...response.data, id: uuid() }]);
	};
	return [cards, addResponse];
};

export { useFlip, useAxios };
