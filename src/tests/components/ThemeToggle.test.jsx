import { render, screen } from '@Tests/testUtils';
import ThemeToggle from '@Components/ThemeToggle';

test('renders toggle in light mode', () => {
  render(<ThemeToggle />);
  const element = screen.getByText('🌙');
  expect(element).toBeInTheDocument();
});

test('renders toggle in dark mode', () => {
  render(<ThemeToggle />);

  const button = screen.getByRole('button');
  button.click();

  const element = screen.getByText('☀️');
  expect(element).toBeInTheDocument();
});
