// ImportLibrarys to testing 
import { render, screen, fireEvent } from '@testing-library/react';
// Import counter.js 
import Counter from '../components/Counter';



test('renders counter message', () => {
  render(<Counter />);
  const heading = screen.getByText(/counter/i);
  expect(heading).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  render(<Counter />);
  const count = screen.getByTestId('count');
  expect(count).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  render(<Counter />);
  const incrementButton = screen.getByText('+');
  fireEvent.click(incrementButton);
  const count = screen.getByTestId('count');
  expect(count).toHaveTextContent('1');
});

test('clicking - decrements the count', () => {
  render(<Counter />);
  const decrementButton = screen.getByText('-');
  fireEvent.click(decrementButton);
  const count = screen.getByTestId('count');
  expect(count).toHaveTextContent('-1');
});

