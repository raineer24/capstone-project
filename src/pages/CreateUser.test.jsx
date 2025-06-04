import React from "react";
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CreateUser from "./CreateUser";

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
}));


test("renders create user form", () => {
  render(
    <MemoryRouter>
      <CreateUser />
    </MemoryRouter>
  );

  expect(screen.getByLabelText(/Name/i)).toBeInTheDoument();
});
