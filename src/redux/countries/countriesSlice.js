import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  countries: [],
  loading: false,
  countryFail: false,
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
          population: country.population,
          img: country.countryInfo.flag,
          cases: country.cases,
          recovered: country.recovered,
          deaths: country.deaths,

        }));
      })
      .addCase(getCountries.rejected, (state) => {
        state.countryFail = true;
      });
  },
});

export default countriesSlice.reducer;
