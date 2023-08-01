import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import { BsEmojiSmileUpsideDown } from 'react-icons/bs';
import Header from './Header';

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
    <section>
      <Header path="/" title="Countries Rates of Covid-19 Disease" />
      {continentCountries.map((country) => (
        <NavLink key={country.name} to={country.name}>
          <div>
            <img src={country.img} alt={country.name} />
            <ul>
              <li><h2>{country.name}</h2></li>
              <li>
                Total cases:
                {country.cases}
              </li>
            </ul>
          </div>
        </NavLink>
      ))}
    </section>
  );
}

export default Countries;
