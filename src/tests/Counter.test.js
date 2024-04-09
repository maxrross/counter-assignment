import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter'; 

beforeEach(() => {
  render(<Counter />);
});

test('renders counter message', () => {
  const counterTitle = screen.getByText(/Counter/i);
  expect(counterTitle).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  const initialCountValue = screen.getByTestId('count');
  expect(initialCountValue).toHaveTextContent('0');
});


test('clicking + increments the count', () => {
  const incrementButton = screen.getByText('+');
  fireEvent.click(incrementButton);
  const countValueAfterIncrement = screen.getByTestId('count');
  expect(countValueAfterIncrement).toHaveTextContent('1');
});


test('clicking - decrements the count', () => {
  const incrementButton = screen.getByText('+');
  fireEvent.click(incrementButton);
  const decrementButton = screen.getByText('-');
  fireEvent.click(decrementButton);
  const countValueAfterDecrement = screen.getByTestId('count');
  expect(countValueAfterDecrement).toHaveTextContent('0');
});

