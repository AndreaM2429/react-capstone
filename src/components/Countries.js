import '../Styles/countries.css';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import { BsEmojiSmileUpsideDown } from 'react-icons/bs';
import { BiRightArrowCircle } from 'react-icons/bi';
import Header, { style } from './Header';
import { images } from '../redux/continents/continentsSlice';

function Countries() {
  const urldata = useParams();
  const continentName = urldata.continent;
  const { countries, countryFail } = useSelector((state) => state.countries);

  const continentCountries = countries.filter((country) => country.continent === continentName);

  if (countryFail) {
    return (
      <div>
        <h2>
          <BsEmojiSmileUpsideDown />
          Ups....something went wrong!
          <br />
          Please try again later
        </h2>
      </div>
    );
  }

  return (
    <>
      <Header path="/" title="Rates of Covid-19 Disease" />
      <div className="d-flex continent">
        <img src={images[continentName]} alt={continentName} loading="lazy" />
        <h2>
          {`${continentName} Countries`}
        </h2>
      </div>
      <div className="message d-flex">
        <span>Countries By Continent</span>
      </div>
      <section>
        <ul className="d-flex-colum countries-container">
          {continentCountries.map((country) => (
            <li className="d-flex" key={country.name}>
              <NavLink className="d-flex country" to={country.name}>
                <img src={country.img} alt={country.name} loading="lazy" />
                <div className="d-flex country-data">
                  <div className="d-flex-colum">
                    <h2>{country.name}</h2>
                    <span>
                      {`Total Cases: ${country.cases}`}
                    </span>
                  </div>
                  <BiRightArrowCircle style={style} />
                </div>
              </NavLink>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default Countries;
