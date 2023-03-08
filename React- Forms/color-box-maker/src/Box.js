import React from "react";
import "./Box.css";

const Box = ({ id, backgroundColor, width, height, remove }) => {
	const handleRemove = () => remove(id);
	return (
		<div className="Box">
			<div
				style={{
					height: `${height}px`,
					width: `${width}px`,
					backgroundColor
				}}></div>
			<button onClick={handleRemove}>X</button>
		</div>
	);
};

export default Box;
