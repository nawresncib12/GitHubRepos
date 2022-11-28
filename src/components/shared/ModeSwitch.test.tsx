import { render, screen } from "@testing-library/react";
import ModeSwitch from "./ModeSwitch";
const mockedChangeMode = jest.fn();
describe("ModeSwitch", () => {
  it("to have class correspending to mode prop", () => {
    render(<ModeSwitch changeMode={mockedChangeMode} mode="dark" />);
    const switchButton = screen.getByTestId("switch");
    expect(switchButton).toHaveClass("dark");
  });
});
