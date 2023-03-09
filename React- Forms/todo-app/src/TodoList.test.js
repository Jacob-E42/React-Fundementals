import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";

test("smoketest and snapshot test for TodoList", () => {
	const { asFragment } = render(<TodoList />);
	expect(asFragment).toMatchSnapshot();
});

test("form submits new todo properly", () => {
	const { getByLabelText, queryByText } = render(<TodoList />);
	const taskInput = getByLabelText("Task");
	const button = queryByText("Submit");

	expect(queryByText("go to sleep")).not.toBeInTheDocument();
	fireEvent.change(taskInput, { target: { value: "go to sleep" } });
	fireEvent.click(button);

	expect(queryByText("go to sleep")).toBeInTheDocument();
});
