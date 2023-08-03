import '../Styles/header.css';
import PropTypes from 'prop-types';
import { BiMicrophone } from 'react-icons/bi';
import { IoIosSettings } from 'react-icons/io';
import { IoChevronBackSharp } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';

export const style = { color: 'white', width: '100%', height: '100%' };

function Header({ path, title }) {
  return (
    <header className="header d-flex">
      <span className="icons"><NavLink to={path}><IoChevronBackSharp style={style} /></NavLink></span>
      <h1>{title}</h1>
      <ul className="d-flex">
        <li className="icons"><BiMicrophone style={style} /></li>
        <li className="icons"><IoIosSettings style={style} /></li>
      </ul>
    </header>
  );
}

Header.propTypes = {
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;
