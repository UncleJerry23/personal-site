import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import styles from './header.css';

const header = {
  ['']: 'Home',
  ['about-me']: 'Who am I?',
  ['about-site']: 'About this site',
  ['why']: 'Right Side Menu??',
  ['projects']: 'His Works',
  ['contact']: 'Contact'
};


const Header = ({ history }) => {
  let selected = 'about-me';
  let location = history.location.pathname.slice(1);
  location === '' ? selected = 'home' : selected = location;

  const [isOpen, setOpen] = useState(false);

  const open = () =>setOpen(true);
  const close = () =>setOpen(false);
  const toggleMenu = () => isOpen ? close() : open();

  useEffect(() => {
    const old = document.querySelector(`.${styles.selected}`);
    if(old) old.className = '';
    document.getElementById(selected).className = styles.selected;
  });

  return (
    <div className={styles['Header-Container']}>
      <header className={styles.Header} >
        <Link to="/">
          <h1>jared-Myhrberg</h1>
        </Link>
        <h3>&gt; {header[location]}</h3>
      </header>

      <section className={styles.Burger} onClick={toggleMenu}>
        <div className={styles['Burger-Slice']}></div>
        <div className={styles['Burger-Slice']}></div>
        <div className={styles['Burger-Slice']}></div>
      </section>
      
      <div className={isOpen ? styles.Menu : styles.Close}>
        <Link onClick={close} id="home" to="/">Home</Link>
        <Link onClick={close} id="about-me" to="/about-me">About Me</Link>
        <Link onClick={close} id="about-site" to="/about-site">About this site</Link>
        <Link onClick={close} id="why" to="/why">WHY IS THIS ON THE RIGHT SIDE OF THE PAGE?!?!?</Link>
        <Link onClick={close} id="projects" to="/projects">Projects</Link>
        <Link onClick={close} id="contact" to="/contact">Contact Info</Link>
      </div>
      <div className={isOpen ? styles.Pointer : styles.Close}></div>
    </div>
  );
};

Header.propTypes = {
  history: PropTypes.object.isRequired
};

export default withRouter(Header);
