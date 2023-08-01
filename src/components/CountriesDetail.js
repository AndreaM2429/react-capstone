import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import Header from './Header';

function CountriesDetails() {
  const urldata = useParams();
  const countryName = urldata.country;
  const { countries } = useSelector((state) => state.countries);

  const countryData = countries.filter((country) => country.name === countryName);
  return (
    <>
      <Header path={`/${countryData[0].continent}`} title={`${countryName} Rates of Covid-19 Disease`} />
      <section>
        <h3>Countries</h3>
        <div>
          <img src={countryData[0].img} alt={countryData[0].name} />
          <ul>
            <li><h2>{countryName}</h2></li>
            <li>
              Population:
              {countryData[0].population}
            </li>
            <li>
              Total cases:
              {countryData[0].cases}
            </li>
            <li>
              Total people recovered:
              {countryData[0].recovered}
            </li>
            <li>
              Total deaths:
              {countryData[0].deaths}
            </li>
          </ul>
        </div>
      </section>

    </>
  );
}

export default CountriesDetails;
