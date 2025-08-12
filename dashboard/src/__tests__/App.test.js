import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

test('navigates to /ventes', () => {
  render(
    <MemoryRouter initialEntries={['/ventes']}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByText(/Sales Chart/i)).toBeInTheDocument();
});

test('navigates to /stocks', () => {
  render(
    <MemoryRouter initialEntries={['/stocks']}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByText(/Stocks Page/i)).toBeInTheDocument();
});

test('navigates to /clients', () => {
  render(
    <MemoryRouter initialEntries={['/clients']}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByText(/Clients Page/i)).toBeInTheDocument();
});
