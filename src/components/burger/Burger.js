import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { useSideBar } from '../../hooks/useSideBar';
import styles from './Burger.css';

const Burger = ({ history }) => {
  const [isOpen, setOpen] = useState(false);
  const open = () =>setOpen(true);
  const close = () =>setOpen(false);
  const toggleMenu = () => isOpen ? close() : open();

  useSideBar(styles, history);

  return (
    <div>
      <section className={styles.Burger} onClick={toggleMenu}>
        <div className={styles['Burger-Slice']}></div>
        <div className={styles['Burger-Slice']}></div>
        <div className={styles['Burger-Slice']}></div>
      </section>

      <div className={isOpen ? styles.Menu : styles.Close}>
        <Link onClick={close} id="home-burger" to="/">Home</Link>
        <Link onClick={close} id="about-me-burger" to="/about-me">About Me</Link>
        <Link onClick={close} id="about-site-burger" to="/about-site">About this site</Link>
        <Link onClick={close} id="why-burger" to="/why">WHY IS THIS ON THE RIGHT SIDE OF THE PAGE?!?!?</Link>
        <Link onClick={close} id="projects-burger" to="/projects">Projects</Link>
      </div>

      <div className={isOpen ? styles.Pointer : styles.Close}></div>
    </div>
  );
};

Burger.propTypes = {
  history: PropTypes.object.isRequired
};

export default withRouter(Burger);
