import { render, screen } from "@testing-library/react";
import App from "./App";

test("smoketestand snapshot test  for App", () => {
	const { asFragment } = render(<App />);
	expect(asFragment).toMatchSnapshot();
});
