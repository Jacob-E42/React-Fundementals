import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

const BoxList = () => {
	const [boxes, setBoxes] = useState([]);
	const addBox = boxObj => {
		setBoxes(boxes => [...boxes, boxObj]);
	};
	const removeBox = id => {
		setBoxes(boxes => boxes.filter(box => box.id !== id));
	};

	const boxComponents = boxes.map(box => (
		<Box
			width={box.width}
			height={box.height}
			backgroundColor={box.backgroundColor}
			id={box.id}
			key={box.id}
			remove={removeBox}
		/>
	));

	return (
		<div>
			<NewBoxForm addBox={addBox} />
			{boxComponents}
		</div>
	);
};

export default BoxList;
