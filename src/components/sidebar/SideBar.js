import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { useSideBar } from '../../hooks/useSideBar';
import styles from './sideBar.css';

const SideBar = ({ history }) => {
  useSideBar(styles, history);

  return (
    <section className={styles.Sidebar}>
      <h2>Menu</h2>

      <div className={styles.Links}>
        <Link id="home" to="/">Home</Link>
        <Link id="about-me" to="/about-me">About Me</Link>
        <Link id="about-site" to="/about-site">About this site</Link>
        <Link id="why" to="/why">WHY IS THIS ON THE RIGHT SIDE OF THE PAGE?!?!?</Link>
        <Link id="projects" to="/projects">Projects</Link>
      </div>
    </section>
  );
};

SideBar.propTypes = {
  history: PropTypes.object.isRequired
};

export default withRouter(SideBar);
