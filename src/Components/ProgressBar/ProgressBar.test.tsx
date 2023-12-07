import { render, fireEvent, waitFor } from "@testing-library/react";
import ProgressBar from "../ProgressBar";

describe("ProgressBar component", () => {
  it("renders progress bar with correct width and color", () => {
    const { getByText, getByRole } = render(<ProgressBar progress={50} />);

    const progressText = getByText("50%");
    const progressBar = getByRole("progressbar");

    expect(progressText).toBeInTheDocument();
    expect(progressBar).toHaveStyle("width: 50%");
    expect(progressBar).toHaveClass("bg-blue-200");
  });

  it("changes color to red when progress exceeds 100%", () => {
    const { getByRole } = render(<ProgressBar progress={110} />);

    const progressBar = getByRole("progressbar");

    waitFor(() => {
      expect(progressBar).toHaveStyle("width: 110%");
      expect(progressBar).toHaveClass("bg-red-600");
    });
  });

  it("changes color back to blue when progress is within 100%", () => {
    const { getByRole } = render(<ProgressBar progress={110} />);

    const progressBar = getByRole("progressbar");

    waitFor(() => {
      fireEvent.transitionEnd(progressBar); // Simulate transition end

      expect(progressBar).toHaveStyle("width: 110%");
      expect(progressBar).toHaveClass("bg-red-600");

      render(<ProgressBar progress={90} />, { container: document.body });

      expect(progressBar).toHaveStyle("width: 90%");
      expect(progressBar).toHaveClass("bg-blue-200");
    });
  });
});
