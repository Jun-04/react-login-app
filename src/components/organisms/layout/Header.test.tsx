import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import {Header} from './Header';

test('renders Header component with correct text', () => {
  render(<Header />);
  const headerElement = screen.getByText('This is Header page');
  expect(headerElement).toBeInTheDocument();
});
