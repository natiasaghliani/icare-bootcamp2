import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Counter from '../page';

test('Counter increments and decrements correctly', () => {
  const { getByText } = render(<Counter />);

  const counter = screen.getByText(/Counter:/);
  const incrementButton = screen.getByText('+');
  const decrementButton = screen.getByText('-');

  expect(counter).toHaveTextContent('Counter: 0');

  fireEvent.click(incrementButton);
  expect(counter).toHaveTextContent('Counter: 1');

  fireEvent.click(decrementButton);
  expect(counter).toHaveTextContent('Counter: 0');
});