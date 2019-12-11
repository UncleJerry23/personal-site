import React from 'react';
import styles from './about-me.css';
import { info } from '../../../data/info';
import balloon from '../../../assets/balloon.jpg';
import creator from '../../../assets/creator.jpg';
import adventure from '../../../assets/adventure.jpg';
import nerd from '../../../assets/nerd.jpg';

const AboutMe = () => {

  return (
    <div className={styles['About-Me']}>
      <section>
        <figure>
          <img src={balloon} />
        </figure>
        <div>
          <h3>Learner</h3>
          <p>{info['about-me'].learner}</p>
        </div>
      </section>

      <section>
        <figure>
          <img src={creator} />
        </figure>
        <div>
          <h3>Creator</h3>
          <p>{info['about-me'].creator}</p>
        </div>
      </section>

      <section>
        <figure>
          <img src={adventure} />
        </figure>
        <div>
          <h3>Adventurer</h3>
          <p>{info['about-me'].adventurer}</p>
        </div>
      </section>

      <section>
        <figure>
          <img src={nerd} />
        </figure>
        <div>
          <h3>Nerd</h3>
          <p>{info['about-me'].nerd}</p>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
