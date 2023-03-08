import React, { useState } from "react";
import { v4 as uuid } from "uuid";

const NewTodoForm = ({ add }) => {
	const [task, setTask] = useState("");
	const handleChange = e => {
		e.preventDefault();
		setTask(() => e.target.value);
	};
	const handleSubmit = e => {
		e.preventDefault();
		add({ task: task, id: uuid() });
		setTask("");
	};
	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="task">Task</label>
			<input
				type="text"
				id="task"
				name="task"
				value={task}
				onChange={handleChange}></input>
			<button type="submit">Submit</button>
		</form>
	);
};

export default NewTodoForm;
