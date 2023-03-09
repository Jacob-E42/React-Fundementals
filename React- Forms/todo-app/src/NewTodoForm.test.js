import { render, fireEvent } from "@testing-library/react";
import NewTodoForm from "./NewTodoForm";

test("smoketest and snapshot test for NewTodoForm", () => {
	const { asFragment } = render(<NewTodoForm />);
	expect(asFragment).toMatchSnapshot();
});
