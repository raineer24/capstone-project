import React from "react";
import { render, screen } from "@testing-library/react";
import CreateUser from "./CreateUser";

test("renders create user form", () => {
  render(<CreateUser />);
  expect(
    screen.getByLabelText(/Name/i)
  ).toBeInTheDoument();
});

