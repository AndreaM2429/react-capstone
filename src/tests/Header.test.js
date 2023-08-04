import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import Header from '../components/Header';

describe('Header component tests', () => {
  test('The Header component render correctly', () => {
    const tree = render(
      <MemoryRouter initialEntries={['/']}>
        <Header path="/" title="Home" />
      </MemoryRouter>,
    );

    expect(tree).toMatchSnapshot();
  });

  test("The tittle in the header has to be 'Home'", () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Header path="/" title="Home" />
      </MemoryRouter>,
    );
    const headerTitle = screen.getByText(/Home/i);
    expect(headerTitle).toBeInTheDocument();
  });
});
