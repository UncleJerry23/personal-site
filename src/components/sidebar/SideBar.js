import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { getVisited } from '../../selectors/siteSelectors';
import styles from './sideBar.css';

const SideBar = ({ history }) => {
  let selected = 'about-me';
  const page = history.location.pathname.slice(1);
  page === '' ? selected = 'home' : selected = page;
  
  const didVisit = useSelector(getVisited);
  let menuColor = didVisit ? '' : 'Yellower';

  useEffect(() => {
    const old = document.querySelector(`.${styles.selected}`);
    if(old) old.className = '';
    document.getElementById(selected).className = styles.selected;
  });

  return (
    <section className={styles.sidebar}>
      <h2 className={styles[menuColor]}>Menu</h2>

      <div>
        <Link id="home" to="/">Home</Link>
        <Link id="about-me" to="/about-me">About Me</Link>
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
