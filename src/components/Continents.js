import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from './Header';
import { images } from '../redux/continents/continentsSlice';

function Continents() {
  const { continents } = useSelector((state) => state.continents);
  return (
    <>
      <Header path="/" title="Global Rates of Covid-19 Disease" />
      <div>
        {continents.map((continent) => (
          <NavLink key={continent.id} to={`/${continent.name}`}>
            <img src={images[continent.name]} alt={continent.name} />
            <div>
              <h3>{continent.name}</h3>
              <span>
                Total cases:
                {continent.casesNumber}
              </span>
            </div>
          </NavLink>
        ))}
      </div>

    </>
  );
}

export default Continents;
