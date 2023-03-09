import { render, screen } from "@testing-library/react";
import Todo from "./Todo";

test("smoketest and snapshot test for Todo", () => {
	const { asFragment } = render(<Todo />);
	expect(asFragment).toMatchSnapshot();
});
