import { render, screen } from '@testing-library/react';
import Button from './Button';

test('renders component', () => {
  render(<Button text="my test" />);
  const linkElement = screen.getByText(/my test/i);
  expect(linkElement).toBeInTheDocument();
});
