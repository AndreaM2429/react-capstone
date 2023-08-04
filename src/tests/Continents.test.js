import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { Provider } from 'react-redux';
import Continents from '../components/Continents';
import store from '../assets/helpers/storeMock';

describe('Continents components test', () => {
  test('The Continents component render correctly', () => {
    const tree = render(
      <Provider store={store}>
        <MemoryRouter>
          <Continents />
        </MemoryRouter>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
