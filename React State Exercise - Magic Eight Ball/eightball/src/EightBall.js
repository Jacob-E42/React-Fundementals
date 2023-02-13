import React, { useState } from "react";
import "./EightBall.css";

const EightBall = ({ answers }) => {
	const [color, setColor] = useState("black");
	const [msg, setMsg] = useState("Think of a Question");
	const getRandomNumber = (num) => {
		return Math.floor(Math.random() * num + 1);
	};
	const changeAnswer = () => {
		const maxNumber = getRandomNumber(answers.length);
		const { color, msg } = answers[maxNumber];
		setColor(color);
		setMsg(msg);
	};
	return (
		<div className="EightBall" style={{ backgroundColor: color }} onClick={changeAnswer}>
			<p className="EightBall-message">{msg}</p>
		</div>
	);
};

export default EightBall;
