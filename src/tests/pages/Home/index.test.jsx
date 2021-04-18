import { render, screen } from '@Tests/testUtils';
import Home from '@Pages/Home';

test('renders hello world', () => {
  render(<Home />);
  const helloElement = screen.getByText(/hello world/i);
  expect(helloElement).toBeInTheDocument();
});
