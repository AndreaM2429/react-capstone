import configureStore from 'redux-mock-store';
import '@testing-library/jest-dom';

export const continentsData = [
  {
    id: 'North America',
    name: 'North America',
    casesNumber: '127,246,455',
  },
  {
    id: 'Asia',
    name: 'Asia',
    casesNumber: '219,276,500',
  },
  {
    id: 'Europe',
    name: 'Europe',
    casesNumber: '249,741,569',
  },
  {
    id: 'South America',
    name: 'South America',
    casesNumber: '68,904,449',
  },
  {
    id: 'Australia-Oceania',
    name: 'Australia-Oceania',
    casesNumber: '14,586,753',
  },
  {
    id: 'Africa',
    name: 'Africa',
    casesNumber: '12,836,349',
  },
];

export const countriesData = [
  {
    id: 'Afghanistan',
    name: 'Afghanistan',
    continent: 'Asia',
    population: '40,754,388',
    img: 'https://disease.sh/assets/img/flags/af.png',
    cases: '224,317',
    recovered: '204,341',
    deaths: '7,940',
  },
  {
    id: 'Albania',
    name: 'Albania',
    continent: 'Europe',
    population: '2,866,374',
    img: 'https://disease.sh/assets/img/flags/al.png',
    cases: '334,726',
    recovered: '329,428',
    deaths: '3,602',
  },
  {
    id: 'Algeria',
    name: 'Algeria',
    continent: 'Africa',
    population: '45,350,148',
    img: 'https://disease.sh/assets/img/flags/dz.png',
    cases: '271,852',
    recovered: '183,061',
    deaths: '6,881',
  },
  {
    id: 'Anguilla',
    name: 'Anguilla',
    continent: 'North America',
    population: '15,230',
    img: 'https://disease.sh/assets/img/flags/ai.png',
    cases: '3,904',
    recovered: '3,879',
    deaths: '12',
  },
  {
    id: 'Argentina',
    name: 'Argentina',
    continent: 'South America',
    population: '46,010,234',
    img: 'https://disease.sh/assets/img/flags/ar.png',
    cases: '10,057,945',
    recovered: '9,927,418',
    deaths: '130,527',
  },
  {
    id: 'Australia',
    name: 'Australia',
    continent: 'Australia-Oceania',
    population: '26,068,792',
    img: 'https://disease.sh/assets/img/flags/au.png',
    cases: '11,731,399',
    recovered: '11,698,223',
    deaths: '22,325',
  },
];

export const continentFetchMockData = [
  {
    continent: 'North America',
    cases: 127246455,
  },
  {
    continent: 'Asia',
    cases: 219276500,
  },
  {
    continent: 'Europe',
    cases: 249741569,
  },
  {
    continent: 'South America',
    cases: 68904449,
  },
  {
    continent: 'Australia-Oceania',
    cases: 14586753,
  },
  {
    continent: 'Africa',
    cases: 12836349,
  },
];

export const countryFetchMockData = [
  {
    country: 'Afghanistan',
    continent: 'Asia',
    population: 40754388,
    countryInfo: {
      flag: 'https://disease.sh/assets/img/flags/af.png',
    },
    cases: 224317,
    recovered: 204341,
    deaths: 7940,
  },
  {
    country: 'Albania',
    continent: 'Europe',
    population: 2866374,
    countryInfo: {
      flag: 'https://disease.sh/assets/img/flags/al.png',
    },
    cases: 334726,
    recovered: 329428,
    deaths: 3602,
  },
  {
    country: 'Algeria',
    continent: 'Africa',
    population: 45350148,
    countryInfo: {
      flag: 'https://disease.sh/assets/img/flags/dz.png',
    },
    cases: 271852,
    recovered: 183061,
    deaths: 6881,
  },
  {
    country: 'Anguilla',
    continent: 'North America',
    population: 15230,
    countryInfo: {
      flag: 'https://disease.sh/assets/img/flags/ai.png',
    },
    cases: 3904,
    recovered: 3879,
    deaths: 12,
  },
  {
    country: 'Argentina',
    continent: 'South America',
    population: 46010234,
    countryInfo: {
      flag: 'https://disease.sh/assets/img/flags/ar.png',
    },
    cases: 10057945,
    recovered: 9927418,
    deaths: 130527,
  },
  {
    country: 'Australia',
    continent: 'Australia-Oceania',
    population: 26068792,
    countryInfo: {
      flag: 'https://disease.sh/assets/img/flags/au.png',
    },
    cases: 11731399,
    recovered: 11698223,
    deaths: 22325,
  },
];

const mockStore = configureStore([]);
const store = mockStore({
  continents: {
    loading: false,
    continentFail: false,
    continents: continentsData,
  },
  countries: {
    countrySearched: [],
    loading: false,
    countryFail: false,
    search: false,
    countries: countriesData,
  },
});

export const continentMockData = {
  continents: continentsData,
  loading: false,
  continentFail: false,
};

export const countryMockData = {
  continents: countriesData,
  countrySearched: countriesData,
  loading: false,
  countryFail: false,
  search: false,
};

export default store;
