import React from 'react';
import styles from './sideBar.css';

const SideBar = () => {
  return (
    <section className={styles.sidebar}>
      <h2>SideBar</h2>
      <ul>
        <li>WHY IS THIS ON THE RIGHT SIDE OF THE PAGE?!?!?</li>
        <li>Code Stories</li>
        <li>Projects</li>
        <li>Me Things</li>
        <li>Contact Info</li>
      </ul>
    </section>
  );
};

export default SideBar;
