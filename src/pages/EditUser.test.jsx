import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, useParams } from "react-router-dom";
import EditUser from "./EditUser";

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: jest.fn(),
}));

test('displays user ID from route', () => {
    useParams.mockReturnValue({ id: '789'});

    render(
        <MemoryRouter>
            <EditUser />
        </MemoryRouter>
    );

    // Check if user not found message appears when no such user
  expect(screen.getByText(/User not found!/i)).toBeInTheDocument();
    expect(screen.getByText(/Editing user ID: 789/i)).toBeInTheDocument();
})