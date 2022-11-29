import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
  it("to render button with class primary when type primary", () => {
    render(<Button type="primary" />);
    const primaryButton = screen.getByRole("button");
    expect(primaryButton).toHaveClass("primary");
  });
  it("to render button with class secondary when typpe secondary", () => {
    render(<Button type="secondary" />);
    const secondaryButton = screen.getByRole("button");
    expect(secondaryButton).toHaveClass("secondary");
  });
  it("to render button with class noHover when noHover is true", () => {
    render(<Button type="secondary" noHover />);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("noHover");
  });
  it("to show button text", () => {
    render(<Button type="secondary" text="test" />);
    const text = screen.getByText("test");
    expect(text).toBeInTheDocument();
  });
});
