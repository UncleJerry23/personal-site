import React from 'react';
import styles from './about-me.css';
import { info } from '../../../data/info';

const AboutMe = () => {

  return (
    <div className={styles['About-Me']}>
      <section>
        <img src='https://i.imgur.com/6sAjKQp.jpg'/>
        <h3>Creator:</h3>
        <p>{info['about-me'].creator}</p>
      </section>

      <section>
        <img src='https://i.imgur.com/3HSkWqG.jpg'/>
        <h3>Learner:</h3>
        <p>{info['about-me'].learner}</p>
      </section>

      <section>
        <img src='https://i.imgur.com/BZ87R5w.jpg'/>
        <h3>Adventurer:</h3>
        <p>{info['about-me'].adventurer}</p>
      </section>

      <section>
        <img src='https://i.imgur.com/XH4LDbp.jpg'/>
        <h3>Nerd:</h3>
        <p>{info['about-me'].nerd}</p>
      </section>
    </div>
  );
};

export default AboutMe;
