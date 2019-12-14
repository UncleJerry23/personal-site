import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import styles from './header.css';
import Burger from './Burger';

const header = {
  ['']: 'Home',
  ['about-me']: 'Who am I?',
  ['about-site']: 'About this site',
  ['why']: 'Right Side Menu??',
  ['projects']: 'His Works',
  ['contact']: 'Contact'
};


const Header = ({ history }) => {
  return (
    <div className={styles['Header-Container']}>
      <header className={styles.Header} >
        <Link to="/">
          <h1>jared-myhrberg</h1>
        </Link>
        <h3>&gt; {header[history.location.pathname.slice(1)]}</h3>
      </header>

      <Burger/>

    </div>
  );
};

Header.propTypes = {
  history: PropTypes.object.isRequired
};

export default withRouter(Header);
