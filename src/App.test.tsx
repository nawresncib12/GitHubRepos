import { render, screen } from "@testing-library/react";
import App from "./App";

it("to render navbar title", () => {
  render(<App />);
  const linkElement = screen.getByText(/Github/i);
  expect(linkElement).toBeInTheDocument();
});
