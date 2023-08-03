import '../Styles/details.css';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { FaPeopleGroup } from 'react-icons/fa6';
import { FaClipboardList } from 'react-icons/fa';
import { PiHandHeartDuotone } from 'react-icons/pi';
import { GiDeathJuice } from 'react-icons/gi';
import Header from './Header';
import { cleanCountry } from '../redux/countries/countriesSlice';

const style = { color: 'white', width: '100%', height: '100%' };

function CountriesDetails() {
  const dispatch = useDispatch();
  dispatch(cleanCountry(''));
  const urldata = useParams();
  const countryName = urldata.country;
  const { countries } = useSelector((state) => state.countries);

  const countryData = countries.filter((country) => country.name === countryName);
  return (
    <>
      <Header path={`/${countryData[0].continent}`} title="Rates of Covid-19 Disease" />
      <section>
        <div className="d-flex country-details continent">
          <img src={countryData[0].img} alt={countryData[0].name} loading="lazy" />
          <h2>{countryName}</h2>
        </div>
        <div className="message d-flex">
          <span>Country Rates Details</span>
        </div>
        <div>
          <ul className="d-flex-colum countries-container details">
            <li className="d-flex">
              <span className="detail-icon d-flex"><FaPeopleGroup style={style} /></span>
              <span className="country-numbers">{`Population: ${countryData[0].population}`}</span>
            </li>
            <li className="d-flex">
              <span className="detail-icon d-flex"><FaClipboardList style={style} /></span>
              <span className="country-numbers">{`Total cases: ${countryData[0].cases}`}</span>
            </li>
            <li className="d-flex">
              <span className="detail-icon d-flex"><PiHandHeartDuotone style={style} /></span>
              <span className="country-numbers">{`Total people recovered: ${countryData[0].recovered}`}</span>
            </li>
            <li className="d-flex">
              <span className="detail-icon d-flex"><GiDeathJuice style={style} /></span>
              <span className="country-numbers">{`Total deaths: ${countryData[0].deaths}`}</span>
            </li>
          </ul>
        </div>
      </section>

    </>
  );
}

export default CountriesDetails;
