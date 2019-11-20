import React from 'react';
import PropTypes from 'prop-types';
import styles from './sideBar.css';

const SideBar = ({ cssId }) => {
  return (
    <section id={cssId} className={styles.sidebar}>
      <h2>SideBar</h2>
      <ul>
        <li value='why'>WHY IS THIS ON THE RIGHT SIDE OF THE PAGE?!?!?</li>
        <li value='about'>About this site</li>
        <li value='projects'>Projects</li>
        <li value='contact'>Contact Info</li>
      </ul>
    </section>
  );
};

SideBar.propTypes = {
  cssId: PropTypes.string.isRequired
};

export default SideBar;
