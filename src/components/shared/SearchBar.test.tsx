import { render, screen, fireEvent } from "@testing-library/react";
import { ToastContainer } from "react-toastify";
import SearchBar from "./SearchBar";

describe("SearchBar", () => {
  it("to render input element with provided placeholder", () => {
    render(<SearchBar placeholder="search user" />);
    const input = screen.getByPlaceholderText("search user");
    expect(input).toBeInTheDocument();
  });
  it("to render button element", () => {
    render(<SearchBar />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
  it("to show error if required is true and button is clicked on empty search", async () => {
    render(
      <>
        <ToastContainer />
        <SearchBar required></SearchBar>
      </>
    );
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(
      await screen.findByText("Please fill in search value")
    ).toBeInTheDocument();
  });
});
