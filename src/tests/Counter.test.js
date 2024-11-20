// ImportLibrarys to testing 
import { render, screen, fireEvent } from '@testing-library/react';
// Import counter.js 
import Counter from '../components/Counter';

beforeEach(() => {
  render(<Counter />);
  
})


// test the counter message
test('renders counter message', () => {
  
  const heading = screen.getByText(/counter/i);
  expect(heading).toBeInTheDocument();
});
//test the value starts with 0 
test('should render initial count with value of 0', () => {
  
  const count = screen.getByTestId('count');
  expect(count).toHaveTextContent('0');
});
// test if count incremetnts by clicling +
test('clicking + increments the count', () => {
  
  const incrementButton = screen.getByText('+');
  fireEvent.click(incrementButton);
  const count = screen.getByTestId('count');
  expect(count).toHaveTextContent('1');
});
//test if count decrements by clicling -
test('clicking - decrements the count', () => {

  const decrementButton = screen.getByText('-');
  fireEvent.click(decrementButton);
  const count = screen.getByTestId('count');
  expect(count).toHaveTextContent('-1');
});

