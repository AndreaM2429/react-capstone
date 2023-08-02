import '../Styles/details.css';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { FaPeopleGroup } from 'react-icons/fa6';
import { FaClipboardList } from 'react-icons/fa';
import { PiHandHeartDuotone } from 'react-icons/pi';
import { GiDeathJuice } from 'react-icons/gi';
import Header from './Header';

const style = { color: 'white', fontSize: '18px', marginLeft: '15px' };

function CountriesDetails() {
  const urldata = useParams();
  const countryName = urldata.country;
  const { countries } = useSelector((state) => state.countries);

  const countryData = countries.filter((country) => country.name === countryName);
  return (
    <>
      <Header path={`/${countryData[0].continent}`} title="Rates of Covid-19 Disease" />
      <section>
        <div className="d-flex continent country-details">
          <img src={countryData[0].img} alt={countryData[0].name} loading="lazy" />
          <h2>{countryName}</h2>
        </div>
        <div className="message d-flex">
          <span>Country Rates Details</span>
        </div>
        <div>
          <ul className="d-flex-colum countries-container details">
            <li className="d-flex">
              <FaPeopleGroup style={style} />
              <span>{`Population: ${countryData[0].population}`}</span>
            </li>
            <li className="d-flex">
              <FaClipboardList style={style} />
              <span>{`Total cases: ${countryData[0].cases}`}</span>
            </li>
            <li className="d-flex">
              <PiHandHeartDuotone style={style} />
              <span>{`Total people recovered: ${countryData[0].recovered}`}</span>
            </li>
            <li className="d-flex">
              <GiDeathJuice style={style} />
              <span>{`Total deaths: ${countryData[0].deaths}`}</span>
            </li>
          </ul>
        </div>
      </section>

    </>
  );
}

export default CountriesDetails;
