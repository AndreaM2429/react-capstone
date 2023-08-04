import continentsReducer, { getContinents } from '../redux/continents/continentsSlice';
import {
  continentFetchMockData, continentsData, countryFetchMockData,
  countriesData, continentMockData, countryMockData,
} from '../assets/helpers/storeMock';
import countriesReducer, { getCountries } from '../redux/countries/countriesSlice';

describe('Test continentSlice', () => {
  test('Initial state', () => {
    const initialState = continentsReducer(undefined, {});
    expect(initialState).toEqual({
      continents: [],
      loading: false,
      continentFail: false,
    });
  });
  test('When the app finish loading the getContinents.fulfilled has to have specific information', () => {
    const fulfilledState = continentsReducer(continentMockData, {
      type: getContinents.fulfilled,
      payload: continentFetchMockData,
    });
    expect(fulfilledState.continents).toEqual(continentsData);
    expect(fulfilledState.continentFail).toBe(false);
  });
});

describe('Test countriesSlice', () => {
  test('Initial state', () => {
    const initialState = countriesReducer(undefined, {});
    expect(initialState).toEqual({
      countries: [],
      countrySearched: [],
      loading: false,
      countryFail: false,
      search: false,
    });
  });
  test('When the app finish loading the getCountries.fulfilled has to have specific information', () => {
    const fulfilledState = countriesReducer(countryMockData, {
      type: getCountries.fulfilled,
      payload: countryFetchMockData,
    });
    expect(fulfilledState.countries).toEqual(countriesData);
    expect(fulfilledState.countryFail).toBe(false);
  });
});
