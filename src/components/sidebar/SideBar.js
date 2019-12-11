import React, { useEffect } from 'react';

import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import styles from './sideBar.css';

const SideBar = (props) => {
  let selected = 'about-me';
  const page = props.history.location.pathname.slice(1);
  page === '' ? selected = 'about-me' : selected = page;
  
  useEffect(() => {
    const old = document.querySelector(`.${styles.selected}`);
    if(old) old.className = '';
    document.getElementById(selected).className = styles.selected;
  });

  return (
    <section className={styles.sidebar}>
      <h2>Menu</h2>

      <div>
        <Link id="about-me" to="/">About Me</Link>
        <Link id="about-site" to="/about-site">About this site</Link>
        <Link id="why" to="/why">WHY IS THIS ON THE RIGHT SIDE OF THE PAGE?!?!?</Link>
        <Link id="projects" to="/projects">Projects</Link>
        <Link id="contact" to="/contact">Contact Info</Link>
      </div>
    </section>
  );
};

SideBar.propTypes = {
  history: PropTypes.object.isRequired
};

export default withRouter(SideBar);
