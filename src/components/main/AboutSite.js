import React from 'react';
import styles from './about-site.css';

const AboutSite = () => {
  return (
    <section className={styles['About-Site']}>
      <section>
        <p>This site was written in React and utilizes modern react hooks</p>
        <p>The projects page information is pulled from the gitHub api to keep my starred repositories up to date.</p>
        <p>The sidebar menu was styled using vanilla JS and CSS</p>
      </section>
    </section>
  );
};

export default AboutSite;
