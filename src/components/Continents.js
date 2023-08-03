import '../Styles/continent.css';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { BsBoxArrowUpRight } from 'react-icons/bs';
import Header, { style } from './Header';
import { images } from '../redux/continents/continentsSlice';

function Continents() {
  const { continents } = useSelector((state) => state.continents);
  return (
    <>
      <Header path="/" title="Global Rates of Covid-19 Disease" />
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
