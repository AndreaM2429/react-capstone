import '../Styles/continent.css';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { BsBoxArrowUpRight } from 'react-icons/bs';
import Header, { style } from './Header';
import { images } from '../redux/continents/continentsSlice';
import { filterCountry, cleanCountry } from '../redux/countries/countriesSlice';

function Continents() {
  const dispatch = useDispatch();

  const searchCountry = (ev) => {
    const inputCountry = ev.target.value;
    dispatch(cleanCountry(inputCountry));
    dispatch(filterCountry(inputCountry));
  };
  const { continents } = useSelector((state) => state.continents);
  const { countrySearched, search } = useSelector((state) => state.countries);

  if (search) {
    return (
      <>
        <Header path="/" title="Global Rates of Covid-19 Disease" />
        <div className="d-flex">
          <input type="text" id="country" name="country" placeholder="Country Name" onChange={searchCountry} />
        </div>
        <ul className="continet-container">
          {countrySearched.map((country) => (
            <li key={country.id}>
              <NavLink to={`/${country.continent}/${country.name}`} className="d-flex-colum">
                <span className="icons d-flex continent-icon"><BsBoxArrowUpRight style={style} /></span>
                <div className="d-flex img-container"><img src={country.img} alt={country.name} loading="lazy" /></div>
                <div>
                  <h3>{country.name}</h3>
                  <span className="cases-span">
                    {`Total cases: ${country.cases}`}
                  </span>
                </div>
              </NavLink>
            </li>
          ))}
        </ul>
      </>
    );
  }

  return (
    <>
      <Header path="/" title="Global Rates of Covid-19 Disease" />
      <div className="d-flex search-container">
        <input type="text" id="country" name="country" placeholder="Search Country Name" onChange={searchCountry} />
      </div>
      <ul className="continet-container">
        {continents.map((continent) => (
          <li key={continent.id}>
            <NavLink to={`/${continent.name}`} className="d-flex-colum">
              <span className="icons d-flex continent-icon"><BsBoxArrowUpRight style={style} /></span>
              <div className="d-flex img-container"><img src={images[continent.name]} alt={continent.name} loading="lazy" /></div>
              <div>
                <h3>{continent.name}</h3>
                <span className="cases-span">
                  {`Total cases: ${continent.casesNumber}`}
                </span>
              </div>
            </NavLink>
          </li>
        ))}
      </ul>

    </>
  );
}

export default Continents;
