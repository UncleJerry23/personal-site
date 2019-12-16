import React from 'react';
import styles from './about-me.css';
import { info } from '../../../data/info';

const AboutMe = () => {

  return (
    <div className={styles['About-Me']}>
      <section>
        <img src='https://i.imgur.com/6sAjKQp.jpg' alt="person-welding"/>
        <h3>Creator:</h3>
        <p>{info['about-me'].creator}</p>
      </section>

      <section>
        <img src='https://i.imgur.com/3HSkWqG.jpg' alt="person-on-mountain"/>
        <h3>Learner:</h3>
        <p>{info['about-me'].learner}</p>
      </section>

      <section>
        <img src='https://i.imgur.com/BZ87R5w.jpg' alt="person-face-in-forest"/>
        <h3>Adventurer:</h3>
        <p>{info['about-me'].adventurer}</p>
      </section>

      <section>
        <img src='https://i.imgur.com/XH4LDbp.jpg' alt="spiral-plant"/>
        <h3>Nerd:</h3>
        <p>{info['about-me'].nerd}</p>
      </section>
    </div>
  );
};

export default AboutMe;
