import { render, screen } from "@testing-library/react";
import App from "./App";

it("to render hero title", () => {
  render(<App />);
  const linkElement = screen.getByText(/Fetch Github Repositories per user/i);
  expect(linkElement).toBeInTheDocument();
});
