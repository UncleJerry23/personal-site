import React from 'react';
import styles from './about-site.css';
import css from '../../../assets/css-white.png';
import react from '../../../assets/react-white.png';
import github from '../../../assets/github-white.png';
import js from '../../../assets/js-white.png';
import aws from '../../../assets/aws-white.png';

const AboutSite = () => {
  return (
    <div className={styles['About-Site']}>

      <section className={styles.Details}>

        <section>
          <p>This site was written in React and utilizes modern react hooks</p>
          <p>The projects page information is pulled from the gitHub api to keep my starred repositories up to date.</p>
          <p className={styles.SideBar}>The sidebar menu was styled using vanilla JS and CSS</p>
          <p className={styles.Burger}>The burger menu was styled using vanilla JS and CSS</p>
          <p>It is deployed using Amazon&rsquo;s AWS S3 bucket</p>
        </section>

      </section>
    </div>
  );
};

export default AboutSite;
