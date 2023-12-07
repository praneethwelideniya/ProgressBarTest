/** @jest-environment jsdom */
import Button from "../Button";
import { fireEvent, render } from "@testing-library/react";

describe("Button component", () => {
  it("renders button with correct title", () => {
    const mockOnClick = jest.fn();
    const title = "Click Me";

    const { getByText } = render(
      <Button onClick={mockOnClick} title={title} />
    );

    const buttonElement = getByText(title);
    expect(buttonElement).toBeInTheDocument();
  });

  it("calls onClick function when button is clicked", () => {
    const mockOnClick = jest.fn();
    const title = "Click Me";

    const { getByText } = render(
      <Button onClick={mockOnClick} title={title} />
    );

    const buttonElement = getByText(title);
    fireEvent.click(buttonElement);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it("matches snapshot", () => {
    const mockOnClick = jest.fn();
    const title = "Click Me";

    const { asFragment } = render(
      <Button onClick={mockOnClick} title={title} />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
