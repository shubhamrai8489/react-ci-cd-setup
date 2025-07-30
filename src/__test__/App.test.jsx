import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

test('renders Vite + React text', () => {
  render(<App />);
  const headerElement = screen.getByText(/Vite \+ React/i);
  expect(headerElement).to.exist;
});

test('increments count on button click', () => {
  render(<App />);
  const buttonElement = screen.getByText(/count is 0/i);
  expect(buttonElement).to.exist;

  fireEvent.click(buttonElement);
  expect(buttonElement.textContent).to.include('count is 1');

  fireEvent.click(buttonElement);
  expect(buttonElement.textContent).to.include('count is 2');
});
