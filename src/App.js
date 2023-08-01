import './Styles/App.css';
import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getContinents } from './redux/continents/continentsSlice';
import { getCountries } from './redux/countries/countriesSlice';
import Countries from './compopnents/Countries';
import Home from './routes/Home';
import CountriesDetails from './compopnents/CountriesDetail';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContinents());
    dispatch(getCountries());
  }, [dispatch]);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:continent" element={<Countries />} />
        <Route path="/:continent/:country" element={<CountriesDetails />} />
      </Routes>
    </div>
  );
}

export default App;
