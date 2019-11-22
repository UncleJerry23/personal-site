import React from 'react';
import styles from './about-me.css';
import { info } from '../../../data/info';

const AboutMe = () => {

  return (
    <section className={styles['About-Me']}>
      <p>{info['about-me'].text}</p>
    </section>
  );
};

export default AboutMe;
