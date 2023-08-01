import PropTypes from 'prop-types';
import { BiMicrophone } from 'react-icons/bi';
import { IoIosSettings } from 'react-icons/io';
import { IoChevronBackSharp } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';

function Header({ path, title }) {
  return (
    <header>
      <span><NavLink to={path}><IoChevronBackSharp /></NavLink></span>
      <h1>{title}</h1>
      <ul>
        <li><BiMicrophone /></li>
        <li><IoIosSettings /></li>
      </ul>
    </header>
  );
}

Header.propTypes = {
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;
