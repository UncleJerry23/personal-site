import React from 'react';
import styles from './about-site.css';
import css from '../../../assets/css.png';
import react from '../../../assets/react.png';
import github from '../../../assets/github.png';
import js from '../../../assets/js.png';
import s3 from '../../../assets/s3.png';

const AboutSite = () => {
  return (
    <div className={styles['About-Site']}>

      <section className={styles.Icons}>
        <img src={react} />
        <img src={github} />
        <img src={js} />
        <img src={css} />
        <img src={s3} />
      </section>

      <section className={styles.Details}>

        <section>
          <div>
            <p>This site was written in React and utilizes modern react hooks</p>
          </div>
          <div>
            <p>The projects page information is pulled from the gitHub api to keep my starred repositories up to date.</p>
          </div>
          <div className={styles.SideBar}>
            <p>The sidebar menu was styled using vanilla JS and CSS</p>
          </div>
          <div className={styles.Burger}>
            <p>The burger menu was styled using vanilla JS and CSS</p>
          </div>
          <div>
            <p>It is deployed using Amazon&rsquo;s AWS S3 bucket</p>
          </div>
        </section>

      </section>
    </div>
  );
};

export default AboutSite;
