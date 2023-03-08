import React, { useState } from "react";
import { v4 as uuid } from "uuid";

const NewBoxForm = ({ addBox }) => {
	const INITIAL_STATE = { width: "", height: "", backgroundColor: "" };
	const [formData, setFormData] = useState(INITIAL_STATE);
	const handleChange = (e) => {
		e.preventDefault();
		const { name, value } = e.target;
		setFormData((formData) => ({
			...formData,
			[name]: value
		}));
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		addBox({ ...formData, id: uuid() });
		setFormData(INITIAL_STATE);
	};
	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="width">Width</label>
			<input id="width" type="text" name="width" value={formData.width} onChange={handleChange}></input>
			<label htmlFor="height">Height</label>
			<input id="height" type="text" name="height" value={formData.height} onChange={handleChange}></input>
			<label htmlFor="backgroundColor">backgroundColor</label>
			<input id="backgroundColor" type="text" name="backgroundColor" value={formData.backgroundColor} onChange={handleChange}></input>
			<button>Submit</button>
		</form>
	);
};

export default NewBoxForm;
