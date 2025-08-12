import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SalesChart from '../SalesChart';

test('renders SalesChart component', () => {
  render(<SalesChart />);
  expect(screen.getByText(/Sales Chart/i)).toBeInTheDocument();
});
