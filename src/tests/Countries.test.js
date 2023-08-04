import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router';
import { Provider } from 'react-redux';
import Countries from '../components/Countries';
import store from '../assets/helpers/storeMock';

describe('Countries components test', () => {
  test('The Countries component render Asia countries correctly', () => {
    const tree = render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/Asia']}>
          <Routes>
            <Route path="/:continent" element={<Countries />} />
          </Routes>
        </MemoryRouter>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
  test('The Countries component render Europe countries correctly', () => {
    const tree = render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/Europe']}>
          <Routes>
            <Route path="/:continent" element={<Countries />} />
          </Routes>
        </MemoryRouter>
      </Provider>,
    );
    const nameCountry = tree.getByText(/Albania/i);
    expect(tree).toMatchSnapshot();
    expect(nameCountry).toBeInTheDocument();
  });
  test('The Countries component render South America countries correctly', () => {
    const tree = render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/South America']}>
          <Routes>
            <Route path="/:continent" element={<Countries />} />
          </Routes>
        </MemoryRouter>
      </Provider>,
    );
    const nameCountry = tree.getByText(/Argentina/i);
    expect(tree).toMatchSnapshot();
    expect(nameCountry).toBeInTheDocument();
  });
});
