import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "./Home";

test("renders welcome message", () => {
  render(<Home />);
  expect(
    screen.getByText(/Welcome to the User Management App/i)
  ).toBeInTheDocument();
});
