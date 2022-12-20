import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Skill from "./Skill";

describe("Skill display", () => {
  it("should display", () => {
    render(<Skill name="PHP" rating={12} />);

    expect(screen.getByText(/PHP/i)).toBeInTheDocument();
    expect(screen.getByText(/12/i)).toBeInTheDocument();
    expect(screen.getByRole("listitem")).toBeInTheDocument();
  });
});
