import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home />);

    expect(screen.getByTestId("nature-benefits-section")).toBeInTheDocument();
  });
});
