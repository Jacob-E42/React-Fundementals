import React, { useState } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";

const TodoList = () => {
	const [todos, setTodos] = useState([]);
	const add = todo => {
		setTodos(todos => [...todos, todo]);
	};
	const remove = id => {
		setTodos(todos => todos.filter(todo => todo.id !== id));
	};

	const todoComponents = todos.map(todo => {
		return (
			<Todo
				task={todo.task}
				key={todo.id}
				id={todo.id}
				remove={remove}
			/>
		);
	});

	return (
		<div>
			<NewTodoForm add={add} />
			<ul>{todoComponents}</ul>
		</div>
	);
};

export default TodoList;
