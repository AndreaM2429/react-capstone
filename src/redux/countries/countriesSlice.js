import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { numberFormat } from '../../assets/helpers/numberFormat';

const initialState = {
  countries: [],
  countrySearched: [],
  loading: false,
  countryFail: false,
  search: false,
};

const url = 'https://disease.sh/v3/covid-19/countries';

export const getCountries = createAsyncThunk('get/countries', async (thunkAPI) => {
  try {
    const countries = await axios.get(url);
    return countries.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    filterCountry: (state, action) => {
      const countryName = action.payload;
      state.countrySearched = state.countries.filter(
        (country) => country.name.toLowerCase().includes(countryName.toLowerCase()),
      );
    },
    cleanCountry: (state, action) => {
      const countryName = action.payload;
      state.search = (countryName !== '');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCountries.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCountries.fulfilled, (state, action) => {
        state.loading = false;
        const countriesArr = action.payload;
        state.countries = countriesArr.map((country) => ({
          id: country.country,
          name: country.country,
          continent: country.continent,
          population: numberFormat(country.population),
          img: country.countryInfo.flag,
          cases: numberFormat(country.cases),
          recovered: numberFormat(country.recovered),
          deaths: numberFormat(country.deaths),

        }));
        state.countrySearched = state.countries;
      })
      .addCase(getCountries.rejected, (state) => {
        state.countryFail = true;
      });
  },
});

export const { filterCountry, cleanCountry } = countriesSlice.actions;
export default countriesSlice.reducer;
