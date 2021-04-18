import { render } from '@Tests/testUtils';
import App from '../App';

describe('<App />', () => {
  test('renders pages', () => {
    const { container } = render(<App />);

    expect(container.children.length).toBeGreaterThan(0);
  });
});
