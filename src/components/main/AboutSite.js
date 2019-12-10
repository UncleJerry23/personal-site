import React from 'react';
import styles from './about-site.css';
import { info } from '../../../data/info';

const AboutSite = () => {
  return (
    <section className={styles['About-Site']}>
      <p>{info['about-site'].text}</p>
    </section>
  );
};

export default AboutSite;
