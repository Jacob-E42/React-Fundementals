import React from "react";

const Todo = ({ id, task, remove }) => {
	const handleRemove = () => remove(id);
	return (
		<li>
			{task}
			<button
				onClick={handleRemove}
				type="button">
				X
			</button>
		</li>
	);
};

export default Todo;
