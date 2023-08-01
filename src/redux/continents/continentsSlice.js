import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  continents: [],
  loading: false,
  continentFail: false,
};

const url = 'https://disease.sh/v3/covid-19/continents';

export const getContinents = createAsyncThunk('get/continents', async (thunkAPI) => {
  try {
    const continents = await axios.get(url);
    return continents.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

const continentsSlice = createSlice({
  name: 'continents',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getContinents.pending, (state) => {
        state.loading = true;
      })
      .addCase(getContinents.fulfilled, (state, action) => {
        state.loading = false;
        const continentArr = action.payload;
        state.continents = continentArr.map((continents) => ({
          id: continents.continent,
          name: continents.continent,
          casesNumber: continents.cases,
        }));
      })
      .addCase(getContinents.rejected, (state) => {
        state.continentFail = true;
      });
  },
});

export default continentsSlice.reducer;
