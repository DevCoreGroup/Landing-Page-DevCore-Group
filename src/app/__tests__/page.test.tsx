import { render } from '@testing-library/react';
import HomePage from '../page';

describe('HomePage', () => {
  it('renders without crashing', () => {
    render(<HomePage />);
  });
});
