import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router';
import { Provider } from 'react-redux';
import CountriesDetails from '../components/CountriesDetail';
import store from '../assets/helpers/storeMock';

describe('CountriesDetail component test', () => {
  test('The CountriesDetail component render Afganistan information correctly', () => {
    const tree = render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/North America/Anguilla']}>
          <Routes>
            <Route path="/:continent/:country" element={<CountriesDetails />} />
          </Routes>
        </MemoryRouter>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
  test('The CountriesDetail component render Afganistan information correctly', () => {
    const tree = render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/Australia-Oceania/Australia']}>
          <Routes>
            <Route path="/:continent/:country" element={<CountriesDetails />} />
          </Routes>
        </MemoryRouter>
      </Provider>,
    );
    const population = tree.getByText(/Population: 26,068,792/i);
    expect(tree).toMatchSnapshot();
    expect(population).toBeInTheDocument();
  });
  test('The CountriesDetail component render Afganistan information correctly', () => {
    const tree = render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/Africa/Algeria']}>
          <Routes>
            <Route path="/:continent/:country" element={<CountriesDetails />} />
          </Routes>
        </MemoryRouter>
      </Provider>,
    );
    const population = tree.getByText(/Population: 45,350,148/i);
    expect(tree).toMatchSnapshot();
    expect(population).toBeInTheDocument();
  });
});
